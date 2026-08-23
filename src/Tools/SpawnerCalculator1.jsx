import React, { useState, useEffect, useRef } from "react";
import "../styles/SpawnerCalculator1.css";

const LOCAL_STORAGE_KEY = "minecraft_spawner_toolkit_data";

const DEFAULT_SPAWNERS = [
  { id: "1", name: "Zombie 1", x: -529, y: -40, z: -429, active: true },
  { id: "2", name: "Skeleton 3", x: -516, y: -49, z: -412, active: true },
  { id: "3", name: "Zombie 2", x: -517, y: -8, z: -420, active: false },
];

export default function MinecraftSpawnerToolkit() {
  // --- SHARED GLOBAL STATE (with localStorage initialization) ---
  const [spawners, setSpawners] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error("Failed to load spawners from localStorage:", e);
    }
    return DEFAULT_SPAWNERS;
  });

  // Double-check confirmation state for Reset button
  const [confirmReset, setConfirmReset] = useState(false);

  // Auto-cancel confirmation state after 4 seconds
  useEffect(() => {
    if (!confirmReset) return;
    const timer = setTimeout(() => setConfirmReset(false), 4000);
    return () => clearTimeout(timer);
  }, [confirmReset]);

  // Save to localStorage whenever `spawners` changes
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(spawners));
    } catch (e) {
      console.error("Failed to save spawners to localStorage:", e);
    }
  }, [spawners]);

  // Reset handler with double-check confirmation
  const handleResetDefaults = () => {
    if (!confirmReset) {
      setConfirmReset(true);
      return;
    }
    setSpawners(DEFAULT_SPAWNERS);
    setConfirmReset(false);
  };

  // Form State
  const [newSpawner, setNewSpawner] = useState({
    name: "New",
    x: 0,
    y: 0,
    z: 0,
  });
  const [rawCoordString, setRawCoordString] = useState("");
  const [activeTab, setActiveTab] = useState("grid"); // 'matrix', 'intersection', 'grid'

  const activeSpawners = spawners.filter((s) => s.active);

  // --- MATH HELPERS ---
  const getDistance = (s1, s2) =>
    Math.sqrt((s1.x - s2.x) ** 2 + (s1.y - s2.y) ** 2 + (s1.z - s2.z) ** 2);

  const calculateAFKBounds = () => {
    if (activeSpawners.length < 2) return null;
    for (let i = 0; i < activeSpawners.length; i++) {
      for (let j = i + 1; j < activeSpawners.length; j++) {
        if (getDistance(activeSpawners[i], activeSpawners[j]) >= 32)
          return null;
      }
    }
    let minX = -Infinity,
      maxX = Infinity,
      minY = -Infinity,
      maxY = Infinity,
      minZ = -Infinity,
      maxZ = Infinity;
    activeSpawners.forEach((s) => {
      minX = Math.max(minX, s.x - 15.9);
      maxX = Math.min(maxX, s.x + 15.9);
      minY = Math.max(minY, s.y - 15.9);
      maxY = Math.min(maxY, s.y + 15.9);
      minZ = Math.max(minZ, s.z - 15.9);
      maxZ = Math.min(maxZ, s.z + 15.9);
    });
    return {
      minX,
      maxX,
      minY,
      maxY,
      minZ,
      maxZ,
      center: {
        x: Math.round((minX + maxX) / 2),
        y: Math.round((minY + maxY) / 2),
        z: Math.round((minZ + maxZ) / 2),
      },
    };
  };

  const bounds = calculateAFKBounds();

  // --- COORD & F3 + C PARSER HANDLER ---
  const handleRawCoordChange = (e) => {
    const val = e.target.value;
    setRawCoordString(val);

    // 1. Matches F3 + C / tp command string: /tp @s -266.50 -32.00 -203.50
    const tpMatch = val.match(/tp\s+@s\s+([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)/i);

    // 2. Matches F3 text like "XYZ: -266.50 / -32.00 / -203.50" or "Block: -267 -32 -204"
    const f3Match = val.match(
      /(?:XYZ|Block):\s*([-\d.]+)\s*[\s,/]+\s*([-\d.]+)\s*[\s,/]+\s*([-\d.]+)/i,
    );

    // 3. Fallback: Extracts the first three decimal/integer numbers found in the string
    const genericMatch = val.match(
      /(-?\d+(?:\.\d+)?)\s*[\s,/]+\s*(-?\d+(?:\.\d+)?)\s*[\s,/]+\s*(-?\d+(?:\.\d+)?)/,
    );

    const match = tpMatch || f3Match || genericMatch;

    if (match) {
      const parsedX = Math.floor(parseFloat(match[1]));
      const parsedY = Math.floor(parseFloat(match[2]));
      const parsedZ = Math.floor(parseFloat(match[3]));

      if (!isNaN(parsedX) && !isNaN(parsedY) && !isNaN(parsedZ)) {
        setNewSpawner((prev) => ({
          ...prev,
          x: parsedX,
          y: parsedY,
          z: parsedZ,
        }));
      }
    }
  };

  const handleAddSpawner = () => {
    setSpawners([
      ...spawners,
      { ...newSpawner, active: true, id: Date.now().toString() },
    ]);
    setRawCoordString("");
  };

  // --- TAB 2: INTERSECTION STATE & CANVAS ---
  const [intersectView, setIntersectView] = useState("XZ");
  const intersectCanvasRef = useRef(null);

  useEffect(() => {
    if (activeTab !== "intersection" || !intersectCanvasRef.current) return;
    const canvas = intersectCanvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (activeSpawners.length === 0) return;

    let aH = intersectView === "YZ" ? "z" : "x";
    let aV = intersectView === "XY" ? "y" : intersectView === "YZ" ? "y" : "z";

    const hVals = activeSpawners.map((s) => s[aH]);
    const vVals = activeSpawners.map((s) => s[aV]);
    const minH = Math.min(...hVals) - 25,
      maxH = Math.max(...hVals) + 25;
    const minV = Math.min(...vVals) - 25,
      maxV = Math.max(...vVals) + 25;

    const scale = Math.min(
      canvas.width / (maxH - minH),
      canvas.height / (maxV - minV),
    );
    const toCX = (val) => canvas.width / 2 + (val - (minH + maxH) / 2) * scale;
    const toCY = (val) => canvas.height / 2 - (val - (minV + maxV) / 2) * scale;

    // Grid
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 1;
    for (let h = Math.floor(minH); h <= Math.ceil(maxH); h += 5) {
      ctx.beginPath();
      ctx.moveTo(toCX(h), 0);
      ctx.lineTo(toCX(h), canvas.height);
      ctx.stroke();
    }
    for (let v = Math.floor(minV); v <= Math.ceil(maxV); v += 5) {
      ctx.beginPath();
      ctx.moveTo(0, toCY(v));
      ctx.lineTo(canvas.width, toCY(v));
      ctx.stroke();
    }

    // Spheres
    activeSpawners.forEach((s) => {
      const cx = toCX(s[aH]),
        cy = toCY(s[aV]);
      ctx.beginPath();
      ctx.arc(cx, cy, 16 * scale, 0, 2 * Math.PI);
      ctx.fillStyle = "rgba(59, 130, 246, 0.1)";
      ctx.fill();
      ctx.strokeStyle = "#3b82f6";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, 2 * Math.PI);
      ctx.fillStyle = "#1d4ed8";
      ctx.fill();
      ctx.fillStyle = "#0f172a";
      ctx.font = "12px sans-serif";
      ctx.fillText(`${s.name}`, cx + 6, cy - 6);
    });

    // Valid AFK Box
    if (bounds) {
      let bHmin = intersectView === "YZ" ? bounds.minZ : bounds.minX;
      let bHmax = intersectView === "YZ" ? bounds.maxZ : bounds.maxX;
      let bVmin =
        intersectView === "XY" || intersectView === "YZ"
          ? bounds.minY
          : bounds.minZ;
      let bVmax =
        intersectView === "XY" || intersectView === "YZ"
          ? bounds.maxY
          : bounds.maxZ;

      const rX = toCX(bHmin),
        rY = toCY(bVmax);
      const rW = (bHmax - bHmin) * scale,
        rH = (bVmax - bVmin) * scale;
      ctx.fillStyle = "rgba(34, 197, 94, 0.4)";
      ctx.fillRect(rX, rY, rW, rH);
      ctx.strokeStyle = "#16a34a";
      ctx.lineWidth = 2;
      ctx.strokeRect(rX, rY, rW, rH);
    }
  }, [activeSpawners, intersectView, activeTab, bounds]);

  // --- TAB 3: GRID PLANNER STATE ---
  const [gridPlane, setGridPlane] = useState("XZ");
  const [gridLevel, setGridLevel] = useState(
    bounds ? (gridPlane === "XZ" ? bounds.center.y : bounds.center.z) : -40,
  );
  const [gridRadius, setGridRadius] = useState(15);
  const [hoverCell, setHoverCell] = useState(null);

  // Primitive value sync to prevent missing dependency warning
  const targetLevel = bounds
    ? gridPlane === "XZ"
      ? bounds.center.y
      : bounds.center.z
    : null;

  useEffect(() => {
    if (targetLevel !== null) {
      setGridLevel(targetLevel);
    }
  }, [targetLevel]);

  const renderGridTable = () => {
    if (activeSpawners.length === 0)
      return <p>Select spawners to generate grid.</p>;
    const cX = bounds
      ? bounds.center.x
      : Math.round(
          activeSpawners.reduce((a, s) => a + s.x, 0) / activeSpawners.length,
        );
    const cY = bounds
      ? gridPlane === "XZ"
        ? bounds.center.z
        : bounds.center.y
      : Math.round(
          activeSpawners.reduce(
            (a, s) => a + (gridPlane === "XZ" ? s.z : s.y),
            0,
          ) / activeSpawners.length,
        );

    let cols = [],
      rows = [];
    for (let x = cX - gridRadius; x <= cX + gridRadius; x++) cols.push(x);
    for (let y = cY - gridRadius; y <= cY + gridRadius; y++) rows.push(y);

    return (
      <div className="grid-wrapper">
        <table className="voxel-grid">
          <thead>
            <tr>
              <th>{gridPlane === "XZ" ? "Z\\X" : "Y\\X"}</th>
              {cols.map((c) => (
                <th key={c}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r}>
                <td className="row-header">{r}</td>
                {cols.map((c) => {
                  let bX = c,
                    bY = gridPlane === "XZ" ? gridLevel : r,
                    bZ = gridPlane === "XZ" ? r : gridLevel;
                  const isSpawner = activeSpawners.find(
                    (s) => s.x === bX && s.y === bY && s.z === bZ,
                  );
                  let activeCount = activeSpawners.filter(
                    (s) => getDistance({ x: bX, y: bY, z: bZ }, s) < 16,
                  ).length;

                  let type = "out";
                  if (isSpawner) type = "spawner";
                  else if (activeCount === activeSpawners.length) type = "afk";
                  else if (activeCount > 0) type = "partial";

                  return (
                    <td
                      key={`${c}-${r}`}
                      className={`cell-${type}`}
                      onMouseEnter={() =>
                        setHoverCell({
                          x: bX,
                          y: bY,
                          z: bZ,
                          type,
                          name: isSpawner?.name,
                        })
                      }
                    >
                      {type === "spawner" ? "S" : type === "afk" ? "✓" : ""}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // --- RENDER ---
  return (
    <div className="toolkit-app">
      {/* SIDEBAR */}
      <div className="toolkit-sidebar">
        <h1 className="sidebar-title">⚙️ Spawner Toolkit</h1>

        {spawners.map((s) => (
          <div key={s.id} className="spawner-card">
            <div className="spawner-card-header">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={s.active}
                  onChange={() =>
                    setSpawners(
                      spawners.map((x) =>
                        x.id === s.id ? { ...x, active: !x.active } : x,
                      ),
                    )
                  }
                />
                <input
                  type="text"
                  value={s.name}
                  onChange={(e) =>
                    setSpawners(
                      spawners.map((x) =>
                        x.id === s.id ? { ...x, name: e.target.value } : x,
                      ),
                    )
                  }
                />
              </label>
              <button
                className="btn-remove"
                onClick={() =>
                  setSpawners(spawners.filter((x) => x.id !== s.id))
                }
              >
                ✕
              </button>
            </div>
            <div className="coord-row">
              X:{" "}
              <input
                type="number"
                value={s.x}
                onChange={(e) =>
                  setSpawners(
                    spawners.map((x) =>
                      x.id === s.id ? { ...x, x: +e.target.value } : x,
                    ),
                  )
                }
              />
              Y:{" "}
              <input
                type="number"
                value={s.y}
                onChange={(e) =>
                  setSpawners(
                    spawners.map((x) =>
                      x.id === s.id ? { ...x, y: +e.target.value } : x,
                    ),
                  )
                }
              />
              Z:{" "}
              <input
                type="number"
                value={s.z}
                onChange={(e) =>
                  setSpawners(
                    spawners.map((x) =>
                      x.id === s.id ? { ...x, z: +e.target.value } : x,
                    ),
                  )
                }
              />
            </div>
          </div>
        ))}

        {/* ADD SPAWNER FORM */}
        <div
          className="spawner-card"
          style={{ borderStyle: "dashed", background: "transparent" }}
        >
          <h4 style={{ margin: "0 0 8px 0" }}>Add Spawner</h4>

          <div style={{ marginBottom: "8px" }}>
            <label
              style={{
                fontSize: "0.8rem",
                color: "#64748b",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Paste F3+C Command or Coordinates:
            </label>
            <input
              type="text"
              placeholder="/execute in minecraft... tp @s -266.50 -32.00 -203.50..."
              value={rawCoordString}
              onChange={handleRawCoordChange}
              style={{
                width: "100%",
                padding: "6px",
                border: "1px solid #cbd5e1",
                borderRadius: "4px",
                fontSize: "0.85rem",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "8px" }}>
            <label
              style={{
                fontSize: "0.8rem",
                color: "#64748b",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Spawner Name:
            </label>
            <input
              type="text"
              value={newSpawner.name}
              onChange={(e) =>
                setNewSpawner({ ...newSpawner, name: e.target.value })
              }
              style={{
                width: "100%",
                padding: "4px 6px",
                border: "1px solid #cbd5e1",
                borderRadius: "4px",
                fontSize: "0.85rem",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div className="coord-row" style={{ marginBottom: "12px" }}>
            X:{" "}
            <input
              type="number"
              value={newSpawner.x}
              onChange={(e) =>
                setNewSpawner({ ...newSpawner, x: +e.target.value })
              }
            />
            Y:{" "}
            <input
              type="number"
              value={newSpawner.y}
              onChange={(e) =>
                setNewSpawner({ ...newSpawner, y: +e.target.value })
              }
            />
            Z:{" "}
            <input
              type="number"
              value={newSpawner.z}
              onChange={(e) =>
                setNewSpawner({ ...newSpawner, z: +e.target.value })
              }
            />
          </div>

          <button className="btn-primary" onClick={handleAddSpawner}>
            + Add to Layout
          </button>
        </div>

        {/* RESET BUTTON WITH DOUBLE-CHECK WARNING */}
        <div style={{ marginTop: "16px" }}>
          <button
            onClick={handleResetDefaults}
            style={{
              width: "100%",
              padding: "8px",
              background: confirmReset ? "#fef2f2" : "transparent",
              border: confirmReset ? "1px solid #ef4444" : "1px solid #cbd5e1",
              borderRadius: "6px",
              color: confirmReset ? "#dc2626" : "#64748b",
              fontWeight: confirmReset ? "600" : "normal",
              fontSize: "0.85rem",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {confirmReset
              ? "⚠️ Confirm Reset? (Click again)"
              : "🔄 Reset to Default Spawners"}
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="toolkit-main">
        <div className="toolkit-tabs">
          <button
            className={`tab-btn ${activeTab === "grid" ? "active" : ""}`}
            onClick={() => setActiveTab("grid")}
          >
            Voxel Grid Planner
          </button>
          <button
            className={`tab-btn ${activeTab === "intersection" ? "active" : ""}`}
            onClick={() => setActiveTab("intersection")}
          >
            3D Intersection Volumes
          </button>
          <button
            className={`tab-btn ${activeTab === "matrix" ? "active" : ""}`}
            onClick={() => setActiveTab("matrix")}
          >
            Pairwise Distance Matrix
          </button>
        </div>

        {/* TAB 1: GRID PLANNER */}
        {activeTab === "grid" && (
          <div className="tool-card">
            <h3>Excel Block Planner</h3>
            <div className="control-bar">
              <select
                value={gridPlane}
                onChange={(e) => setGridPlane(e.target.value)}
                style={{ padding: "6px" }}
              >
                <option value="XZ">XZ (Top-Down Floorplan)</option>
                <option value="XY">XY (Front Vertical View)</option>
              </select>
              <span>
                Fixed {gridPlane === "XZ" ? "Y (Elevation)" : "Z (Depth)"}:{" "}
              </span>
              <input
                type="number"
                value={gridLevel}
                onChange={(e) => setGridLevel(+e.target.value)}
                style={{ width: "70px", padding: "4px" }}
              />
              <span>Grid Size: </span>
              <input
                type="range"
                min="10"
                max="30"
                value={gridRadius}
                onChange={(e) => setGridRadius(+e.target.value)}
              />
            </div>

            {renderGridTable()}

            <div className="info-box" style={{ marginTop: "16px" }}>
              {hoverCell ? (
                <span>
                  Hovered:{" "}
                  <strong>
                    X:{hoverCell.x} Y:{hoverCell.y} Z:{hoverCell.z}
                  </strong>
                  {hoverCell.type === "afk" && (
                    <span className="status-good"> — ✓ Valid AFK Spot</span>
                  )}
                  {hoverCell.type === "spawner" && (
                    <strong style={{ color: "#2563eb" }}>
                      {" "}
                      — {hoverCell.name}
                    </strong>
                  )}
                </span>
              ) : (
                <span>Hover over cells to inspect block coordinates.</span>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: 3D INTERSECTION */}
        {activeTab === "intersection" && (
          <div className="tool-card">
            <h3>AFK Bounding Volume</h3>
            {bounds ? (
              <div className="info-box">
                <span className="status-good">
                  ✓ Valid Overlap Region Found!
                </span>
                <p style={{ margin: "4px 0" }}>
                  X: {bounds.minX.toFixed(1)} to {bounds.maxX.toFixed(1)} | Y:{" "}
                  {bounds.minY.toFixed(1)} to {bounds.maxY.toFixed(1)} | Z:{" "}
                  {bounds.minZ.toFixed(1)} to {bounds.maxZ.toFixed(1)}
                </p>
              </div>
            ) : (
              <div className="info-box error">
                <span className="status-bad">✕ No Overlap Found</span>
                <p style={{ margin: "4px 0" }}>
                  These spawners are too far apart to be activated
                  simultaneously.
                </p>
              </div>
            )}

            <div className="control-bar">
              <button
                className="btn-primary"
                style={{ width: "auto" }}
                onClick={() => setIntersectView("XZ")}
              >
                XZ Top
              </button>
              <button
                className="btn-primary"
                style={{ width: "auto", background: "#64748b" }}
                onClick={() => setIntersectView("XY")}
              >
                XY Front
              </button>
              <button
                className="btn-primary"
                style={{ width: "auto", background: "#475569" }}
                onClick={() => setIntersectView("YZ")}
              >
                YZ Side
              </button>
              <span style={{ marginLeft: "auto", fontWeight: "bold" }}>
                Current View: {intersectView}
              </span>
            </div>
            <canvas
              ref={intersectCanvasRef}
              width={800}
              height={400}
              style={{
                width: "100%",
                background: "#f8fafc",
                border: "1px solid #cbd5e1",
                borderRadius: "8px",
              }}
            />
          </div>
        )}

        {/* TAB 3: MATRIX */}
        {activeTab === "matrix" && (
          <div className="tool-card">
            <h3>Pairwise Distances</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Spawner Pair</th>
                  <th>Euclidean Distance</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {activeSpawners.flatMap((s1, i) =>
                  activeSpawners.slice(i + 1).map((s2) => {
                    const d = getDistance(s1, s2);
                    const valid = d < 32;
                    return (
                      <tr key={`${s1.id}-${s2.id}`}>
                        <td>
                          {s1.name} &amp; {s2.name}
                        </td>
                        <td>{d.toFixed(2)} blocks</td>
                        <td className={valid ? "status-good" : "status-bad"}>
                          {valid ? "✓ Works" : "✕ Too Far"}
                        </td>
                      </tr>
                    );
                  }),
                )}
                {activeSpawners.length < 2 && (
                  <tr>
                    <td colSpan="3">Select at least 2 spawners.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

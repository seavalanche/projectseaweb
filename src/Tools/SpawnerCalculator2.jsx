import React, { useState, useEffect, useRef } from "react";
import "../styles/SpawnerCalculator2.css";

const GRID_SIZE = 21;
const ACTIVATION_RADIUS = 16;
const LOCAL_STORAGE_KEY = "mc_spawner_calc_state";
const LOCAL_STORAGE_PRESETS_KEY = "mc_spawner_calc_presets";

export default function SpawnerCalculator() {
  const fileInputRef = useRef(null);

  const defaultSpawners = [
    { id: 1, name: "Zombie 1", x: 5, y: 64, z: 5, type: "Zombie" },
    { id: 2, name: "Skeleton 4", x: 15, y: 70, z: 15, type: "Skeleton" },
  ];

  // ----------------------------------------------------
  // 1. STATE INITIALIZATION (All Hooks Defined at the Top)
  // ----------------------------------------------------

  // Read saved state once on mount
  const savedState = React.useMemo(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  }, []);

  const [worldOrigin, setWorldOrigin] = useState(
    () => savedState?.worldOrigin || null,
  );

  const [edition, setEdition] = useState(() => savedState?.edition || "java");

  const [spawners, setSpawners] = useState(
    () => savedState?.spawners || defaultSpawners,
  );

  const [playerPos, setPlayerPos] = useState(
    () => savedState?.playerPos || { x: 10, y: 64, z: 10 },
  );

  const [presets, setPresets] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_PRESETS_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [presetNameInput, setPresetNameInput] = useState("");
  const [viewMode, setViewMode] = useState("XZ");
  const [activePlaneY, setActivePlaneY] = useState(64);

  const [newSpawnerName, setNewSpawnerName] = useState("Dungeon Spawner");
  const [newSpawnerType, setNewSpawnerType] = useState("Zombie");
  const [pasteInput, setPasteInput] = useState("");

  // ----------------------------------------------------
  // 2. AUTO-SAVE EFFECTS
  // ----------------------------------------------------
  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({ edition, spawners, playerPos, worldOrigin }),
    );
  }, [edition, spawners, playerPos, worldOrigin]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_PRESETS_KEY, JSON.stringify(presets));
  }, [presets]);

  // Automatically sync active plane Y to player position when player Y changes
  useEffect(() => {
    setActivePlaneY(playerPos.y);
  }, [playerPos.y]);

  // ----------------------------------------------------
  // 3. DYNAMIC COORDINATE SYNC LOGIC
  // ----------------------------------------------------
  const updateSpawnerCoord = (id, axis, value) => {
    setSpawners((prevSpawners) =>
      prevSpawners.map((s) => {
        if (s.id !== id) return s;

        const updated = { ...s, [axis]: value };

        // Keep real world coords in sync with grid changes
        if (updated.realCoords && worldOrigin) {
          const deltaX = updated.x - 5;
          const deltaY = updated.y - worldOrigin.y;
          const deltaZ = updated.z - 5;

          updated.realCoords = {
            x: worldOrigin.x + deltaX,
            y: worldOrigin.y + deltaY,
            z: worldOrigin.z + deltaZ,
          };
        }

        return updated;
      }),
    );
  };

  // ----------------------------------------------------
  // 4. IMPORT & EXPORT HANDLERS
  // ----------------------------------------------------
  const handleExportJSON = () => {
    const exportData = {
      version: 2,
      exportedAt: new Date().toISOString(),
      currentSetup: {
        edition,
        spawners,
        playerPos,
        worldOrigin,
      },
      presets,
    };

    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(exportData, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `spawner_setup_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportJSON = (e) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);

          if (parsed.currentSetup) {
            if (parsed.currentSetup.spawners)
              setSpawners(parsed.currentSetup.spawners);
            if (parsed.currentSetup.edition)
              setEdition(parsed.currentSetup.edition);
            if (parsed.currentSetup.playerPos)
              setPlayerPos(parsed.currentSetup.playerPos);

            if (parsed.currentSetup.worldOrigin) {
              setWorldOrigin(parsed.currentSetup.worldOrigin);
            } else if (parsed.currentSetup.spawners?.[0]?.realCoords) {
              setWorldOrigin(parsed.currentSetup.spawners[0].realCoords);
            }
          } else if (Array.isArray(parsed)) {
            setSpawners(parsed);
            if (parsed[0]?.realCoords) {
              setWorldOrigin(parsed[0].realCoords);
            }
          }

          if (parsed.presets) {
            setPresets((prev) => ({ ...prev, ...parsed.presets }));
          }

          alert("Spawner config imported successfully!");
        } catch (err) {
          alert("Invalid JSON file format.");
        }
      };
    }
  };

  // ----------------------------------------------------
  // 5. PRESETS & RESET HANDLERS
  // ----------------------------------------------------
  const handleSavePreset = () => {
    if (!presetNameInput.trim()) return alert("Please enter a preset name!");
    setPresets({
      ...presets,
      [presetNameInput.trim()]: { edition, spawners, playerPos, worldOrigin },
    });
    setPresetNameInput("");
  };

  const handleLoadPreset = (name) => {
    const target = presets[name];
    if (target) {
      setEdition(target.edition || "java");
      setSpawners(target.spawners || []);
      setPlayerPos(target.playerPos || { x: 10, y: 64, z: 10 });
      setWorldOrigin(target.worldOrigin || null);
    }
  };

  const handleDeletePreset = (name) => {
    const updated = { ...presets };
    delete updated[name];
    setPresets(updated);
  };

  const handleResetDefault = () => {
    if (window.confirm("Reset current setup to default spawners?")) {
      setEdition("java");
      setSpawners(defaultSpawners);
      setPlayerPos({ x: 10, y: 64, z: 10 });
      setWorldOrigin(null);
    }
  };

  // ----------------------------------------------------
  // 6. PARSER & GRID CALCULATIONS
  // ----------------------------------------------------
  const parseCoordinates = (input) => {
    if (!input.trim()) return null;

    if (input.includes("/execute") || input.includes("run tp")) {
      const match = input.match(
        /run tp @s (-?\d+\.?\d*) (-?\d+\.?\d*) (-?\d+\.?\d*)/,
      );
      if (match) {
        return {
          x: Math.floor(parseFloat(match[1])),
          y: Math.floor(parseFloat(match[2])),
          z: Math.floor(parseFloat(match[3])),
        };
      }
    }

    const numbers = input.match(/-?\d+(\.\d+)?/g);
    if (numbers && numbers.length >= 3) {
      return {
        x: Math.floor(parseFloat(numbers[0])),
        y: Math.floor(parseFloat(numbers[1])),
        z: Math.floor(parseFloat(numbers[2])),
      };
    }

    return null;
  };

  const addSpawner = () => {
    const newId = spawners.length
      ? Math.max(...spawners.map((s) => s.id)) + 1
      : 1;
    let coords = { x: 10, y: 64, z: 10 };

    if (pasteInput.trim()) {
      const parsed = parseCoordinates(pasteInput);
      if (parsed) coords = parsed;
      else
        return alert("Could not detect X Y Z coordinates in the pasted text.");
    }

    if (spawners.length === 0) {
      setWorldOrigin(coords);
      const normalizedSpawner = {
        id: newId,
        name: newSpawnerName || `Spawner ${newId}`,
        x: 5,
        y: coords.y,
        z: 5,
        type: newSpawnerType,
        realCoords: coords,
      };

      setSpawners([normalizedSpawner]);
      setPlayerPos({ x: 5, y: coords.y, z: 5 });
      setActivePlaneY(coords.y);
    } else {
      const origin = worldOrigin || {
        x: spawners[0].x,
        y: spawners[0].y,
        z: spawners[0].z,
      };
      const offsetX = coords.x - origin.x;
      const offsetY = coords.y - origin.y;
      const offsetZ = coords.z - origin.z;

      const normalizedSpawner = {
        id: newId,
        name: newSpawnerName || `Spawner ${newId}`,
        x: 5 + offsetX,
        y: origin.y + offsetY,
        z: 5 + offsetZ,
        type: newSpawnerType,
        realCoords: coords,
      };

      setSpawners([...spawners, normalizedSpawner]);
    }

    setPasteInput("");
  };

  const removeSpawner = (id) =>
    setSpawners(spawners.filter((s) => s.id !== id));

  const get3DDistance = (p1, p2) =>
    Math.sqrt(
      Math.pow(p1.x - p2.x, 2) +
        Math.pow(p1.y - p2.y, 2) +
        Math.pow(p1.z - p2.z, 2),
    );

  const isWithinSphere = (point, spawner) =>
    get3DDistance(point, spawner) <= ACTIVATION_RADIUS;

  const isInsideSpawnerCage = (point, spawner) => {
    const dx = Math.abs(point.x - spawner.x);
    const dy = Math.abs(point.y - spawner.y);
    const dz = Math.abs(point.z - spawner.z);
    const maxYDistance = edition === "bedrock" ? 4 : 1;
    return dx <= 4 && dz <= 4 && dy <= maxYDistance;
  };

  const isSweetSpot3D = (point) =>
    spawners.length >= 2 && spawners.every((s) => isWithinSphere(point, s));

  const activeCount = spawners.filter((s) =>
    isWithinSphere(playerPos, s),
  ).length;

  // Cell Click: Always places player at the visible level
  const handleCellClick = (gridCol, gridRow) => {
    if (viewMode === "XZ") {
      setPlayerPos({ x: gridCol, y: activePlaneY, z: gridRow });
    } else {
      const centerY = worldOrigin ? worldOrigin.y : 64;
      const clickedY = centerY + (10 - gridRow);

      setPlayerPos((prev) => ({ ...prev, x: gridCol, y: clickedY }));
      setActivePlaneY(clickedY);
    }
  };

  // Jump view slice to player's current Y height
  const jumpToPlayerY = () => setActivePlaneY(playerPos.y);

  const mobsPerHour = activeCount * ((3600 / 25) * 2.5);

  // Calculate real world player coordinates relative to worldOrigin
  const getRealPlayerCoords = () => {
    if (!worldOrigin) {
      return { x: playerPos.x, y: playerPos.y, z: playerPos.z };
    }
    return {
      x: worldOrigin.x + (playerPos.x - 5),
      y: playerPos.y,
      z: worldOrigin.z + (playerPos.z - 5),
    };
  };

  const realPlayer = getRealPlayerCoords();

  return (
    <div className="mc-container">
      <div className="mc-panel">
        <h2 className="mc-title">3D Spawner AFK Grid Calculator</h2>

        <div className="mc-layout">
          {/* Main Grid Area */}
          <div className="mc-grid-wrapper">
            <div className="mc-view-toolbar">
              <div className="toolbar-group">
                <label>
                  Edition:
                  <select
                    value={edition}
                    onChange={(e) => setEdition(e.target.value)}
                    className="mc-input-select highlight-select"
                  >
                    <option value="java">Java Edition (9×3×9 Cage)</option>
                    <option value="bedrock">
                      Bedrock Edition (9×9×9 Cage)
                    </option>
                  </select>
                </label>

                <label>
                  View Mode:
                  <select
                    value={viewMode}
                    onChange={(e) => setViewMode(e.target.value)}
                    className="mc-input-select"
                  >
                    <option value="XZ">Top-Down Floorplan (X / Z)</option>
                    <option value="XY">Side Profile Elevation (X / Y)</option>
                  </select>
                </label>
              </div>

              {/* XZ View: Scrub Y Level (Height) */}
              {viewMode === "XZ" && (
                <div className="plane-slider-group">
                  <label className="plane-slider">
                    Slice Y Level (Height): <strong>{activePlaneY}</strong>
                    <input
                      type="range"
                      min="0"
                      max="128"
                      value={activePlaneY}
                      onChange={(e) =>
                        setActivePlaneY(parseInt(e.target.value))
                      }
                    />
                  </label>
                  {activePlaneY !== playerPos.y && (
                    <button
                      onClick={jumpToPlayerY}
                      className="mc-btn-sm btn-jump-player"
                    >
                      🎯 Jump to Player (Y={playerPos.y})
                    </button>
                  )}
                </div>
              )}

              {/* XY View: Scrub Z Level (Depth) */}
              {viewMode === "XY" && (
                <div className="plane-slider-group">
                  <label className="plane-slider">
                    Slice Z Level (Depth): <strong>{playerPos.z}</strong>
                    <input
                      type="range"
                      min="0"
                      max={GRID_SIZE - 1}
                      value={playerPos.z}
                      onChange={(e) => {
                        const newZ = parseInt(e.target.value);
                        setPlayerPos((prev) => ({ ...prev, z: newZ }));
                      }}
                    />
                  </label>
                  {/* Dynamic real-world Z coordinate readout for depth */}
                  {worldOrigin && (
                    <span className="slice-world-badge">
                      World Z:{" "}
                      <strong>{worldOrigin.z + (playerPos.z - 5)}</strong>
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Grid Engine */}
            <div
              className="mc-grid"
              style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
            >
              {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, idx) => {
                const col = idx % GRID_SIZE;
                const row = Math.floor(idx / GRID_SIZE);

                // 1. Calculate relative Y-center based on world origin or player Y
                const centerY = worldOrigin ? worldOrigin.y : 64;

                // Grid row 0 is top (+10 from center), row 20 is bottom (-10 from center)
                const gridY = centerY + (10 - row);

                // 2. Define 3D Cell Position depending on View Mode
                let cell3D;
                if (viewMode === "XZ") {
                  cell3D = { x: col, y: activePlaneY, z: row };
                } else {
                  // XY View: X = col, Y = mapped height, Z = active player depth
                  cell3D = { x: col, y: gridY, z: playerPos.z };
                }

                // --- Exact Matches ---
                const exactSpawner = spawners.find((s) =>
                  viewMode === "XZ"
                    ? s.x === cell3D.x && s.z === cell3D.z && s.y === cell3D.y
                    : s.x === cell3D.x && s.y === cell3D.y && s.z === cell3D.z,
                );

                const isPlayerHere =
                  viewMode === "XZ"
                    ? playerPos.x === cell3D.x &&
                      playerPos.z === cell3D.z &&
                      playerPos.y === cell3D.y
                    : playerPos.x === cell3D.x &&
                      playerPos.y === cell3D.y &&
                      playerPos.z === cell3D.z;

                // --- Off-Axis / Off-Depth Matches ---
                // Top-Down (XZ): Spawner at same X, Z (different Y)
                const offAxisSpawnerXZ =
                  viewMode === "XZ" && !exactSpawner
                    ? spawners.find((s) => s.x === cell3D.x && s.z === cell3D.z)
                    : null;

                // Side-View (XY): Spawner at same X, Y (different Z depth)
                const offAxisSpawnerXY =
                  viewMode === "XY" && !exactSpawner
                    ? spawners.find((s) => s.x === cell3D.x && s.y === cell3D.y)
                    : null;

                // Ghost Player Checks
                const isOffSlicePlayerXZ =
                  viewMode === "XZ" &&
                  !isPlayerHere &&
                  playerPos.x === cell3D.x &&
                  playerPos.z === cell3D.z;

                const isOffSlicePlayerXY =
                  viewMode === "XY" &&
                  !isPlayerHere &&
                  playerPos.x === cell3D.x &&
                  playerPos.y === cell3D.y;

                // Activation & Radius math
                const inAnyCage = spawners.some((s) =>
                  isInsideSpawnerCage(cell3D, s),
                );
                const sweetSpot = isSweetSpot3D(cell3D);
                const activeSpawnersHere = spawners.filter((s) =>
                  isWithinSphere(cell3D, s),
                );
                const inAnySphere = activeSpawnersHere.length > 0;

                // CSS Styling
                let cellClass = "mc-cell";
                if (isPlayerHere) cellClass += " cell-player";
                else if (isOffSlicePlayerXZ || isOffSlicePlayerXY)
                  cellClass += " cell-offslice-player";
                else if (exactSpawner) cellClass += " cell-spawner";
                else if (offAxisSpawnerXZ || offAxisSpawnerXY)
                  cellClass += " cell-offaxis-spawner";
                else if (inAnyCage) cellClass += " cell-cage";
                else if (sweetSpot) cellClass += " cell-sweetspot";
                else if (inAnySphere) cellClass += " cell-in-radius";

                // --- Icon Generation ---
                let cellIcon = null;

                if (exactSpawner) {
                  cellIcon = <span className="mc-icon">🔥</span>;
                } else if (isPlayerHere) {
                  cellIcon = <span className="mc-icon">🧑</span>;
                } else if (isOffSlicePlayerXZ) {
                  const diffY = playerPos.y - activePlaneY;
                  cellIcon = (
                    <span
                      className="mc-icon offslice-player-icon"
                      title={`Player is at Y=${playerPos.y} (${Math.abs(diffY)} b ${diffY > 0 ? "above" : "below"})`}
                    >
                      {diffY > 0 ? "⬆️" : "⬇️"}
                    </span>
                  );
                } else if (isOffSlicePlayerXY) {
                  const diffZ = playerPos.z - cell3D.z;
                  cellIcon = (
                    <span
                      className="mc-icon offslice-player-icon"
                      title={`Player is at Z=${playerPos.z} (${Math.abs(diffZ)} b ${diffZ > 0 ? "deeper" : "closer"})`}
                    >
                      {diffZ > 0 ? "↗️" : "↙️"}
                    </span>
                  );
                } else if (offAxisSpawnerXZ) {
                  const diffY = offAxisSpawnerXZ.y - activePlaneY;
                  cellIcon = (
                    <span
                      className="mc-icon offaxis-icon"
                      title={`${offAxisSpawnerXZ.name} (Y=${offAxisSpawnerXZ.y}) is ${Math.abs(diffY)} b ${diffY > 0 ? "above" : "below"}`}
                    >
                      {diffY > 0 ? "⬆️" : "⬇️"}
                    </span>
                  );
                } else if (offAxisSpawnerXY) {
                  const diffZ = offAxisSpawnerXY.z - playerPos.z;
                  cellIcon = (
                    <span
                      className="mc-icon offaxis-icon"
                      title={`${offAxisSpawnerXY.name} (Z=${offAxisSpawnerXY.z}) is ${Math.abs(diffZ)} b ${diffZ > 0 ? "deeper in background" : "closer in foreground"}`}
                    >
                      {diffZ > 0 ? "↗️" : "↙️"}
                    </span>
                  );
                }

                return (
                  <div
                    key={`${col}-${row}`}
                    className={cellClass}
                    onClick={() => handleCellClick(col, row)}
                    title={
                      exactSpawner
                        ? `Spawner: ${exactSpawner.name} (${exactSpawner.type}) | Y=${exactSpawner.y}`
                        : offAxisSpawnerXY
                          ? `Off-Depth Spawner: ${offAxisSpawnerXY.name} (Z=${offAxisSpawnerXY.z})`
                          : `X:${cell3D.x} Y:${cell3D.y} Z:${cell3D.z}`
                    }
                  >
                    {cellIcon}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="mc-sidebar">
            <div className="mc-section">
              <h3>Stats Summary</h3>
              <div className="stat-row">
                <span>Active Spawners:</span>
                <strong>
                  {activeCount} / {spawners.length}
                </strong>
              </div>
              <div className="stat-row">
                <span>Player Pos:</span>
                <strong>
                  X:{playerPos.x} Y:{playerPos.y} Z:{playerPos.z}
                </strong>
              </div>
              <div className="stat-row">
                <span>Est. Mobs / Hr:</span>
                <strong className="text-gold">
                  ~{Math.round(mobsPerHour)}
                </strong>
              </div>
            </div>

            {/* Stats Summary Section */}
            <div className="mc-section">
              <h3>Stats Summary</h3>

              {/* Highlighted Real World AFK Coordinates */}
              <div className="afk-coords-card">
                <div className="afk-label">🎯 AFK Spot (Minecraft Coords):</div>
                <div className="afk-value">
                  X: <strong>{realPlayer.x}</strong> | Y:{" "}
                  <strong>{realPlayer.y}</strong> | Z:{" "}
                  <strong>{realPlayer.z}</strong>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${realPlayer.x} ${realPlayer.y} ${realPlayer.z}`,
                    );
                    alert(
                      `Copied coords to clipboard: ${realPlayer.x} ${realPlayer.y} ${realPlayer.z}`,
                    );
                  }}
                  className="mc-btn-sm btn-copy-coords"
                >
                  📋 Copy Coords
                </button>
              </div>

              <div className="stat-row">
                <span>Active Spawners:</span>
                <strong>
                  {activeCount} / {spawners.length}
                </strong>
              </div>
              <div className="stat-row">
                <span>Grid Pos:</span>
                <strong>
                  X:{playerPos.x} Y:{playerPos.y} Z:{playerPos.z}
                </strong>
              </div>
              <div className="stat-row">
                <span>Est. Mobs / Hr:</span>
                <strong className="text-gold">
                  ~{Math.round(mobsPerHour)}
                </strong>
              </div>
            </div>

            {/* Backup & Presets */}
            <div className="mc-section">
              <h3>Backup & Presets</h3>
              <div className="json-actions">
                <button
                  onClick={handleExportJSON}
                  className="mc-btn mc-btn-export"
                >
                  📥 Export JSON
                </button>
                <button
                  onClick={() => fileInputRef.current.click()}
                  className="mc-btn mc-btn-import"
                >
                  📤 Import JSON
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImportJSON}
                  accept=".json"
                  style={{ display: "none" }}
                />
              </div>

              <div className="preset-form">
                <input
                  type="text"
                  placeholder="Preset Name"
                  value={presetNameInput}
                  onChange={(e) => setPresetNameInput(e.target.value)}
                  className="mc-input-text"
                />
                <button
                  onClick={handleSavePreset}
                  className="mc-btn mc-btn-save"
                >
                  💾 Save Preset
                </button>
              </div>

              {Object.keys(presets).length > 0 && (
                <div className="preset-list">
                  {Object.keys(presets).map((name) => (
                    <div key={name} className="preset-item">
                      <span className="preset-title">{name}</span>
                      <div className="preset-actions">
                        <button
                          onClick={() => handleLoadPreset(name)}
                          className="mc-btn-sm"
                        >
                          Load
                        </button>
                        <button
                          onClick={() => handleDeletePreset(name)}
                          className="mc-btn-danger"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <button onClick={handleResetDefault} className="mc-btn-reset">
                🔄 Reset to Defaults
              </button>
            </div>

            {/* Quick Add Form */}
            <div className="mc-section">
              <h3>Add Spawner / Paste Coords</h3>
              <div className="add-spawner-form">
                <input
                  type="text"
                  placeholder="Spawner Name (e.g. Zombie 1)"
                  value={newSpawnerName}
                  onChange={(e) => setNewSpawnerName(e.target.value)}
                  className="mc-input-text"
                />

                <select
                  value={newSpawnerType}
                  onChange={(e) => setNewSpawnerType(e.target.value)}
                  className="mc-input"
                >
                  <option value="Zombie">Zombie</option>
                  <option value="Skeleton">Skeleton</option>
                  <option value="Spider">Spider</option>
                  <option value="Blaze">Blaze</option>
                  <option value="Cave Spider">Cave Spider</option>
                </select>

                <textarea
                  placeholder="Paste F3+C command or raw X Y Z coords..."
                  value={pasteInput}
                  onChange={(e) => setPasteInput(e.target.value)}
                  className="mc-textarea-paste"
                  rows={2}
                />

                <button onClick={addSpawner} className="mc-btn mc-btn-add">
                  + Add Spawner
                </button>
              </div>
            </div>

            {/* Spawner List */}
            <div className="mc-section">
              <h3>Spawners List</h3>
              <div className="spawner-list">
                {spawners.map((spawner) => {
                  const active = isWithinSphere(playerPos, spawner);
                  const dist = get3DDistance(playerPos, spawner).toFixed(1);

                  return (
                    <div key={spawner.id} className="spawner-card">
                      <div className="spawner-header">
                        <input
                          type="text"
                          value={spawner.name}
                          onChange={(e) => {
                            const val = e.target.value;
                            setSpawners(
                              spawners.map((s) =>
                                s.id === spawner.id ? { ...s, name: val } : s,
                              ),
                            );
                          }}
                          className="mc-input-name"
                        />
                        <button
                          onClick={() => removeSpawner(spawner.id)}
                          className="mc-btn-danger"
                        >
                          ✕
                        </button>
                      </div>

                      {/* Real World Coordinates Display */}
                      {spawner.realCoords && (
                        <div className="real-coords-badge">
                          World: X:{spawner.realCoords.x} Y:
                          {spawner.realCoords.y} Z:
                          {spawner.realCoords.z}
                        </div>
                      )}

                      <div className="coord-inputs">
                        <label>
                          Grid X:
                          <input
                            type="number"
                            value={spawner.x}
                            onChange={(e) =>
                              updateSpawnerCoord(
                                spawner.id,
                                "x",
                                parseInt(e.target.value) || 0,
                              )
                            }
                            className="mc-input-num"
                          />
                        </label>
                        <label>
                          Grid Y:
                          <input
                            type="number"
                            value={spawner.y}
                            onChange={(e) =>
                              updateSpawnerCoord(
                                spawner.id,
                                "y",
                                parseInt(e.target.value) || 0,
                              )
                            }
                            className="mc-input-num"
                          />
                        </label>
                        <label>
                          Grid Z:
                          <input
                            type="number"
                            value={spawner.z}
                            onChange={(e) =>
                              updateSpawnerCoord(
                                spawner.id,
                                "z",
                                parseInt(e.target.value) || 0,
                              )
                            }
                            className="mc-input-num"
                          />
                        </label>
                      </div>

                      <div className="spawner-status">
                        Dist: {dist} b |{" "}
                        <span className={active ? "text-green" : "text-red"}>
                          {active ? "ACTIVE" : "OUT OF RANGE"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

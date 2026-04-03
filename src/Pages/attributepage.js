import React, { useRef } from "react";
import html2canvas from "html2canvas";
import '../css/attributepage.css'

export default function AttributePage() {
  const tableRef = useRef();

  const handleDownload = async () => {
    const element = tableRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    // create a temporary link
    const link = document.createElement("a");
    link.href = data;
    link.download = "table.png"; // you can change to .jpg if needed
    link.click();
  };

  return (
    <div className="AP-wrapper-main">
      <div ref={tableRef} className="AP-wrapper-content">
        <div className="AP-wrapper-A">
          <div className="AP-wrapper-A1">
            <div className="AP-wrapper-A1-part">
              <div className="AP-table-cell AP-icon"></div>
              <div className="AP-wrapper-A1-defending">
                <div className="AP-table-cell AP-defending AP-defending-1">Defending</div>
                <div className="AP-wrapper-A1-defending-labels">
                  <div className="AP-table-cell AP-celestial-1">C</div>
                  <div className="AP-table-cell AP-natural-1">N</div>
                  <div className="AP-table-cell AP-mental-1">M</div>
                </div>
              </div>
            </div>
            <div className="AP-wrapper-A1-part">
              <div className="AP-wrapper-A1-attacking">
                <div className="AP-table-cell AP-attacking AP-attacking-1">
                  <div className="AP-vertical-label AP-center-label">Attacking</div>
                </div>
                <div className="AP-wrapper-A1-attacking-labels">
                  <div className="AP-table-cell AP-celestial-1">C</div>
                  <div className="AP-table-cell AP-natural-1">N</div>
                  <div className="AP-table-cell AP-mental-1">M</div>
                </div>
              </div>
              <div className="AP-wrapper-A1-content">
                <div className="AP-table-cell AP-cell-1"></div>
                <div className="AP-table-cell AP-cell-2 AP-cell-plus"></div>
                <div className="AP-table-cell AP-cell-3"></div>
                <div className="AP-table-cell AP-cell-4"></div>
                <div className="AP-table-cell AP-cell-5"></div>
                <div className="AP-table-cell AP-cell-6 AP-cell-plus"></div>
                <div className="AP-table-cell AP-cell-7 AP-cell-plus"></div>
                <div className="AP-table-cell AP-cell-8"></div>
                <div className="AP-table-cell AP-cell-9"></div>
              </div>
            </div>
            <div className="AP-title">Seavalanche's World</div>
            <div className="AP-subtitle">Attribute Chart</div>
          </div>
          <div className="AP-wrapper-A2">
            <div className="AP-table-cell AP-defending">Defending Attributes</div>
            <div className="AP-wrapper-A2-theme-wrapper">
              <div className="AP-wrapper-A2-theme">
                <div className="AP-table-cell AP-celestial-1 AP-defending-2">Celestial</div>
                <div className="AP-wrapper-A2-labels">
                  <div className="AP-table-cell AP-celestial-2">
                    <div className="AP-vertical-label">Aether</div>
                  </div>
                  <div className="AP-table-cell AP-celestial-2">
                    <div className="AP-vertical-label">Void</div>
                  </div>
                  <div className="AP-table-cell AP-celestial-2">
                    <div className="AP-vertical-label">Light</div>
                  </div>
                  <div className="AP-table-cell AP-celestial-2">
                    <div className="AP-vertical-label">Darkness</div>
                  </div>
                </div>
                <div className="AP-wrapper-A2-colors">
                  <div className="AP-table-cell AP-aether"></div>
                  <div className="AP-table-cell AP-void"></div>
                  <div className="AP-table-cell AP-light"></div>
                  <div className="AP-table-cell AP-darkness"></div>
                </div>
              </div>
              <div className="AP-wrapper-A2-theme">
                <div className="AP-table-cell AP-natural-1 AP-defending-2">Natural</div>
                <div className="AP-wrapper-A2-labels">
                  <div className="AP-table-cell AP-natural-2">
                    <div className="AP-vertical-label">Fire</div>
                  </div>
                  <div className="AP-table-cell AP-natural-2">
                    <div className="AP-vertical-label">Water</div>
                  </div>
                  <div className="AP-table-cell AP-natural-2">
                    <div className="AP-vertical-label">Nature</div>
                  </div>
                  <div className="AP-table-cell AP-natural-2">
                    <div className="AP-vertical-label">Metal</div>
                  </div>
                  <div className="AP-table-cell AP-natural-2">
                    <div className="AP-vertical-label">Electric</div>
                  </div>
                  <div className="AP-table-cell AP-natural-2">
                    <div className="AP-vertical-label">Wind</div>
                  </div>
                </div>
                <div className="AP-wrapper-A2-colors">
                  <div className="AP-table-cell AP-fire"></div>
                  <div className="AP-table-cell AP-water"></div>
                  <div className="AP-table-cell AP-nature"></div>
                  <div className="AP-table-cell AP-metal"></div>
                  <div className="AP-table-cell AP-electric"></div>
                  <div className="AP-table-cell AP-wind"></div>
                </div>
              </div>
              <div className="AP-wrapper-A2-theme">
                <div className="AP-table-cell AP-mental-1 AP-defending-2">Mental</div>
                <div className="AP-wrapper-A2-labels">
                  <div className="AP-table-cell AP-natural-2">
                    <div className="AP-vertical-label">Magical</div>
                  </div>
                  <div className="AP-table-cell AP-natural-2">
                    <div className="AP-vertical-label">Psionic</div>
                  </div>
                  <div className="AP-table-cell AP-natural-2">
                    <div className="AP-vertical-label">Spirit</div>
                  </div>
                  <div className="AP-table-cell AP-natural-2">
                    <div className="AP-vertical-label">Sound</div>
                  </div>
                </div>
                <div className="AP-wrapper-A2-colors">
                  <div className="AP-table-cell AP-magical"></div>
                  <div className="AP-table-cell AP-psionic"></div>
                  <div className="AP-table-cell AP-spirit"></div>
                  <div className="AP-table-cell AP-sound"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="AP-wrapper-A3">
            <div className="AP-table-cell AP-attacking">
              <div className="AP-vertical-label AP-center-label">Attacking Attributes</div>
            </div>
            <div className="AP-wrapper-A3-theme-wrapper">
              <div className="AP-wrapper-A3-theme">
                <div className="AP-table-cell AP-celestial-1 AP-attacking-2">
                  <div className="AP-vertical-label AP-center-label">Celestial</div>
                </div>
                <div className="AP-wrapper-A3-labels">
                  <div className="AP-table-cell AP-celestial-2">Aether</div>
                  <div className="AP-table-cell AP-celestial-2">Void</div>
                  <div className="AP-table-cell AP-celestial-2">Light</div>
                  <div className="AP-table-cell AP-celestial-2">Darkness</div>
                </div>
                <div className="AP-wrapper-A3-colors">
                  <div className="AP-table-cell AP-aether"></div>
                  <div className="AP-table-cell AP-void"></div>
                  <div className="AP-table-cell AP-light"></div>
                  <div className="AP-table-cell AP-darkness"></div>
                </div>
              </div>
              <div className="AP-wrapper-A3-theme">
                <div className="AP-table-cell AP-natural-1 AP-attacking-2">
                  <div className="AP-vertical-label AP-center-label">Natural</div>
                </div>
                <div className="AP-wrapper-A3-labels">
                  <div className="AP-table-cell AP-natural-2">Fire</div>
                  <div className="AP-table-cell AP-natural-2">Water</div>
                  <div className="AP-table-cell AP-natural-2">Nature</div>
                  <div className="AP-table-cell AP-natural-2">Metal</div>
                  <div className="AP-table-cell AP-natural-2">Electric</div>
                  <div className="AP-table-cell AP-natural-2">Wind</div>
                </div>
                <div className="AP-wrapper-A3-colors">
                  <div className="AP-table-cell AP-fire"></div>
                  <div className="AP-table-cell AP-water"></div>
                  <div className="AP-table-cell AP-nature"></div>
                  <div className="AP-table-cell AP-metal"></div>
                  <div className="AP-table-cell AP-electric"></div>
                  <div className="AP-table-cell AP-wind"></div>
                </div>
              </div>
              <div className="AP-wrapper-A3-theme">
                <div className="AP-table-cell AP-mental-1 AP-attacking-2">
                  <div className="AP-vertical-label AP-center-label">Mental</div>
                </div>
                <div className="AP-wrapper-A3-labels">
                  <div className="AP-table-cell AP-mental-2">Magical</div>
                  <div className="AP-table-cell AP-mental-2">Psionic</div>
                  <div className="AP-table-cell AP-mental-2">Spirit</div>
                  <div className="AP-table-cell AP-mental-2">Sound</div>
                </div>
                <div className="AP-wrapper-A3-colors">
                  <div className="AP-table-cell AP-magical"></div>
                  <div className="AP-table-cell AP-psionic"></div>
                  <div className="AP-table-cell AP-spirit"></div>
                  <div className="AP-table-cell AP-sound"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="AP-wrapper-A4">
            <div className="AP-wrapper-A4-cell-A AP-A4-1">
              <div className="AP-table-cell AP-cell-1"></div>
              <div className="AP-table-cell AP-cell-2 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-2 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-3 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-4 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-5 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-5 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-6 AP-cell-minus"></div>
              <div className="AP-table-cell AP-cell-4"></div>
              <div className="AP-table-cell AP-cell-5 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-5 AP-cell-minus"></div>
              <div className="AP-table-cell AP-cell-6 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-7 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-8 AP-cell-minus"></div>
              <div className="AP-table-cell AP-cell-8 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-9 AP-cell-minus"></div>
            </div>
            <div className="AP-wrapper-A4-cell-B AP-A4-2">
              Celestial hits [+] for each Natural attributes
            </div>
            <div className="AP-wrapper-A4-cell-C AP-A4-3">
              <div className="AP-A4-C-row">5% Disable Attributes for 1 turn</div>
              <div className="AP-A4-C-row">+5% Damage</div>
              <div className="AP-A4-C-row">5% Confused</div>
              <div className="AP-A4-C-row">-5% Damage</div>
            </div>
            <div className="AP-wrapper-A4-cell-C AP-A4-4">
              <div className="AP-A4-C-row">7% Burned</div>
              <div className="AP-A4-C-row">-5% Speed</div>
              <div className="AP-A4-C-row">5% Reset target Buffs</div>
              <div className="AP-A4-C-row">User +5% Defense</div>
              <div className="AP-A4-C-row">User +5% Attack</div>
              <div className="AP-A4-C-row">User +5% Speed</div>
            </div>
            <div className="AP-wrapper-A4-cell-A AP-A4-5">
              <div className="AP-table-cell AP-cell-1 AP-cell-minus"></div>
              <div className="AP-table-cell AP-cell-2 AP-cell-minus"></div>
              <div className="AP-table-cell AP-cell-2 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-2 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-2"></div>
              <div className="AP-table-cell AP-cell-3 AP-cell-minus"></div>
              <div className="AP-table-cell AP-cell-4 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-5 AP-cell-minus"></div>
              <div className="AP-table-cell AP-cell-5 AP-cell-minus"></div>
              <div className="AP-table-cell AP-cell-5 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-5"></div>
              <div className="AP-table-cell AP-cell-6 AP-cell-minus"></div>
              <div className="AP-table-cell AP-cell-4 AP-cell-minus"></div>
              <div className="AP-table-cell AP-cell-5 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-5 AP-cell-minus"></div>
              <div className="AP-table-cell AP-cell-5 AP-cell-minus"></div>
              <div className="AP-table-cell AP-cell-5"></div>
              <div className="AP-table-cell AP-cell-6 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-4 AP-cell-minus"></div>
              <div className="AP-table-cell AP-cell-5 AP-cell-minus"></div>
              <div className="AP-table-cell AP-cell-5 AP-cell-minus"></div>
              <div className="AP-table-cell AP-cell-5 AP-cell-minus"></div>
              <div className="AP-table-cell AP-cell-5 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-6 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-4"></div>
              <div className="AP-table-cell AP-cell-5 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-5 AP-cell-minus"></div>
              <div className="AP-table-cell AP-cell-5"></div>
              <div className="AP-table-cell AP-cell-5 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-6"></div>
              <div className="AP-table-cell AP-cell-7 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-8 AP-cell-minus"></div>
              <div className="AP-table-cell AP-cell-8 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-8 AP-cell-minus"></div>
              <div className="AP-table-cell AP-cell-8 AP-cell-minus"></div>
              <div className="AP-table-cell AP-cell-9 AP-cell-minus"></div>
            </div>
            <div className="AP-wrapper-A4-cell-B AP-A4-6">
              Natural hits [+] for each Mental attributes
            </div>
            <div className="AP-wrapper-A4-cell-B AP-A4-7">
              Mental hits [+] for each Celestial attributes
            </div>
            <div className="AP-wrapper-A4-cell-C AP-A4-8">
              <div className="AP-A4-C-row">+2% user all stats per turn</div>
              <div className="AP-A4-C-row">4% Stunned</div>
              <div className="AP-A4-C-row">5% Confused</div>
              <div className="AP-A4-C-row">-5% Evasion</div>
            </div>
            <div className="AP-wrapper-A4-cell-A AP-A4-9">
              <div className="AP-table-cell AP-cell-1 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-2 AP-cell-minus"></div>
              <div className="AP-table-cell AP-cell-2 AP-cell-minus"></div>
              <div className="AP-table-cell AP-cell-3 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-4"></div>
              <div className="AP-table-cell AP-cell-5 AP-cell-minus"></div>
              <div className="AP-table-cell AP-cell-5 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-6"></div>
              <div className="AP-table-cell AP-cell-4"></div>
              <div className="AP-table-cell AP-cell-5 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-5 AP-cell-minus"></div>
              <div className="AP-table-cell AP-cell-6"></div>
              <div className="AP-table-cell AP-cell-7 AP-cell-minus"></div>
              <div className="AP-table-cell AP-cell-8 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-8 AP-cell-plus"></div>
              <div className="AP-table-cell AP-cell-9 AP-cell-minus"></div>
            </div>
          </div>
          <div className="AP-wrapper-A5">
            <div className="AP-wrapper-A5-part">
              <div className="AP-table-cell AP-cell-plus"></div>
              <div>1 hit of this symbol increase total damage by 15%; One single action total damage is capped at +30%</div>
            </div>
            <div className="AP-wrapper-A5-part">
              <div className="AP-table-cell AP-cell-minus"></div>
              <div>1 hit of this symbol decrease total damage by 15%; One single action total damage is capped at -30%</div>
            </div>
          </div>
        </div>
        <div className="AP-wrapper-B">
          <div className="AP-table-cell AP-cell-3"></div>
        </div>
      </div>

      <button
        onClick={handleDownload}
      >
        Download Table as PNG
      </button>
    </div>
  );
}

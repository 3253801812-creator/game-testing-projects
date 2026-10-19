export default function UniverseShell() {
  return (
    <>
      <div id={"app"}>
        <div id={"loader"}>Initializing orbital engine</div>
        <div id={"canvasMount"}></div>
        <section id={"mainMenu"} className={"screen"}>
          <div className={"menu-card"}>
            <div className={"eyebrow"}>Interactive Gravity Laboratory</div>
            <h1>
              UNIVERSE 
              <span>SANDBOX</span>
            </h1>
            <p className={"lead"}>Build star systems, launch planets into orbit, and reshape celestial motion in a real-time Three.js gravity simulation.</p>
            <button id={"playBtn"} data-testid={"play-btn"} className={"primary-btn"}>Play Simulation</button>
          </div>
        </section>
        <section id={"scenarioSelect"} className={"screen hidden"}>
          <div className={"scenario-wrap"}>
            <div className={"scenario-heading"}>
              <div className={"eyebrow"}>Choose a starting state</div>
              <h2>Select Scenario</h2>
            </div>
            <div className={"scenario-grid"}>
              <button id={"solarScenario"} data-testid={"solar-system-btn"} className={"scenario-card"}>
                <div className={"planet-art"}>
                  <div className={"orbital-line"}></div>
                  <div className={"orb-art-sun"}></div>
                  <div className={"orb-art-earth"}></div>
                  <div className={"orb-art-mars"}></div>
                </div>
                <h3>Solar System</h3>
                <p>Start with a glowing Sun plus Earth, Mars and Jupiter already moving on stable orbital paths.</p>
              </button>
              <button id={"customScenario"} data-testid={"custom-sandbox-btn"} className={"scenario-card"}>
                <div className={"empty-art"}>
                  <div className={"crosshair"}></div>
                </div>
                <h3>Custom Sandbox</h3>
                <p>Begin in completely empty physical space and construct a system body by body.</p>
              </button>
            </div>
          </div>
        </section>
        <section id={"gameScreen"} className={"hidden"}>
          <div id={"hud"}>
            <div className={"topbar"}>
              <div className={"brand-pill"}>
                <span className={"brand-dot"}></span>
                <strong id={"scenarioLabel"}>Orbital Lab</strong>
              </div>
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <div id={"simStatus"} className={"status-pill"}>0 bodies · gravity active</div>
                <button id={"menuBtn"} data-testid={"menu-btn"} className={"small-btn"}>Main menu</button>
              </div>
            </div>
            <div id={"placementHint"} className={"hidden"}>Click in space to place object · Esc to cancel</div>
            <div id={"selectionBadge"} className={"hidden"}>
              <div className={"label"}>Selected body</div>
              <strong id={"selectionName"}>Earth</strong>
              <small id={"selectionMeta"}>Planet</small>
            </div>
            <aside id={"objectSettingsPanel"} className={"hidden"}>
              <div className={"panel-head"}>
                <div>
                  <div className={"kicker"}>System controls</div>
                  <h3 id={"settingsName"} data-testid={"selected-object-name"}>No selection</h3>
                </div>
                <button id={"closeSettings"} data-testid={"object-settings-close"} className={"panel-close"}>×</button>
              </div>
              <div className={"control"}>
                <div className={"control-row"}>
                  <span>Average Temperature</span>
                  <span id={"temperatureValue"}>15 °C</span>
                </div>
                <input id={"temperatureSlider"} data-testid={"temperature-slider"} type={"range"} min={"-250"} max={"6000"} step={"1"} defaultValue={"15"} />
              </div>
              <div className={"control"}>
                <div className={"control-row"}>
                  <span>Rotation Speed</span>
                  <span id={"rotationValue"}>1.00×</span>
                </div>
                <input id={"rotationSlider"} data-testid={"rotation-speed-slider"} type={"range"} min={"0"} max={"3"} step={"0.01"} defaultValue={"1"} />
              </div>
              <div className={"control"}>
                <div className={"control-row"}>
                  <span>Orbital Velocity</span>
                  <span id={"orbitalValue"}>0.00 u/s</span>
                </div>
                <input id={"orbitalSlider"} data-testid={"orbital-velocity-slider"} type={"range"} min={"0"} max={"40"} step={"0.05"} defaultValue={"0"} />
              </div>
              <div id={"orbitNote"} className={"panel-note"}>Orbital velocity changes this body's current tangential motion around its nearest star.</div>
            </aside>
            <div id={"sandboxToolbar"}>
              <div className={"tool-group"}>
                <button id={"spawnObjectBtn"} data-testid={"spawn-object-btn"} className={"tool-btn"}>
                  <span className={"ico"}>◉</span>
                  <span className={"txt"}>Spawn Object</span>
                  <span>⌄</span>
                </button>
                <div id={"spawnDropdown"} className={"hidden"}>
                  <label htmlFor={"planetPreset"}>Planet preset</label>
                  <select id={"planetPreset"} data-testid={"spawn-object-select"}>
                    <option value={"earth"}>Real Planet · Earth</option>
                    <option value={"mars"}>Real Planet · Mars</option>
                  </select>
                  <button id={"confirmPlanetSpawn"}>Place selected planet</button>
                </div>
              </div>
              <button id={"spawnStarBtn"} data-testid={"spawn-star-btn"} className={"tool-btn"}>
                <span className={"ico"}>✦</span>
                <span className={"txt"}>Spawn Star</span>
              </button>
              <div className={"divider"}></div>
              <button id={"settingsBtn"} data-testid={"object-settings-btn"} className={"icon-btn"} title={"Object settings"}>⚙</button>
            </div>
          </div>
        </section>
        <div id={"toast"}></div>
      </div>
    </>
  )
}

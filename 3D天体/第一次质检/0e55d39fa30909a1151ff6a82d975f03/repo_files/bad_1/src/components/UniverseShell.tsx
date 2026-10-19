export default function UniverseShell() {
  return (
    <>
      <div id={"app"}>
        <section id={"mainMenu"} className={"overlay menu-screen"}>
          <div className={"hero"}>
            <div className={"eyebrow"}>KEPLER FOUNDRY // ORBITAL WORKSHOP</div>
            <h1>
              Draft an orbit.
              <br />
              <span>Watch the system evolve.</span>
            </h1>
            <p>A 3D celestial sandbox for building systems, placing worlds, and tuning orbital motion.</p>
            <button className={"primary"} data-testid={"play-btn"} type={"button"}>▶ Play</button>
            <div className={"status-line"}>
              <i></i>
               Kepler solver online · placement deck calibrated
            </div>
          </div>
        </section>
        <section id={"scenarioSelect"} className={"overlay menu-screen hidden"} aria-hidden={"true"}>
          <div className={"scenario-shell"}>
            <div className={"eyebrow"}>SELECT INITIAL CONDITIONS</div>
            <h2>Choose a scenario</h2>
            <p className={"muted"}>Start with a live orbital system or a clean construction plane.</p>
            <div className={"scenario-grid"}>
              <button className={"scenario-card solar"} data-testid={"solar-system-btn"} type={"button"}>
                <div className={"orbit-art"}>
                  <span></span>
                  <i></i>
                  <b></b>
                  <em></em>
                </div>
                <div className={"scenario-copy"}>
                  <small>SYSTEM 01</small>
                  <strong>Solar System</strong>
                  <span>Sun · Earth · Mars · Jupiter</span>
                </div>
              </button>
              <button className={"scenario-card custom"} data-testid={"custom-sandbox-btn"} type={"button"}>
                <div className={"grid-art"}></div>
                <div className={"scenario-copy"}>
                  <small>SYSTEM 02</small>
                  <strong>Custom Sandbox</strong>
                  <span>Empty physical space</span>
                </div>
              </button>
            </div>
            <button id={"scenarioBack"} className={"ghost"} type={"button"}>← Back</button>
          </div>
        </section>
        <main id={"gameScreen"} className={"hidden"} aria-hidden={"true"}>
          <div id={"canvasHost"}></div>
          <header className={"hud top-hud"}>
            <button className={"hud-btn"} data-testid={"menu-btn"} type={"button"}>
              ☰ 
              <span>Menu</span>
            </button>
            <div className={"sim-chip"}>
              <i></i>
              <div>
                <small>KEPLER SESSION</small>
                <strong id={"scenarioLabel"}>—</strong>
              </div>
            </div>
            <div className={"hud-stats"}>
              <div>
                <small>BODIES</small>
                <strong id={"bodyCountLabel"}>0</strong>
              </div>
              <div>
                <small>SIM TIME</small>
                <strong id={"simTimeLabel"}>0.0s</strong>
              </div>
            </div>
          </header>
          <div id={"placementHint"} className={"placement-hint hidden"}>
            <b>＋</b>
            <span id={"placementHintText"}>Click canvas to place</span>
            <kbd>Esc</kbd>
          </div>
          <aside id={"objectSettingsPanel"} className={"settings-panel"} aria-hidden={"true"}>
            <div className={"panel-head"}>
              <div>
                <small>OBJECT PARAMETERS</small>
                <h3 data-testid={"selected-object-name"}>No object selected</h3>
              </div>
              <button className={"close-btn"} data-testid={"object-settings-close"} type={"button"} aria-label={"Close settings"}>×</button>
            </div>
            <div className={"setting"}>
              <div className={"setting-title"}>
                <span>Average Temperature</span>
                <output id={"temperatureValue"}>0 K</output>
              </div>
              <input data-testid={"temperature-slider"} type={"range"} min={"50"} max={"8000"} step={"1"} defaultValue={"288"} />
              <div className={"range-ends"}>
                <span>50 K</span>
                <span>8000 K</span>
              </div>
            </div>
            <div className={"setting"}>
              <div className={"setting-title"}>
                <span>Rotation Speed</span>
                <output id={"rotationValue"}>0.00 rad/s</output>
              </div>
              <input data-testid={"rotation-speed-slider"} type={"range"} min={"-2"} max={"2"} step={"0.01"} defaultValue={"0.12"} />
              <div className={"range-ends"}>
                <span>-2</span>
                <span>2</span>
              </div>
            </div>
            <div className={"setting"}>
              <div className={"setting-title"}>
                <span>Orbital Velocity</span>
                <output id={"orbitalValue"}>0.00 u/s</output>
              </div>
              <input data-testid={"orbital-velocity-slider"} type={"range"} min={"0"} max={"12"} step={"0.01"} defaultValue={"0"} />
              <div className={"range-ends"}>
                <span>0</span>
                <span>12</span>
              </div>
              <p id={"orbitalNote"} className={"note"}></p>
            </div>
            <div className={"badges"}>
              <span id={"typeBadge"}>NO TARGET</span>
              <span id={"orbitBadge"}>UNBOUND</span>
            </div>
          </aside>
          <div id={"sandboxToolbar"} className={"toolbar"} role={"toolbar"} aria-label={"Sandbox tools"}>
            <div className={"tool-group"}>
              <button className={"tool-btn"} data-testid={"spawn-object-btn"} type={"button"}>
                <i>◉</i>
                <span>
                  <b>Spawn Object</b>
                  <small>Place a planet</small>
                </span>
              </button>
              <label className={"preset"}>
                <small>PRESET</small>
                <select data-testid={"spawn-object-select"} aria-label={"Planet preset"}>
                  <option value={"earth"}>Earth</option>
                  <option value={"procedural"}>Procedural</option>
                </select>
              </label>
            </div>
            <div className={"divider"}></div>
            <button className={"tool-btn"} data-testid={"spawn-star-btn"} type={"button"}>
              <i className={"star"}>✦</i>
              <span>
                <b>Spawn Star</b>
                <small>Place a light source</small>
              </span>
            </button>
            <div className={"divider"}></div>
            <button className={"tool-btn"} data-testid={"object-settings-btn"} type={"button"} disabled>
              <i>⚙</i>
              <span>
                <b>Object Settings</b>
                <small id={"settingsSub"}>Select a body</small>
              </span>
            </button>
          </div>
          <div className={"help"}>
            <span>◌ Drag to orbit</span>
            <span>⌁ Scroll to zoom</span>
            <span>● Click body to select</span>
          </div>
        </main>
        <div id={"fatalError"} className={"fatal hidden"} role={"alert"}>
          <strong>3D renderer unavailable</strong>
          <span id={"fatalMessage"}></span>
        </div>
      </div>
    </>
  )
}

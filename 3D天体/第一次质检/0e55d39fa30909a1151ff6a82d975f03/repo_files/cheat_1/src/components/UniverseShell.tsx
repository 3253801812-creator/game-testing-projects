export default function UniverseShell() {
  return (
    <>
      <div id={"app"}>
        <section id={"mainMenu"} className={"overlay menu-screen"}>
          <div className={"menu-noise"} aria-hidden={"true"}></div>
          <div className={"hero"}>
            <div className={"eyebrow"}>
              <span className={"signal-dot"}></span>
               ORBITAL RESEARCH CONSOLE // DEEP-SPACE INSTRUMENT
            </div>
            <h1>
              Observe the system.
              <br />
              <span>Intervene with precision.</span>
            </h1>
            <p>A deep-space research console for constructing controlled orbital experiments, inspecting celestial telemetry, and tuning motion in real time.</p>
            <button className={"primary"} data-testid={"play-btn"} type={"button"}>
              <span>▶</span>
               Open Research Session
            </button>
            <div className={"status-line"}>
              <i></i>
               Sensors nominal · orbital instruments synchronized
            </div>
          </div>
          <div className={"menu-orbit orbit-a"} aria-hidden={"true"}></div>
          <div className={"menu-orbit orbit-b"} aria-hidden={"true"}></div>
        </section>
        <section id={"scenarioSelect"} className={"overlay menu-screen hidden"} aria-hidden={"true"}>
          <div className={"scenario-shell"}>
            <div className={"eyebrow"}>
              <span className={"signal-dot"}></span>
               SELECT RESEARCH PROTOCOL
            </div>
            <h2>Choose an observation protocol</h2>
            <p className={"muted"}>Observe a calibrated reference system or initialize a blank experimental field.</p>
            <div className={"scenario-grid"}>
              <button className={"scenario-card solar"} data-testid={"solar-system-btn"} type={"button"}>
                <div className={"scenario-glow"}></div>
                <div className={"orbit-art"}>
                  <span></span>
                  <i></i>
                  <b></b>
                  <em></em>
                </div>
                <div className={"scenario-copy"}>
                  <small>PROTOCOL A · REFERENCE ORBITS</small>
                  <strong>Solar System</strong>
                  <span>Sun · Earth · Mars · Jupiter</span>
                </div>
                <span className={"card-arrow"}>↗</span>
              </button>
              <button className={"scenario-card custom"} data-testid={"custom-sandbox-btn"} type={"button"}>
                <div className={"scenario-glow"}></div>
                <div className={"grid-art"}></div>
                <div className={"scenario-copy"}>
                  <small>PROTOCOL B · CONTROLLED VOID</small>
                  <strong>Custom Sandbox</strong>
                  <span>Construct an isolated orbital experiment</span>
                </div>
                <span className={"card-arrow"}>↗</span>
              </button>
            </div>
            <button id={"scenarioBack"} className={"ghost"} type={"button"}>← Return to console</button>
          </div>
        </section>
        <main id={"gameScreen"} className={"hidden"} aria-hidden={"true"}>
          <div id={"canvasHost"}></div>
          <div className={"canvas-vignette"} aria-hidden={"true"}></div>
          <header className={"hud top-hud"}>
            <button className={"hud-btn"} data-testid={"menu-btn"} type={"button"} title={"Return to main menu"}>
              ☰ 
              <span>Menu</span>
            </button>
            <div className={"sim-chip"}>
              <i></i>
              <div>
                <small>RESEARCH SESSION</small>
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
              <div className={"fps-stat"}>
                <small>RENDER</small>
                <strong id={"fpsLabel"}>— FPS</strong>
              </div>
            </div>
          </header>
          <div id={"placementHint"} className={"placement-hint hidden"}>
            <b>＋</b>
            <span id={"placementHintText"}>Click canvas to place</span>
            <kbd>Esc</kbd>
          </div>
          <div id={"hoverLabel"} className={"hover-label hidden"} aria-hidden={"true"}>
            <strong id={"hoverName"}>Body</strong>
            <span id={"hoverMeta"}>PLANET</span>
          </div>
          <aside id={"objectSettingsPanel"} className={"settings-panel"} aria-hidden={"true"}>
            <div className={"panel-head"}>
              <div>
                <small>INSTRUMENT PARAMETERS</small>
                <h3 data-testid={"selected-object-name"}>No object selected</h3>
              </div>
              <button className={"close-btn"} data-testid={"object-settings-close"} type={"button"} aria-label={"Close settings"}>×</button>
            </div>
            <div className={"telemetry"}>
              <div>
                <small>TYPE</small>
                <strong id={"telemetryType"}>—</strong>
              </div>
              <div>
                <small>MASS</small>
                <strong id={"telemetryMass"}>—</strong>
              </div>
              <div>
                <small>RADIUS</small>
                <strong id={"telemetryRadius"}>—</strong>
              </div>
              <div>
                <small>ORBIT</small>
                <strong id={"telemetryOrbit"}>—</strong>
              </div>
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
            <div className={"panel-actions"}>
              <button id={"focusSelectedBtn"} type={"button"}>
                ◎ Focus selected 
                <kbd>F</kbd>
              </button>
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
                <small>SPECIMEN</small>
                <select data-testid={"spawn-object-select"} aria-label={"Planet preset"}>
                  <option value={"earth"}>Earth</option>
                  <option value={"mars"}>Mars</option>
                  <option value={"procedural"}>Procedural</option>
                </select>
              </label>
            </div>
            <div className={"divider"}></div>
            <button className={"tool-btn"} data-testid={"spawn-star-btn"} type={"button"}>
              <i className={"star"}>✦</i>
              <span>
                <b>Spawn Star</b>
                <small>Deploy luminous source</small>
              </span>
            </button>
            <div className={"divider"}></div>
            <button className={"tool-btn"} data-testid={"object-settings-btn"} type={"button"} disabled>
              <i>⚙</i>
              <span>
                <b>Research Controls</b>
                <small id={"settingsSub"}>Select a body</small>
              </span>
            </button>
          </div>
          <div className={"help"}>
            <span>◌ Drag to orbit</span>
            <span>⌁ Scroll to zoom</span>
            <span>● Click body to select</span>
            <span>◎ F to focus</span>
          </div>
          <div id={"toast"} className={"toast hidden"} role={"status"} aria-live={"polite"}></div>
        </main>
        <div id={"fatalError"} className={"fatal hidden"} role={"alert"}>
          <strong>3D renderer unavailable</strong>
          <span id={"fatalMessage"}></span>
        </div>
      </div>
    </>
  )
}

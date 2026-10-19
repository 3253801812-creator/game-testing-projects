export default function UniverseShell() {
  return (
    <>
      <section id={"gameScreen"} className={"screen screen--game screen--hidden"} aria-hidden={"true"}>
        <div id={"canvasHost"} className={"canvas-host"}></div>
        <header className={"game-hud"}>
          <div className={"hud-left"}>
            <button className={"ghost-button"} data-testid={"menu-btn"} type={"button"}>← Main Menu</button>
            <div className={"scenario-readout"}>
              <span className={"live-dot"}></span>
              <div>
                <strong id={"scenarioTitle"}>Sandbox</strong>
                <small id={"bodyStatus"}>0 bodies · live gravity</small>
              </div>
            </div>
          </div>
          <div className={"controls-hint"}>Drag to orbit · Scroll to zoom · Click body to select</div>
        </header>
        <div id={"placementHint"} className={"placement-hint hidden"}>Spawn mode · click the orbital plane to place</div>
        <aside id={"objectSettingsPanel"} className={"settings-panel hidden"} aria-hidden={"true"}>
          <div className={"panel-heading"}>
            <div>
              <span className={"eyebrow"}>System Controls</span>
              <h2 data-testid={"selected-object-name"}>No selection</h2>
              <p id={"selectedObjectType"}>—</p>
            </div>
            <button className={"icon-button"} data-testid={"object-settings-close"} type={"button"} aria-label={"Close settings"}>×</button>
          </div>
          <label className={"control-row"}>
            <span className={"control-title"}>Average Temperature</span>
            <output id={"temperatureValue"}>0 K</output>
            <input data-testid={"temperature-slider"} type={"range"} min={"50"} max={"12000"} step={"10"} defaultValue={"288"} />
          </label>
          <label className={"control-row"}>
            <span className={"control-title"}>Rotation Speed</span>
            <output id={"rotationValue"}>0.00 rad/s</output>
            <input data-testid={"rotation-speed-slider"} type={"range"} min={"-3"} max={"3"} step={"0.02"} defaultValue={"0"} />
          </label>
          <label className={"control-row"}>
            <span className={"control-title"}>Orbital Velocity</span>
            <output id={"orbitalValue"}>0.00 u/s</output>
            <input data-testid={"orbital-velocity-slider"} type={"range"} min={"0"} max={"8"} step={"0.02"} defaultValue={"0"} />
            <small id={"orbitalHelp"} className={"control-help"}>Select an orbiting planet.</small>
          </label>
        </aside>
        <div className={"toolbar-wrap"}>
          <div id={"sandboxToolbar"} className={"toolbar hidden"} aria-hidden={"true"}>
            <div className={"spawn-group"}>
              <button data-testid={"spawn-object-btn"} className={"toolbar-button"} type={"button"}>＋ Spawn Object</button>
              <select data-testid={"spawn-object-select"} className={"preset-select"} aria-label={"Planet preset"}>
                <option value={"earth"}>Real Planet · Earth</option>
                <option value={"mars"}>Real Planet · Mars</option>
                <option value={"procedural"}>Procedural Planet</option>
              </select>
            </div>
            <button data-testid={"spawn-star-btn"} className={"toolbar-button"} type={"button"}>✦ Spawn Star</button>
            <span className={"toolbar-divider"}></span>
            <button data-testid={"object-settings-btn"} className={"icon-button gear-button"} type={"button"} aria-label={"Object settings"} disabled>⚙</button>
          </div>
        </div>
      </section>
      <section id={"scenarioSelect"} className={"screen screen--overlay screen--hidden"} aria-hidden={"true"}>
        <button id={"scenarioBack"} className={"ghost-button scenario-back"} type={"button"}>← Main Menu</button>
        <div className={"scenario-shell"}>
          <span className={"eyebrow"}>Choose simulation</span>
          <h1>Scenario Selection</h1>
          <div className={"scenario-grid"}>
            <button data-testid={"solar-system-btn"} className={"scenario-card"} type={"button"}>
              <div className={"solar-visual"} aria-hidden={"true"}>
                <span className={"sun-dot"}></span>
                <span className={"earth-dot"}></span>
                <span className={"mars-dot"}></span>
                <span className={"jupiter-dot"}></span>
              </div>
              <span className={"eyebrow"}>Preset A</span>
              <strong>Solar System</strong>
              <p>A glowing Sun with Earth, Mars and Jupiter already moving on gravity-driven orbital paths.</p>
            </button>
            <button data-testid={"custom-sandbox-btn"} className={"scenario-card"} type={"button"}>
              <div className={"empty-visual"} aria-hidden={"true"}>＋</div>
              <span className={"eyebrow violet"}>Preset B</span>
              <strong>Custom Sandbox</strong>
              <p>Begin with empty physical space. Add stars and planets directly at the camera cursor plane.</p>
            </button>
          </div>
        </div>
      </section>
      <section id={"mainMenu"} className={"screen screen--overlay"} aria-hidden={"false"}>
        <div className={"menu-grid"}></div>
        <span className={"decor-star decor-star--a"}></span>
        <span className={"decor-star decor-star--b"}></span>
        <span className={"decor-star decor-star--c"}></span>
        <div className={"menu-content"}>
          <span className={"eyebrow menu-badge"}>3D Physics Laboratory</span>
          <h1>ORBITAL FORGE</h1>
          <p>Build planetary systems, place new worlds into gravity wells, and tune their motion in a live 3D physics sandbox.</p>
          <button data-testid={"play-btn"} className={"play-button"} type={"button"}>Play</button>
        </div>
      </section>
    </>
  )
}

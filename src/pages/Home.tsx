export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="section">
        <div className="grid-2">
          <div>
            <div className="chip">Operating System Layer</div>
            <h1
              style={{
                fontSize: "2.1rem",
                lineHeight: 1.2,
                marginBottom: "0.75rem",
                fontWeight: 600,
              }}
            >
              M-OS is the AI + Voice Operating System designed to run homes,
              devices and businesses from one intelligence layer.
            </h1>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--color-text-muted)",
                maxWidth: 600,
                marginBottom: "1.4rem",
              }}
            >
              M-OS sits beneath applications and experiences, providing a unified
              brain for perception, decisioning and automation. It abstracts
              voice, AI and workflows into a single operating system that can
              run on edge devices, hubs, gateways or servers.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href="/features" className="btn btn-primary">
                Explore Features
              </a>
              <a href="/architecture" className="btn btn-secondary">
                View Architecture
              </a>
            </div>
            <div
              style={{
                marginTop: "1.25rem",
                fontSize: "0.72rem",
                color: "var(--color-text-muted)",
              }}
            >
              <div>• AI-first, voice-native operating system</div>
              <div>• Deployable on-premise, cloud or edge</div>
              <div>• Modular base layer for any product</div>
            </div>
          </div>

          <div>
            <div className="hero-panel">
              <div className="hero-panel-inner">
                <div className="hero-panel-header">
                  <span>M-OS Control Plane</span>
                  <span className="hero-panel-status">Status: ACTIVE</span>
                </div>
                <div className="hero-panel-grid">
                  <div className="hero-panel-box">
                    <div className="hero-panel-box-title">Voice</div>
                    <div className="hero-panel-box-main">Chinna Engine</div>
                    <div className="hero-panel-box-sub">
                      Commands • Dialog • Intents
                    </div>
                  </div>
                  <div className="hero-panel-box">
                    <div className="hero-panel-box-title">AI Core</div>
                    <div className="hero-panel-box-main">M-Core</div>
                    <div className="hero-panel-box-sub">
                      Policies • Models • Context
                    </div>
                  </div>
                  <div className="hero-panel-box">
                    <div className="hero-panel-box-title">Automation</div>
                    <div className="hero-panel-box-main">FlowHub</div>
                    <div className="hero-panel-box-sub">
                      Workflows • Triggers • Actions
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "0.75rem",
                    fontSize: "0.68rem",
                    color: "var(--color-text-muted)",
                  }}
                >
                  M-OS exposes this stack via APIs and SDKs so products plug
                  into intelligence without rebuilding the core.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value pillars */}
      <section className="section">
        <h2 className="section-title">Key value propositions.</h2>
        <p className="section-subtitle">
          M-OS turns AI, voice and automation into reusable OS components, so
          every new product doesn’t have to rebuild the same stack again.
        </p>
        <div className="grid-3" style={{ marginTop: "1.25rem" }}>
          <div className="card card-subtle">
            <div className="card-title">Unified intelligence layer</div>
            <div className="card-body">
              One OS for voice, AI and automation instead of multiple fragmented
              services stitched together manually.
            </div>
          </div>
          <div className="card card-subtle">
            <div className="card-title">Deployment flexibility</div>
            <div className="card-body">
              Deploy on-device, on-premise or in the cloud, depending on
              latency, privacy and regulatory needs.
            </div>
          </div>
          <div className="card card-subtle">
            <div className="card-title">Product-ready foundation</div>
            <div className="card-body">
              Use M-OS as the base layer to build home automation, industrial or
              SaaS experiences without reinventing the core.
            </div>
          </div>
        </div>
      </section>

      {/* Use-case callout */}
      <section className="section">
        <h2 className="section-title">Where M-OS fits.</h2>
        <p className="section-subtitle">
          M-OS is deliberately generic at the OS layer. It can power homes,
          buildings, vehicles, devices, industry and software platforms – under
          your brand or fully white-labeled.
        </p>
        <div style={{ marginTop: "1rem" }}>
          <a href="/use-cases" className="btn btn-secondary">
            Explore use cases
          </a>
        </div>
      </section>
    </>
  );
}
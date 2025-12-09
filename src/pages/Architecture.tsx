const layers = [
  {
    name: "Experience Layer",
    desc: "Applications, devices and interfaces that sit on top of M-OS – mobile apps, panels, web consoles and embedded UIs.",
  },
  {
    name: "Voice & Interaction Layer (Chinna)",
    desc: "Handles wake words, speech recognition integration, intent processing and dialogue management.",
  },
  {
    name: "Intelligence Layer (M-Core)",
    desc: "Responsible for decisioning, model routing, policy execution and maintaining context state.",
  },
  {
    name: "Automation Layer (FlowHub)",
    desc: "Executes workflows, triggers actions and orchestrates sequences across endpoints and systems.",
  },
  {
    name: "Integration & IO Layer",
    desc: "Connects to devices, protocols and external systems via connectors, drivers and APIs.",
  },
  {
    name: "Platform & Runtime",
    desc: "Runtime that can be deployed on edge hubs, servers or containers with observability hooks.",
  },
];

export default function Architecture() {
  return (
    <section className="section">
      <div className="chip">Architecture</div>
      <h1 className="section-title">How M-OS is structured under the hood.</h1>
      <p className="section-subtitle">
        M-OS is built as a layered operating system so integrators can choose
        how deep they go – from simple voice commands to custom automation
        runtimes.
      </p>

      <div className="grid-2-balanced" style={{ marginTop: "1.5rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {layers.map((layer, index) => (
            <div key={layer.name} className="card card-subtle">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.25rem",
                }}
              >
                <div className="card-title">{layer.name}</div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    color: "var(--color-text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.18em",
                  }}
                >
                  Layer {layers.length - index}
                </div>
              </div>
              <div className="card-body">{layer.desc}</div>
            </div>
          ))}
        </div>

        <div className="card card-subtle">
          <div className="card-meta">Stack view</div>
          <div className="card-body">
            Visually, imagine M-OS as a vertical stack:
            <ul
              style={{
                marginTop: "0.5rem",
                paddingLeft: "1rem",
                fontSize: "0.78rem",
              }}
            >
              <li>Top: Apps, experiences, control interfaces</li>
              <li>Middle: Chinna, M-Core, FlowHub</li>
              <li>Base: Connectors, runtimes, infrastructure</li>
            </ul>
            <p style={{ marginTop: "0.6rem" }}>
              Each layer is addressable via APIs and SDKs, letting you integrate
              only what you need while keeping the full OS available when
              you’re ready to scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
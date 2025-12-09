const segments = [
  {
    title: "Smart environments",
    desc: "Homes, buildings, campuses and communities that need a unified intelligence layer for devices, sensors and actuators.",
    bullets: [
      "Scene-based control and routines",
      "Energy optimisation policies",
      "Security and access orchestration",
    ],
  },
  {
    title: "Devices & OEMs",
    desc: "Hardware manufacturers embedding M-OS as the intelligence base in hubs, gateways, panels or devices.",
    bullets: [
      "On-device voice and control",
      "Offline decisioning and workflows",
      "White-label OS for products",
    ],
  },
  {
    title: "Digital platforms",
    desc: "SaaS and internal platforms leveraging M-OS for voice interfaces and automation logic instead of building from scratch.",
    bullets: [
      "Voice layer for existing apps",
      "Cross-system workflows",
      "Centralised policy and governance",
    ],
  },
];

export default function UseCases() {
  return (
    <section className="section">
      <div className="chip">Use Cases</div>
      <h1 className="section-title">
        How teams leverage M-OS in the real world.
      </h1>
      <p className="section-subtitle">
        M-OS is not a single app. It becomes the core intelligence layer behind
        other brands and deployments – visible or completely white-labelled.
      </p>

      <div className="grid-3" style={{ marginTop: "1.5rem" }}>
        {segments.map((segment) => (
          <div key={segment.title} className="card card-subtle">
            <div className="card-title">{segment.title}</div>
            <div
              style={{
                fontSize: "0.78rem",
                color: "#e5e7eb",
                marginBottom: "0.5rem",
              }}
            >
              {segment.desc}
            </div>
            <ul
              style={{
                fontSize: "0.72rem",
                color: "var(--color-silver)",
                paddingLeft: "1rem",
                margin: 0,
              }}
            >
              {segment.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
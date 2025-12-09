const featureGroups = [
  {
    heading: "Voice OS layer (Chinna)",
    items: [
      "Wake word, command and conversation handling",
      "Intent detection and slot extraction",
      "Domain-specific voice packs and vocabularies",
      "Multi-language and regional accent support",
    ],
  },
  {
    heading: "AI decision layer (M-Core)",
    items: [
      "Policy-based decision engine",
      "ML model integration and routing",
      "Context memory and state handling",
      "Rules, constraints and safety controls",
    ],
  },
  {
    heading: "Automation layer (FlowHub)",
    items: [
      "Visual and API-based workflow definitions",
      "Triggers from voice, sensors, APIs and schedules",
      "Action orchestration across devices and services",
      "Retry, fallback and exception handling",
    ],
  },
  {
    heading: "Integration & IO layer",
    items: [
      "Device drivers and protocol adapters",
      "REST / Webhook / MQTT style interfaces",
      "SDKs for embedding M-OS into products",
      "Event bus for real-time data streams",
    ],
  },
  {
    heading: "Security & governance",
    items: [
      "Local-first execution options",
      "Role- and policy-based access control",
      "Audit logs and traceability hooks",
      "Data minimisation and segmentation",
    ],
  },
];

export default function Features() {
  return (
    <section className="section">
      <div className="chip">Features</div>
      <h1 className="section-title">
        Core capabilities of the M-OS operating system.
      </h1>
      <p className="section-subtitle">
        M-OS abstracts AI, voice and automation into operating-system primitives
        so builders can work with stable building blocks instead of raw
        services.
      </p>

      <div className="grid-2-balanced" style={{ marginTop: "1.5rem" }}>
        {featureGroups.map((group) => (
          <div key={group.heading} className="card card-subtle">
            <div className="card-title">{group.heading}</div>
            <ul
              style={{
                fontSize: "0.78rem",
                color: "#e5e7eb",
                margin: 0,
                paddingLeft: "1rem",
                marginTop: "0.4rem",
              }}
            >
              {group.items.map((item) => (
                <li key={item} style={{ marginBottom: "0.2rem" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
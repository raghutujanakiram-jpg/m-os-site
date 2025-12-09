export default function About() {
  return (
    <section className="section">
      <div className="chip">About</div>
      <h1 className="section-title">
        Why we built an operating system instead of another app.
      </h1>
      <p className="section-subtitle">
        M-OS exists to solve a structural problem: every new product was
        rebuilding the same AI, voice and automation stack from scratch.
      </p>

      <div style={{ marginTop: "1.5rem", maxWidth: 720, fontSize: "0.86rem" }}>
        <p style={{ marginBottom: "0.85rem", color: "#e5e7eb" }}>
          Fragmented stacks lead to duplicated effort, inconsistent behaviour
          and poor user experience. M-OS standardises the intelligence layer so
          teams can focus on differentiated value – hardware, software and
          experiences – while relying on a stable OS underneath.
        </p>
        <p style={{ marginBottom: "0.85rem", color: "#e5e7eb" }}>
          The result is a consistent way to add AI, voice and automation to any
          environment: a single operating system, tuned for edge, on-premise or
          cloud, instead of a tangle of custom integrations.
        </p>
      </div>
    </section>
  );
}
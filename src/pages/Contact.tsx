export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted (wire this to your backend/API).");
  };

  return (
    <section className="section">
      <div className="chip">Contact</div>
      <h1 className="section-title">
        Discuss integrating M-OS into your product or environment.
      </h1>
      <p className="section-subtitle">
        Share a few details and we’ll coordinate a technical or commercial
        conversation around embedding M-OS as the operating-system layer in
        your stack.
      </p>

      <form onSubmit={handleSubmit} className="form" style={{ marginTop: "1.5rem" }}>
        <div className="form-row">
          <div>
            <label className="label">Full Name</label>
            <input className="input" required />
          </div>
          <div>
            <label className="label">Email</label>
            <input type="email" className="input" required />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label className="label">Organisation / Brand</label>
            <input className="input" />
          </div>
          <div>
            <label className="label">Planned use case</label>
            <select className="select">
              <option>Smart environment (home / building / campus)</option>
              <option>Device / OEM integration</option>
              <option>Digital platform or SaaS</option>
              <option>Exploratory / partnership</option>
            </select>
          </div>
        </div>

        <div>
          <label className="label">Brief description</label>
          <textarea className="textarea" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
}
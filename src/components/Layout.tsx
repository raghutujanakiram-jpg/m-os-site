import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/architecture", label: "Architecture" },
  { to: "/use-cases", label: "Use Cases" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="app-shell">
      {/* HEADER */}
      <header className="shell-header">
        <div className="shell-header-inner">
          {/* BRAND BLOCK – LOGO + TEXT */}
          <Link to="/" className="brand" style={{ textDecoration: "none" }}>
            {/* Icon */}
            <div
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "12px",
                background: "#05060A",
                border: "2px solid #FF1744",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 12px rgba(255, 23, 68, 0.65)",
              }}
            >
              <span
                style={{
                  color: "#FF1744",
                  fontSize: "22px",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                }}
              >
                M
              </span>
            </div>

            {/* Wordmark */}
            <div style={{ lineHeight: 1 }}>
              <div
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                M-OS
              </div>
              <div
                style={{
                  fontSize: "0.55rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#C0C0C0",
                  opacity: 0.9,
                  marginTop: "1px",
                }}
              >
                AI + Voice Operating System
              </div>
            </div>
          </Link>

          {/* NAVIGATION */}
          <nav className="nav">
            {navItems.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={
                    "nav-link" + (active ? " nav-link--active" : "")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="shell-main">
        <div className="shell-main-inner">{children}</div>
      </main>

      {/* FOOTER */}
      <footer className="shell-footer">
        <div className="shell-footer-inner">
          <div>© {new Date().getFullYear()} M-OS. All rights reserved.</div>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
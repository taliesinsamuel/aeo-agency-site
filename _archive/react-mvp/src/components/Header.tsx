import "./Header.css";

function Logo() {
  return (
    <a href="/" className="brand" aria-label="Answerly home">
      <span className="brand-mark" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M9 1.5c-1 2.6-1.9 3.5-4.5 4.5C7.1 7 8 7.9 9 10.5 10 7.9 10.9 7 13.5 6 10.9 5 10 4.1 9 1.5Z"
            fill="currentColor"
          />
          <path
            d="M14 9.5c-.5 1.4-1 1.9-2.4 2.5 1.4.6 1.9 1.1 2.4 2.5.5-1.4 1-1.9 2.4-2.5-1.4-.6-1.9-1.1-2.4-2.5Z"
            fill="currentColor"
            opacity="0.75"
          />
        </svg>
      </span>
      <span className="brand-word">Answerly</span>
    </a>
  );
}

const navLinks = [
  { label: "How it works", href: "#how" },
  { label: "Results", href: "#results" },
  { label: "Resources", href: "#resources" },
  { label: "Pricing", href: "#pricing" },
];

export default function Header() {
  return (
    <>
      <div className="top-banner">
        <span>Now booking Q3 — get recommended by AI before your competitors</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.64646 2.64645C4.4512 2.84171 4.4512 3.15829 4.64646 3.35355L7.29291 6L4.64646 8.64645C4.4512 8.84171 4.4512 9.15829 4.64646 9.35355C4.84172 9.54882 5.15831 9.54882 5.35357 9.35355L8.35357 6.35355C8.54883 6.15829 8.54883 5.84171 8.35357 5.64645L5.35357 2.64645C5.15831 2.45118 4.84172 2.45118 4.64646 2.64645Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <nav className="header-nav" aria-label="Primary">
            <ul>
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a className="btn btn-ghost" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-actions">
            <a className="btn btn-outline" href="#signin">
              Sign in
            </a>
            <a className="btn btn-primary" href="#start">
              Get started
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

import { useState, useEffect } from "react";
import "./navbar.css";

const PawIcon = () => (
  <svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
    <ellipse cx="50" cy="73" rx="23" ry="19" />
    <ellipse cx="22" cy="50" rx="11" ry="14" />
    <ellipse cx="78" cy="50" rx="11" ry="14" />
    <ellipse cx="36" cy="35" rx="10" ry="12" />
    <ellipse cx="64" cy="35" rx="10" ry="12" />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="nav" id="top">
      <div className="container nav__inner">
        <a className="nav__brand" href="/" onClick={() => setOpen(false)}>
          <span className="nav__logoMark">
            <PawIcon />
          </span>
          <span className="nav__brandText">
            BarkSuds <span className="nav__city">Lakeland</span>
          </span>
        </a>

        <button
          className={`nav__burger${open ? " nav__burger--open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav-links"
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="nav-links"
          className={`nav__links${open ? " nav__links--open" : ""}`}
          aria-label="Primary navigation"
        >
          <a href="/#about"     onClick={() => setOpen(false)}>About</a>
          <a href="/#services"  onClick={() => setOpen(false)}>Services</a>
          <a href="/#locations" onClick={() => setOpen(false)}>Locations</a>
          <a href="/#faqs"      onClick={() => setOpen(false)}>FAQs</a>
          <a href="tel:863-210-5647" className="nav__bookBtn" onClick={() => setOpen(false)}>
            Call to Book
          </a>
        </nav>
      </div>
    </header>
  );
}

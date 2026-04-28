import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="nav" id="top">
      <div className="container nav__inner">
        <Link className="nav__brand" to="/">
          <span className="nav__logo" aria-hidden="true" />
          <span className="nav__brandText">
            Bark<span className="brandAccent">Suds</span> Lakeland
          </span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          <a href="/#about">About</a>
          <a href="/#services">Membership</a>
          <a href="/#locations">Locations</a>
          <a href="/#contact">Contact</a>
          <a className="nav__book" href="/#book">
            Book appointment
          </a>
        </nav>
      </div>
    </header>
  );
}


import { Link } from "react-router-dom";
import "./footer.css";

const PawIcon = () => (
  <svg width="18" height="18" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
    <ellipse cx="50" cy="73" rx="23" ry="19" />
    <ellipse cx="22" cy="50" rx="11" ry="14" />
    <ellipse cx="78" cy="50" rx="11" ry="14" />
    <ellipse cx="36" cy="35" rx="10" ry="12" />
    <ellipse cx="64" cy="35" rx="10" ry="12" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logoMark">
              <PawIcon />
            </span>
            <div>
              <div className="footer__name">BarkSuds™ Lakeland</div>
              <div className="footer__tagline">Modern dog grooming · Lakeland, FL</div>
            </div>
          </div>

          <div className="footer__cols">
            <div className="footer__col">
              <div className="footer__colHead">Explore</div>
              <a href="/#about">About</a>
              <a href="/#services">Services</a>
              <a href="/#locations">Locations</a>
              <a href="/#faqs">FAQs</a>
              <a href="/#contact">Contact</a>
            </div>
            <div className="footer__col">
              <div className="footer__colHead">Legal</div>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
            </div>
            <div className="footer__col">
              <div className="footer__colHead">Visit Us</div>
              <p className="footer__addr">4760 S. FL Ave<br />Lakeland, FL 33813</p>
              <p>Tue–Sat, 9am–5pm</p>
              <a href="tel:863-210-5647">863-210-5647</a>
            </div>
          </div>
        </div>

        <hr className="footer__hr" />

        <div className="footer__bottom">
          <div className="footer__copy">
            © {new Date().getFullYear()} BarkSuds™. All rights reserved.
          </div>
          <div className="footer__sig">BarkSuds Signature Scents</div>
        </div>
      </div>
    </footer>
  );
}

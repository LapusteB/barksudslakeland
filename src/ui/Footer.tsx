import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo" aria-hidden="true" />
          <div>
            <div className="footer__name">BarkSuds™ Lakeland</div>
            <div className="footer__tag muted">Modern dog grooming • Lakeland, FL</div>
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <div className="footer__h">Explore</div>
            <a href="/#about">About</a>
            <a href="/#services">Membership</a>
            <a href="/#locations">Locations</a>
            <a href="/#contact">Contact</a>
          </div>
          <div className="footer__col">
            <div className="footer__h">Legal</div>
            <Link to="/a2p">A2P Terms (SMS &amp; Voice AI)</Link>
            <a href="#" aria-disabled="true">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="muted">© {new Date().getFullYear()} BarkSuds™</div>
          <div className="footer__right muted">BarkSuds Signature Scents</div>
        </div>
      </div>
    </footer>
  );
}


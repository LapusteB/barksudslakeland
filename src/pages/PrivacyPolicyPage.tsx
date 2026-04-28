import { Link } from "react-router-dom";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import "../styles/terms.css";

const business = "BarkSuds Lakeland";
const phone = "863-210-5647";
const email = "lakeland@barksuds.com";

export default function PrivacyPolicyPage() {
  return (
    <div className="page">
      <Navbar />

      <main className="terms" aria-label="Privacy Policy">
        <div className="container">
          <div className="terms__top">
            <Link className="terms__back" to="/">
              ← Back to home
            </Link>
            <h1>Privacy Policy – BarkSuds Lakeland</h1>
            <p className="muted">
              BarkSuds Lakeland respects your privacy. This Privacy Policy explains how we
              collect, use, and protect your information.
            </p>
          </div>

          <section className="termsSection" aria-label="Information we collect">
            <h2>Information We Collect</h2>
            <p className="muted">We may collect your name, phone number, and email when you:</p>
            <ul>
              <li>Book an appointment</li>
              <li>Fill out a form</li>
              <li>Contact us directly</li>
            </ul>
          </section>

          <section className="termsSection" aria-label="How we use your information">
            <h2>How We Use Your Information</h2>
            <p className="muted">We use your information to:</p>
            <ul>
              <li>Send appointment reminders</li>
              <li>Provide customer support</li>
              <li>Send service updates</li>
              <li>Respond to inquiries</li>
            </ul>
          </section>

          <section className="termsSection" aria-label="SMS and voice communications">
            <h2>SMS &amp; Voice Communications</h2>
            <p className="muted">
              By providing your phone number, you consent to receive SMS messages and/or voice
              calls related to your services.
            </p>
            <p className="muted">You may receive recurring messages based on your interactions.</p>
            <p className="muted">Message frequency varies based on your interactions.</p>
            <p className="muted">Message &amp; data rates may apply.</p>
          </section>

          <section className="termsSection" aria-label="Data sharing">
            <h2>Data Sharing</h2>
            <p className="muted">
              We do NOT sell, rent, or share your personal information with third parties for
              marketing or promotional purposes.
            </p>
            <p className="muted">
              Mobile information, including phone numbers, will not be shared with third parties
              or affiliates for marketing or promotional purposes.
            </p>
            <p className="muted">
              We may share information with service providers only as necessary to deliver
              messaging services. These providers are not permitted to use your information for
              marketing purposes.
            </p>
          </section>

          <section className="termsSection" aria-label="Data security">
            <h2>Data Security</h2>
            <p className="muted">We take reasonable steps to protect your information.</p>
          </section>

          <section className="termsSection" aria-label="Your rights">
            <h2>Your Rights</h2>
            <p className="muted">
              You may opt out of SMS communications at any time by replying STOP. For help,
              reply HELP or contact us at 863-210-5647.
            </p>
          </section>

          <section className="termsSection" aria-label="Contact us">
            <h2>Contact Us</h2>
            <div className="termsContact">
              <div className="termsContact__row">
                <div className="termsContact__k">Business</div>
                <div className="termsContact__v">{business}</div>
              </div>
              <div className="termsContact__row">
                <div className="termsContact__k">Phone</div>
                <div className="termsContact__v">
                  <a href={`tel:${phone}`}>{phone}</a>
                </div>
              </div>
              <div className="termsContact__row">
                <div className="termsContact__k">Email</div>
                <div className="termsContact__v">
                  <a href={`mailto:${email}`}>{email}</a>
                </div>
              </div>
            </div>
          </section>

          <div className="terms__bottom">
            <Link className="btn btn--primary" to="/">
              Back to landing page
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


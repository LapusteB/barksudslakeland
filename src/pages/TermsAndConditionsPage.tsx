import { Link } from "react-router-dom";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import "../styles/terms.css";

const business = "BarkSuds Lakeland";
const phone = "863-210-5647";
const email = "lakeland@barksuds.com";

export default function TermsAndConditionsPage() {
  return (
    <div className="page">
      <Navbar />

      <main className="terms" aria-label="Terms and Conditions">
        <div className="container">
          <div className="terms__top">
            <Link className="terms__back" to="/">
              ← Back to home
            </Link>
            <h1>Terms &amp; Conditions – BarkSuds Lakeland Messaging Program</h1>
          </div>

          <section className="termsSection" aria-label="Program name">
            <h2>Program Name</h2>
            <p className="muted">BarkSuds Lakeland Messaging Program</p>
          </section>

          <section className="termsSection" aria-label="Program description">
            <h2>Program Description</h2>
            <p className="muted">{business} sends SMS messages and voice calls for:</p>
            <ul>
              <li>Appointment reminders</li>
              <li>Booking confirmations</li>
              <li>Customer support</li>
              <li>Service updates</li>
            </ul>
          </section>

          <section className="termsSection" aria-label="Message frequency">
            <h2>Message Frequency</h2>
            <p className="muted">Message frequency varies based on your interactions.</p>
          </section>

          <section className="termsSection" aria-label="Message and data rates">
            <h2>Message &amp; Data Rates</h2>
            <p className="muted">Message and data rates may apply.</p>
          </section>

          <section className="termsSection" aria-label="Opt in">
            <h2>Opt-In</h2>
            <p className="muted">You can opt in by:</p>
            <ul>
              <li>Providing your phone number through our website</li>
              <li>Booking an appointment</li>
              <li>Interacting with our staff</li>
            </ul>
          </section>

          <section className="termsSection" aria-label="Opt out and support">
            <h2>Opt-Out</h2>
            <p className="muted">
              You can opt out at any time by replying <strong>STOP</strong> to any message.
            </p>
            <p className="muted">
              After opting out, you may receive a final confirmation message.
            </p>
            <p className="muted">
              For assistance, reply <strong>HELP</strong> or contact us at:
            </p>
            <p className="muted">
              Phone: <a href={`tel:${phone}`}>{phone}</a>
              <br />
              Email: <a href={`mailto:${email}`}>{email}</a>
            </p>
          </section>

          <section className="termsSection" aria-label="Consent">
            <h2>Consent</h2>
            <p className="muted">
              By opting in, you agree to receive SMS messages and/or voice calls from BarkSuds
              Lakeland Messaging Program.
            </p>
            <p className="muted">Consent is not a condition of purchase.</p>
          </section>

          <section className="termsSection" aria-label="Privacy policy link">
            <h2>Privacy Policy</h2>
            <p className="muted">
              For more information, please visit:
              <br />
              <a href="https://barksudslakeland.com/privacy-policy">
                https://barksudslakeland.com/privacy-policy
              </a>
            </p>
          </section>

          <section className="termsSection" aria-label="Carrier disclaimer">
            <h2>Carrier Disclaimer</h2>
            <p className="muted">Carriers are not liable for delayed or undelivered messages.</p>
          </section>

          <section className="termsSection" aria-label="Contact">
            <h2>Contact</h2>
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


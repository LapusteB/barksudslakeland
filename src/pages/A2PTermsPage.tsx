import { Link } from "react-router-dom";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import "../styles/terms.css";

const brand = "BarkSuds Lakeland";
const programName = "BarkSuds Lakeland SMS & Voice Updates";
const phone = "863-210-5647";
const supportEmail = "lakeland@barksuds.com";

export default function A2PTermsPage() {
  return (
    <div className="page">
      <Navbar />

      <main className="terms">
        <div className="container">
          <div className="terms__top">
            <Link className="terms__back" to="/">
              ← Back to home
            </Link>
            <h1>A2P Messaging Terms</h1>
            <p className="muted">
              Terms and conditions for opt-in/opt-out messaging (SMS) and Voice AI profiles
              for {brand}.
            </p>
          </div>

          <section className="termsCard" aria-label="Program details">
            <h2 className="termsCard__title">{programName}</h2>
            <div className="termsGrid">
              <div className="termsGrid__item">
                <div className="termsGrid__k">Purpose</div>
                <div className="termsGrid__v">
                  Appointment reminders, booking assistance, service updates, and customer
                  support related to your grooming services.
                </div>
              </div>
              <div className="termsGrid__item">
                <div className="termsGrid__k">Who can opt in</div>
                <div className="termsGrid__v">
                  Customers who provide a phone number and consent to receive messages/calls.
                </div>
              </div>
              <div className="termsGrid__item">
                <div className="termsGrid__k">Message frequency</div>
                <div className="termsGrid__v">
                  Varies based on your interactions and appointments.
                </div>
              </div>
              <div className="termsGrid__item">
                <div className="termsGrid__k">Cost</div>
                <div className="termsGrid__v">
                  Message &amp; data rates may apply. Carrier fees may apply for SMS and voice
                  usage.
                </div>
              </div>
              <div className="termsGrid__item">
                <div className="termsGrid__k">Support</div>
                <div className="termsGrid__v">
                  Call <a href={`tel:${phone}`}>{phone}</a> or email{" "}
                  <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
                </div>
              </div>
            </div>
          </section>

          <section className="termsSection" aria-label="Consent and opt in">
            <h2>Consent (Opt-in)</h2>
            <ul>
              <li>
                By providing your phone number and opting in, you agree to receive SMS messages
                and/or automated voice calls (including Voice AI) from {brand} for the purposes
                listed above.
              </li>
              <li>
                Consent is <strong>not</strong> a condition of purchase. You can opt out at any
                time.
              </li>
              <li>
                You may opt in via web forms, booking flows, or by confirming consent when
                interacting with our staff or automated systems.
              </li>
            </ul>
          </section>

          <section className="termsSection" aria-label="Opt out instructions">
            <h2>Opt-out (STOP) and revoking consent</h2>
            <ul>
              <li>
                To stop SMS messages, reply <strong>STOP</strong> to any message.
              </li>
              <li>
                To get help, reply <strong>HELP</strong> or contact us at{" "}
                <a href={`tel:${phone}`}>{phone}</a>.
              </li>
              <li>
                For Voice AI / automated calls, you can request removal by telling the caller
                “stop,” “unsubscribe,” or by contacting{" "}
                <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
              </li>
              <li>
                After opting out, you may receive a final confirmation message. If you
                re-subscribe later, messaging may resume.
              </li>
            </ul>
          </section>

          <section className="termsSection" aria-label="Voice AI disclosures">
            <h2>Voice AI disclosures</h2>
            <ul>
              <li>
                Some calls may be answered or placed by an automated system (Voice AI) to help
                with booking and support.
              </li>
              <li>
                If you prefer a human, ask to speak with a representative and we’ll assist
                during business hours.
              </li>
            </ul>
          </section>

          <section className="termsSection" aria-label="Privacy and data">
            <h2>Privacy, data use, and sharing</h2>
            <ul>
              <li>
                We use your phone number to provide the messaging/calling program and for
                account/service communications.
              </li>
              <li>
                We do <strong>not</strong> sell your personal information. We may share limited
                data with service providers who help us deliver SMS/voice communications.
              </li>
              <li>
                Mobile information (including phone numbers) will not be shared with third
                parties/affiliates for marketing/promotional purposes.
              </li>
            </ul>
          </section>

          <section className="termsSection" aria-label="Carrier disclaimer">
            <h2>Carrier disclaimer</h2>
            <p className="muted">
              Carriers are not liable for delayed or undelivered messages. Availability may
              vary by carrier and device.
            </p>
          </section>

          <section className="termsSection" aria-label="Contact">
            <h2>Contact</h2>
            <div className="termsContact">
              <div className="termsContact__row">
                <div className="termsContact__k">Business</div>
                <div className="termsContact__v">{brand}</div>
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
                  <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
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


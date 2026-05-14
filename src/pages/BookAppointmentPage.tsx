import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import "../styles/book.css";

const phone   = "863-210-5647";
const address = "4760 S. FL Ave, Lakeland FL 33813";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=4760%20S.%20FL%20Ave%2C%20Lakeland%20FL%2033813";

const TIME_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM",  "1:30 PM",  "2:00 PM",  "2:30 PM",
  "3:00 PM",  "3:30 PM",  "4:00 PM",  "4:30 PM",
];

type FormFields = {
  customerName: string;
  phone: string;
  email: string;
  petName: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
  smsConsent: boolean;
};

type Errors = Partial<Record<keyof FormFields, string>>;
type Status = "idle" | "submitting" | "success";

const EMPTY: FormFields = {
  customerName: "",
  phone: "",
  email: "",
  petName: "",
  preferredDate: "",
  preferredTime: "",
  notes: "",
  smsConsent: false,
};

function validate(f: FormFields): Errors {
  const e: Errors = {};
  if (!f.customerName.trim()) e.customerName = "Full name is required.";
  if (!f.phone.trim()) {
    e.phone = "Phone number is required.";
  } else if (!/^\+?[\d\s\-().]{7,}$/.test(f.phone)) {
    e.phone = "Enter a valid phone number.";
  }
  if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
    e.email = "Enter a valid email address.";
  }
  if (!f.preferredDate) e.preferredDate = "Please select a preferred date.";
  if (!f.preferredTime) e.preferredTime = "Please select a preferred time.";
  if (!f.smsConsent) e.smsConsent = "SMS consent is required to book an appointment.";
  return e;
}

export default function BookAppointmentPage() {
  const [form, setForm]     = useState<FormFields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function set<K extends keyof FormFields>(key: K, value: FormFields[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => { const n = { ...prev }; delete n[key]; return n; });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setStatus("submitting");
    try {
      await fetch("/api/book-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form }),
      });
    } catch {
      // fire-and-forget — no real endpoint
    }
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="page">
        <Navbar />
        <main>
          <section className="book">
            <div className="container">
              <div className="book__success">
                <div className="book__successIcon">✓</div>
                <h1>Request Received!</h1>
                <p>
                  Thank you! Your appointment request has been received. BarkSuds
                  Lakeland will contact you to confirm your appointment.
                </p>
                <div className="book__successActions">
                  <Link to="/" className="btn btn--primary">Back to Home</Link>
                  <a href={`tel:${phone}`} className="btn btn--outline">Call Us</a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="page">
      <Navbar />
      <main>
        <noscript>
          <p>Book an appointment with BarkSuds Lakeland</p>
          <p>
            By checking this box, I consent to receive SMS messages from BarkSuds
            Lakeland related to my dog grooming appointments, including
            confirmations, reminders, rescheduling notifications, and customer
            service responses. Message frequency may vary. Message and data rates
            may apply. Reply STOP to opt out or HELP for help. Consent is not a
            condition of purchase.
          </p>
          <p>
            <a href="/privacy-policy">Privacy Policy</a>
            {" · "}
            <a href="/terms-and-conditions">Terms &amp; Conditions</a>
          </p>
        </noscript>
        <section className="book">
          <div className="container">

            <div className="book__top">
              <Link to="/" className="book__back">← Back to Home</Link>
              <h1>Book an Appointment</h1>
              <p className="book__intro">
                Fill out the form below and our team will reach out to confirm
                your pup's grooming appointment.
              </p>
            </div>

            <div className="book__layout">

              {/* ── Form card ── */}
              <form className="book__form" onSubmit={handleSubmit} noValidate>

                {/* Row 1: Name + Pet Name */}
                <div className="book__row">
                  <div className={`book__field${errors.customerName ? " book__field--error" : ""}`}>
                    <label className="book__label" htmlFor="customerName">
                      Your Name <span className="book__req" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="customerName"
                      className="book__input"
                      type="text"
                      placeholder="Jane Smith"
                      autoComplete="name"
                      value={form.customerName}
                      onChange={(e) => set("customerName", e.target.value)}
                      aria-required="true"
                      aria-describedby={errors.customerName ? "err-customerName" : undefined}
                    />
                    {errors.customerName && (
                      <span id="err-customerName" className="book__error" role="alert">{errors.customerName}</span>
                    )}
                  </div>

                  <div className={`book__field${errors.petName ? " book__field--error" : ""}`}>
                    <label className="book__label" htmlFor="petName">
                      Pet Name
                    </label>
                    <input
                      id="petName"
                      className="book__input"
                      type="text"
                      placeholder="Biscuit"
                      value={form.petName}
                      onChange={(e) => set("petName", e.target.value)}
                    />
                  </div>
                </div>

                {/* Phone field + SMS consent (vertically grouped) */}
                <div className={`book__field${errors.phone ? " book__field--error" : ""}`}>
                  <label className="book__label" htmlFor="phone">
                    Phone Number <span className="book__req" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="phone"
                    className="book__input"
                    type="tel"
                    placeholder="(863) 555-0100"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    aria-required="true"
                    aria-describedby={errors.phone ? "err-phone" : undefined}
                  />
                  {errors.phone && (
                    <span id="err-phone" className="book__error" role="alert">{errors.phone}</span>
                  )}
                </div>

                {/* SMS Consent — visually tied to phone field */}
                <div className={`book__consentWrap${errors.smsConsent ? " book__consentWrap--error" : ""}`}>
                  <label className="book__consentLabel" htmlFor="smsConsent">
                    <input
                      id="smsConsent"
                      className="book__checkbox"
                      type="checkbox"
                      checked={form.smsConsent}
                      onChange={(e) => set("smsConsent", e.target.checked)}
                      aria-required="true"
                      aria-describedby={errors.smsConsent ? "err-smsConsent" : undefined}
                    />
                    <span className="book__consentText">
                      By checking this box, I consent to receive SMS messages from
                      BarkSuds Lakeland related to my dog grooming appointments,
                      including confirmations, reminders, rescheduling notifications,
                      and customer service responses. Message frequency may vary.
                      Message and data rates may apply. Reply STOP to opt out or
                      HELP for help. Consent is not a condition of purchase.
                    </span>
                  </label>
                  {errors.smsConsent && (
                    <span id="err-smsConsent" className="book__error" role="alert">{errors.smsConsent}</span>
                  )}
                </div>

                {/* Email */}
                <div className={`book__field${errors.email ? " book__field--error" : ""}`}>
                  <label className="book__label" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    className="book__input"
                    type="email"
                    placeholder="jane@example.com"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    aria-describedby={errors.email ? "err-email" : undefined}
                  />
                  {errors.email && (
                    <span id="err-email" className="book__error" role="alert">{errors.email}</span>
                  )}
                </div>

                {/* Row 2: Date + Time */}
                <div className="book__row">
                  <div className={`book__field${errors.preferredDate ? " book__field--error" : ""}`}>
                    <label className="book__label" htmlFor="preferredDate">
                      Preferred Date <span className="book__req" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="preferredDate"
                      className="book__input"
                      type="date"
                      min={today}
                      value={form.preferredDate}
                      onChange={(e) => set("preferredDate", e.target.value)}
                      aria-required="true"
                      aria-describedby={errors.preferredDate ? "err-preferredDate" : undefined}
                    />
                    {errors.preferredDate && (
                      <span id="err-preferredDate" className="book__error" role="alert">{errors.preferredDate}</span>
                    )}
                  </div>

                  <div className={`book__field${errors.preferredTime ? " book__field--error" : ""}`}>
                    <label className="book__label" htmlFor="preferredTime">
                      Preferred Time <span className="book__req" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="preferredTime"
                      className="book__input book__select"
                      value={form.preferredTime}
                      onChange={(e) => set("preferredTime", e.target.value)}
                      aria-required="true"
                      aria-describedby={errors.preferredTime ? "err-preferredTime" : undefined}
                    >
                      <option value="">Select a time…</option>
                      {TIME_SLOTS.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.preferredTime && (
                      <span id="err-preferredTime" className="book__error" role="alert">{errors.preferredTime}</span>
                    )}
                  </div>
                </div>

                {/* Notes */}
                <div className="book__field">
                  <label className="book__label" htmlFor="notes">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    className="book__input book__textarea"
                    placeholder="Breed, coat type, special needs, or anything else we should know…"
                    value={form.notes}
                    onChange={(e) => set("notes", e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn--primary book__submit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending…" : "Request Appointment"}
                </button>

                <p className="book__footnote">
                  By submitting this form you agree to our{" "}
                  <Link to="/privacy-policy">Privacy Policy</Link> and{" "}
                  <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>.
                  We'll reach out within one business day to confirm.
                </p>
              </form>

              {/* ── Sidebar ── */}
              <aside className="book__aside" aria-label="Location info">
                <div className="book__asideCard">
                  <h2>Visit Us</h2>
                  <div className="book__asideInfo">
                    <div className="book__asideRow">
                      <span>📍</span>
                      <span>
                        <a href={mapsUrl} target="_blank" rel="noreferrer">{address}</a>
                      </span>
                    </div>
                    <div className="book__asideRow">
                      <span>🕐</span>
                      <span>Tuesday–Saturday · 9am–5pm</span>
                    </div>
                    <div className="book__asideRow">
                      <span>📞</span>
                      <span>
                        <a href={`tel:${phone}`}>{phone}</a>
                      </span>
                    </div>
                  </div>
                </div>


                <div className="book__asideCard book__asideNote">
                  <strong>What to expect</strong>
                  <p>
                    After submitting, our team will contact you within one business
                    day to confirm your appointment time and discuss your pup's
                    specific grooming needs.
                  </p>
                </div>
              </aside>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

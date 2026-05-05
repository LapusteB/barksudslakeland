import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import SoapBubbles from "../ui/SoapBubbles";
import "../styles/home.css";

const phone   = "863-210-5647";
const address = "4760 S. FL Ave, Lakeland FL 33813";
const email   = "lakeland@barksuds.com";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=4760%20S.%20FL%20Ave%2C%20Lakeland%20FL%2033813";

const dogImage =
  "https://petlandpembrokepines.com/wp-content/uploads/2019/09/Petland_Florida_Cavalier_King_Charles_Spaniel_puppy.jpg";

const faqs = [
  {
    q: "What services do you offer at BarkSuds™?",
    a: "We offer bathing, grooming, nail trimming, ear cleaning, teeth brushing, and more. Our groomers help tailor services to your pup's needs—just ask when you book.",
  },
  {
    q: "Do I need an appointment for grooming services?",
    a: "Yes—appointments are required. Please book a separate appointment for each pup. Need a last-minute spot? Give us a call and we'll do our best.",
  },
  {
    q: "How long does a grooming appointment typically take?",
    a: `Timing varies by coat type, size, behavior, and services selected. Call us at ${phone} and we'll give you an accurate estimate based on your pup's needs.`,
  },
  {
    q: "Are your groomers trained and certified?",
    a: "Our team is professionally trained with a focus on gentle, stress-free handling and consistent quality results. We treat every pup like family.",
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="page">
      <Navbar />

      <main>
        {/* ── HERO ── */}
        <section className="hero" aria-label="Hero" id="book">
          <SoapBubbles />
          <div className="container hero__inner">

            <div className="hero__copy">
              <span className="eyebrow">Professional Dog Grooming · Lakeland, FL</span>
              <h1 className="hero__title">
                The modern dog is always <em>by your side.</em>
              </h1>
              <p className="hero__subtitle">
                A relaxing, safe, and clean grooming experience for every breed and
                temperament—gentle care, polished results, and happy tails guaranteed.
              </p>
              <div className="hero__actions">
                <a className="btn btn--primary" href="#contact">
                  Book an Appointment
                </a>
                <a className="btn btn--outline" href={`tel:${phone}`}>
                  Call {phone}
                </a>
              </div>
              <div className="hero__trust">
                <div className="hero__trustItem">
                  <span className="hero__trustIcon">✓</span>
                  Gentle &amp; stress-free
                </div>
                <div className="hero__trustItem">
                  <span className="hero__trustIcon">✓</span>
                  Clean &amp; sanitized
                </div>
                <div className="hero__trustItem">
                  <span className="hero__trustIcon">✓</span>
                  5-star reviewed
                </div>
              </div>
            </div>

            <div className="hero__media">
              <div className="hero__imgCard">
                <img
                  src={dogImage}
                  alt="Happy dog at BarkSuds grooming salon in Lakeland, FL"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="hero__infoCard">
                <div className="hero__infoRow">
                  <span className="hero__infoKey">Location</span>
                  <span className="hero__infoVal">{address}</span>
                </div>
                <div className="hero__infoRow">
                  <span className="hero__infoKey">Hours</span>
                  <span className="hero__infoVal">Tue–Sat &nbsp;·&nbsp; 9am–5pm</span>
                </div>
                <div className="hero__infoRow">
                  <span className="hero__infoKey">Phone</span>
                  <span className="hero__infoVal">
                    <a href={`tel:${phone}`}>{phone}</a>
                  </span>
                </div>
                <div className="hero__infoNote">
                  Text &amp; Voice AI programs available (opt-in).{" "}
                  <Link to="/terms-and-conditions">View Terms &amp; Conditions</Link>.
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className="section section--alt" id="about" aria-label="About">
          <div className="container">
            <div className="about__inner">

              <div className="about__text">
                <span className="eyebrow">Our Story</span>
                <h2>Welcome to BarkSuds Lakeland</h2>
                <p>
                  We're thrilled to be your trusted partner for all things pet grooming.
                  Our Lakeland salon is designed to feel calm and welcoming, with a team
                  that genuinely treats your pup like family.
                </p>
                <p>
                  From fresh baths to full grooms, we tailor every appointment to your
                  pet's unique coat, skin, and comfort level—so they leave looking and
                  feeling their absolute best.
                </p>
                <a className="btn btn--outline" href="#services">See our services →</a>
              </div>

              <div className="features">
                {[
                  { icon: "🐾", title: "Gentle Handling",   body: "Stress-aware, patient care for every temperament and breed." },
                  { icon: "🧼", title: "Clean & Safe",      body: "Sanitized stations and comfortable, low-stress drying rooms." },
                  { icon: "✨", title: "Polished Results",  body: "Coat, nails, ears, and every finishing touch done right." },
                  { icon: "📅", title: "Busy-Friendly",    body: "Easy booking online or call us for last-minute availability." },
                ].map((f) => (
                  <div className="feature" key={f.title}>
                    <div className="feature__icon" aria-hidden="true">{f.icon}</div>
                    <div className="feature__title">{f.title}</div>
                    <p className="feature__body">{f.body}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="section" id="services" aria-label="Services">
          <div className="container">
            <div className="section__header">
              <span className="eyebrow">What We Offer</span>
              <h2 className="section__title">Grooming services for every pup</h2>
              <p className="section__subtitle">
                Our groomers will help you choose the right services for your dog's
                coat type, size, and individual needs.
              </p>
            </div>

            <div className="services__grid">
              <div className="service">
                <div className="service__icon service__icon--pink" aria-hidden="true">🛁</div>
                <div className="service__header">
                  <h3 className="service__title">Bath &amp; Brush</h3>
                  <span className="pill">Popular</span>
                </div>
                <p className="service__body">
                  A thorough shampoo, conditioning rinse, blow-dry, and full brush-out
                  for a clean, soft, fresh-smelling finish.
                </p>
                <ul className="service__includes">
                  <li>Shampoo &amp; conditioner</li>
                  <li>Blow dry &amp; brush-out</li>
                  <li>Spritz &amp; finishing touch</li>
                </ul>
              </div>

              <div className="service">
                <div className="service__icon service__icon--green" aria-hidden="true">✂️</div>
                <div className="service__header">
                  <h3 className="service__title">Full Groom</h3>
                  <span className="pill pill--green">Signature</span>
                </div>
                <p className="service__body">
                  Everything in the Bath &amp; Brush, plus a breed-appropriate haircut,
                  shaping, and detailed finishing touches.
                </p>
                <ul className="service__includes">
                  <li>Full bath &amp; dry</li>
                  <li>Haircut &amp; breed shaping</li>
                  <li>Finishing &amp; styling</li>
                </ul>
              </div>

              <div className="service">
                <div className="service__icon service__icon--muted" aria-hidden="true">💅</div>
                <div className="service__header">
                  <h3 className="service__title">Add-On Services</h3>
                  <span className="pill pill--muted">À la carte</span>
                </div>
                <p className="service__body">
                  Enhance any appointment with targeted add-ons for a complete,
                  head-to-tail pampering session.
                </p>
                <ul className="service__includes">
                  <li>Nail trim &amp; filing</li>
                  <li>Ear cleaning</li>
                  <li>Teeth brushing</li>
                </ul>
              </div>
            </div>

            <div className="services__cta">
              <a className="btn btn--primary" href="#contact">
                Book an Appointment
              </a>
              <a className="btn btn--outline" href={`tel:${phone}`}>
                Ask about availability
              </a>
            </div>
          </div>
        </section>

        {/* ── LOCATION ── */}
        <section className="section section--alt" id="locations" aria-label="Location">
          <div className="container">
            <div className="location__inner">

              <div className="location__text">
                <span className="eyebrow">Find Us</span>
                <h2>Visit us in Lakeland</h2>
                <p className="lead">
                  Conveniently located on South Florida Avenue in Lakeland.
                </p>

                <div className="contactList">
                  <div className="contactList__item">
                    <span className="contactList__icon" aria-hidden="true">📍</span>
                    <div className="contactList__info">
                      <div className="contactList__label">Address</div>
                      <div className="contactList__value">{address}</div>
                    </div>
                  </div>
                  <div className="contactList__item">
                    <span className="contactList__icon" aria-hidden="true">🕐</span>
                    <div className="contactList__info">
                      <div className="contactList__label">Hours</div>
                      <div className="contactList__value">Tuesday–Saturday, 9am–5pm</div>
                    </div>
                  </div>
                  <div className="contactList__item">
                    <span className="contactList__icon" aria-hidden="true">📞</span>
                    <div className="contactList__info">
                      <div className="contactList__label">Phone</div>
                      <div className="contactList__value">
                        <a href={`tel:${phone}`}>{phone}</a>
                      </div>
                    </div>
                  </div>
                  <div className="contactList__item">
                    <span className="contactList__icon" aria-hidden="true">✉️</span>
                    <div className="contactList__info">
                      <div className="contactList__label">Email</div>
                      <div className="contactList__value">
                        <a href={`mailto:${email}`}>{email}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mapCard" aria-label="Store location map">
                <div className="mapCard__header">
                  <span className="mapCard__title">📍 {address}</span>
                  <a
                    className="btn btn--soft"
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: "13px", padding: "8px 14px" }}
                  >
                    Open in Maps
                  </a>
                </div>
                <iframe
                  className="mapCard__frame"
                  title="BarkSuds Lakeland map"
                  src="https://maps.google.com/maps?q=4760+S+Florida+Ave+Lakeland+FL+33813&output=embed"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <section className="section" id="reviews" aria-label="Customer reviews">
          <div className="container">
            <div className="section__header section__header--center">
              <span className="eyebrow">Happy Clients</span>
              <h2 className="section__title">What our customers say</h2>
              <p className="section__subtitle">
                Real words from happy humans — and their very clean pups.
              </p>
            </div>

            <div className="reviews__grid">
              <div className="review">
                <div className="review__stars" aria-label="5 out of 5 stars">★★★★★</div>
                <p className="review__text">
                  "We have been bringing our dog to BarkSuds for a few months now and
                  could not be happier with the professional staff and pampering that
                  our pup receives! Our dog gets so excited for her bath the second we
                  pull into the parking lot…"
                </p>
                <div className="review__author">— Lindsey</div>
                <div className="review__platform">⭐ Google Review · 5 stars</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQS ── */}
        <section className="section section--alt" id="faqs" aria-label="Frequently asked questions">
          <div className="container">
            <div className="section__header section__header--center">
              <span className="eyebrow">Got Questions?</span>
              <h2 className="section__title">Frequently asked questions</h2>
              <p className="section__subtitle">
                Quick answers before you book your pup's appointment.
              </p>
            </div>

            <div className="faqs__list">
              {faqs.map((faq, i) => (
                <div className="faq" key={i}>
                  <button
                    className="faq__trigger"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-body-${i}`}
                  >
                    {faq.q}
                    <span className="faq__chevron" aria-hidden="true">▾</span>
                  </button>
                  {openFaq === i && (
                    <div className="faq__body" id={`faq-body-${i}`} role="region">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT CTA ── */}
        <section className="ctaSection" id="contact" aria-label="Book an appointment">
          <SoapBubbles />
          <div className="container ctaSection__inner">
            <div>
              <h2 className="ctaSection__title">Ready to book an appointment?</h2>
              <p className="ctaSection__subtitle">
                Call us, email us, or stop by—our team is always happy to help
                find the right service for your pup.
              </p>
            </div>
            <div className="ctaSection__actions">
              <a className="btn btn--white" href={`tel:${phone}`}>
                Call {phone}
              </a>
              <a className="btn btn--outline" href={`mailto:${email}`} style={{ color: "#fff", borderColor: "rgba(255,255,255,0.45)" }}>
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* ── LEGAL LINE ── */}
        <div className="section--sm">
          <div className="container">
            <div className="legalLine">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span className="dot">·</span>
              <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
              <span className="dot">·</span>
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

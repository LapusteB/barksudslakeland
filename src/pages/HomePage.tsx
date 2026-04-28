import { Link } from "react-router-dom";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import "../styles/home.css";

const phone = "863-210-5647";
const address = "4760 S. FL Ave, Lakeland FL 33813";
const email = "lakeland@barksuds.com";
const dogImage1 =
  "https://petlandpembrokepines.com/wp-content/uploads/2019/09/Petland_Florida_Cavalier_King_Charles_Spaniel_puppy.jpg";
const dogImage2 =
  "https://a-z-animals.com/media/2021/12/Prettiest-_-Cutest-Dogs-header.jpg";

export default function HomePage() {
  return (
    <div className="page">
      <Navbar />

      <main>
        <section className="hero" aria-label="Hero">
          <div className="hero__bg" aria-hidden="true" />
          <div className="container hero__content">
            <div className="hero__copy">
              <div className="badge">BarkSuds™ in Lakeland, FL</div>
              <h1 className="hero__title">
                The modern dog is always by your side.
                <span className="hero__titleAccent"> Let’s keep them fresh.</span>
              </h1>
              <p className="hero__subtitle">
                A relaxing, safe, and clean grooming experience—gentle care,
                polished results, and happy tails.
              </p>

              <div className="hero__cta">
                <a className="btn btn--primary" href="#book">
                  Book appointment
                </a>
                <a className="btn btn--ghost" href={`tel:${phone}`}>
                  Call {phone}
                </a>
              </div>

              <p className="hero__fineprint">
                A separate online appointment is required for each pup—please
                don’t double up.
                <br />
                Need last-minute availability? Call <a href={`tel:${phone}`}>{phone}</a>.
              </p>
            </div>

            <div className="hero__card" role="region" aria-label="Quick info">
              <div className="heroMedia" aria-label="Dog photos">
                <div className="heroMedia__imgWrap heroMedia__imgWrap--tall">
                  <img
                    className="heroMedia__img"
                    src={dogImage1}
                    alt="Cavalier King Charles Spaniel puppy looking up"
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>
                <div className="heroMedia__imgWrap heroMedia__imgWrap--wide">
                  <img
                    className="heroMedia__img"
                    src={dogImage2}
                    alt="Cute small white dog running toward the camera"
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>
              </div>

              <div className="heroCard heroCard--belowMedia">
                <div className="heroCard__row">
                  <div className="heroCard__k">Location</div>
                  <div className="heroCard__v">{address}</div>
                </div>
                <div className="heroCard__row">
                  <div className="heroCard__k">Hours</div>
                  <div className="heroCard__v">9am–5pm • Tues–Sat</div>
                </div>
                <div className="heroCard__row">
                  <div className="heroCard__k">Contact</div>
                  <div className="heroCard__v">
                    <a href={`tel:${phone}`}>{phone}</a>
                    <span className="dot">•</span>
                    <a href={`mailto:${email}`}>{email}</a>
                  </div>
                </div>
                <div className="heroCard__actions" id="book">
                  <a className="btn btn--primary btn--block" href="#contact">
                    Start booking
                  </a>
                  <a className="btn btn--soft btn--block" href="#services">
                    View services
                  </a>
                </div>
                <div className="heroCard__note">
                  Text &amp; Voice AI programs available (opt-in). View{" "}
                  <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="section__grid">
              <div>
                <h2>Welcome to BarkSuds Lakeland</h2>
                <p className="muted">
                  We’re thrilled to be your trusted partner for all your pet grooming.
                  Our Lakeland salon is designed to feel calm and welcoming, with a
                  team that treats your pup like family.
                </p>
                <p className="muted">
                  From fresh baths to full grooms, we tailor each appointment to your
                  pet’s unique coat, skin, and comfort level—so they leave looking and
                  feeling their best.
                </p>
              </div>

              <div className="infoTiles">
                <div className="tile">
                  <div className="tile__title">Gentle handling</div>
                  <div className="tile__body">Stress-aware care for every temperament.</div>
                </div>
                <div className="tile">
                  <div className="tile__title">Clean &amp; safe</div>
                  <div className="tile__body">Sanitized stations and comfortable drying.</div>
                </div>
                <div className="tile">
                  <div className="tile__title">Polished results</div>
                  <div className="tile__body">Coat, nails, ears, and finishing touches.</div>
                </div>
                <div className="tile">
                  <div className="tile__title">Busy-friendly</div>
                  <div className="tile__body">Book online or call for last-minute spots.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt" id="services">
          <div className="container">
            <div className="section__head">
              <h2>Services</h2>
              <p className="muted">
                Our groomers will help you choose the best services for your pup.
              </p>
            </div>
            <div className="cards">
              <div className="card">
                <div className="card__top">
                  <div className="card__title">Bath &amp; Brush</div>
                  <div className="pill">Popular</div>
                </div>
                <div className="card__body">
                  Shampoo, blow-dry, brush-out, and a clean, soft finish.
                </div>
              </div>
              <div className="card">
                <div className="card__top">
                  <div className="card__title">Full Groom</div>
                  <div className="pill pill--pink">Signature</div>
                </div>
                <div className="card__body">
                  Includes bath plus haircut, shaping, and finishing details.
                </div>
              </div>
              <div className="card">
                <div className="card__top">
                  <div className="card__title">Nails, Ears, Teeth</div>
                  <div className="pill pill--blue">Add-ons</div>
                </div>
                <div className="card__body">
                  Nail trim, ear cleaning, teeth brushing, and more.
                </div>
              </div>
            </div>
            <div className="ctaRow">
              <a className="btn btn--primary" href="#contact">
                Book now
              </a>
              <a className="btn btn--ghost" href={`tel:${phone}`}>
                Ask about availability
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="locations">
          <div className="container">
            <div className="section__grid">
              <div>
                <h2>Visit us in Lakeland</h2>
                <p className="muted">
                  Conveniently located at <strong>{address}</strong>.
                </p>
                <div className="contactList">
                  <div className="contactList__item">
                    <span className="contactList__k">Phone</span>
                    <span className="contactList__v">
                      <a href={`tel:${phone}`}>{phone}</a>
                    </span>
                  </div>
                  <div className="contactList__item">
                    <span className="contactList__k">Email</span>
                    <span className="contactList__v">
                      <a href={`mailto:${email}`}>{email}</a>
                    </span>
                  </div>
                  <div className="contactList__item">
                    <span className="contactList__k">Hours</span>
                    <span className="contactList__v">9am–5pm • Tues–Sat</span>
                  </div>
                </div>
              </div>

              <div className="mapCard" aria-label="Map placeholder">
                <div className="mapCard__top">
                  <div className="mapCard__title">{address}</div>
                  <a
                    className="btn btn--soft"
                    href="https://www.google.com/maps/search/?api=1&query=4760%20S.%20FL%20Ave%2C%20Lakeland%20FL%2033813"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in Maps
                  </a>
                </div>
                <div className="mapCard__body">
                  <div className="mapCard__pin" aria-hidden="true" />
                  <div className="muted">
                    Map embed can be added here (Google Maps iframe) when ready.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt" id="faqs">
          <div className="container">
            <div className="section__head">
              <h2>FAQs</h2>
              <p className="muted">Quick answers before you book.</p>
            </div>

            <div className="faq">
              <details className="faq__item">
                <summary>What services do you offer at BarkSuds™?</summary>
                <div className="faq__a">
                  We offer bathing, grooming, nail trimming, ear cleaning, teeth brushing,
                  and more. Our groomers help tailor services to your pup’s needs.
                </div>
              </details>
              <details className="faq__item">
                <summary>Do I need an appointment for grooming services?</summary>
                <div className="faq__a">
                  Yes—appointments are recommended. Please book a separate appointment for
                  each pup.
                </div>
              </details>
              <details className="faq__item">
                <summary>How long does a grooming appointment typically take?</summary>
                <div className="faq__a">
                  Timing varies by coat, behavior, and services selected. Call us at{" "}
                  <a href={`tel:${phone}`}>{phone}</a> and we’ll estimate based on your pup.
                </div>
              </details>
              <details className="faq__item">
                <summary>Are your groomers trained and certified?</summary>
                <div className="faq__a">
                  Our team is professionally trained and focused on gentle handling and
                  consistent quality.
                </div>
              </details>
            </div>
          </div>
        </section>

        <section className="section" id="reviews">
          <div className="container">
            <div className="section__head">
              <h2>5-star Google reviews</h2>
              <p className="muted">Real words from happy humans.</p>
            </div>
            <div className="quote">
              <div className="quote__mark" aria-hidden="true">
                “”
              </div>
              <div className="quote__text">
                We have been bringing our dog to BarkSuds for a few months now and could
                not be happier with the professional staff and pampering that our pup receives!
                Our dog gets so excited for her bath the second we pull into the parking lot…
              </div>
              <div className="quote__by">— Lindsey</div>
            </div>
          </div>
        </section>

        <section className="section section--alt" id="contact">
          <div className="container">
            <div className="contactCta">
              <div>
                <h2>Still have questions?</h2>
                <p className="muted">
                  Call us, email us, or stop by—our team is happy to help.
                </p>
              </div>
              <div className="contactCta__actions">
                <a className="btn btn--primary" href={`tel:${phone}`}>
                  Call {phone}
                </a>
                <a className="btn btn--soft" href={`mailto:${email}`}>
                  Email {email}
                </a>
              </div>
            </div>

            <div className="legalLine">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span className="dot">•</span>
              <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
              <span className="dot">•</span>
              <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Back to top
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


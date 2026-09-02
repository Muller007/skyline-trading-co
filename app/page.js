const WHATSAPP_NUMBER = '27783934335' 
const FACEBOOK_URL = 'https://facebook.com/skylinetradingco' // TODO: replace with real page

const waLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

function RouteMap() {
  return (
    <svg
      className="hero-route"
      viewBox="0 0 900 500"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 90 380 C 260 260, 420 340, 560 200 S 760 120, 820 90"
        fill="none"
        stroke="#c98a2e"
        strokeWidth="2"
        strokeDasharray="1 10"
        strokeLinecap="round"
      />
      <circle cx="90" cy="380" r="5" fill="#c98a2e" />
      <circle cx="820" cy="90" r="5" fill="#c98a2e" />
      <text x="60" y="410" fill="#fdfbf6" fillOpacity="0.55" fontSize="13" fontFamily="Inter, sans-serif">
        Johannesburg
      </text>
      <text x="740" y="78" fill="#fdfbf6" fillOpacity="0.55" fontSize="13" fontFamily="Inter, sans-serif">
        Harare
      </text>
    </svg>
  )
}

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="wrap">
          <div className="nav-mark">
            Skyline<span>.</span>Trading Co.
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#how-it-works">How it works</a>
            <a href="#gallery">Our work</a>
            <a href="#testimonials">Testimonials</a>
          </div>
          <a className="nav-cta" href={waLink('Hi Skyline Trading Co, I would like a quote.')}>
            Chat on WhatsApp
          </a>
        </div>
      </nav>

      <header className="hero">
        <RouteMap />
        <div className="wrap hero-inner">
          <div className="hero-eyebrow">South Africa &nbsp;→&nbsp; Zimbabwe</div>
          <h1>We print it, we brand it, we get it there.</h1>
          <p>
            Skyline Trading Co handles custom clothing printing, banner making, and the
            sourcing and cross-border shipping of goods between South Africa and Zimbabwe —
            coordinated through a WhatsApp community you can actually reach a person on.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href={waLink('Hi Skyline Trading Co, I would like a quote.')}>
              Get a quote on WhatsApp
            </a>
            <a className="btn-secondary" href="#services">
              See what we do
            </a>
          </div>
        </div>
      </header>
      <div className="manifest-divider" />

      <section className="section" id="services">
        <div className="wrap">
          <div className="section-head">
            <div className="section-kicker">What we do</div>
            <h2>Three services, one point of contact</h2>
            <p>
              Whether you need a print run, a banner for an event, or something sourced and
              shipped from South Africa, one enquiry on WhatsApp covers all of it.
            </p>
          </div>
          <div className="services">
            <div className="service-card">
              <div className="service-num">01 — Print</div>
              <h3>Clothing printing</h3>
              <p>
                Custom t-shirts, workwear, and event merch, printed to order. Send us your
                design or logo and we&apos;ll quote a run size and turnaround.
              </p>
              <div className="service-meta">Quoted per run</div>
            </div>
            <div className="service-card">
              <div className="service-num">02 — Print</div>
              <h3>Banner making</h3>
              <p>
                Business signage and event banners, made to your size and finished ready to
                hang. Good for shop fronts, launches, and functions.
              </p>
              <div className="service-meta">Quoted per size</div>
            </div>
            <div className="service-card">
              <div className="service-num">03 — Shipping</div>
              <h3>Goods sourcing &amp; shipping</h3>
              <p>
                Tell us what you need from South Africa — we source it, package it, and ship
                it across to Zimbabwe for a straightforward fee.
              </p>
              <div className="service-meta">Fee based on size &amp; value</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section process" id="how-it-works">
        <div className="wrap">
          <div className="section-head">
            <div className="section-kicker">How it works</div>
            <h2>From enquiry to collection</h2>
            <p>The same process whether you &apos;re ordering print work or a shipment.</p>
          </div>
          <div className="process-list">
            <div className="process-step">
              <span className="n">01</span>
              <p>Enquire on WhatsApp with what you need</p>
            </div>
            <div className="process-step">
              <span className="n">02</span>
              <p>We send a clear quote and timeline</p>
            </div>
            <div className="process-step">
              <span className="n">03</span>
              <p>You confirm and pay to secure the order</p>
            </div>
            <div className="process-step">
              <span className="n">04</span>
              <p>We produce or source what you asked for</p>
            </div>
            <div className="process-step">
              <span className="n">05</span>
              <p>Goods are packed and shipped across the border</p>
            </div>
            <div className="process-step">
              <span className="n">06</span>
              <p>You collect or receive delivery, done</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="wrap">
          <div className="section-head">
            <div className="section-kicker">Our work</div>
            <h2>Recent print runs and shipments</h2>
            <p>Replace these placeholders with real photos of finished jobs — this is what does the most convincing.</p>
          </div>
          <div className="gallery">
            <div className="gallery-item"><span>Printed workwear run</span></div>
            <div className="gallery-item"><span>Event banner, 3m</span></div>
            <div className="gallery-item"><span>Shipment ready for dispatch</span></div>
            <div className="gallery-item"><span>Custom t-shirt order</span></div>
          </div>
        </div>
      </section>

      <section className="section" id="testimonials">
        <div className="wrap">
          <div className="section-head">
            <div className="section-kicker">What clients say</div>
            <h2>Real orders, real feedback</h2>
            <p>Swap these for actual client quotes as they come in — first name and city is enough.</p>
          </div>
          <div className="testimonials">
            <div className="stub">
              <p>&ldquo;Ordered banners for a shop opening and they arrived printed and ready two days before we needed them.&rdquo;</p>
              <div className="stub-meta">
                <b>Tendai M.</b>
                <span>Bulawayo</span>
              </div>
            </div>
            <div className="stub">
              <p>&ldquo;Easiest way I&apos;ve found to get stock from South Africa without dealing with a courier myself.&rdquo;</p>
              <div className="stub-meta">
                <b>Rudo K.</b>
                <span>Harare</span>
              </div>
            </div>
            <div className="stub">
              <p>&ldquo;Printed our staff t-shirts for a good price and kept us updated on WhatsApp the whole way.&rdquo;</p>
              <div className="stub-meta">
                <b>Farai N.</b>
                <span>Mutare</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="wrap">
          <h2>Ready to send us an enquiry?</h2>
          <a className="btn-dark" href={waLink('Hi Skyline Trading Co, I would like a quote.')}>
            Message us on WhatsApp
          </a>
        </div>
      </div>

      <footer className="footer">
        <div className="wrap">
          <div className="footer-top">
            <div className="footer-mark">Skyline Trading Co.</div>
            <div className="footer-links">
              <a href={waLink('Hi Skyline Trading Co, I would like a quote.')}>WhatsApp</a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="#services">Services</a>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} Skyline Trading Co. — Clothing printing, banner
            making, and cross-border shipping between South Africa and Zimbabwe.
          </div>
        </div>
      </footer>
    </>
  )
}

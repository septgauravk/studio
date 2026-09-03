/*
 * DDF Studio Pulse direction: contemporary editorial fitness branding, ink/paper contrast,
 * signal-lime actions, offset compositions, real studio imagery, and plain-language conversion.
 */
import { FormEvent, useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  MoveRight,
  Phone,
  Sparkles,
  X,
} from "lucide-react";

const WHATSAPP_NUMBER = "917489368399";
const MAP_URL = "https://maps.app.goo.gl/PtXxCqDjsg7KvcjZ8";
const INSTAGRAM_URL = "https://www.instagram.com/ddf_studio2.0?igsi=ZGRzb2s3Mm5vamM4";
const PUBLIC_PHONE = "7489368399";

const services = [
  { number: "01", title: "Dance Fitness", copy: "High-energy routines that make movement feel like the best part of your day.", tag: "Most loved" },
  { number: "02", title: "Zumba & Aerobics", copy: "Easy-to-follow classes, upbeat music, and a room that keeps you moving.", tag: "Cardio" },
  { number: "03", title: "HIIT Exercise", copy: "Short, focused intervals to build stamina, strength, and confidence.", tag: "Conditioning" },
  { number: "04", title: "Weight Training", copy: "Learn the fundamentals with patient coaching and a plan that grows with you.", tag: "Strength" },
  { number: "05", title: "CrossFit Classes", copy: "Functional workouts with scalable options for every starting point.", tag: "Power" },
  { number: "06", title: "Personal Training", copy: "One-to-one guidance shaped around your goals, pace, and everyday life.", tag: "1:1" },
  { number: "07", title: "Private Lessons", copy: "A more focused space to learn movement, dance, and technique your way.", tag: "Focused" },
  { number: "08", title: "Adult Sports", copy: "Build a consistent routine in a welcoming studio community.", tag: "Community" },
];

const gallery = [
  { fileName: "image1.jpg", src: "/images/image1.jpg", alt: "DDF Studio class in motion", size: "wide" },
  { fileName: "image2.jpg", src: "/images/image2.jpg", alt: "DDF Studio training moment", size: "tall" },
  { fileName: "image3.jpg", src: "/images/image3.jpg", alt: "DDF Studio group session", size: "square" },
  { fileName: "image4.jpg", src: "/images/image4.jpg", alt: "Dance fitness class at DDF Studio", size: "tall" },
  { fileName: "image5.jpg", src: "/images/image5.jpg", alt: "DDF Studio community class", size: "wide" },
  { fileName: "image6.jpg", src: "/images/image6.jpg", alt: "DDF Studio workout detail", size: "square" },
  { fileName: "image7.jpg", src: "/images/image7.jpg", alt: "DDF Studio studio floor", size: "wide" },
  { fileName: "image8.jpg", src: "/images/image8.jpg", alt: "DDF Studio class energy", size: "tall" },
  { fileName: "image9.jpg", src: "/images/image9.jpg", alt: "DDF Studio training session", size: "square" },
  { fileName: "image10.jpg", src: "/images/image10.jpg", alt: "DDF Studio group movement", size: "wide" },
];

function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand ${compact ? "brand--compact" : ""}`} href="#top" aria-label="DDF Studio home">
      <span className="brand-mark"><span /></span>
      <span className="brand-copy"><strong>DDF</strong><small>STUDIO 2.0</small></span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeService, setActiveService] = useState("Dance Fitness");

  const whatsappGreeting = useMemo(
    () => whatsappLink("Hi DDF Studio, I’d like to know more about your classes."),
    [],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const goal = String(data.get("goal") || "").trim();
    const time = String(data.get("time") || "").trim();
    const message = String(data.get("message") || "").trim();
    const text = [
      "Hi DDF Studio, I’d like to enquire about joining.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Interested in: ${goal}`,
      `Preferred time: ${time || "Not specified"}`,
      `Message: ${message || "I’d like to know more about the classes."}`,
    ].join("\n");
    setSubmitted(true);
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <div id="top" className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <nav className={menuOpen ? "nav nav--open" : "nav"} aria-label="Main navigation">
            <a href="#classes" onClick={() => setMenuOpen(false)}>Classes</a>
            <a href="#story" onClick={() => setMenuOpen(false)}>Our approach</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
            <a href="#visit" onClick={() => setMenuOpen(false)}>Visit us</a>
            <a className="nav-whatsapp" href={whatsappGreeting} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp us</a>
          </nav>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-dark">
          <div className="hero-grid container">
            <div className="hero-copy reveal-up">
              <div className="eyebrow"><span className="eyebrow-line" /> GREATER NOIDA · SECTOR 1</div>
              <h1>Find your pace.<br /><em>Leave with</em><br />more power.</h1>
              <p className="hero-intro">DDF Studio is a welcoming dance and fitness space for people who want to move more, feel stronger, and enjoy the process.</p>
              <div className="hero-actions">
                <a className="button button-lime" href="#enquire">Plan your first class <ArrowUpRight size={17} /></a>
                <a className="text-link text-link-light" href="#classes">Explore classes <MoveRight size={16} /></a>
              </div>
              <div className="hero-footnote"><span className="signal-dot" /> Morning + evening batches · Mon–Sat</div>
            </div>
            <div className="hero-visual reveal-up reveal-delay-2">
              <div className="hero-image-wrap">
                <img src="/images/hero.jpg" alt="A joyful DDF Studio dance fitness class" />
                <div className="hero-image-label"><span>01</span><strong>Move as you are.</strong><small>No experience needed.</small></div>
              </div>
              <div className="hero-stamp"><span>TRAIN<br />TOGETHER</span><ArrowDownRight size={18} /></div>
            </div>
          </div>
          <div className="hero-marquee" aria-hidden="true"><span>dance · fitness · community · confidence · dance · fitness · community · confidence ·</span></div>
        </section>

        <section className="intro section-paper">
          <div className="container intro-grid">
            <div className="section-kicker"><span>WHY DDF</span><i /></div>
            <div className="intro-copy"><h2>More than a workout.<br /><span>A room that keeps<br /><em>you coming back.</em></span></h2></div>
            <div className="intro-note"><p>Whether you’re stepping into a class for the first time or looking for a new rhythm, we make it easier to start — and more rewarding to stay consistent.</p><a href="#enquire" className="text-link">Tell us your goal <MoveRight size={16} /></a></div>
          </div>
        </section>

        <section id="classes" className="classes section-paper section-pad-top">
          <div className="container">
            <div className="section-heading-row"><div><div className="eyebrow eyebrow-ink"><span className="eyebrow-line" /> WHAT WE DO</div><h2>Choose your<br /><em>kind of energy.</em></h2></div><p className="heading-side-note">Start where you are.<br />We’ll help with the rest.</p></div>
            <div className="service-list">
              {services.map((service) => <button key={service.title} className={`service-row ${activeService === service.title ? "service-row--active" : ""}`} onClick={() => setActiveService(service.title)}><span className="service-number">{service.number}</span><span className="service-name">{service.title}</span><span className="service-copy">{service.copy}</span><span className="service-tag">{service.tag}</span><ArrowUpRight className="service-arrow" size={20} /></button>)}
            </div>
            <div className="selected-service"><span className="signal-dot" /> You’re looking at <strong>{activeService}</strong> <a href="#enquire">Enquire on WhatsApp <ArrowUpRight size={14} /></a></div>
          </div>
        </section>

        <section id="story" className="story section-dark">
          <div className="container story-grid"><div className="story-image"><img src="/manus-storage/gallery-10_6204601f.jpg" alt="DDF Studio coach guiding a private session" /><span className="image-caption">The DDF way / 02</span></div><div className="story-copy"><div className="eyebrow eyebrow-lime"><span className="eyebrow-line" /> OUR APPROACH</div><h2>Friendly enough<br />to start.<br /><em>Focused enough<br />to change.</em></h2><p>We believe fitness works better when it feels human. That means clear guidance, scalable sessions, and instructors who want you to feel comfortable in the room.</p><div className="story-points"><div><span>01</span><strong>Real coaching</strong><small>Patient, practical, and present.</small></div><div><span>02</span><strong>Good energy</strong><small>Fun is part of the plan.</small></div><div><span>03</span><strong>Your pace</strong><small>Every body starts somewhere.</small></div></div><a className="button button-outline-light" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">See the studio on Instagram <Instagram size={16} /></a></div></div>
        </section>

        <section id="gallery" className="gallery section-paper"><div className="container"><div className="section-heading-row gallery-heading"><div><div className="eyebrow eyebrow-ink"><span className="eyebrow-line" /> INSIDE DDF</div><h2>Good energy<br /><em>looks like this.</em></h2></div><a className="text-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Follow @ddf_studio2.0 <ArrowUpRight size={16} /></a></div><div className="gallery-grid">{gallery.map((image, index) => <a className={`gallery-item gallery-item--${image.size}`} href={INSTAGRAM_URL} target="_blank" rel="noreferrer" key={`${image.src}-${index}`}><img src={image.src} alt={image.alt} loading={index > 2 ? "lazy" : "eager"} /><span className="gallery-index">{image.fileName.replace(".jpg", "").toUpperCase()}</span></a>)}</div></div></section>

        <section id="enquire" className="enquire section-dark"><div className="container enquire-grid"><div className="enquire-copy"><div className="eyebrow eyebrow-lime"><span className="eyebrow-line" /> YOUR NEXT STEP</div><h2>Let’s make<br /><em>your first class</em><br />easy.</h2><p>Share a few details. We’ll open WhatsApp with your message ready to send, so the DDF team can guide you to the right class and time.</p><div className="enquire-perks"><span><Check size={14} /> Friendly guidance</span><span><Check size={14} /> No pressure</span><span><Check size={14} /> Quick reply</span></div></div><form className="lead-form" onSubmit={handleSubmit}><div className="form-top"><span>01 / ENQUIRE</span><span><MessageCircle size={15} /> WhatsApp</span></div><label>Name<input name="name" required placeholder="Your name" /></label><label>Phone number<input name="phone" required type="tel" placeholder="10-digit mobile number" /></label><label>What are you looking for?<select name="goal" defaultValue="Dance Fitness"><option>Dance Fitness</option><option>Zumba & Aerobics</option><option>HIIT Exercise</option><option>Weight Training</option><option>Personal Training</option><option>Private Lessons</option><option>CrossFit Classes</option><option>Adult Sports</option></select></label><label>Preferred time<select name="time" defaultValue="Morning batch"><option>Morning batch</option><option>Evening batch</option><option>Not sure yet</option></select></label><label>Anything you’d like us to know?<textarea name="message" rows={3} placeholder="Your goal, experience, or question" /></label><button className="button button-ink button-submit" type="submit">{submitted ? "WhatsApp opened" : "Send enquiry on WhatsApp"} <ArrowUpRight size={17} /></button><small className="form-note">Your details stay in this message and go directly to WhatsApp.</small></form></div></section>

        <section id="visit" className="visit section-paper"><div className="container visit-grid"><div className="visit-copy"><div className="eyebrow eyebrow-ink"><span className="eyebrow-line" /> FIND US</div><h2>Come as you are.<br /><em>We’re easy to find.</em></h2><p>First floor, The Prominence Suites and Plaza, behind Bikaner Sweets, near Yatharth Hospital, Sector 1, Bisrakh Jalalpur, Greater Noida, Uttar Pradesh 201306.</p><div className="visit-details"><div><MapPin size={18} /><span><strong>Studio address</strong><small>Sector 1, Greater Noida · HCGV+5C</small></span></div><div><Clock3 size={18} /><span><strong>Open Monday–Saturday</strong><small>7:00am–12:00pm · 4:00pm–10:00pm</small></span></div><div><Phone size={18} /><span><strong>Studio phone</strong><small><a href={`tel:${PUBLIC_PHONE}`}>74893 68399</a></small></span></div></div><a className="button button-ink" href={MAP_URL} target="_blank" rel="noreferrer">Open in Google Maps <MapPin size={16} /></a></div><div className="map-card"><div className="map-card-top"><span>DDF STUDIO 2.0</span><span className="map-pin"><MapPin size={18} /></span></div><div className="map-art"><span className="map-road map-road-a" /><span className="map-road map-road-b" /><span className="map-road map-road-c" /><span className="map-label map-label-a">SECTOR 1</span><span className="map-label map-label-b">YATHARTH<br />HOSPITAL</span><span className="map-location"><i /> DDF STUDIO</span></div><div className="map-card-bottom"><span>Greater Noida<br />Uttar Pradesh 201306</span><a href={MAP_URL} target="_blank" rel="noreferrer">Directions <ArrowUpRight size={15} /></a></div></div></div></section>
      </main>

      <footer className="site-footer section-dark"><div className="container footer-top"><Logo compact /><div className="footer-message">Move more.<br /><em>Feel better.</em></div><div className="footer-actions"><a className="button button-lime" href={whatsappGreeting} target="_blank" rel="noreferrer">Chat on WhatsApp <MessageCircle size={16} /></a><a className="footer-instagram" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram size={17} /> @ddf_studio2.0</a></div></div><div className="container footer-bottom"><span>© DDF Studio 2.0 · Greater Noida</span><span>Dance · Fitness · Community</span><a href="#top">Back to top <ArrowUpRight size={14} /></a></div></footer>
      <a className="floating-whatsapp" href={whatsappGreeting} target="_blank" rel="noreferrer" aria-label="Chat with DDF Studio on WhatsApp"><MessageCircle size={20} /><span>Chat with us</span></a>
    </div>
  );
}

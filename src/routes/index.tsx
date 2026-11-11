import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import rooftopPhoto from "@/assets/rooftop-waterproofing.png.asset.json";
import plasteringPhoto from "@/assets/wall-plastering.png.asset.json";
import renovationPhoto from "@/assets/bathroom-kitchen-renovation.png.asset.json";
import constructionPhoto from "@/assets/house-construction.png.asset.json";
import inspectionPhoto from "@/assets/bathroom-inspection.png.asset.json";
import marblePhoto from "@/assets/marble-installation.png.asset.json";
import aboutPhoto from "@/assets/about-portrait.jpg.asset.json";
import heroPhoto from "@/assets/construction-skylines.png.asset.json";

import {
  ArrowRight, Check, ChevronDown, Clock3, Droplets, Hammer, Home,
  MapPin, Menu, MessageCircle, Phone, ShieldCheck, Sparkles, X,
  Building2, Layers3, Bath, PaintRoller, Ruler, ClipboardCheck,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "M. Rasheed Construction | Quality You Can Build On" },
      { name: "description", content: "10+ years of construction experience. Expert tile and marble work, bathroom seepage solutions, waterproofing, renovation and house construction in Lahore and Islamabad. Book a free initial inspection." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "M. Rasheed Construction | Quality You Can Build On" },
      { property: "og:description", content: "Tiles, marble, bathroom seepage solutions and complete construction in Lahore and Islamabad." },
    ],
  }),
  component: HomePage,
});

const PHONE = "0307-1033792";
const WHATSAPP = "923474033792";
const EMAIL = "Mrclahore360@gmail.com";
const waLink = (message = "Hello M. Rasheed Construction, I would like to discuss a project.") =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const services = [
  { icon: Layers3, title: "Tiles & Marble Work", text: "Bathroom, kitchen, floor, wall, staircase and front-elevation tile and marble installation.", image: marblePhoto.url },
  { icon: Droplets, title: "Bathroom Seepage Solutions", text: "Leakage inspection, tile-joint and grout sealing, plumbing assessment and targeted waterproofing.", image: inspectionPhoto.url },
  { icon: Building2, title: "House Construction", text: "Residential and commercial projects, grey structure, masonry and complete finishing.", image: constructionPhoto.url },
  { icon: Bath, title: "Bathroom & Kitchen Renovation", text: "Practical upgrades, tile replacement, marble finishes, shower areas and kitchen improvements.", image: renovationPhoto.url },
  { icon: PaintRoller, title: "Plastering & Wall Finishing", text: "Surface preparation, plastering and careful interior and exterior finishing.", image: plasteringPhoto.url },
  { icon: Hammer, title: "Flooring & Waterproofing", text: "Floor preparation, leveling, roof and terrace waterproofing and moisture solutions.", image: rooftopPhoto.url },
];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", city: "Lahore", service: "Free bathroom seepage inspection", details: "" });

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      "Hello M. Rasheed Construction!",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `City: ${form.city}`,
      `Service: ${form.service}`,
      `Details: ${form.details || "Please contact me to discuss."}`,
    ].join("\n");
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="topline"><div className="site-container topline-inner"><span>Serving Lahore & Islamabad</span><span><a href={`tel:+92${PHONE.replace(/^0/, "")}`}>Call {PHONE}</a><i /> <a href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp 0347-4033792</a></span></div></div>
      <header className="site-header">
        <div className="site-container nav-inner">
          <a href="#home" className="brand" aria-label="M. Rasheed Construction home">
            <span className="brand-mark"><Home size={25} strokeWidth={1.7} /></span>
            <span className="brand-name">M. RASHEED<small>CONSTRUCTION</small></span>
          </a>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"}>
            <a href="#home" onClick={closeMenu}>Home</a><a href="#services" onClick={closeMenu}>Services <ChevronDown size={13} /></a><a href="#about" onClick={closeMenu}>About</a><a href="#process" onClick={closeMenu}>Our Process</a><a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="button button-green nav-cta" href="#inspection" onClick={closeMenu}><MessageCircle size={17} /> Free Inspection</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-photo"><img src={heroPhoto.url} alt="Construction worker plastering a wall with Islamabad and Lahore landmarks behind him" fetchPriority="high" /></div>
          <div className="hero-shade" />
          <div className="site-container hero-content">
            <div className="eyebrow"><span /> 10+ YEARS OF CONSTRUCTION EXPERIENCE</div>
            <h1>Quality You<br /><em>Can Build On.</em></h1>
            <p className="hero-lead">Expert tile and marble work, bathroom seepage solutions and complete construction — delivered by our own dedicated team.</p>
            <div className="hero-actions"><a className="button button-gold" href="#inspection">Book a Free Inspection <ArrowRight size={17} /></a><a className="button button-outline" href="#services">Explore Our Services</a></div>
            <div className="hero-proof"><span><Check size={15} /> 10+ years' experience</span><span><Check size={15} /> Dedicated team</span><span><Check size={15} /> Lahore & Islamabad</span></div>
          </div>
          <div className="hero-note"><span className="note-icon"><Droplets /></span><div><strong>Bathroom seepage?</strong><p>Repair without breaking tiles wherever technically possible.</p><a href="#inspection">FREE initial inspection <ArrowRight size={14} /></a></div></div>
        </section>

        <section className="trust-strip"><div className="site-container trust-grid"><div><Clock3 /><span><b>10+ Years</b><small>Industry experience</small></span></div><div><Hammer /><span><b>Our Own Team</b><small>Dedicated workmanship</small></span></div><div><Building2 /><span><b>All Project Sizes</b><small>Residential & commercial</small></span></div><div><ShieldCheck /><span><b>Written Terms</b><small>Warranty on agreed work</small></span></div></div></section>

        <section className="section inspection-section" id="inspection">
          <div className="site-container inspection-grid">
            <div className="inspection-image"><img src={inspectionPhoto.url} alt="M. Rasheed Construction worker checking bathroom wall moisture" /><div className="image-caption"><Droplets /><span>Targeted bathroom leakage assessment</span></div></div>
            <div className="inspection-copy"><div className="eyebrow eyebrow-dark">A PRACTICAL FIRST STEP</div><span className="free-label">FREE INITIAL VISUAL INSPECTION</span><h2>Bathroom seepage?<br /><em>Save your tiles.</em></h2><p className="urdu-head" lang="ur" dir="rtl">باتھ روم کی سیپج؟<br />ٹائلیں توڑے بغیر سیپج کا حل!</p><p>Water stains on the ceiling below an upstairs bathroom? Damp walls or leaking tile joints? Before considering an expensive renovation, let our team inspect the problem.</p><ul className="tick-list"><li><Check /> Initial visual inspection</li><li><Check /> Tile joints and grout assessment</li><li><Check /> Plumbing and waterproofing checks</li><li><Check /> Clear quotation before repair work</li></ul><a className="button button-green" href={waLink("Hello, I would like to book a free initial bathroom seepage inspection.")} target="_blank" rel="noopener noreferrer"> <MessageCircle size={18} /> Book Free Inspection on WhatsApp</a><small className="disclaimer">Free initial visual inspection within agreed service areas. Repair without tile removal depends on the actual cause and technical feasibility. Any additional testing or repair work is quoted separately.</small></div>
          </div>
        </section>

        <section className="section services-section" id="services"><div className="site-container"><div className="section-heading"><div className="eyebrow eyebrow-dark">WHAT WE DO</div><h2>Construction & finishing,<br /><em>done with care.</em></h2><p>From a focused repair to a complete property project, we bring experience, planning and attention to detail.</p></div><div className="service-grid">{services.map((service) => { const Icon = service.icon; return <article className="service-card" key={service.title}><div className="service-image"><img src={service.image} alt={service.title} loading="lazy" /><span><Icon size={21} /></span></div><div className="service-content"><h3>{service.title}</h3><p>{service.text}</p><a href="#contact">Discuss this service <ArrowRight size={15} /></a></div></article>; })}</div></div></section>

        <section className="section about-section" id="about"><div className="site-container about-grid"><div className="about-photo"><img src={aboutPhoto.url} alt="Portrait for M. Rasheed Construction" loading="lazy" /><div className="experience-stamp"><b>10+</b><span>YEARS OF<br />EXPERIENCE</span></div></div><div className="about-copy"><div className="eyebrow eyebrow-dark">ABOUT M. RASHEED CONSTRUCTION</div><h2>Built on experience.<br /><em>Focused on quality.</em></h2><p>M. Rasheed Construction provides residential and commercial construction services across Lahore and Islamabad. With more than 10 years of experience and our own team, we handle projects from specialist tile installation to complete construction and finishing.</p><p>Our speciality is tile and marble work. We pay attention to surface preparation, suitable fixing materials, alignment, leveling, grouting and finishing to help reduce common installation defects.</p><div className="quality-points"><div><Check /> Proper preparation</div><div><Check /> Careful installation</div><div><Check /> Clear project scope</div><div><Check /> Written warranty terms</div></div><a className="text-link" href="#contact">Talk to our team <ArrowRight size={16} /></a></div></div></section>

        <section className="quality-band"><div className="site-container quality-inner"><div><div className="eyebrow">OUR QUALITY COMMITMENT</div><h2>Good work is in<br />the details.</h2></div><div className="quality-text"><p>We focus on correct surface preparation, appropriate installation methods, careful finishing and clear communication. Eligible services can include written workmanship warranties with duration, coverage and exclusions agreed before work begins.</p><a href="#contact" className="button button-gold">Discuss Your Project <ArrowRight size={16} /></a></div></div></section>

        <section className="section process-section" id="process"><div className="site-container"><div className="section-heading centered"><div className="eyebrow eyebrow-dark">SIMPLE & TRANSPARENT</div><h2>From first call to <em>finished work.</em></h2><p>We keep the process clear so you know what happens before work begins.</p></div><div className="process-grid">{[{n:"01",t:"Get in touch",d:"Share your location and a short description or photos of the issue."},{n:"02",t:"Initial inspection",d:"We assess the visible problem and likely source of leakage or work needed."},{n:"03",t:"Clear quotation",d:"We explain the recommended approach, scope, materials and price."},{n:"04",t:"Work & handover",d:"After your approval, our team completes the agreed work and provides applicable warranty terms."}].map((s)=><div className="process-step" key={s.n}><b>{s.n}</b><h3>{s.t}</h3><p>{s.d}</p></div>)}</div></div></section>

        <section className="section contact-section" id="contact"><div className="site-container contact-grid"><div className="contact-copy"><div className="eyebrow">LET'S DISCUSS YOUR PROJECT</div><h2>Ready to build,<br /><em>repair or renovate?</em></h2><p>Tell us what you need. We'll discuss the project and help arrange the right next step.</p><div className="contact-detail"><Phone /><span><small>CALL US</small><a href="tel:+923071033792">0307-1033792</a></span></div><div className="contact-detail"><MessageCircle /><span><small>WHATSAPP</small><a href={waLink()} target="_blank" rel="noopener noreferrer">0347-4033792</a></span></div><div className="contact-detail"><MapPin /><span><small>SERVICE AREAS</small><b>Lahore & Islamabad</b></span></div><div className="contact-detail"><Sparkles /><span><small>EMAIL</small><a href={`mailto:${EMAIL}`}>{EMAIL}</a></span></div></div>
          <form className="inquiry-form" onSubmit={submitInquiry}><div className="form-kicker">START A CONVERSATION</div><h3>Request an inspection or quote</h3><label htmlFor="name">Your name</label><input id="name" autoComplete="name" required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder="Full name" /><label htmlFor="phone">Phone number</label><input id="phone" type="tel" inputMode="tel" autoComplete="tel" required value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} placeholder="03xx-xxxxxxx" /><div className="form-row"><div><label htmlFor="city">City</label><select id="city" value={form.city} onChange={(e)=>setForm({...form,city:e.target.value})}><option>Lahore</option><option>Islamabad</option><option>Other</option></select></div><div><label htmlFor="service">Service</label><select id="service" value={form.service} onChange={(e)=>setForm({...form,service:e.target.value})}><option>Free bathroom seepage inspection</option><option>Tiles & marble work</option><option>House construction</option><option>Waterproofing</option><option>Renovation & finishing</option><option>Plastering & flooring</option><option>Other</option></select></div></div><label htmlFor="details">Project details</label><textarea id="details" rows={3} value={form.details} onChange={(e)=>setForm({...form,details:e.target.value})} placeholder="Briefly describe your project or issue..." /><button className="button button-green form-submit" type="submit">Send inquiry on WhatsApp <ArrowRight size={17} /></button><small>Submitting opens WhatsApp with your details. This website does not store form submissions.</small></form>
        </div></section>
      </main>
      <footer className="site-footer">
        <div className="site-container footer-main">
          <div className="footer-brand-column">
            <a className="brand brand-footer" href="#home" aria-label="M. Rasheed Construction home"><span className="brand-mark"><Home size={23} /></span><span className="brand-name">M. RASHEED<small>CONSTRUCTION</small></span></a>
            <p className="footer-tagline">Quality You Can Build On.</p>
            <p className="footer-description">Experienced construction, specialist tile and marble work, bathroom seepage solutions and careful finishing across Lahore and Islamabad.</p>
            <a className="footer-cta" href="#inspection">Book a free initial inspection <ArrowRight size={15} /></a>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <a href="#home">Home</a><a href="#about">About Us</a><a href="#services">Our Services</a><a href="#process">Our Process</a><a href="#contact">Contact Us</a>
          </div>
          <div className="footer-column">
            <h3>Our Services</h3>
            <a href="#services">Tiles & Marble Work</a><a href="#inspection">Bathroom Seepage Solutions</a><a href="#services">House Construction</a><a href="#services">Bathroom & Kitchen Renovation</a><a href="#services">Plastering & Wall Finishing</a><a href="#services">Flooring & Waterproofing</a>
          </div>
          <div className="footer-column footer-contact">
            <h3>Get in Touch</h3>
            <div><Phone size={16} /><span><small>CALL US</small><a href="tel:+923071033792">0307-1033792</a></span></div>
            <div><MessageCircle size={16} /><span><small>WHATSAPP</small><a href={waLink()} target="_blank" rel="noopener noreferrer">0347-4033792</a></span></div>
            <div><MapPin size={16} /><span><small>SERVICE AREAS</small><b>Lahore & Islamabad</b></span></div>
            <div><Sparkles size={16} /><span><small>EMAIL</small><a href={`mailto:${EMAIL}`}>{EMAIL}</a></span></div>
          </div>
        </div>
        <div className="site-container footer-bottom">
          <span>© {new Date().getFullYear()} M. Rasheed Construction. All rights reserved.</span>
          <span>Built on experience. Focused on quality.</span>
        </div>
      </footer>
      <a className="floating-whatsapp" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat with M. Rasheed Construction on WhatsApp"><MessageCircle size={20} /><span>WhatsApp Us</span></a>
    </div>
  );
}

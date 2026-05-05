import { Link } from "react-router-dom";
import "./Services.css";
import useScrollFade from "../hooks/useScrollFade";
import { useState } from "react";

const addons = [
  {
    category: "Brand",
    emoji: "✦",
    items: [
      { name: "Logo design", price: "from $900", note: "incl. favicon + secondary mark" },
      { name: "Brand guide (colors, type, voice)", price: "from $650", note: "~8–10 page PDF" },
      { name: "Brand consultation session", price: "$275", note: "90 min + notes doc" },
      { name: "Custom illustration set", price: "from $600", note: "4–6 illustrations" },
      { name: "Single custom illustration", price: "from $200", note: "per piece" },
      { name: "Icon set", price: "from $350", note: "6–8 custom icons" },
    ],
  },
  {
    category: "Content",
    emoji: "✎",
    items: [
      { name: "Copy editing / shaping", price: "from $150", note: "per page" },
      { name: "Bio writing", price: "from $200", note: "long + short versions" },
      { name: "Tagline development", price: "from $250", note: "3 options + rationale" },
      { name: "SEO keyword research", price: "from $300", note: "priority keyword list" },
      { name: "On-page SEO optimization", price: "from $350", note: "meta, headings, alt text" },
      { name: "Content strategy session", price: "$275", note: "90 min + action plan" },
      { name: "Photo sourcing / curation", price: "from $150", note: "licensed stock selection" },
    ],
  },
  {
    category: "Technical",
    emoji: "⚙",
    items: [
      { name: "Custom contact / intake form", price: "from $300", note: "logic + email routing" },
      { name: "Hosting setup + configuration", price: "from $200", note: "incl. SSL + DNS" },
      { name: "Analytics + tracking setup", price: "from $200", note: "GA4 + Search Console" },
      { name: "Legal setup (cookie + privacy)", price: "from $250", note: "policy + banner" },
      { name: "Extra pages beyond package", price: "$175/page", note: "designed + built" },
      { name: "Media / podcast page", price: "from $400", note: "player + archive" },
      { name: "Event calendar integration", price: "from $350", note: "recurring events support" },
      { name: "Donation page / integration", price: "from $500", note: "Stripe or Donorbox" },
    ],
  },
  {
    category: "Ongoing",
    emoji: "↻",
    items: [
      { name: "Care Plan (maintenance + priority support)", price: "$150/mo", note: "min 3 months" },
      { name: "Monthly content updates", price: "$200/mo", note: "up to 2hrs/month" },
      { name: "Quarterly site audit", price: "$350/quarter", note: "performance + content review" },
      { name: "Annual refresh", price: "from $800", note: "design + content update" },
    ],
  },
];

function AddonAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="addonAccordion">
      {addons.map((group, i) => (
        <div key={group.category} className={`addonGroup ${openIndex === i ? "is-open" : ""}`}>
          <button
            className="addonGroup__trigger"
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
          >
            <span className="addonGroup__emoji">{group.emoji}</span>
            <span className="addonGroup__name">{group.category}</span>
            <span className="addonGroup__count">{group.items.length} options</span>
            <span className="addonGroup__chevron">{openIndex === i ? "−" : "+"}</span>
          </button>
          <div className="addonGroup__body">
            <ul className="addonList">
              {group.items.map((item) => (
                <li key={item.name} className="addonItem">
                  <span className="addonItem__name">{item.name}</span>
                  <span className="addonItem__note">{item.note}</span>
                  <span className="addonItem__price">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

function ServicePillar({ number, title, tagline }) {
  return (
    <article className="servicePillar">
      <span className="servicePillar__number">{number}</span>
      <h2 className="servicePillar__title">{title}</h2>
      <p className="servicePillar__tagline">{tagline}</p>
    </article>
  );
}

export default function Services() {
  const [introRef, introVisible] = useScrollFade();
  const [tiersRef, tiersVisible] = useScrollFade();
  const [addonsRef, addonsVisible] = useScrollFade();
  const [processRef, processVisible] = useScrollFade();
  const [ctaRef, ctaVisible] = useScrollFade();

  return (
    <main className="servicesPage">

      {/* Hero */}
      <header className="servicesHero">
        <div className="servicesHero__inner">
          <span className="servicesHero__label">Studio Molly</span>
          <h1 className="servicesHero__title">Services</h1>
          <p className="servicesHero__lede">
            From brand identity to full builds, I offer a focused set of services designed to work together, or on their own.
          </p>
          <div className="servicesHero__actions">
            <Link className="btnPrimary" to="/contact">Contact me</Link>
          </div>
        </div>
      </header>

      {/* Services intro */}
      <section
        ref={introRef}
        className={`servicesIntro fade-up ${introVisible ? "is-visible" : ""}`}
        aria-labelledby="services-intro-title"
      >
        <div className="servicesIntro__inner">
          <span className="services__sectionLabel">What I do</span>
          <h2 className="services__sectionTitle" id="services-intro-title">
            A focused set of services
          </h2>
          <div className="servicePillars">
            <ServicePillar
              number="01"
              title="Brand Identity"
              tagline="Who you are and how you look — the details that make you recognizable."
            />
            <ServicePillar
              number="02"
              title="Web Design"
              tagline="Custom websites that actually reflect who you are."
            />
            <ServicePillar
              number="03"
              title="Illustration"
              tagline="Hand-drawn elements that make your brand unforgettable."
            />
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section
        ref={tiersRef}
        className={`servicesTiers fade-up ${tiersVisible ? "is-visible" : ""}`}
        aria-labelledby="tiers-title"
      >
        <div className="servicesTiers__inner">
          <span className="services__sectionLabel">Investment</span>
          <h2 className="services__sectionTitle" id="tiers-title">
            Choose your starting point
          </h2>
          <p className="servicesTiers__intro">
            Every project is scoped individually, but here's a starting point so you know what to expect before reaching out. All packages available as a lump sum or monthly payment plan.
          </p>

          <div className="tiersGrid">
            <article className="tierCard">
              <p className="tierCard__name">Essential</p>
              <p className="tierCard__price">From $3,000</p>
              <p className="tierCard__plan">or $300/mo × 10 months</p>
              <p className="tierCard__desc">A clean, professional presence for organizations that need to look credible fast.</p>
              <ul className="tierCard__includes">
                <li>Custom design</li>
                <li>Up to 5 pages</li>
                <li>Squarespace or WordPress</li>
                <li>Mobile responsive</li>
                <li>Contact form</li>
                <li>Domain setup</li>
                <li>Launch support</li>
              </ul>
            </article>

            <article className="tierCard">
              <p className="tierCard__name">Studio</p>
              <p className="tierCard__price">From $5,500</p>
              <p className="tierCard__plan">or $520/mo × 12 months</p>
              <p className="tierCard__desc">A fully considered custom site built around your organization's specific needs.</p>
              <ul className="tierCard__includes">
                <li>Custom design system</li>
                <li>Up to 8 pages</li>
                <li>React or WordPress</li>
                <li>Basic CMS integration</li>
                <li>Accessibility review</li>
                <li>Domain setup</li>
                <li>2 rounds of revisions</li>
                <li>Launch + handoff</li>
              </ul>
            </article>

            <article className="tierCard">
              <p className="tierCard__name">Signature</p>
              <p className="tierCard__price">From $7,500</p>
              <p className="tierCard__plan">or $720/mo × 12 months</p>
              <p className="tierCard__desc">A fully bespoke site with a content system built for long-term growth.</p>
              <ul className="tierCard__includes">
                <li>Full custom React build</li>
                <li>Unlimited pages</li>
                <li>Sanity CMS architecture</li>
                <li>Custom animations</li>
                <li>Full accessibility audit</li>
                <li>Domain setup</li>
                <li>3 rounds of revisions</li>
                <li>CMS training session</li>
                <li>30-day post-launch support</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section
        ref={addonsRef}
        className={`servicesAddons fade-up ${addonsVisible ? "is-visible" : ""}`}
        aria-labelledby="addons-title"
      >
        <div className="servicesAddons__inner">
          <span className="services__sectionLabel">Add-ons</span>
          <h2 className="services__sectionTitle" id="addons-title">
            Customize your package
          </h2>
          <p className="servicesTiers__intro">
            Every package can be tailored with add-ons. Mix and match from the categories below — or ask me to bundle something specific for your project.
          </p>
          <AddonAccordion />
          <p className="servicesTiers__note" style={{ marginTop: "1.5rem" }}>
            Not sure what you need? <Link to="/contact">Let's talk it through.</Link>
          </p>
        </div>
      </section>

      {/* Process */}
      <section
        ref={processRef}
        className={`servicesProcess fade-up ${processVisible ? "is-visible" : ""}`}
        aria-labelledby="process-title"
      >
        <div className="servicesProcess__inner">
          <span className="services__sectionLabel">How it works</span>
          <h2 className="services__sectionTitle" id="process-title">
            What it's like to work together
          </h2>
          <ol className="processSteps">
            <li className="processStep">
              <span className="processStep__number">01</span>
              <strong className="processStep__title">Discover</strong>
              <span className="processStep__text">We get clear on goals, audience, and what your site needs to do.</span>
            </li>
            <li className="processStep">
              <span className="processStep__number">02</span>
              <strong className="processStep__title">Direction + design</strong>
              <span className="processStep__text">We shape the look, structure, and content priorities.</span>
            </li>
            <li className="processStep">
              <span className="processStep__number">03</span>
              <strong className="processStep__title">Build</strong>
              <span className="processStep__text">I develop the site with clean components and responsive layouts.</span>
            </li>
            <li className="processStep">
              <span className="processStep__number">04</span>
              <strong className="processStep__title">Launch + handoff</strong>
              <span className="processStep__text">You get a site you can live with and maintain confidently.</span>
            </li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        className={`servicesCta fade-up ${ctaVisible ? "is-visible" : ""}`}
        aria-labelledby="cta-title"
      >
        <div className="servicesCta__inner">
          <h2 className="servicesCta__title" id="cta-title">
            Ready to build something?
          </h2>
          <p className="servicesCta__text">
            Have a project in mind? I'd love to hear about it!
          </p>
          <Link className="btnPrimary" to="/contact">Get in touch</Link>
        </div>
      </section>

    </main>
  );
}
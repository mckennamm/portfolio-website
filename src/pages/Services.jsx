import { Link } from "react-router-dom";
import "./Services.css";

function ServiceSection({ id, number, title, intro, bullets, bestFor }) {
  return (
    <section className="serviceSection" id={id} aria-labelledby={`${id}-title`}>
      <div className="serviceSection__meta">
        <span className="serviceSection__number">{number}</span>
        <div className="serviceSection__headerText">
          <h2 className="serviceSection__title" id={`${id}-title`}>{title}</h2>
          <p className="serviceSection__intro">{intro}</p>
        </div>
      </div>

      <div className="serviceSection__body">
        {/* <ul className="serviceSection__list">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        {bestFor && <p className="serviceSection__bestFor">{bestFor}</p>} */}
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <main className="servicesPage">

      {/* Hero */}
      <header className="servicesHero">
        <div className="servicesHero__inner">
          <span className="servicesHero__label">Studio Molly</span>
          <h1 className="servicesHero__title">Services</h1>
          <p className="servicesHero__lede">
            From brand direction to full builds, I offer a focused set of services designed to work together, or on their own.
          </p>
          <div className="servicesHero__actions">
            <Link className="btnPrimary" to="/contact">Contact me</Link>
          </div>
        </div>
      </header>

      {/* Services */}
      <div className="servicesContent" id="services-list">
        <ServiceSection
          id="brand-direction"
          number="01"
          title="Brand Direction"
          intro="A calm, practical way to get clarity on your tone, message, and overall presence, so your website feels like you."
          bullets={[
            "Light discovery and goals",
            "Tone + voice guidance",
            "Key messages and homepage narrative",
            "Simple brand notes (what to lean into, what to avoid)",
            "Content priorities and page recommendations",
          ]}
          bestFor="Best for: people who feel unsure what to say or how to present their work online."
        />

        <ServiceSection
          id="visual-identity"
          number="02"
          title="Visual Identity"
          intro="A cohesive visual system you can reuse everywhere. This is where custom marks, hand-drawn elements, and icon styles can live."
          bullets={[
            "Logo or mark exploration (as needed)",
            "Color palette + type direction",
            "Hand-drawn icon set or illustrative accents (when it fits)",
            "Basic brand guide (lightweight and usable)",
            "Asset exports for web use",
          ]}
          bestFor="Best for: brands that want to look consistent, intentional, and unmistakably theirs."
        />

        <ServiceSection
          id="web-design"
          number="03"
          title="Web Design"
          intro="Thoughtful page layouts, strong hierarchy, and responsive design that helps people understand you quickly and move with ease."
          bullets={[
            "Sitemap + page structure",
            "Homepage layout and section planning",
            "Responsive design for mobile, tablet, and desktop",
            "Accessibility-minded design decisions",
            "Design system basics (buttons, cards, spacing, type scale)",
          ]}
          bestFor="Best for: organizations that want a site that feels clear, modern, and easy to navigate."
        />

        <ServiceSection
          id="front-end-development"
          number="04"
          title="Front-End Development"
          intro="A clean, responsive build with components that are organized and maintainable. This is where the design becomes a real website."
          bullets={[
            "React component build (or your chosen stack)",
            "Responsive implementation + performance basics",
            "Clean, scalable CSS structure",
            "Simple animations and interactions (optional)",
            "Launch support and a handoff you can use",
          ]}
          bestFor="Best for: clients who want a custom site that can grow and evolve without feeling fragile."
        />
      </div>

      {/* Process */}
      <section className="servicesProcess" aria-labelledby="process-title">
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
      <section className="servicesCta" aria-labelledby="cta-title">
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
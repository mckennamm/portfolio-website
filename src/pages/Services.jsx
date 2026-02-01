import { Link } from "react-router-dom";
import "./Services.css";

function ServiceSection({ id, title, intro, bullets, bestFor }) {
  return (
    <section className="serviceSection" id={id} aria-labelledby={`${id}-title`}>
      <div className="serviceSection__header">
        <h2 className="serviceSection__title" id={`${id}-title`}>
          {title}
        </h2>
        <p className="serviceSection__intro">{intro}</p>
      </div>

      <div className="serviceSection__body">
        <div className="serviceSection__card">
          <h3 className="serviceSection__subhead">Includes</h3>
          <ul className="serviceSection__list">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          {bestFor ? <p className="serviceSection__bestFor">{bestFor}</p> : null}
        </div>
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
          <h1 className="servicesHero__title">Services</h1>
          <p className="servicesHero__lede">
            I offer a small set of services that work well together, whether you
            need a full website build or just help getting your visuals and
            direction clear.
          </p>

          <div className="servicesHero__actions">
            <Link className="btnPrimary" to="/contact">
              Contact me
            </Link>
            {/* <a className="btnSecondary" href="#services-list">
              Explore services
            </a> */}
          </div>
        </div>
      </header>

      {/* Services */}
      <div className="servicesContent" id="services-list">
        <ServiceSection
          id="brand-direction"
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
          <h2 className="servicesProcess__title" id="process-title">
            What it’s like to work together
          </h2>

          <ol className="processSteps">
            <li>
              <strong>Discover</strong>
              <span>We get clear on goals, audience, and what your site needs to do.</span>
            </li>
            <li>
              <strong>Direction + design</strong>
              <span>We shape the look, structure, and content priorities.</span>
            </li>
            <li>
              <strong>Build</strong>
              <span>I develop the site with clean components and responsive layouts.</span>
            </li>
            <li>
              <strong>Launch + handoff</strong>
              <span>You get a site you can live with and maintain confidently.</span>
            </li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="servicesCta" aria-labelledby="cta-title">
        <div className="servicesCta__inner">
          <h2 className="servicesCta__title" id="cta-title">
            Ready to build something calm and clear?
          </h2>
          <p className="servicesCta__text">
            If you tell me a little about what you’re making, I’ll tell you what
            I’d recommend and what a realistic next step looks like.
          </p>
          <Link className="btnPrimary" to="/contact">
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
}

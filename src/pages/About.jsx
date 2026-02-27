import "./About.css";
import molly from "../assets/molly2.jpeg";

const About = () => {
  return (
    <main className="about">

      {/* ── Hero ── */}
      <section className="about-hero">
        <a
          className="about-photoLink"
          href="https://www.instagram.com/studio.molly.designs/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Studio Molly on Instagram"
        >
          <img src={molly} alt="Molly McKenna" className="about-image" />
        </a>

        <div className="about-heroContent">
          <p className="about-kicker">Studio Molly</p>
          <h1 className="about-title">Thoughtful websites for people doing meaningful work.</h1>
          <p className="about-lede">
            I'm Molly, a web designer and front end developer creating calm, quietly beautiful sites for small
            businesses, nonprofits, and weddings. I blend clean design with practical strategy so your site feels
            easy to use, easy to trust, and easy to grow.
          </p>
          <div className="about-ctaRow">
            <a className="about-buttonPrimary" href="/contact">Work with me</a>
            <a
              className="about-buttonSecondary"
              href="https://github.com/mckennamm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
            </a>
          </div>
       
        </div>
      </section>

      <div className="about-divider" />

      {/* ── Services ── */}
      <section className="about-section">
        <span className="about-sectionLabel">Services</span>
        <h2 className="about-sectionTitle">What I help with</h2>
        <div className="about-cards">
          <article className="about-card">
            <p className="about-cardNumber">01</p>
            <h3 className="about-cardTitle">Website design</h3>
            <p className="about-cardText">
              Structure, layout, visual direction, and a clean experience that feels like your brand and guides
              people where you want them to go.
            </p>
          </article>
          <article className="about-card">
            <p className="about-cardNumber">02</p>
            <h3 className="about-cardTitle">Front end development</h3>
            <p className="about-cardText">
              Responsive builds with thoughtful details, solid performance, and components you can actually reuse.
            </p>
          </article>
          <article className="about-card">
            <p className="about-cardNumber">03</p>
            <h3 className="about-cardTitle">Content support</h3>
            <p className="about-cardText">
              Light copy shaping, page flow, and editing support so you do not have to figure it out alone.
            </p>
          </article>
        </div>
      </section>

      <div className="about-divider" />

      {/* ── Approach + Story ── */}
      <section className="about-section about-split">
        <div>
          <span className="about-sectionLabel">Process</span>
          <h2 className="about-sectionTitle">My approach</h2>
          <p className="about-text">
            I design with empathy and intention. I want your site to feel human, not templated. That means clear
            hierarchy, strong usability, and a visual style that supports the story you are telling.
          </p>
          <ul className="about-bullets">
            <li>Start with goals, audience, and page flow</li>
            <li>Design a calm, clear system you can build on</li>
            <li>Build responsive, accessible components</li>
            <li>Launch with confidence and a plan for updates</li>
          </ul>
        </div>

        <div className="about-note">
          <h3 className="about-noteTitle">A bit of my story</h3>
          <p className="about-text">
            My path here wasn't linear; I spent years in youth development and recreation before realizing I was ready for a change.
            <br/><br/>
            I wanted to get back to my creative roots and build something of my own.
            <br/><br/>
Web design turned out to be the perfect fit. I love the intersection of aesthetics and problem-solving, and front end development gave me a way to be both an artist and a builder. I took the leap, learned fast, and haven't looked back.
          </p>
        </div>
      </section>

      <div className="about-divider" />

      {/* ── Skills ── */}
      <section className="about-section">
        <span className="about-sectionLabel">Toolkit</span>
        <h2 className="about-sectionTitle">Skills and tools</h2>
        <div className="about-skillsGrid">
          <div className="about-skillGroup">
            <h3 className="about-skillTitle">Front end</h3>
            <p className="about-skillText">HTML, CSS, JavaScript, React, Redux, Vite, Tailwind, Bootstrap</p>
          </div>
          <div className="about-skillGroup">
            <h3 className="about-skillTitle">Collaboration</h3>
            <p className="about-skillText">Git, GitHub, component libraries, handoff-ready design systems</p>
          </div>
          <div className="about-skillGroup">
            <h3 className="about-skillTitle">Tools and backend</h3>
            <p className="about-skillText">Firebase, Node basics, Vercel deployments</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-section">
        <div className="about-cta">
          <h2 className="about-sectionTitle">Ready to build something that feels like you?</h2>
          <p className="about-text">
            If you want a site that is clean, modern, and quietly you, I would love to hear what you are working on.
          </p>
          <a className="about-buttonPrimary" href="/contact">Reach out</a>
        </div>
      </section>

    </main>
  );
};

export default About;
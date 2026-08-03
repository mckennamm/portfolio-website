import "./About.css";
import molly from "../assets/molly4.jpeg";
import laptop from "../assets/laptopPhoto.webp";
import ipad from "../assets/ipadPhoto.jpg";
import useScrollFade from "../hooks/useScrollFade";
import { Link } from "react-router-dom";

const About = () => {
  const [storyRef, storyVisible] = useScrollFade();
  const [whyRef, whyVisible] = useScrollFade();
  const [ctaRef, ctaVisible] = useScrollFade();

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
          <h1 className="about-title">Artist at heart, developer by craft, and invested in every detail.</h1>
          <p className="about-lede">
            I'm Molly, a web designer and developer who builds calm, quietly beautiful sites for nonprofits, mission-driven small businesses, and the people behind them.
          </p>
          <div className="about-ctaRow">
            <Link className="about-buttonPrimary" to="/contact">Work with me</Link>
          </div>
        </div>
      </section>

      <div className="about-divider" />

      {/* ── My Story ── */}
      <section
        ref={storyRef}
        className={`about-section fade-up ${storyVisible ? "is-visible" : ""}`}
      >
        <span className="about-sectionLabel">My story</span>
        <h2 className="about-sectionTitle">How I got here</h2>
        <p className="about-text">
          I've always been an artist at heart. As a little girl, I was endlessly redesigning the world around me — sketching room layouts, moving furniture around just to see how the light would fall differently, chasing that feeling of a space that finally felt <em>right</em>.
        </p>
        <p className="about-text">
          Somewhere along the way, the world convinced me that a life built around beauty and creativity wasn't practical. So I redirected. I wove my way through college and graduate school, collecting degrees in Outdoor Wilderness Therapy, Psychology, and Parks, Recreation, and Tourism Management — drawn to the texture of human connection, the quiet satisfaction of helping people find their footing. I loved the work. But something still felt unfinished.
        </p>
        <p className="about-text">
          When I finally stepped away, I gave myself permission to go looking for it. I spent a year learning to code and design, and something clicked into place almost immediately. Web design turned out to be the thing I didn't know I'd been moving toward all along — a world where aesthetics and logic live side by side, where a well-placed element can guide someone exactly where they need to go, where creativity and care for real people are not just welcome but essential.
        </p>
        {/* <p className="about-text">I haven't looked back since.</p> */}
      </section>

      {/* ── Editorial Layout ── */}
      <section
        ref={whyRef}
        className={`about-editorial fade-up ${whyVisible ? "is-visible" : ""}`}
      >
        <div className="about-editorialRow">
          <div className="about-editorialText">
            <span className="about-sectionLabel">My clients</span>
            <h2 className="about-sectionTitle">Who I build for</h2>
            <p className="about-text">
              I didn't stumble into working with nonprofits and small businesses by accident. Nonprofits are my background, and they have a permanent place in my heart. I know firsthand how hard these organizations work for the people and communities they serve — and I know a strong online presence can make a real difference in their ability to do that work.
            </p>
            <p className="about-text">
              Small businesses are something I feel just as strongly about. I believe they're the lifeblood of this country and its promise of opportunity, and I want to do my part to help that flourish.
            </p>
            <p className="about-text">
              When you work with me, you're not just getting a website. You're getting someone who's genuinely invested in what you're building.
            </p>
          </div>
          <div className="about-editorialImage">
            <img src={laptop} alt="Laptop showing Studio Molly work with dried botanicals" />
          </div>
        </div>

        <div className="about-editorialRow about-editorialRow--reverse">
          <div className="about-editorialImage">
            <img src={ipad} alt="iPad and sketchbook with dried botanicals on a wooden desk" />
          </div>
          <div className="about-editorialText">
            <span className="about-sectionLabel">How I work</span>
            <h2 className="about-sectionTitle">What it's like to work with me</h2>
            <p className="about-text">
              I don't just design from the outside in. When I take on a project, I temporarily become part of your team — looking at every decision through the lens of your mission, your audience, and your goals. Not just through the lens of what looks good.
            </p>
            <p className="about-text">
              Working with me feels like being taken care of. Like your needs were not just met but predicted. Like you were working with a friend who happened to be really good at websites.
            </p>
            <p className="about-text">
              By the end, I want you to feel like something huge just got checked off your list — and that you have something to show for it that you're genuinely proud of.
            </p>
          </div>
        </div>
      </section>

      <div className="about-divider" />

      {/* ── CTA ── */}
      <section
        ref={ctaRef}
        className={`about-section fade-up ${ctaVisible ? "is-visible" : ""}`}
      >
        <div className="about-cta">
          <h2 className="about-sectionTitle">Ready to build something that feels like you?</h2>
          
          <Link className="about-buttonPrimary" to="/contact">Reach out</Link>
        </div>
      </section>

    </main>
  );
};

export default About;
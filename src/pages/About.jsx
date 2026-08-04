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
            I'm Molly, a web designer and developer who builds custom and unique sites for nonprofits, mission-driven small businesses, and the people behind them.
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
         I've always been an artist at heart. As a little girl, I was always reimagining the world around me. Sketching room layouts, photographing the tiniest leaf, rearranging furniture and chasing that feeling of a space and a creation that finally felt <em>right</em>. 
        </p>
        <p className="about-text">
          Somewhere along the way, the world convinced me that a life built around beauty and creativity, a life as an artist, wasn't practical. So I wove my way through college and graduate school, collecting degrees in Outdoor Wilderness Therapy, Psychology, and Parks, Recreation, and Tourism Management. I was drawn to the texture of human connection, the small wins and immense satisfaction of helping people find their footing. Even though I loved the work, something still wasn't sitting right in my heart.
        </p>
        <p className="about-text">
          When I finally stepped away from that path, I gave myself permission to go looking for what actually felt right. I spent a year learning to code and design, and something clicked into place almost immediately. Web design turned out to be the elusive thing I'd been moving toward all along. A world where aesthetics and logic live side by side, where a well-placed element can guide someone exactly where they need to go, where creativity and care for real people are not just welcome but essential.
        </p>
        <p className="about-text">
          I'm so grateful to have found something that speaks to me, and I'm delighted to be serving my community in a way that grounds me.
        </p>
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
              The people I love to serve are those who serve their communities. With a background in nonprofits and local government, I deeply appreciate and know firsthand how hard these organizations work for the people they serve, and I know a strong online presence can make a real difference in their ability to do that work. 
            </p>
            <p className="about-text">
              I feel just as strongly about small businesses. They and the very real people behind them are a big part of the lifeforce of our communities, and I want to do my part to help that flourish. 
            </p>
            <p className="about-text">
              When you work with me, you won’t just get a website. You’ll get someone who's genuinely and wholeheartedly invested in what you're building.
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
              When I take on a project, I temporarily become part of your team. I look at every decision through the lens of your mission, your audience, and your goals; not just through the lens of what looks good (although that's important, too!).
            </p>
            <p className="about-text">
             If you're my client, I want you to feel like you're being taken care of, like your needs were not just met but predicted. Like you were working with a friend who happened to be really good at websites.
            </p>
            <p className="about-text">
              By the end, I want you to feel like something huge just got checked off your list and that you have something to show for it that you're genuinely proud of!
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
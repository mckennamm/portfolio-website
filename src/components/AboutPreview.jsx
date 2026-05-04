import { Link } from "react-router-dom";
import "./AboutPreview.css";
import aboutPhoto from "../assets/molly4.jpeg";
import useScrollFade from "../hooks/useScrollFade";

export default function AboutPreview() {
  const [ref, visible] = useScrollFade();

  return (
    <section
      ref={ref}
      className={`section fade-up ${visible ? "is-visible" : ""}`}
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="aboutCard">
          <div className="aboutCard__text">
            <h2 id="about-heading">About</h2>
            <p>
              I'm Molly, a web designer and front end developer who builds calm, thoughtful websites for small businesses and nonprofits. I focus on creating sites that feel human and intuitive to use, quietly beautiful in their details, and genuinely supportive of the real people and stories behind them, so your website feels like something you can grow with rather than something you launch and leave behind.
            </p>
            <Link className="btnSecondary" to="/about">
              Read more
            </Link>
          </div>

          <div className="aboutCard__media">
            <img
              className="aboutCard__img"
              src={aboutPhoto}
              alt="Molly smiling outdoors"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
import { Link } from "react-router-dom";
import "./AboutPreview.css";

// Put your image in src/assets and import it:
import aboutPhoto from "../assets/molly4.jpeg"; // <-- change filename as needed

export default function AboutPreview() {
  return (
    <section className="section" aria-labelledby="about-heading">
      <div className="container">

        <div className="aboutCard">
          <div className="aboutCard__text">
            <h2 id="about-heading">About</h2>
            <p>
             I’m Molly, a web designer and front end developer who builds calm, thoughtful websites for small businesses, nonprofits, and couples planning their weddings. I focus on creating sites that feel human and intuitive to use, quietly beautiful in their details, and genuinely supportive of the real people and stories behind them, so your website feels like something you can grow with rather than something you launch and leave behind.
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

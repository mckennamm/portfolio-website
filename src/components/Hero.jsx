import "./Hero.css";
import { Link } from "react-router-dom";
import icon from "../assets/two-leaf-icon.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__overlay" />

      <div className="hero__content">
        {/* <img src={icon} alt="Studio Molly leaf icon" className="hero-icon" /> */}
        <h1 className="hero-title">Calm, considered websites for organizations doing meaningful work.</h1>
        {/* <h2 className="hero-description">
          Studio Molly partners with nonprofits, mission-driven small businesses, and practitioners to build websites that actually reflect who they are.
        </h2> */}

        <div className="hero-buttons">
          {/* <Link to="/contact" className="hero-button">Work with me</Link> */}
          <Link to="/services" className="hero-button">See services</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
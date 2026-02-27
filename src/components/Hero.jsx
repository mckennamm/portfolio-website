import "./Hero.css";
import { Link } from "react-router-dom";

import icon from "../assets/two-leaf-icon.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__overlay" />

      <div className="hero__content">
        <img src={icon} alt="Icon" className="hero-icon" />
        <h1 className="hero-title">Let's create something.</h1>
         {/* <h2 className="hero-description">
          Web Designer in Durham, North Carolina
        </h2>  */}

        <Link to="/services" className="hero-button">
          View My Services
        </Link>
      </div>
    </section>
  );
};

export default Hero;
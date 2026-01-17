import "./Hero.css";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__overlay" />

      <div className="hero__content">
        <h1 className="hero-title">Boutique Web Design Studio in Durham, North Carolina</h1>
         <h2 className="hero-description">
          Let's create something.
        </h2> 

        <Link to="/projects" className="hero-button">
          See My Work
        </Link>
      </div>
    </section>
  );
};

export default Hero;
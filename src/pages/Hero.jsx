// Hero.jsx
import './Hero.css';
import heroImage from '../assets/studio-molly-logo-light.png'; // Ensure you have a hero image in the assets folder
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      {/* <div className="hero-image">
        <div className="hero-image-overlay">
          <img src={heroImage} alt="Logo" className="hero-logo" />
        </div>
      </div> */}
      <h1 className="hero-title">Welcome!</h1>
      <p className="hero-description">
        At Studio Molly, we're crafting design with heart and soul. <br/> Let's bring your vision to life.
      </p>


<Link to="/projects" className="hero-button">See My Work</Link>

    </section>
  );
};

export default Hero;

// Hero.jsx
import './Hero.css';
import heroImage from '../assets/studio-molly-logo-light.png'; // Ensure you have a hero image in the assets folder

const Hero = () => {
  return (
    <section className="hero">
      {/* <div className="hero-image">
        <div className="hero-image-overlay">
          <img src={heroImage} alt="Logo" className="hero-logo" />
        </div>
      </div> */}
      <h1 className="hero-title">Welcome to Studio Molly</h1>
      <p className="hero-description">
        Crafting design with heart and soul. Let's bring your vision to life.
      </p>
      <a href="/projects" className="hero-button">See My Work</a>
    </section>
  );
};

export default Hero;

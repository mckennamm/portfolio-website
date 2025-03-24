import logo from "../assets/studio-molly-logo-light.png";

import './Hero.css';

const Hero = () => {
  console.log("Hero component rendered");

  return (
    <section className="hero">
      <div className="overlay">
        <img
          src={logo}
          alt="Homepage"
          className="hero-logo"
        />
      
      {/* Headline */}
      <h1 className="hero-title">Hi, I'm Molly!</h1>

      {/* Short Intro */}
      <p className="hero-subtitle">
        I am a passionate front-end developer creating user-friendly websites.
      </p>

      {/* Detailed Bio */}
      <p className="hero-description">
        A passionate web designer with a love for creating beautiful, functional
        online experiences. With a background in Wilderness & Outdoor Therapy
        and Psychology, I blend creativity with empathy to craft websites that
        not only look great but also connect with people on a deeper level.
        When I'm not designing, you’ll find me exploring the outdoors, creating
        art, or dreaming about my future farm. Let’s build something amazing
        together!
      </p>

      {/* Button */}
     <a href="#projects" className="hero-button">Explore My Work</a>
     </div> 
    </section>
  );
};

export default Hero;

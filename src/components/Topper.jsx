

import logo from "../assets/studio-molly-logo-light.png";
import './Topper.css';

const Topper = () => {
  console.log("Topper component rendered");

  return (
    <section className="topper">
      <div className="overlay">
        <img
          src={logo}
          alt="Topper"
          className="hero-logo"
        />
    </div>
    </section>
  )
}

export default Topper;
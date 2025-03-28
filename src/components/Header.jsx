

import logo from "../assets/studio-molly.svg";
import './Header.css';

const Topper = () => {
  console.log("Header component rendered");

  return (
    <section className="header">
      <div className="overlay">
        <img
          src={logo}
          alt="Header"
          className="header-logo"
        />
    </div>
    </section>
  )
}

export default Topper;
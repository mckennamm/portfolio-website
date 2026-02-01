import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo-new-dark.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <img src={logo} alt="Studio Molly" />
      </Link>

      <ul className="navbar__list">
        {/* <li className="navbar__item"><Link to="/">Home</Link></li> */}
        <li className="navbar__item"><Link to="/about">About</Link></li>
        <li className="navbar__item"><Link to="/services">Services</Link></li>
        <li className="navbar__item"><Link to="/work">Projects</Link></li>
        {/* <li className="navbar__item"><Link to="/blog">Blog</Link></li> */}
        <li className="navbar__item"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

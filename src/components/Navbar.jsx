import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo-new-dark.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="Studio Molly" />
        </Link>

        {/* Desktop links */}
        <ul className="navbar__list">
          <li className="navbar__item"><Link to="/">Home</Link></li>
          <li className="navbar__item"><Link to="/about">Our Story</Link></li>
          <li className="navbar__item"><Link to="/services">Services</Link></li>
          <li className="navbar__item"><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Hamburger button */}
        <button
          className={`navbar__hamburger ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`navbar__drawer ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <ul className="navbar__drawerList">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Our Story</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="navbar__overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
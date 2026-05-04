import './Footer.css';
import footerLogo from '../assets/logo/sm-logo-dark-01.webp';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Explore */}
        <div className="footer-col">
          <h3 className="footer-heading">Explore</h3>

          <a href="/services" className="footer-link">Services</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>


        {/* Logo */}
        <div className="footer-brand">
          <img src={footerLogo} alt="Studio Molly Logo" className="footer-logo" />
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3 className="footer-heading">Get in touch</h3>
          <a href="https://www.instagram.com/studio.molly.designs/" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
          <a href="https://www.linkedin.com/in/molly-mckenna-229b99bb/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Studio Molly. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
import './Footer.css';
import footerLogo from '../assets/logo-new-dark.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo */}
        <div className="footer-brand">
          <img src={footerLogo} alt="Studio Molly Logo" className="footer-logo" />
        </div>

        {/* Explore */}
        <div className="footer-col">
          <h3 className="footer-heading">Explore</h3>
          <a href="https://studiomolly.blogspot.com/" className="footer-link">Blog</a>
          <a href="/services" className="footer-link">Services</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3 className="footer-heading">Get in touch</h3>
          <a href="mailto:studiomolly.webdesign@gmail.com" className="footer-link">studiomolly.webdesign@gmail.com</a>
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
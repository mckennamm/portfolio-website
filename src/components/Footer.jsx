import './Footer.css';
import footerLogo from '../assets/studio-molly-logo-light.png'; // Ensure you have a footer image in the assets folder

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-contact">
          <h3>Contact Me</h3>
          <p>Email: <a href="mailto:studiomolly.webdesign@gmail.com">studiomolly.webdesign@gmail.com!</a></p>
          <p>Instagram: <a href="https://instagram.com/studio.molly" target="_blank" rel="noopener noreferrer">@studio.molly.designs</a></p>
        </div>

          <img src={footerLogo} alt="Studio Molly Logo" className="footer-logo" />
        

        <div className="footer-links">
          <h3>Explore</h3>
          <a href="/blog" className="footer-link">Visit My Blog</a>
          <a href="/projects"
            className="footer-link">Check Out My Projects</a>
          <p className="footer-bottom">&copy; {new Date().getFullYear()} Studio Molly. All rights reserved.</p>
        </div>
       
        </div>
    </footer>
  );
};

export default Footer;

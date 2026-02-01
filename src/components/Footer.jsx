import './Footer.css';
import footerLogo from '../assets/logo-new-dark.png'; // Ensure you have a footer image in the assets folder

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        

        <div className="footer-links">
          <h3>Explore</h3>
          <a href="/blog" className="footer-link">Visit My Blog</a>
          <a href="/projects"
            className="footer-link">Check Out My Projects</a>
          <p className="footer-bottom">&copy; {new Date().getFullYear()} Studio Molly. All rights reserved.</p>
        </div>
        <img src={footerLogo} alt="Studio Molly Logo" className="footer-logo" />

        <div className="footer-contact">
          <h3>Contact</h3>
          <p><span className="footer-span">Email:</span> <a href="mailto:studiomolly.webdesign@gmail.com">studiomolly.webdesign@gmail.com</a></p>
          <p><span className="footer-span">Instagram:</span> <a href="https://www.instagram.com/studio.molly.designs/" target="_blank" rel="noopener noreferrer">@studio.molly.designs</a></p>
          <p><span className="footer-span">LinkedIn:</span> <a href="https://www.linkedin.com/in/molly-mckenna-229b99bb/" target="_blank" rel="noopener noreferrer">Molly's LinkedIn</a></p>
          <p><span className="footer-span">Blog:</span> <a href="/blog">Visit My Blog</a></p>
        </div>
        </div>
  
    </footer>
  );
};

export default Footer;

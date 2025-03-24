import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <h3>Contact Me</h3>
          <p>Email: <a href="mailto:molly.mckenna88@gmail.com">contact me here!</a></p>
          <p>Instagram: <a href="https://instagram.com/studio.molly" target="_blank" rel="noopener noreferrer">@studio.molly.designs</a></p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <a href="/blog" className="footer-link">Visit My Blog</a>
          <a href="/projects"
            className="footer-link">Check Out My Projects</a>
            
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Studio Molly. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

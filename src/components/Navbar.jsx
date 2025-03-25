import { Link } from 'react-router-dom'

import './Navbar.css'   

import logo from '../assets/studio-molly-logo.png'

const Navbar = () => {
    return (
        <nav className="navbar">
        <ul className="navbar__list">
            
          <li className="navbar__item">
            <Link to="/">Home</Link> 
          </li>
          <li className="navbar__item">
            <Link to="/about">About</Link> 
          </li> 
          <li className="navbar__item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="navbar__item">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="navbar__item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
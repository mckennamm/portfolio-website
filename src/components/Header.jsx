import { Link } from 'react-router-dom'

import './Header.css'   

import logo from '../assets/studio-molly-logo.png'

const Header = () => {
    return (
        <nav className="navbar">
        <ul className="navbar__list">
            
          <li className="navbar__item">
            <Link to="/home">Home</Link> 
          </li>
          <li className="navbar__item">
            <Link to="/about">About</Link> 
          </li> 
          <li className="navbar__item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="navbar__item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Header;
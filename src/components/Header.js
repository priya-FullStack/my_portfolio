import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    // Close the menu when a link is clicked
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="left-side">
        <h1 className="portfolio-title">PRIYA V</h1>
      </div>
      <div className="right-side">
        <nav>
          <div className="menu-icon" onClick={toggleMenu}>
            ☰ {/* Hamburger icon */}
          </div>
          <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/about" className="nav-link" onClick={handleLinkClick}>About Me</Link></li>
            <li><Link to="/skills" className="nav-link" onClick={handleLinkClick}>Skills</Link></li>
            <li><Link to="/projects" className="nav-link" onClick={handleLinkClick}>Projects</Link></li>
            <li><Link to="/contact" className="nav-link" onClick={handleLinkClick}>Contact</Link></li>
          </ul>
          {/* Overlay that will close the menu when clicked */}
          {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </nav>
      </div>
    </header>
  );
};

export default Header;

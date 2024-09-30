import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={leftSide}>
        <h1 style={portfolioTitleStyle}>PRIYA V</h1>
      </div>
      <div style={rightSide}>
        <nav>
          <ul style={navListStyle}>
            <li><Link to="/" style={linkStyle}>Home</Link></li>
            <li><Link to="/about" style={linkStyle}>About Me</Link></li>
            <li><Link to="/skills" style={linkStyle}>Skills</Link></li>
            <li><Link to="/projects" style={linkStyle}>Projects</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#282c34',
  color: 'white',
  width: '100%',
};

// Left side (My Portfolio)
const leftSide = {
  marginLeft: '20px',
};

// Right side (navigation links)
const rightSide = {
  marginRight: '20px',
};

// Font size and color for the portfolio title
const portfolioTitleStyle = {
  fontSize: '2rem',
  color: 'white', // Light blue color
};

// Navigation link styles
const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '20px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.2rem',
  transition: 'color 0.3s',
};

export default Header;

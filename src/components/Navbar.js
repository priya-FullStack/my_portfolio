import React from 'react';

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <ul style={navListStyle}>
        <li><a href="#home" style={linkStyle}>Home</a></li>
        <li><a href="#about" style={linkStyle}>About</a></li>
        <li><a href="#skills" style={linkStyle}>Skills</a></li>
        <li><a href="#projects" style={linkStyle}>Projects</a></li>
        <li><a href="#contact" style={linkStyle}>Contact</a></li>
      </ul>
    </nav>
  );
};

// Navbar Styles
const navStyle = {
  position: 'fixed',  // Keeps the navbar fixed on scroll
  top: 0,
  width: '100%',
  backgroundColor: '#333',
  padding: '10px 0',
  zIndex: 1000,  // Ensures navbar stays on top
};

// Navbar list styles
const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  margin: 0,
  padding: 0,
};

// Link styles
const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '18px',
  padding: '10px 15px',
};

// Responsive styles using media queries
const responsiveStyles = `
  @media (max-width: 768px) {
    nav {
      position: relative;
      top: 0;
      width: 100%;
      background-color: #333;
      padding: 10px;
    }

    ul {
      flex-direction: column;
      align-items: center;
      gap: 10px;
      padding: 0;
    }

    ul li {
      margin: 5px 0;
    }

    a {
      font-size: 16px;
      padding: 8px 12px;
    }
  }

  @media (max-width: 480px) {
    a {
      font-size: 14px;
      padding: 6px 10px;
    }
  }
`;

// Inject the responsive styles into the document head
const style = document.createElement('style');
style.innerHTML = responsiveStyles;
document.head.appendChild(style);

export default Navbar;

import React from 'react';

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <ul style={navListStyle}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  );
};

const navStyle = {
  position: 'absolute', // Stays at the top
  top: 0,
  width: '100%',
  backgroundColor: '#333',
  padding: '10px 0',
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
};

export default Navbar;

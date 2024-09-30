import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p> Contact</p>
      <p>Email: priya1110@gmail.com.com | LinkedIn: linkedin.com/in/priya</p>
    </footer>
  );
};

const footerStyle = {
  textAlign: 'center',
  padding: '10px',
  backgroundColor: '#282c34',
  color: 'white',
  width: '100%',
  marginTop: 'auto', // Push the footer to the bottom
};

export default Footer;

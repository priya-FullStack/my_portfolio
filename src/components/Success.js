// Success.js
import React from 'react';

const Success = () => {
  return (
    <div style={successStyle}>
      <h2>Success!</h2>
      <p>Your message has been sent successfully. We'll get back to you soon!</p>
    </div>
  );
};

// Styles
const successStyle = {
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '10px',
  maxWidth: '600px',
  margin: '0 auto',
  textAlign: 'center',
};

export default Success;

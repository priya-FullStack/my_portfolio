import React from 'react';
import profileImage from '../assets/profile.jpg'; // Import the local image

const Home = () => {
  return (
    <div style={homeStyle}>
      <div style={textStyle}>
        <h2 style={headingStyle}>Welcome to My Portfolio!</h2>
        <br />
        {/** Mapping through paragraphs for cleaner code */}
        {[
          "I'm Priya, a passionate Frontend Developer dedicated to crafting responsive and visually appealing web applications. I specialize in using modern web technologies to create user-friendly interfaces that enhance the overall user experience.",
          "Currently, I am a third-year student in Computer Science and Engineering, where I have honed my skills in HTML, CSS, JavaScript, and frameworks like React.js. I thrive in collaborative environments and am always eager to learn and explore new technologies.",
          "Feel free to navigate through my portfolio to learn more about my projects and skills. I look forward to connecting and collaborating on innovative ideas!"
        ].map((text, index) => (
          <p key={index} style={paragraphStyle}>
            {text}
          </p>
        ))}
      </div>
      <img 
        src={profileImage}  
        alt="Profile" 
        style={imageStyle} 
        onMouseOver={() => (imageStyle.transform = imageHoverStyle.transform)} // Scale image on hover
        onMouseOut={() => (imageStyle.transform = 'scale(1)')} // Reset scale
      />
    </div>
  );
};

// Styles for the home section
const homeStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '40px 20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Slightly more shadow for depth
  flexWrap: 'wrap',
  overflow: 'hidden',
  transition: 'background-color 0.3s ease-in-out', // Smooth transition for background color
};

// Styles for the text section
const textStyle = {
  flex: 1,
  marginRight: '20px',
  minWidth: '300px',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '1rem',
  maxWidth: '600px',
};

// Styles for the profile image
const imageStyle = {
  borderRadius: '50%',
  width: '280px',
  height: '280px',
  objectFit: 'cover',
  marginTop: '0',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease-in-out', // Add smooth transition for image
};

// Animate image on hover
const imageHoverStyle = {
  transform: 'scale(1.05)', // Scale the image slightly on hover
};

// Add heading style with animation
const headingStyle = {
  fontFamily: 'Poppins, sans-serif',
  fontSize: '2.5rem', // Make the heading larger
  fontWeight: '600',
  marginBottom: '16px',
  opacity: '0', // Start with opacity 0 for animation
  animation: 'fadeIn 1s forwards', // Fade-in animation
  transition: 'opacity 0.5s ease-in-out', // Smooth transition for opacity
};

// Keyframes for fade-in animation
const fadeIn = `
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

// Styles for paragraph spacing
const paragraphStyle = {
  marginBottom: '16px',
  lineHeight: '1.6',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '1rem',
  transition: 'color 0.3s ease-in-out', // Smooth transition for color changes
};

// Add the fadeIn keyframes to the global CSS
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(fadeIn, styleSheet.cssRules.length);

export default Home;

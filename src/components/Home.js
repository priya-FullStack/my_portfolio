import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animations
import profileImage from '../assets/profile.jpg'; // Import the local image

const Home = () => {
  return (
    <div style={homeStyle}>
      <motion.div 
        initial={{ opacity: 0, x: -50 }} // Start from the left
        animate={{ opacity: 1, x: 0 }}   // Animate to original position
        transition={{ duration: 0.5 }}     // Animation duration
        style={textStyle}
      >
        <h2>Welcome to My Portfolio!</h2>
        <p>
          I'm Priya, a passionate Frontend Developer dedicated to crafting 
          responsive and visually appealing web applications. I specialize 
          in using modern web technologies to create user-friendly interfaces 
          that enhance the overall user experience.
        </p>
        <p>
          Currently, I am a third-year student in Computer Science and Engineering, 
          where I have honed my skills in HTML, CSS, JavaScript, and frameworks like 
          React.js. I thrive in collaborative environments and am always eager to learn 
          and explore new technologies.
        </p>
        <p>
          Feel free to navigate through my portfolio to learn more about my projects 
          and skills. I look forward to connecting and collaborating on innovative ideas!
        </p>
      </motion.div>
      <motion.img 
        src={profileImage}  // Use the imported image
        alt="Profile" 
        style={imageStyle} 
        initial={{ opacity: 0, scale: 0.8 }} // Start with smaller size
        animate={{ opacity: 1, scale: 1 }}    // Animate to original size
        transition={{ duration: 0.5 }}          // Animation duration
      />
    </div>
  );
};

// Style for the home section
const homeStyle = {
  display: 'flex',             // Use flexbox for layout
  alignItems: 'center',        // Center items vertically
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

// Style for the text section
const textStyle = {
  flex: 1,                    // Allow text to take available space
  marginRight: '20px',        // Add space between text and image
};

// Style for the profile image
const imageStyle = {
  borderRadius: '50%',         // Make the image circular
  width: '300px',              // Set width to be larger
  height: '300px',             // Set height to be larger
};

export default Home;

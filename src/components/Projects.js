import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animations

const Projects = () => {
  return (
    <div style={projectsStyle}>
      <h2>My Projects</h2>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slight downward movement
        animate={{ opacity: 1, y: 0 }}   // Animate to full opacity and original position
        transition={{ duration: 0.5 }}    // Animation duration
        style={projectItemStyle}
      >
        <h3>Netflix Clone</h3>
        <p>
          I developed a clone of the popular streaming platform Netflix using React.js and Firebase. 
          This project involved creating a responsive user interface, implementing user authentication, 
          and integrating the TMDB API to fetch movie data. Users can browse movies, create an account, 
          and add their favorites to a personal list.
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slight downward movement
        animate={{ opacity: 1, y: 0 }}   // Animate to full opacity and original position
        transition={{ duration: 0.5, delay: 0.2 }} // Add a slight delay for the second item
        style={projectItemStyle}
      >
        <h3>Inventory Management System</h3>
        <p>
          I created an Inventory Management System using NetBeans, which allows users to manage stock, 
          suppliers, and sales. This application features a user-friendly interface with functionalities 
          such as adding new products, updating existing inventory, and generating sales reports. 
          It aims to streamline the inventory process for businesses.
        </p>
      </motion.div>
    </div>
  );
};

// Styles
const projectsStyle = {
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const projectItemStyle = {
  marginBottom: '20px',
};

export default Projects;

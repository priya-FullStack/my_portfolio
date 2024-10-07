import React from 'react';
import { motion } from 'framer-motion'; // Make sure to install framer-motion

const AboutMe = () => {
  // Define animation variants for the text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} // Initial position for the container
      animate={{ opacity: 1, y: 0 }}   // Final position for the container
      transition={{ duration: 0.5 }}     // Animation duration for the container
      style={aboutStyle}
    >
      <motion.h2 
        initial="hidden" 
        animate="visible" 
        variants={textVariants} 
        transition={{ duration: 0.5, delay: 0.2 }} // Delay for the heading
        style={headingStyle}
      >
        About Me
      </motion.h2>
      {/** Mapping through paragraphs for cleaner code */}
      {[
        "Hi! I'm Priya, currently pursuing my Bachelor's degree in Computer Science and Engineering. As a third-year student in my fifth semester, I have developed a strong foundation in software development and a keen interest in full-stack technologies.",
        "My journey in the tech world began with a fascination for programming and problem-solving. I have gained experience in various web development frameworks, particularly focusing on full-stack development. I recently completed an internship where I worked on building responsive web applications using modern technologies. This experience solidified my understanding of both front-end and back-end development, and I enjoy creating seamless user experiences.",
        "In addition to web development, I have a basic understanding of embedded systems. I find the intersection of hardware and software fascinating, and I am eager to explore this field further. My curiosity drives me to learn about microcontrollers, IoT devices, and how to integrate them with software solutions.",
        "I am actively seeking opportunities to apply my skills in full-stack development while continuing to expand my knowledge in embedded systems. I believe that technology has the power to transform lives, and I am excited about the prospect of contributing to innovative projects that make a positive impact.",
        "In my free time, I enjoy participating in coding challenges, contributing to open-source projects, and staying updated on the latest industry trends. I look forward to connecting with like-minded individuals and collaborating on projects that push the boundaries of technology. Thank you for visiting my portfolio!"
      ].map((text, index) => (
        <motion.p 
          key={index}
          initial="hidden" 
          animate="visible" 
          variants={textVariants} 
          transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }} // Delay for each paragraph
          style={paragraphStyle}
        >
          {text}
        </motion.p>
      ))}
    </motion.div>
  );
};

// Style for the about me section
const aboutStyle = {
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  maxWidth: '800px', // Add max-width for better responsiveness
  margin: '20px auto', // Center the container with margin auto
};

// Consistent typography for heading
const headingStyle = {
  textAlign: 'center', // Center the heading
  fontFamily: 'Poppins, sans-serif', // Use consistent font
  fontSize: '2rem', // Adjust font size for emphasis
  fontWeight: '600', // Bold weight for heading
  marginBottom: '20px', // Spacing below heading
  color: '#333', // Darker color for better contrast
  opacity: '0', // Start with opacity 0 for animation
  animation: 'fadeIn 1s forwards', // Fade-in animation
};

// Styles for paragraph spacing and typography
const paragraphStyle = {
  lineHeight: '1.6', // Increase line height for readability
  marginBottom: '15px', // Spacing between paragraphs
  fontFamily: 'Poppins, sans-serif', // Consistent font across text
  fontSize: '1rem', // Set font size for paragraphs
  color: '#555', // Softer color for paragraphs
  transition: 'color 0.3s ease-in-out', // Smooth transition for color changes
};

// Keyframes for fade-in animation (added globally)
const fadeIn = `
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

// Add the fadeIn keyframes to the global CSS
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(fadeIn, styleSheet.cssRules.length);

export default AboutMe;

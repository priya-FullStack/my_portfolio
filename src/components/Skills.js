import React from 'react';
import { motion } from 'framer-motion'; // Make sure to install framer-motion

const Skills = () => {
  // Define animation variants for the container and list items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }, // Stagger children animations
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },  // Initial hidden state
    visible: { opacity: 1, y: 0 },   // Final visible state
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={skillsStyle}
    >
      <h2 style={headingStyle}>My Skills</h2>
      <p style={descriptionStyle}>
        As a third-year Computer Science and Engineering student, I have developed a diverse set of skills 
        that prepare me for a successful career as a Full-Stack Developer. Here are some of the key technologies 
        and tools I am proficient in:
      </p>
      <motion.ul style={listStyle}>
        <motion.li variants={itemVariants} style={itemStyle}><strong>Programming Languages:</strong> JavaScript, Python, Java</motion.li>
        <motion.li variants={itemVariants} style={itemStyle}><strong>Web Development:</strong> HTML, CSS, React.js, Django</motion.li>
        <motion.li variants={itemVariants} style={itemStyle}><strong>Database Management:</strong> MySQL</motion.li>
        <motion.li variants={itemVariants} style={itemStyle}><strong>Version Control:</strong> Git, GitHub</motion.li>
        <motion.li variants={itemVariants} style={itemStyle}><strong>Embedded Systems:</strong> Basic knowledge of microcontrollers and IoT concepts</motion.li>
      </motion.ul>
      <p style={descriptionStyle}>
        In addition to technical skills, I have also developed soft skills that are essential for collaboration 
        and effective communication in team environments. I am a quick learner, adaptable, and always eager 
        to take on new challenges.
      </p>
      <p style={descriptionStyle}>
        I believe that continuous learning is vital in the tech industry. I regularly engage in online courses 
        and tutorials to stay updated with the latest technologies and best practices. My goal is to leverage 
        my skills to contribute to innovative projects that make a difference.
      </p>
    </motion.div>
  );
};

// Styles
const skillsStyle = {
  padding: '40px', // Increased padding for better spacing
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Slightly deeper shadow for a lifted effect
  maxWidth: '800px', // Added max width for better layout
  margin: '0 auto', // Center the container
};

const headingStyle = {
  fontSize: '2rem',
  textAlign: 'center',
  marginBottom: '20px',
  color: '#333',
  fontWeight: '600',
};

const descriptionStyle = {
  fontSize: '1rem',
  textAlign: 'justify',
  color: '#555',
  lineHeight: '1.6', // Improved line height for readability
  marginBottom: '15px',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
  margin: '20px 0', // Add margin for spacing
};

const itemStyle = {
  background: '#fff',
  padding: '10px 15px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Light shadow for list items
  transition: 'transform 0.3s', // Transition for hover effect
};

export default Skills;

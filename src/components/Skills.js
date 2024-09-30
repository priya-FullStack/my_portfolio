import React from 'react';
import { motion } from 'framer-motion'; // Make sure to install framer-motion

const Skills = () => {
  // Define animation variants for the container and list items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }, // Stagger children animations
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
      <h2>My Skills</h2>
      <p>
        As a third-year Computer Science and Engineering student, I have developed a diverse set of skills 
        that prepare me for a successful career as a Full-Stack Developer. Here are some of the key technologies 
        and tools I am proficient in:
      </p>
      <motion.ul style={{ listStyleType: 'none', padding: 0 }}>
        <motion.li variants={itemVariants}><strong>Programming Languages:</strong> JavaScript, Python, Java</motion.li>
        <motion.li variants={itemVariants}><strong>Web Development:</strong> HTML, CSS, React.js, Django</motion.li>
        <motion.li variants={itemVariants}><strong>Database Management:</strong> MySQL</motion.li>
        <motion.li variants={itemVariants}><strong>Version Control:</strong> Git, GitHub</motion.li>
        <motion.li variants={itemVariants}><strong>Embedded Systems:</strong> Basic knowledge of microcontrollers and IoT concepts</motion.li>
      </motion.ul>
      <p>
        In addition to technical skills, I have also developed soft skills that are essential for collaboration 
        and effective communication in team environments. I am a quick learner, adaptable, and always eager 
        to take on new challenges.
      </p>
      <p>
        I believe that continuous learning is vital in the tech industry. I regularly engage in online courses 
        and tutorials to stay updated with the latest technologies and best practices. My goal is to leverage 
        my skills to contribute to innovative projects that make a difference.
      </p>
    </motion.div>
  );
};

// Style for the skills section
const skillsStyle = {
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

export default Skills;

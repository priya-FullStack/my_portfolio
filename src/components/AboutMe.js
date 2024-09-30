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
      >
        About Me
      </motion.h2>
      <motion.p 
        initial="hidden" 
        animate="visible" 
        variants={textVariants} 
        transition={{ duration: 0.5, delay: 0.4 }} // Delay for the first paragraph
      >
        Hi! I'm Priya, currently pursuing my Bachelor's degree in Computer Science and Engineering. 
        As a third-year student in my fifth semester, I have developed a strong foundation in software 
        development and a keen interest in full-stack technologies.
      </motion.p>
      <motion.p 
        initial="hidden" 
        animate="visible" 
        variants={textVariants} 
        transition={{ duration: 0.5, delay: 0.6 }} // Delay for the second paragraph
      >
        My journey in the tech world began with a fascination for programming and problem-solving. 
        I have gained experience in various web development frameworks, particularly focusing on full-stack 
        development. I recently completed an internship where I worked on building responsive web applications 
        using modern technologies. This experience solidified my understanding of both front-end and back-end 
        development, and I enjoy creating seamless user experiences.
      </motion.p>
      <motion.p 
        initial="hidden" 
        animate="visible" 
        variants={textVariants} 
        transition={{ duration: 0.5, delay: 0.8 }} // Delay for the third paragraph
      >
        In addition to web development, I have a basic understanding of embedded systems. I find the intersection 
        of hardware and software fascinating, and I am eager to explore this field further. My curiosity drives me 
        to learn about microcontrollers, IoT devices, and how to integrate them with software solutions.
      </motion.p>
      <motion.p 
        initial="hidden" 
        animate="visible" 
        variants={textVariants} 
        transition={{ duration: 0.5, delay: 1.0 }} // Delay for the fourth paragraph
      >
        I am actively seeking opportunities to apply my skills in full-stack development while continuing to 
        expand my knowledge in embedded systems. I believe that technology has the power to transform lives, 
        and I am excited about the prospect of contributing to innovative projects that make a positive impact.
      </motion.p>
      <motion.p 
        initial="hidden" 
        animate="visible" 
        variants={textVariants} 
        transition={{ duration: 0.5, delay: 1.2 }} // Delay for the fifth paragraph
      >
        In my free time, I enjoy participating in coding challenges, contributing to open-source projects, 
        and staying updated on the latest industry trends. I look forward to connecting with like-minded individuals 
        and collaborating on projects that push the boundaries of technology. Thank you for visiting my portfolio!
      </motion.p>
    </motion.div>
  );
};

// Style for the about me section
const aboutStyle = {
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

export default AboutMe;

import React from 'react';
import { motion } from 'framer-motion';

const MainContent = () => {
  return (
    <div style={contentStyle}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>About Me</h2>
        <p>Hi! I'm Priya, a Full-Stack Developer and Embedded Systems Engineer.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h2>Projects</h2>
        <ul>
          <li>Project 1: Web Development</li>
          <li>Project 2: Embedded Systems</li>
        </ul>
      </motion.div>
    </div>
  );
};

const contentStyle = {
  padding: '50px',
  textAlign: 'center',
};

export default MainContent;

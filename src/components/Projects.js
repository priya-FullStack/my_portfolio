import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectData = [
    {
      title: "Netflix Clone",
      description: "This project is a replica of Netflix, built using React.js and Firebase. It features a sleek user interface, user authentication, and dynamic movie listings fetched from the TMDB API. Users can browse, search, and save their favorite movies to a personal watchlist.",
      imageUrl: "/Screenshot 2024-10-01 113607.png",
      githubUrl: "https://github.com/priya-FullStack/netflix" // Online image
    },
    {
      title: "Inventory Management System",
      description: "Developed using NetBeans, this application streamlines inventory tracking for businesses. It allows users to add, update, and remove products, manage suppliers, and generate detailed sales reports. The user-friendly interface makes it easy for non-technical users to navigate.",
      imageUrl: "/Screenshot 2024-10-01 113344.png",
      githubUrl: "https://github.com/priya-FullStack/portfolio" // Online image
    },
    {
      title: "Exam Registration Form",
      description: "This form allows students to efficiently register for exams online. Built with React.js, it features real-time validation, document uploads, and a smooth interface. Students can select their desired courses, review their selections, and submit their applications seamlessly.",
      imageUrl: "/Screenshot 2024-10-01 123216.png",
      githubUrl: "https://github.com/priya-FullStack/form" // Online image
    },
    {
      title: "Portfolio",
      description: "This is my personal portfolio website, showcasing my skills, projects, and experience as a developer. It features a responsive design, project highlights, and a contact form, allowing potential employers and clients to reach out to me easily.",
      imageUrl: "/Screenshot 2024-10-01 111936.png",
      githubUrl: "https://github.com/priya-FullStack/project_1" // Local image
    },
  ];

  return (
    <div style={projectsStyle}>
      <h2>My Projects</h2>

      {/* Render project items in a grid layout */}
      <div style={gridStyle}>
        {projectData.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}  
            transition={{ duration: 0.5, delay: index * 0.2 }} 
            style={projectItemStyle}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {/* Wrap the image in a motion.img for animation */}
            <motion.img 
              src={project.imageUrl} 
              alt={project.title} 
              style={imageStyle}
              initial={{ opacity: 0, scale: 0.9 }} // Initial state for image animation
              animate={{ opacity: 1, scale: 1 }}   // Animate to full opacity and scale
              transition={{ duration: 0.5, delay: index * 0.2 }} // Smooth transition
            />
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={githubLinkStyle}>
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
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
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  background: '#fff',
  overflow: 'hidden', // Ensures that image fits well within the card
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center align content
};

const imageStyle = {
  width: '100%',
  height: 'auto', // Allow the height to adjust automatically
  maxHeight: '350px', // Increased maximum height for larger image size
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  objectFit: 'contain', // Ensures the entire image is visible without cropping
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)', // 2 items per row
  gap: '20px', // Space between grid items
};

const githubLinkStyle = {
  marginTop: '10px',
  textDecoration: 'none',
  color: 'black', // Link color
  fontWeight: 'bold',
};

export default Projects;

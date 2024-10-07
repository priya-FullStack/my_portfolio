import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Projects = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  const projectData = [
    {
      title: "Netflix Clone",
      description: "This project is a replica of Netflix, built using React.js and Firebase. It features a sleek user interface, user authentication, and dynamic movie listings fetched from the TMDB API. Users can browse, search, and save their favorite movies to a personal watchlist.",
      imageUrl: "/Screenshot 2024-10-01 113607.png",
      githubUrl: "https://github.com/priya-FullStack/netflix"
    },
    {
      title: "Inventory Management System",
      description: "Developed using NetBeans, this application streamlines inventory tracking for businesses. It allows users to add, update, and remove products, manage suppliers, and generate detailed sales reports. The user-friendly interface makes it easy for non-technical users to navigate.",
      imageUrl: "/Screenshot 2024-10-01 113344.png",
      githubUrl: "https://github.com/priya-FullStack/portfolio"
    },
    {
      title: "Exam Registration Form",
      description: "This form allows students to efficiently register for exams online. Built with React.js, it features real-time validation, document uploads, and a smooth interface. Students can select their desired courses, review their selections, and submit their applications seamlessly.",
      imageUrl: "/Screenshot 2024-10-01 123216.png",
      githubUrl: "https://github.com/priya-FullStack/form"
    },
    {
      title: "Portfolio",
      description: "This is my personal portfolio website, showcasing my skills, projects, and experience as a developer. It features a responsive design, project highlights, and a contact form, allowing potential employers and clients to reach out to me easily.",
      imageUrl: "/Screenshot 2024-10-01 111936.png",
      githubUrl: "https://github.com/priya-FullStack/project_1"
    },
  ];

  const handleImageClick = (index) => {
    navigate(`/project/${index}`);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={projectsStyle}>
      <h2 style={headingStyle}>My Projects</h2>
      <div style={isMobile ? mobileGridStyle : gridStyle}>
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            style={projectItemStyle}
          >
            <h3 style={projectTitleStyle}>{project.title}</h3>
            <p style={projectDescriptionStyle}>{project.description}</p>
            <motion.img
              src={project.imageUrl}
              alt={project.title}
              style={imageStyle}
              onClick={() => handleImageClick(index)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            />
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={githubLinkStyle}
              whileHover={{ scale: 1.05 }} // Animation on hover
              transition={{ duration: 0.3 }}
            >
              View on GitHub
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Styles
const projectsStyle = {
  padding: '40px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '1200px', // Max width for better layout
  margin: '0 auto', // Center the container
};

const headingStyle = {
  fontSize: '2rem',
  textAlign: 'center',
  marginBottom: '30px',
  color: '#333',
  fontWeight: '600',
};

const projectItemStyle = {
  marginBottom: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  background: '#fff',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '15px', // Added padding
  transition: 'transform 0.3s',
};

const projectTitleStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  margin: '10px 0',
  color: '#222',
};

const projectDescriptionStyle = {
  fontSize: '1rem',
  textAlign: 'center',
  color: '#555',
  marginBottom: '15px',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  maxHeight: '350px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  objectFit: 'contain',
  cursor: 'pointer', // Pointer cursor for images
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '20px',
};

const mobileGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '20px',
};

const githubLinkStyle = {
  marginTop: '10px',
  textDecoration: 'none',
  color: 'black', // Changed link color
  fontWeight: 'bold',
  fontSize: '1rem',
};

export default Projects;

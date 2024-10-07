import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectGallery from './components/ProjectGallery';
import Success from './components/Success';
import Contact from './components/Contact';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div style={appStyle}>
        {/* Use the Navbar component here */}
        <Header />
        <main style={mainStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectGallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </main>
        <Footer />
      </div>
      {injectResponsiveStyles()} {/* Call function to inject responsive styles */}
    </Router>
  );
};

// Function to inject responsive styles
const injectResponsiveStyles = () => {
  const responsiveCSS = `
    @media (max-width: 1200px) {
      main {
        padding: 15px;
      }
    }

    @media (max-width: 992px) {
      header, footer {
        text-align: center;
      }
      main {
        padding: 10px;
      }
    }

    @media (max-width: 768px) {
      .nav-link {
        display: block;
        margin: 10px 0;
      }
      header {
        text-align: center;
      }
    }

    @media (max-width: 576px) {
      header h1 {
        font-size: 24px;
      }
      footer {
        font-size: 14px;
      }
      main {
        padding: 5px;
      }
    }
  `;

  const style = document.createElement('style');
  style.innerHTML = responsiveCSS;
  document.head.appendChild(style);
};

// Styles for the main app layout
const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  fontFamily: 'Arial, sans-serif',
};

const mainStyle = {
  flex: 1,
  padding: '20px',
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%',
  overflow: 'hidden', // Prevent overflow
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';       // Ensure this matches the file name
import AboutMe from './components/AboutMe'; // Ensure this matches the file name
import Skills from './components/Skills';   // Ensure this matches the file name
import Projects from './components/Projects'; // Ensure this matches the file name

const App = () => {
  return (
    <Router>
      <div style={appStyle}>
        <Header />
        <main style={mainStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

// Flexbox style to ensure the footer remains at the bottom
const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const mainStyle = {
  flex: 1,
  padding: '20px',
};

export default App;

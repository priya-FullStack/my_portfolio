import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectGallery = () => {
  const { id } = useParams(); // Get the project ID from URL

  const galleryData = [
    [
      "https://th.bing.com/th/id/OIP.vuU8yyfVFa570KlnWkSDcAHaEK?w=294&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      "https://tse4.mm.bing.net/th?id=OIP.SyLLrOVJoKwufO3ecSwacwHaEK&pid=Api&P=0&h=180",
      "https://shots.codepen.io/username/pen/XYxyeY-800.jpg?version=1530122201",
    ],
    [
      "https://tse2.mm.bing.net/th?id=OIP.rgp8SxdqEkH-9WoHZ8Hi3wHaEK&pid=Api&P=0&h=180",
      "/Screenshot 2024-10-03 135511.png",
    ],
    [
      "https://cdn.marketing123.123formbuilder.com/wp-content/uploads/2020/12/Exam-Registration-Form-3348871-1.jpg",
    ],
    [
      "/Screenshot 2024-10-03 135735.png",
      "/Screenshot 2024-10-03 135721.png",
    ],
  ];

  const selectedGallery = galleryData[id]; // Get the gallery based on project ID

  return (
    <div style={galleryContainerStyle}>
      <h2>Project Gallery</h2>
      <div style={galleryGridStyle}>
      {selectedGallery.map((imageUrl, index) => (
  <img
    key={index}
    src={imageUrl}
    alt={`Project Gallery Image ${index + 1}`} // Updated alt text
    style={galleryImageStyle}
  />
))}

      </div>
      <div style={footerStyle}>
        <p></p> {/* Replace with your footer content */}
      </div>
    </div>
  );
};

// Styles for the gallery page
const galleryContainerStyle = {
  display: 'flex', // Enable flexbox for layout
  flexDirection: 'column',
  justifyContent: 'space-between', // Push footer to bottom
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  height: '100%', // Ensure it takes the full height of the parent
};

const galleryGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)', // Three columns in the grid
  gap: '10px',
};

const galleryImageStyle = {
  width: '100%',
  height: '200px', // Set a fixed height for uniformity
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  objectFit: 'contain', // Ensures the entire image is visible without cropping
};

const footerStyle = {
  textAlign: 'center', // Center the footer content
  marginTop: '20px', // Add some space above the footer
};

export default ProjectGallery;

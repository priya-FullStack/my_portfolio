import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    const formErrors = validateForm();
    console.log('Form Data:', formData); // Log the form data
    if (Object.keys(formErrors).length === 0) {
      // Sending email with EmailJS
      emailjs.send(
        'service_7xqts9e', 
        'template_sk59vsi', 
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }, 
        'fmeBm-wCnBIPiw8WE'
      )
        .then((result) => {
          console.log('Email sent successfully:', result.text);
          setSubmitted(true);
          setFormData({ name: '', email: '', phone: '', message: '' });
          setErrors({});
          navigate('/success'); // Redirect to the success page
        }, (error) => {
          console.error('EmailJS error:', error);
        });
    } else {
      setErrors(formErrors);
      console.log('Form has errors:', formErrors);
    }
  };

  return (
    <div style={contactStyle}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        style={headingStyle}
      >
        Contact Us
      </motion.h2>
      <br />
      {submitted && <p style={successMessageStyle}>Thank you for reaching out! We'll get back to you soon.</p>}
      <motion.form 
        onSubmit={handleSubmit} 
        style={formContainerStyle}
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/** Map through form fields to reduce redundancy */}
        {[
          { label: 'Name', name: 'name', type: 'text', placeholder: 'Enter your name' },
          { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter your email' },
          { label: 'Phone', name: 'phone', type: 'tel', placeholder: 'Enter your phone number' },
          { label: 'Message', name: 'message', type: 'textarea', placeholder: 'Enter your message' }
        ].map((field, index) => (
          <motion.div 
            key={index} 
            style={formGroupStyle} 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
          >
            <label style={labelStyle}>{field.label}:</label>
            {field.type === 'textarea' ? (
              <textarea
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                style={textareaStyle}
                required
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                style={inputStyle}
                required
              />
            )}
            {errors[field.name] && <p style={errorStyle}>{errors[field.name]}</p>}
          </motion.div>
        ))}
        <motion.button 
          type="submit" 
          disabled={submitted} 
          style={submitButtonStyle}
          whileHover={{ scale: 1.05 }} // Scale effect on hover
          whileTap={{ scale: 0.95 }}   // Scale effect on tap
        >
          {submitted ? 'Submitted' : 'Submit'}
        </motion.button>
      </motion.form>
    </div>
  );
};

// Styles
const contactStyle = {
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '10px',
  maxWidth: '600px',
  margin: '0 auto',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
  textAlign: 'center',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '2rem',
  fontWeight: '600',
  color: '#333',
};

const formContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px', // Adds space between form elements
};

const formGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '15px',
};

const labelStyle = {
  marginBottom: '5px',
  fontSize: '14px',
  fontWeight: 'bold',
  fontFamily: 'Poppins, sans-serif', // Consistent font for labels
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  width: '100%', // Ensures input fields take up the full width
  boxSizing: 'border-box', // Ensures padding is included in the width
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const textareaStyle = {
  ...inputStyle, // Reuse input styles for consistency
  height: '100px', // Adjust height for the textarea
  resize: 'vertical', // Allow resizing of the textarea vertically
};

const errorStyle = {
  color: 'red',
  fontSize: '12px',
};

const successMessageStyle = {
  color: 'green',
  fontSize: '16px',
  marginBottom: '20px',
};

const submitButtonStyle = {
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'background-color 0.3s ease', // Smooth background color transition
};

// Media Queries for Responsiveness
const mediaQueryStyle = `
  @media (max-width: 768px) {
    ${contactStyle.padding} = 15px; // Adjust padding on smaller screens
    ${contactStyle.maxWidth} = '90%'; // Allow full width on smaller screens
    ${contactStyle.margin} = '10px'; // Reduce margin on smaller screens
  }
`;

// Append the media query styles to the document head
if (typeof window !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = mediaQueryStyle;
  document.head.appendChild(styleElement);
}

export default Contact;

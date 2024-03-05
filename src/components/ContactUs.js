import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://react-movie-82b50-default-rtdb.firebaseio.com/movies.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phoneNumber: ''
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit form. Please try again.');
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;

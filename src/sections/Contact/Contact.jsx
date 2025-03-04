// /src/sections/Contact/Contact.jsx
import React, { useState } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We'll contact you shortly.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className={`${styles.contactSection} container fade-in`}>
      <h2 className="sectionTitle">Get in Touch</h2>
      <p className={styles.contactIntro}>
        Have questions or want to enroll? Fill out the form below!
      </p>

      <div className={styles.contactInfo}>
        <p>
          <strong>Email:</strong> careers@germangyan.com / germangyan04@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> +91-9643430783
        </p>
        <p>
          <strong>Address:</strong> Office no. 301 (3rd floor), Savitri Sadan -2
          Community Center, C Block; Near Preet Vihar Metro Station, Delhi
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name">Name</label>
        <input
          required
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Message</label>
        <textarea
          required
          name="message"
          id="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;

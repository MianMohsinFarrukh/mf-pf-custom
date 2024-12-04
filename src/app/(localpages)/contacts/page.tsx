import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="title">Contact Us</h1>
        <p>We'd love to hear from you! Feel free to reach out with any questions, feedback, or collaboration opportunities.</p>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2 className="titles">Send Us a Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      {/* Contact Details */}
      <div className="contact-details">
        <h2>Get in Touch</h2>
        <ul>
          <li>
            <FaEnvelope /> Email: <a href="mailto:your-email@example.com">your-email@example.com</a>
          </li>
          <li>
            <FaPhone /> Phone: +123 456 7890
          </li>
          <li>
            <FaMapMarkerAlt /> Address: 123 Main Street, Your City, Your Country
          </li>
        </ul>
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>

      
    </div>
  );
};

export default ContactUs;

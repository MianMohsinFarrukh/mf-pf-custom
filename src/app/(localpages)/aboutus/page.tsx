import React from 'react';
import { FaUsers, FaLightbulb, FaUserTie } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      {/* Who We Are Section */}
      <section className="section who-we-are">
        <div className="icon">
          <FaUsers size={50} />
        </div>
        <h2>Who We Are</h2>
        <p>
          We are a team of passionate developers dedicated to crafting innovative and user-friendly solutions for our clients. With years of experience, we take pride in delivering exceptional results.
        </p>
      </section>

      {/* Our Vision Section */}
      <section className="section our-vision">
        <div className="icon">
          <FaLightbulb size={50} />
        </div>
        <h2>Our Vision</h2>
        <p>
          Our vision is to empower individuals and businesses with technology that simplifies processes and creates opportunities. We aim to be a leader in the tech industry, known for creativity and reliability.
        </p>
      </section>

      {/* Our Team Section */}
      <section className="section our-team">
        <div className="icon">
          <FaUserTie size={50} />
        </div>
        <h2>Our Team</h2>
        <p>
          Our team consists of talented professionals from diverse backgrounds, bringing unique perspectives and skills to every project. We believe in collaboration and continuous learning.
        </p>
      </section>
    </div>
  );
};

export default About;

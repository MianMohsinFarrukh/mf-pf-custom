import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Projects from "./heroproject/page";


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div><Image className="profileimg" width={200} height={200} src="/images/j3.jpg" alt='image'></Image></div>
        <h1 className="hero-title">
          Hi, I'm <span className="hero-highlight">Mohsin Farrukh</span>
        </h1>
        <p className="hero-subtitle">A Passionate Full-Stack Developer 🚀</p>
        <div className="hero-buttons">
          <Link href="#projects" className="hero-button">
            View My Work
          </Link>
          <Link href="#contact" className="hero-button hero-outline">
            Contact Me
          </Link>
        </div>
        <div className="hero-socials">
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hero-icon" />
          </Link>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hero-icon" />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hero-icon" />
          </Link>
        </div>
      </div>









      <div><section className="about-section">
        <h2 className="pcolor">About Us</h2>
        <p className="pcolor">
          Welcome to our portfolio! We are a dedicated team of developers passionate about creating innovative and efficient solutions. With expertise in Next.js, React, and TypeScript, we focus on building responsive and user-friendly web applications. Our goal is to combine creativity and technology to deliver exceptional digital experiences. Thank you for visiting, and we look forward to collaborating with you!
        </p>
      </section></div>







      <div>
        <section className="services-section">
          <h2>Our Services</h2>
          <p>
            We offer a range of services to help businesses and individuals bring their ideas to life. Our expertise includes:
          </p>
          <ul>
            <li>Custom Web Application Development</li>
            <li>Responsive and Modern UI/UX Design</li>
            <li>Full-Stack Development with Next.js and React</li>
            <li>API Integration and Development</li>
            <li>Performance Optimization and Maintenance</li>
          </ul>
          <p>
            Whether you're looking to build a new project from scratch or improve an existing one, we are here to help you succeed!
          </p>
        </section>
      </div>



      <div>
        <Projects />
      </div>



<div>
<section className="contact-section">
      <h2>Contact Us</h2>
      <p>
        Feel free to get in touch with us for collaborations, queries, or just to say hi!
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
      <div className="contact-info">
        <p>
          <FaEnvelope /> contact@example.com
        </p>
        <p>
          <FaPhone /> +123-456-7890
        </p>
        <div className="social-icons">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
</div>

    </section>

  );
};

export default Hero;

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <div className="footerpro">
        <Image className="profileimg" width={30} height={30} src="/images/logoss.png" alt='image'></Image>
          <h1 className="title">My Portfolio</h1>
        </div>
        <p>
          © {new Date().getFullYear()} Your Portfolio. All rights Reserved.
        </p>
        <div className="social-icons">
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

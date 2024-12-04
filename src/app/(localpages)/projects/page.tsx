import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description:
        "A fully responsive e-commerce platform with features like product search, cart management, and secure checkout.",
      tools: "React, Node.js, MongoDB",
      github: "#",
      liveDemo: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A clean and interactive portfolio website to showcase projects and skills.",
      tools: "Next.js, TypeScript, CSS",
      github: "#",
      liveDemo: "#",
    },
  ];

  const otherProjects = [
    { title: "Blog Platform", tools: "React, Firebase", link: "#" },
    { title: "Weather App", tools: "Vue.js, API Integration", link: "#" },
    { title: "Chat Application", tools: "React, Socket.io", link: "#" },
    { title: "Expense Tracker", tools: "React, Redux", link: "#" },
  ];

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="title">My Projects</h1>
        <p>
          Explore my work, ranging from web applications to innovative
          solutions crafted with modern technologies.
        </p>
      </div>

      {/* Featured Projects */}
      <div className="featured-projects">
        <h2 className="titles">Featured Projects</h2>
        <div className="featured-container">
          {featuredProjects.map((project, index) => (
            <div className="featured-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tools">Tools: {project.tools}</p>
              <div className="links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="project-grid">
        <h2 className="titleses">Other Projects</h2>
        <div className="grid-container">
          {otherProjects.map((project, index) => (
            <div className="grid-card" key={index}>
              <h3>{project.title}</h3>
              <p className="tools">Tools: {project.tools}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project <FaExternalLinkAlt />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <h2>Want to See More?</h2>
        <p>Check out my GitHub profile for more projects and collaborations.</p>
        <a href="#" className="cta-button">
          Visit GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;

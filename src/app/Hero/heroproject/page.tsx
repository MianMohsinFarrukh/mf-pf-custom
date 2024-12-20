import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveLink: string;
  repoLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern portfolio showcasing my skills and projects.",
    image: "/images/project1.jpg",
    liveLink: "https://yourportfolio.com",
    repoLink: "https://github.com/yourusername/portfolio",
  },
  {
    id: 2,
    title: "E-Commerce App",
    description: "A fully functional e-commerce platform.",
    image: "/images/project2.jpg",
    liveLink: "https://yourecommerce.com",
    repoLink: "https://github.com/yourusername/ecommerce",
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "A blog application with rich text editing and sharing.",
    image: "/images/project3.jpg",
    liveLink: "https://yourblog.com",
    repoLink: "https://github.com/yourusername/blog",
  },
  {
    id: 4,
    title: "Task Manager",
    description: "A productivity tool to manage daily tasks efficiently.",
    image: "/images/project4.jpg",
    liveLink: "https://yourtaskmanager.com",
    repoLink: "https://github.com/yourusername/taskmanager",
  },
  {
    id: 5,
    title: "Weather App",
    description: "A weather forecasting app using public APIs.",
    image: "/images/project5.jpg",
    liveLink: "https://yourweatherapp.com",
    repoLink: "https://github.com/yourusername/weatherapp",
  },
  {
    id: 6,
    title: "Chat Application",
    description: "A real-time chat application with WebSocket.",
    image: "/images/project6.jpg",
    liveLink: "https://yourchatapp.com",
    repoLink: "https://github.com/yourusername/chatapp",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

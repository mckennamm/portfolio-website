import React from "react";
import "./Projects.css";
import homepage from "../assets/home-page.png";
import screenshot from '../assets/portfolio-screenshot.png';
import comingSoon from '../assets/coming-soon.svg';

const Projects = () => {
  console.log("Projects component rendered");

  const projects = [
    {
      id: 1,
      title: "Portfolio Website 🪴",
      description:
        "A personal portfolio website built to showcase web development skills, projects, and creative work. Designed to demonstrate my abilities in front-end development with clean, modern design and responsive features.",
      link: "https://github.com/mckennamm/portfolio-website",
        website: "www.studiomolly.co",
      image: screenshot,
    },
    {
      id: 2,
      title: "BardChirp 🐥",
      description:
        "A social platform built for a Dungeons & Dragons group, designed to allow players to share thoughts, updates, and keep in touch. This project combines my passion for D&D with my web development skills, featuring a user-friendly interface and real-time updates.",
      link: "https://github.com/mckennamm/BardChirp",
      website: "www.bardchirp.com",
      image: comingSoon,
    },
    {
      id: 3,
      title: "Wedding Website 💍",
      description:
        "A personalized and interactive wedding website showcasing event details, linking to external RSVP, and a timeline of our love story. Built using React.js and Firebase for real-time data handling and authentication.",
      link: "https://github.com/mckennamm/wedding-website2.0",
      website: "https://www.cameronandmolly.com/",
      image: homepage,
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View GitHub
            </a>
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="project-website"
            >
              View Website
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

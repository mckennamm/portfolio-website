// src/data/projectsData.js
import binkleyPhoto from "../assets/binkleyphoto.png";
import rcbPhoto from "../assets/rcb.png";
import smPhoto from "../assets/smPhoto.png"
import bardchirpPhoto from "../assets/bardchirp-project.png";

export const projectsData = [
  {
    id: "project-1",
    title: "Nonprofit Preschool Website Redesign",
    role: "Design + FrontendDevelopment",
    blurb:
      "A calm, mission-forward redesign focused on clarity, accessibility, and storytelling.",
    tags: ["React", "Responsive", "Accessibility"],
    thumbnail: binkleyPhoto,
    thumbnailAlt: "Website mockup on laptop",
    liveUrl: "https://binkleypreschool.org",
    githubUrl: "#",
  },
  {
    id: "project-2",
    title: "Raleigh Concert Band Website Redesign",
    role: "Wordpress Design",
    blurb:
      "A modern, minimal site built for conversion with clear calls to action and clean layout structure.",
    tags: ["UX", "Conversion", "Vite"],
    thumbnail:
      rcbPhoto,
    thumbnailAlt: "Website design preview",
    liveUrl: "https://www.thercb.org",
    githubUrl: "#",
  },
  {
    id: "project-3",
    title: "Studio Molly Redesign",
    role: "Custom React Design + Development",
    blurb:
      "A reusable React-based template framework designed for flexible page building and fast iteration.",
    tags: ["Components", "Design System", "React"],
    thumbnail: smPhoto,
    thumbnailAlt: "Website layout design",
    liveUrl: "https://studiomolly.co",
    githubUrl: "#",
  },
  {
    id: "project-4",
    title: "BardChirp",
    role: "UI + Firebase Integration",
    blurb:
      "A small-scale social platform concept for a Dungeons and Dragons campaign.",
    tags: ["Firebase", "Auth", "UI"],
    thumbnail:
     bardchirpPhoto,
    thumbnailAlt: "App interface preview",
    liveUrl: "https://www.bardchirp.com/",
    githubUrl: "#",
  },
];

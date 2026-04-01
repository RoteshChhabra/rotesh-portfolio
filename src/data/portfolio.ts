// src/data/portfolio.ts

import manulifeLogo from "../assets/logos/manulife.png";
import ltiLogo from "../assets/logos/LTI.png";
import cegnLogo from "../assets/logos/CENGN.png";

export const greetings = [
    "Hey",
    "Hola",
    "Bonjour",
    "Ciao",
    "Namaste",
    "Konnichiwa",
    "Guten Tag",
    "Aloha",
    "Salaam",
    "Olá",
    "Privet",
    "Nǐ hǎo",
];

export const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "experience", label: "Work Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
];

export const experiences = [
    {
        period: "2022 — Present",
        role: "Full-Stack Software Engineer",
        company: "Manulife, Toronto",
        logo: manulifeLogo,
    },
    {
        period: "Jan — Apr 2022",
        role: "Software Developer Co-op",
        company: "CENGN, Ottawa",
        logo: cegnLogo,
    },
    {
        period: "2018 — 2020",
        role: "Software Engineer",
        company: "Larsen & Toubro Infotech, Mumbai",
        logo: ltiLogo,
    },
];

export const projects = [
    {
        title: "Portfolio Website",
        description:
            "A modern, responsive portfolio website built with React and TypeScript to showcase my skills and projects.",
        tags: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
        title: "Config Management App",
        description:
            "React web app empowering customer service agents to easily manage and deploy time-based routing configurations.",
        tags: ["React", "Redux", "Node.js"],
    },
    {
        title: "Express-Eats",
        description:
            "A full-stack inventory and supply chain management application built with robust Test-Driven Development.",
        tags: ["Spring Boot", "Java", "MySQL"],
    },
];

export const skills = [
    {
        category: "Languages",
        items: ["Java", "JavaScript", "Python", "TypeScript"],
    },
    {
        category: "Web Tech",
        items: ["Spring Boot", "React.js", "Node.js", "Express", "Redux", "CSS3"],
    },
    {
        category: "Cloud & Data",
        items: ["AWS", "GCP", "MySQL", "Postgres", "MongoDB", "DynamoDB"],
    },
];

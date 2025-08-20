"use client";

import React, { useEffect, useState } from "react";
import project1 from "@/assets/image.png";
import project2 from "@/assets/image2.png";
import project3 from "@/assets/project3.png";
import project4 from "@/assets/project4.png";
import project5 from "@/assets/project5.png";
import project6 from "@/assets/project6.png";
import Image from "next/image";
import {
  animate,
  useMotionTemplate,
  motion,
  useMotionValue,
} from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  SiFirebase,
  SiGoogle,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiSocketdotio,
  SiExpress,
  SiFramer,
  SiMui,
  SiNextdotjs,
  SiTailwindcss,
  SiClerk,
  SiPrisma,
  SiPostgresql,
  SiOpenai,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "AI Trip Planner",
    description:
      "Built using Gemini API for AI-powered trip planning, Google Authentication for secure user login, Node.js for backend, and Firebase for database and authentication management.",
    image: project1,
    link: "https://ai-trip-planner-olive-eight.vercel.app",
    github: "https://github.com/DayanandR/ai-trip-planner",
    techStack: [
      { name: "React", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Google Auth", icon: <SiGoogle /> },
    ],
  },
  {
    id: 2,
    title: "Loan Calculator",
    description:
      "An interactive loan calculator that uses a real-time currency exchange API to provide EMI details in various currencies. Built with React, styled for responsiveness, and supports currency conversion and amortization schedule display.",
    image: project2,
    link: "https://loan-calculator-nine-delta.vercel.app/",
    github: "https://github.com/DayanandR/loan-calculator",
    techStack: [
      { name: "React", icon: <SiReact /> },
      { name: "Material UI", icon: <SiMui /> },
      { name: "Framer Motion", icon: <SiFramer /> },
    ],
  },
  {
    id: 3,
    title: "WhatsApp Clone",
    description:
      "A real-time chat application built with React, Node.js, Express, MongoDB, and Socket.io. Features include user authentication, private messaging, and real-time updates, mimicking core WhatsApp functionality.",
    image: project3,
    github: "https://github.com/DayanandR/WhatsApp-clone-client",
    link: "https://whats-app-clone-client.vercel.app/",
    techStack: [
      { name: "React", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Socket.io", icon: <SiSocketdotio /> },
    ],
  },
  {
    id: 4,
    title: "Hirava – AI Career Coach",
    description:
      "Hirava is a smart and friendly AI-powered career coach built with Next.js, Tailwind CSS, Clerk, Prisma, and NeonDB. It helps users explore career paths, get role recommendations, and receive personalized guidance in a clean, theme-aware UI.",
    image: project4,
    github: "https://github.com/DayanandR/Hirava",
    link: "https://hirava-i1lt.vercel.app/",
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Clerk", icon: <SiClerk /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    id: 5,
    title: "AI Text Editor",
    description:
      "A powerful AI-driven text editor that allows users to write, format, and edit documents with real-time AI assistance. Features include grammar correction, smart suggestions, export to PDF/DOCX, and cloud sync.",
    image: project5,
    github: "https://github.com/DayanandR/ai-text-editor-frontend",
    link: "https://vettam-ai-vert.vercel.app/",
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "OpenAI API", icon: <SiOpenai /> },
      { name: "Prisma", icon: <SiPrisma /> },
    ],
  },
  {
    id: 6,
    title: "AI Medical Voice Agent",
    description:
      "A conversational AI medical assistant that uses voice input and AI models to provide real-time medical guidance, symptom checks, and healthcare information. Built with speech-to-text, AI inference, and a responsive frontend.",
    image: project6,
    github: "https://github.com/DayanandR/ai-medical-voice-agent",
    link: "https://ai-medical-voice-agent-psi.vercel.app/",
    techStack: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "OpenAI API", icon: <SiOpenai /> },
    ],
  },
];

const COLORS_TOP = ["#13FFAA", "#1E67C5", "#CE84CF", "#DD335C"];

type Project = {
  id: number;
  title: string;
  description: string;
  image: { src: string };
  link?: string;
  github: string;
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const color = useMotionValue(COLORS_TOP[0]);
  const [hasMounted, setHasMounted] = useState(false);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;

  useEffect(() => {
    setHasMounted(true);
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  if (!hasMounted) return null;

  const handleClick = (project: Project) => {
    if (project.id === 3) {
      window.open(project.github, "_blank");
    } else if (project.link) {
      window.open(project.link, "_blank");
    }
  };

  return (
    <>
      <motion.div
        id="portfolio"
        className="py-32 text-white"
        style={backgroundImage as React.CSSProperties}
      >
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-6xl font-bold mb-10">
              Selected <span className="text-purple-300">Projects</span>
            </h2>
            {projects.map((project) => (
              <div
                key={project.id}
                className="cursor-pointer mb-8 group"
                onClick={() => setSelectedProject(project)}
              >
                <h3
                  className={`text-3xl font-semibold group-hover:text-gray-200 transition-colors ${
                    selectedProject.id === project.id ? "text-gray-200" : ""
                  } duration-300`}
                >
                  {project.title}
                </h3>
                {selectedProject.id === project.id && (
                  <div className="border-b-2 border-gray-200 my-4" />
                )}
                {selectedProject.id === project.id && (
                  <div>
                    <p className="text-gray-400 transition-all duration-500 ease-in-out">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4">
                      {project.techStack?.map((tech, index) => (
                        <span
                          key={index}
                          className="flex items-center gap-2 text-sm text-gray-300 bg-gray-800 px-3 py-1 rounded-full"
                        >
                          {tech.icon} {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <Image
              src={selectedProject.image.src}
              alt={selectedProject.title}
              className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out cursor-pointer"
              width={500}
              height={450}
              onClick={() => handleClick(selectedProject)}
            />
            <div className="mt-6 flex justify-start items-center gap-6">
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-teal-500 text-white py-2 px-6 rounded-md hover:bg-teal-600 transition duration-300 cursor-pointer"
                >
                  <FaExternalLinkAlt />
                  View Live
                </a>
              )}
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-700 transition duration-300 cursor-pointer"
              >
                <FaGithub />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Portfolio;

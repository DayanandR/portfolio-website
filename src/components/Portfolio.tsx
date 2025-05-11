"use client";

import React, { useEffect, useState } from "react";
import project1 from "@/assets/image.png";
import project2 from "@/assets/image2.png";
import project3 from "@/assets/project3.png";
import Image from "next/image";
import {
  animate,
  useMotionTemplate,
  motion,
  useMotionValue,
} from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "AI Trip Planner",
    description:
      "Built using Gemini API for AI-powered trip planning, Google Authentication for secure user login, Node.js for backend, and Firebase for database and authentication management.",
    image: project1,
    link: "https://ai-trip-planner-dun.vercel.app/",
    github: "https://github.com/DayanandR/ai-trip-planner",
  },
  {
    id: 2,
    title: "Loan Calculator",
    description:
      "An interactive loan calculator that uses a real-time currency exchange API to provide EMI details in various currencies. Built with React, styled for responsiveness, and supports currency conversion and amortization schedule display.",
    image: project2,
    link: "https://loan-calculator-nine-delta.vercel.app/",
    github: "https://github.com/DayanandR/loan-calculator",
  },
  {
    id: 3,
    title: "WhatsApp Clone",
    description:
      "A real-time chat application built with React, Node.js, Express, MongoDB, and Socket.io. Features include user authentication, private messaging, and real-time updates, mimicking core WhatsApp functionality.",
    image: project3,
    github: "https://github.com/DayanandR/whatsapp-clone",
  },
];

const COLORS_TOP = ["#13FFAA", "#1E67C5", "#CE84CF", "#DD335C"];

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
  }, []);
  if (!hasMounted) return null;

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
                  <p className="text-gray-400 transition-all duration-500 ease-in-out">
                    {project.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <Image
              src={selectedProject.image.src}
              alt={selectedProject.title}
              className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
              width={500}
              height={450}
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

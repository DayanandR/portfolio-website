"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
} from "framer-motion";
import {
  ExternalLink,
  Brain,
  Calculator,
  MessageCircle,
  Users,
} from "lucide-react";
import project1 from "@/assets/image.png";
import project2 from "@/assets/image2.png";
import project3 from "@/assets/project3.png";
import project4 from "@/assets/project4.png";
import { SiGithub } from "react-icons/si";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "AI Trip Planner",
    description:
      "AI-powered trip planning using Gemini API, Google Auth, Node.js, and Firebase.",
    image: project1,
    link: "https://ai-trip-planner-olive-eight.vercel.app",
    github: "https://github.com/DayanandR/ai-trip-planner",
    category: "AI",
    icon: <Brain className="w-4 h-4" />,
    techStack: ["React", "Node.js", "Firebase", "Google Auth", "Gemini API"],
    featured: true,
  },
  {
    id: 2,
    title: "Loan Calculator",
    description:
      "Interactive calculator with real-time currency conversion and EMI calculation.",
    image: project2,
    link: "https://loan-calculator-nine-delta.vercel.app/",
    github: "https://github.com/DayanandR/loan-calculator",
    category: "tools",
    icon: <Calculator className="w-4 h-4" />,
    techStack: ["React", "Material UI", "Framer Motion", "Currency API"],
    featured: false,
  },
  {
    id: 3,
    title: "WhatsApp Clone",
    description:
      "Real-time chat app with authentication, private messaging, and Socket.io.",
    image: project3,
    github: "https://github.com/DayanandR/WhatsApp-clone-client",
    link: "https://whats-app-clone-client.vercel.app/",
    category: "fullstack",
    icon: <MessageCircle className="w-4 h-4" />,
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    featured: true,
  },
  {
    id: 4,
    title: "Hirava – AI Career Coach",
    description:
      "AI career guidance app built using Next.js, Tailwind, Clerk, and Prisma.",
    image: project4,
    github: "https://github.com/DayanandR/Hirava",
    link: "https://hirava-i1lt.vercel.app/",
    category: "AI",
    icon: <Users className="w-4 h-4" />,
    techStack: ["Next.js", "Tailwind CSS", "Clerk", "Prisma", "PostgreSQL"],
    featured: true,
  },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [mounted, setMounted] = useState(false);
  const color = useMotionValue("#13FFAA");
  const bgImage = useMotionTemplate`radial-gradient(150% 150% at 50% 0%, hsl(222.2 84% 4.9%) 40%, ${color})`;

  useEffect(() => {
    setMounted(true);
    animate(color, ["#13FFAA", "#1E67C5", "#CE84CF", "#DD335C"], {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const filtered =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  if (!mounted) return null;

  return (
    <motion.section
      style={bgImage as React.CSSProperties}
      className="min-h-screen py-20 text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Full-stack builds, AI integrations, and modern tools crafted with
            passion.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {["all", "AI", "fullstack", "tools"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm transition font-medium cursor-pointer ${
                activeTab === tab
                  ? "bg-slate-900 text-white dark:bg-slate-50 dark:text-slate-900"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={
                  typeof project.image === "string"
                    ? project.image
                    : project.image.src
                }
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2 text-blue-300">
                  {project.icon}
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-sm text-slate-300 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-200">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="bg-white/10 px-2 py-1 rounded-md">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
                <div className="flex gap-2 mt-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      className="flex-1 inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md transition"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" /> Live
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex-1 inline-flex items-center justify-center border border-white/20 hover:bg-white/10 text-white px-4 py-2 rounded-md transition"
                  >
                    <SiGithub className="w-4 h-4 mr-2" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;

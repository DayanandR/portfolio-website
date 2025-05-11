"use client";

import {
  animate,
  useMotionTemplate,
  motion,
  useMotionValue,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import profilepic from "@/assets/profilepic.png";
import { FiArrowRight } from "react-icons/fi";

const COLORS_TOP = ["#13FFAA", "#1E67C5", "#CE84CF", "#DD335C"];

export const Hero = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    setHasMounted(true);
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  if (!hasMounted) return null;

  return (
    <motion.section
      style={{ backgroundImage: backgroundImage as unknown as string }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
    >
      <div className="z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
          Open for work
        </span>
        <h1 className="text-white/40 text-5xl font-black">Hi, I am</h1>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent text-5xl md:text-7xl">
          Dayanand
        </h1>
        <Image src={profilepic} alt="profile pic" width={250} />
        <p className="my-6 max-w-xl text-center">
          Front-End Developer based in Bangalore, with 1.5 years of experience
        </p>

        {/* Download CV button */}
        <motion.a
          href="/dayanand-resume.pdf"
          download="Dayanand_CV"
          style={{
            border: border as unknown as string,
            boxShadow: boxShadow as unknown as string,
          }}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          className="flex w-fit items-center gap-2 rounded-full px-4 py-2"
        >
          Download CV
          <FiArrowRight />
        </motion.a>
      </div>
      <div className="bg-circle-container"></div>
      <div className="bg-circle-background"></div>
      <div className="bg-circle"></div>
    </motion.section>
  );
};

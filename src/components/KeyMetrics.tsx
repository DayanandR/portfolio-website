"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const details = [
  {
    id: 1,
    value: "2+",
    label: "Years in Industry",
    description: "Building responsive, accessible, and scalable UIs.",
  },
  {
    id: 2,
    value: "2x",
    label: "Performance Boost",
    description: "Optimized apps for faster load and interaction.",
  },
  {
    id: 3,
    value: "6+",
    label: "Technologies Mastered",
    description: "React.js, Redux Toolkit, Vite, JavaScript, MUI, and more.",
  },
  {
    id: 4,
    value: "100%",
    label: "Team Collaboration",
    description: "Delivering features in sync with design and backend teams.",
  },
];

const KeyMetrics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className="container mx-auto px-4 py-20 text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-6xl font-bold mb-12 mx-10"
      >
        KEY METRICS
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-20">
        {details.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              delay: 0.4 + index * 0.2,
              duration: 0.6,
              type: "spring",
            }}
            className="flex flex-col rounded-xl p-6 shadow-lg"
          >
            <motion.h3
              initial={{ scale: 0.8 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{
                delay: 0.5 + index * 0.2,
                duration: 0.4,
                type: "spring",
              }}
              className="text-5xl font-bold text-purple-300 mb-2"
            >
              {item.value}
            </motion.h3>
            <p className="text-xl font-semibold mb-1">{item.label}</p>
            <p className="text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default KeyMetrics;

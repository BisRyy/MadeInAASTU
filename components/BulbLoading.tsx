"use client";

import React from "react";
import { motion } from "framer-motion";
import { LightBulbIcon } from "@heroicons/react/16/solid";
import { useTheme } from "next-themes";

const glowVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: [0.3, 0.6, 0.3],
    scale: [1, 1.2, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const particleVariants = {
  initial: { opacity: 0, y: 0 },
  animate: {
    opacity: [0, 1, 0],
    y: [-20, 20],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeOut",
    },
  },
};

export default function BulbLoading() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bgColor = isDark ? "#f8f9fa " : "#151519";
  const bulbColor = isDark ? "#000000" : "white";

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{ backgroundColor: bgColor }}
    >
      <div className="relative">
        <motion.div
          initial="initial"
          animate="animate"
          variants={glowVariants}
          className="absolute inset-0 rounded-full opacity-20 blur-2xl"
          style={{ backgroundColor: bulbColor }}
        />
        <motion.div className="relative z-10">
          <motion.div>
            <LightBulbIcon className="h-20" style={{ color: bulbColor }} />
          </motion.div>
        </motion.div>
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={index}
            initial="initial"
            variants={particleVariants}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 4,
              height: 4,
              borderRadius: "50%",
              backgroundColor: bulbColor,
              transform: `rotate(${index * 45}deg) translateY(-40px)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

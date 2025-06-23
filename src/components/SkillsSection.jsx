/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiPostman,
  SiFramer,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// Skill data - simplified for the new design
const skills = [
  { name: "HTML", icon: SiHtml5, size: 80, pos: { top: "5%", left: "15%" } },
  { name: "CSS", icon: SiCss3, size: 70, pos: { top: "10%", left: "75%" } },
  {
    name: "JavaScript",
    icon: SiJavascript,
    size: 100,
    pos: { top: "25%", left: "30%" },
  },
  { name: "React", icon: SiReact, size: 120, pos: { top: "45%", left: "5%" } },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    size: 90,
    pos: { top: "20%", left: "55%" },
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    size: 110,
    pos: { top: "70%", left: "20%" },
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    size: 110,
    pos: { top: "50%", left: "70%" },
  },
  {
    name: "Express",
    icon: SiExpress,
    size: 70,
    pos: { top: "80%", left: "60%" },
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    size: 90,
    pos: { top: "75%", left: "85%" },
  },
  {
    name: "Git/GitHub",
    icon: SiGithub,
    size: 80,
    pos: { bottom: "5%", left: "45%" },
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    size: 70,
    pos: { top: "5%", right: "5%" },
  },
];

const SkillOrb = ({ skill, onHover, isActive }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: Math.random() * 1.5,
      }}
      style={{
        width: skill.size,
        height: skill.size,
        top: skill.pos.top,
        left: skill.pos.left,
        right: skill.pos.right,
        bottom: skill.pos.bottom,
      }}
      className="absolute"
      onMouseEnter={() => onHover(skill)}
    >
      <motion.div
        className="w-full h-full rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center cursor-pointer"
        animate={{
          y: [0, -8, 0],
          scale: isActive ? 1.2 : 1,
          boxShadow: isActive
            ? "0px 0px 20px rgba(167, 139, 250, 0.7)"
            : "0px 0px 0px rgba(167, 139, 250, 0)",
        }}
        transition={{
          duration: 4 + Math.random() * 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          scale: { type: "spring", stiffness: 200, damping: 10 },
          boxShadow: { duration: 0.3 },
        }}
      >
        <skill.icon
          className="text-primary/80"
          style={{ fontSize: skill.size * 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
};

export const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(skills[3]); // Default to React

  return (
    <section
      id="skills"
      className="relative py-24 px-4 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90 bg-grid-primary/5 dark:[background-position:0%_0%] -z-10"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies & <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            A curated collection of the modern tools and technologies I use to
            bring ideas to life.
          </p>
        </motion.div>

        <div
          className="relative w-full max-w-3xl h-[450px] mx-auto mb-12"
          onMouseLeave={() => setHoveredSkill(null)}
        >
          {skills.map((skill) => (
            <SkillOrb
              key={skill.name}
              skill={skill}
              onHover={setHoveredSkill}
              isActive={hoveredSkill?.name === skill.name}
            />
          ))}
        </div>

        <div className="relative h-20 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h3
              key={hoveredSkill ? hoveredSkill.name : "empty"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-3xl font-bold text-center text-primary"
            >
              {hoveredSkill
                ? hoveredSkill.name
                : "Hover over an orb to see a skill"}
            </motion.h3>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

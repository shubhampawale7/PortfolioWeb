/* eslint-disable no-unused-vars */
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// --- Animation Variants ---

// Main section container for overall stagger
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.1, // Controls the delay between child animations
    },
  },
};

// Variants for the primary headline (what you do)
const headlineVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

// Variants for your name and secondary text
const subTextVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 15, delay: 0.1 },
  },
};

// Variants for the left-side content (text)
const leftContentVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Variants for the right-side content (skills bubble)
const rightContentVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
  },
};

// Variants for the tech stack container and individual icons (inside rightContent)
const techIconContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2, // Delay icons appearing after bubble
    },
  },
};

const techIconVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 150, damping: 12 },
  },
};

// Variant for the button
const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.8, type: "spring", stiffness: 100 },
  },
};

// --- Hero Section Component ---

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="container max-w-6xl mx-auto z-10 flex flex-col lg:flex-row items-center lg:justify-between gap-12 md:gap-16 lg:gap-20 text-center lg:text-left"
      >
        {/* Left Side: Text Content */}
        <motion.div
          variants={leftContentVariants}
          className="flex-1 flex flex-col items-center lg:items-start space-y-6 md:space-y-8"
        >
          <motion.h1
            variants={headlineVariants}
            // REDUCED FONT SIZES HERE:
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-foreground"
          >
            <span className="block mb-2 sm:mb-4 text-gradient">
              Crafting Modern Web Experiences
            </span>
            <span className="block text-primary-light">
              from Concept to Deployment.
            </span>
          </motion.h1>

          <motion.p
            variants={subTextVariants}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-muted-foreground"
          >
            Hi, I'm <span className="text-primary-light">Shubham Pawale</span>.
          </motion.p>

          <motion.p
            variants={subTextVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed [text-wrap:balance]"
            aria-label="Full-Stack Developer specializing in web applications"
          >
            A dedicated{" "}
            <strong className="text-primary font-semibold">
              Full-Stack Developer{" "}
            </strong>
            with a passion for building robust, user-centric web applications. I
            transform complex ideas into intuitive and scalable solutions.
          </motion.p>

          {/* Call to Action Button - Moved here for better flow on left side */}
          <motion.div
            variants={buttonVariants}
            className="mt-6 md:mt-8 flex justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="cosmic-button text-lg px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Explore my portfolio and see my work"
            >
              Explore My Work
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Skills Showcase Bubble */}
        <motion.div
          variants={rightContentVariants}
          className="w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 lg:w-fit lg:flex-shrink-0"
        >
          <div
            className="relative p-px rounded-full group overflow-hidden"
            aria-label="Full-Stack Developer Technologies"
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 group-hover:opacity-50 transition-opacity duration-700 rounded-full blur-sm"
              aria-hidden="true"
            />
            <div className="relative px-6 py-4 bg-card/70 backdrop-blur-md rounded-full flex flex-col items-center justify-center gap-4 border border-border/30">
              <h3 className="font-bold text-sm sm:text-base whitespace-nowrap text-foreground">
                Full-Stack Developer
              </h3>
              <div className="h-px w-20 sm:h-px sm:w-20 bg-primary/30 my-2"></div>
              <motion.div
                variants={techIconContainerVariants}
                className="flex flex-wrap justify-center items-center gap-x-5 gap-y-4 text-3xl md:text-4xl text-muted-foreground"
              >
                <motion.div
                  variants={techIconVariants}
                  whileHover={{ scale: 1.25, color: "#4DB33D" }}
                  aria-label="MongoDB"
                >
                  <SiMongodb />
                </motion.div>
                <motion.div
                  variants={techIconVariants}
                  whileHover={{ scale: 1.25, color: "#FFFFFF" }}
                  aria-label="Express.js"
                >
                  <SiExpress />
                </motion.div>
                <motion.div
                  variants={techIconVariants}
                  whileHover={{ scale: 1.25, color: "#61DAFB" }}
                  aria-label="React"
                >
                  <FaReact />
                </motion.div>
                <motion.div
                  variants={techIconVariants}
                  whileHover={{ scale: 1.25, color: "#8CC84B" }}
                  aria-label="Node.js"
                >
                  <FaNodeJs />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

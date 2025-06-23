/* eslint-disable no-unused-vars */
import Tilt from "react-parallax-tilt";
// UPDATED: Importing MERN stack logos from react-icons
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Animation variants for the main container to stagger children
const containerVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
  hidden: { opacity: 0, y: 50 },
};

// Animation variants for each child element
const itemVariants = {
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  hidden: { opacity: 0, y: 20 },
};

// Animation variants for the tech icons to stagger in
const techIconContainerVariants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
  hidden: { opacity: 0 },
};

const techIconVariants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.5 },
};

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container max-w-4xl mx-auto text-center z-10"
      >
        <div className="space-y-8">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold tracking-tight flex flex-wrap justify-center items-center gap-x-3 gap-y-2"
          >
            <span>Hi, I'm</span>
            <Tilt
              tiltEnable={true}
              trackOnWindow={true}
              gyroscope={true}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareMaxOpacity={0.2}
              perspective={1000}
              scale={1.05}
              className="inline-block"
              transitionSpeed={1500}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  textShadow: "0px 0px 8px rgba(167, 139, 250, 0.6)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex gap-2"
              >
                <span className="text-primary drop-shadow-md">Shubham</span>
                <span className="text-gradient drop-shadow-md">Pawale</span>
              </motion.div>
            </Tilt>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed [text-wrap:balance]"
          >
            I'm a{" "}
            <span className="text-primary font-semibold">
              Full-Stack Developer
            </span>{" "}
            specializing in building complete web applications. I turn ideas
            into reality by crafting beautiful interfaces and robust, scalable
            backend systems.
          </motion.p>

          {/* --- NEW UNIFIED SKILLS SHOWCASE --- */}
          <motion.div variants={itemVariants}>
            <div className="relative p-px rounded-full max-w-lg mx-auto group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 group-hover:opacity-50 transition-opacity duration-500 rounded-full" />
              <div className="relative px-6 py-4 bg-card/60 backdrop-blur-sm rounded-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <h3 className="font-semibold text-sm sm:text-base whitespace-nowrap">
                  MERN Stack Developer
                </h3>
                <div className="h-px w-10 sm:h-6 sm:w-px bg-primary/20"></div>
                <motion.div
                  variants={techIconContainerVariants}
                  className="flex items-center space-x-4 text-2xl text-muted-foreground"
                >
                  <motion.div
                    variants={techIconVariants}
                    whileHover={{ scale: 1.2, color: "#4DB33D" }}
                  >
                    <SiMongodb />
                  </motion.div>
                  <motion.div
                    variants={techIconVariants}
                    whileHover={{ scale: 1.2, color: "#FFFFFF" }}
                  >
                    <SiExpress />
                  </motion.div>
                  <motion.div
                    variants={techIconVariants}
                    whileHover={{ scale: 1.2, color: "#61DAFB" }}
                  >
                    <FaReact />
                  </motion.div>
                  <motion.div
                    variants={techIconVariants}
                    whileHover={{ scale: 1.2, color: "#8CC84B" }}
                  >
                    <FaNodeJs />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex justify-center"
          >
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

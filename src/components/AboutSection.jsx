/* eslint-disable no-unused-vars */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Briefcase,
  Code,
  User,
  Rocket,
  Lightbulb,
  TrendingUp,
  Zap,
  HardDrive,
  Layout,
} from "lucide-react"; // Added more relevant icons for skills/focus areas

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // Trigger animation when 20% in view

  // Animation variants for staggered reveal
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2, // Apply staggered effect to direct children
      },
    },
  };

  const textBlockVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="py-24 px-4 bg-background relative overflow-hidden"
    >
      {/* Background radial gradient */}
      <div className="absolute inset-0 z-0 radial-gradient-background opacity-20 pointer-events-none"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {" "}
        {/* Slightly narrower max-width for text focus */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <motion.div
          ref={ref}
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16" // Increased space between blocks
        >
          {/* Block 1: Introduction */}
          <motion.div
            variants={textBlockVariants}
            className="bg-card p-8 rounded-lg shadow-xl border border-border text-center"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              Passionate Web Developer, Driven by Innovation.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over{" "}
              <span className="text-primary font-semibold">
                1.5 years of hands-on experience
              </span>{" "}
              in web development, I thrive on crafting{" "}
              <strong className="text-primary">
                {" "}
                responsive, accessible, and performant
              </strong>{" "}
              applications using cutting-edge technologies. My journey in
              development is fueled by a relentless curiosity and a passion for
              turning complex challenges into elegant, user-friendly solutions.
            </p>
          </motion.div>

          {/* Block 2: What I Do (Key Focus Areas) */}
          <motion.div variants={textBlockVariants} className="text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-10 text-foreground">
              My Core Focus & Strengths
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1: Web Development */}
              <motion.div variants={cardVariants} className="about-card group">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary transition-colors duration-300">
                  <Code className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 group-hover:text-background" />
                </div>
                <h4 className="font-semibold text-xl text-foreground mt-4">
                  Full-Stack Development
                </h4>
                <p className="text-muted-foreground text-sm mt-2">
                  Building robust web applications from frontend to backend with
                  a focus on scalability.
                </p>
              </motion.div>

              {/* Card 2: Problem Solving */}
              <motion.div variants={cardVariants} className="about-card group">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary transition-colors duration-300">
                  <Lightbulb className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 group-hover:text-background" />
                </div>
                <h4 className="font-semibold text-xl text-foreground mt-4">
                  Innovative Solutions
                </h4>
                <p className="text-muted-foreground text-sm mt-2">
                  Applying creative thinking to tackle complex challenges and
                  deliver effective results.
                </p>
              </motion.div>

              {/* Card 3: Performance & Optimization */}
              <motion.div variants={cardVariants} className="about-card group">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary transition-colors duration-300">
                  <Zap className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 group-hover:text-background" />
                </div>
                <h4 className="font-semibold text-xl text-foreground mt-4">
                  Performance Optimization
                </h4>
                <p className="text-muted-foreground text-sm mt-2">
                  Ensuring blazing-fast load times and smooth user experiences
                  for every project.
                </p>
              </motion.div>

              {/* Card 4: Data Management (New focus) */}
              <motion.div variants={cardVariants} className="about-card group">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary transition-colors duration-300">
                  <HardDrive className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 group-hover:text-background" />
                </div>
                <h4 className="font-semibold text-xl text-foreground mt-4">
                  Data Management
                </h4>
                <p className="text-muted-foreground text-sm mt-2">
                  Designing and optimizing databases for efficient data storage
                  and retrieval.
                </p>
              </motion.div>

              {/* Card 5: UI/UX (New focus) */}
              <motion.div variants={cardVariants} className="about-card group">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary transition-colors duration-300">
                  <Layout className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 group-hover:text-background" />
                </div>
                <h4 className="font-semibold text-xl text-foreground mt-4">
                  Intuitive UI/UX
                </h4>
                <p className="text-muted-foreground text-sm mt-2">
                  Crafting user interfaces that are not just beautiful, but also
                  highly intuitive and accessible.
                </p>
              </motion.div>

              {/* Card 6: Continuous Learning */}
              <motion.div variants={cardVariants} className="about-card group">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary transition-colors duration-300">
                  <TrendingUp className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 group-hover:text-background" />
                </div>
                <h4 className="font-semibold text-xl text-foreground mt-4">
                  Continuous Learning
                </h4>
                <p className="text-muted-foreground text-sm mt-2">
                  Always exploring new technologies to bring cutting-edge
                  solutions to my projects.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Block 3: Values & CTA */}
          <motion.div
            variants={textBlockVariants}
            className="bg-card p-8 rounded-lg shadow-xl border border-border text-center"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              My Approach: Collaborate. Innovate. Deliver.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              My philosophy centers on clear communication, agile methodologies,
              and a relentless pursuit of excellence. I believe in fostering
              strong partnerships to truly understand your needs and deliver{" "}
              {""}
              <strong className="text-primary">
                impactful digital products
              </strong>{" "}
              that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/Resume.pdf" // IMPORTANT: Change this path to your actual resume file!
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-background transition-colors duration-300 shadow-md"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

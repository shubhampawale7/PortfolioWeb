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
  Layers,
  Users,
  Clock,
} from "lucide-react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animation variants for staggered reveal
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
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

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          What Drives <span className="text-primary">Me</span>
        </h2>
        <motion.div
          ref={ref}
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Block 1: Vision & Philosophy */}
          <motion.div
            variants={textBlockVariants}
            className="bg-card p-8 rounded-lg shadow-xl border border-border text-center"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              Building Digital Solutions That Truly Matter.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey as a{" "}
              <strong className="text-primary">Full-Stack Developer</strong> is
              defined by a relentless drive to transform complex challenges into{" "}
              <strong className="text-primary">
                elegant, high-performance, and user-centric web applications
              </strong>
              . I'm passionate about crafting robust systems from the ground up,
              ensuring a seamless experience for both users and maintainers. My
              focus is always on delivering{" "}
              <strong className="text-primary">
                tangible impact through code
              </strong>
              .
            </p>
          </motion.div>

          {/* Block 2: Key Strengths & Approach */}
          <motion.div variants={textBlockVariants} className="text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-10 text-foreground">
              My Expertise & How I Deliver{" "}
              <span className="text-primary">Value</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1: End-to-End Development */}
              <motion.div variants={cardVariants} className="about-card group">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary transition-colors duration-300">
                  <Code className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 group-hover:text-background" />
                </div>
                <h4 className="font-semibold text-xl text-foreground mt-4">
                  End-to-End Solutions
                </h4>
                <p className="text-muted-foreground text-sm mt-2">
                  Building robust web applications from frontend to backend with
                  a focus on scalability.
                </p>
              </motion.div>

              {/* Card 2: Performance & Scalability */}
              <motion.div variants={cardVariants} className="about-card group">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary transition-colors duration-300">
                  <Rocket className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 group-hover:text-background" />
                </div>
                <h4 className="font-semibold text-xl text-foreground mt-4">
                  Performance & Scalability
                </h4>
                <p className="text-muted-foreground text-sm mt-2">
                  Optimizing applications for speed and designing architectures
                  that grow with your needs.
                </p>
              </motion.div>

              {/* Card 3: User-Centric Design */}
              <motion.div variants={cardVariants} className="about-card group">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary transition-colors duration-300">
                  <User className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 group-hover:text-background" />
                </div>
                <h4 className="font-semibold text-xl text-foreground mt-4">
                  User-Centric Design
                </h4>
                <p className="text-muted-foreground text-sm mt-2">
                  Translating user needs into intuitive interfaces and seamless
                  experiences.
                </p>
              </motion.div>

              {/* Card 4: Problem Solving & Innovation */}
              <motion.div variants={cardVariants} className="about-card group">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary transition-colors duration-300">
                  <Lightbulb className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 group-hover:text-background" />
                </div>
                <h4 className="font-semibold text-xl text-foreground mt-4">
                  Problem Solving & Innovation
                </h4>
                <p className="text-muted-foreground text-sm mt-2">
                  Tackling complex challenges with creative solutions and a
                  proactive mindset.
                </p>
              </motion.div>

              {/* Card 5: Agile & Efficient Development */}
              <motion.div variants={cardVariants} className="about-card group">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary transition-colors duration-300">
                  <Clock className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 group-hover:text-background" />
                </div>
                <h4 className="font-semibold text-xl text-foreground mt-4">
                  Agile & Efficient Development
                </h4>
                <p className="text-muted-foreground text-sm mt-2">
                  Delivering high-quality code iteratively and efficiently to
                  meet project goals.
                </p>
              </motion.div>

              {/* Card 6: Collaborative & Communicative */}
              <motion.div variants={cardVariants} className="about-card group">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary transition-colors duration-300">
                  <Users className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 group-hover:text-background" />
                </div>
                <h4 className="font-semibold text-xl text-foreground mt-4">
                  Collaborative & Communicative
                </h4>
                <p className="text-muted-foreground text-sm mt-2">
                  Working effectively within teams, ensuring clear communication
                  throughout the development cycle.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Block 3: Call to Action */}
          <motion.div
            variants={textBlockVariants}
            className="bg-card p-8 rounded-lg shadow-xl border border-border text-center"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              Ready to Build Something{" "}
              <span className="text-primary">Great</span>?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm always eager to take on new challenges and contribute to
              impactful projects. Whether you have an innovative idea or need a
              reliable developer to bring your vision to life, let's connect and
              discuss how my expertise can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Let's Connect
              </a>
              <a
                href="/Resume.pdf" // IMPORTANT: Change this path to your actual resume file!
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-background transition-colors duration-300 shadow-md"
              >
                Download My CV
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

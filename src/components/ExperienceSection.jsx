/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaArrowRight } from "react-icons/fa";

const experiences = [
  {
    job: "Full-Stack Freelancer",
    company: "Remote",
    date: "April 2025 - Present",
    responsibilities: [
      "Developed and deployed full-stack production websites for various clients, handling everything from database design to frontend UI.",
      "Engineered custom e-commerce features, including payment gateways (Stripe, Razorpay) and complex order management systems.",
      "Delivered high-performance, responsive landing pages and microsites with a strong focus on SEO and core web vitals.",
    ],
  },
  {
    job: "Backend Web Developer",
    company: "Newgen Technomate LLP",
    date: "Sept 2024 - Mar 2025",
    responsibilities: [
      "Refactored legacy Node.js codebases, improving maintainability and increasing performance by 20%.",
      "Successfully integrated several third-party APIs for shipping logistics, analytics, and customer support into web applications.",
      "Collaborated with senior developers to troubleshoot and resolve critical production issues, reducing downtime.",
    ],
  },
  {
    job: "Graduate Engineer Trainee",
    company: "Newgen Technomate LLP",
    date: "Jul 2023 - Aug 2024",
    responsibilities: [
      "Contributed to improving overall system reliability by 15% through diligent automated testing and debugging.",
      "Performed detailed analyses of engineering data to generate reports that supported key architectural decisions.",
      "Authored and maintained standard operating procedure (SOP) reports and technical documentation for new features.",
    ],
  },
];

export const ExperienceSection = () => {
  const [selectedJob, setSelectedJob] = useState(experiences[0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="py-24 px-4 relative bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My Professional <span className="text-primary">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            A timeline of my career, showcasing my growth, responsibilities, and
            key contributions in the tech industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Left Column: Job Title Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-1"
          >
            <div className="relative flex flex-row md:flex-col gap-4">
              {experiences.map((exp) => (
                <button
                  key={exp.job}
                  onClick={() => setSelectedJob(exp)}
                  className={`relative w-full text-left p-4 rounded-lg transition-colors duration-300 ${
                    selectedJob.job === exp.job ? "" : "hover:bg-muted/50"
                  }`}
                >
                  {selectedJob.job === exp.job && (
                    <motion.div
                      layoutId="activeJobHighlight"
                      className="absolute inset-0 bg-muted rounded-lg border border-primary/50"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}
                  <span className="relative z-10 font-semibold text-lg">
                    {exp.job}
                  </span>
                  <span className="relative z-10 block text-sm text-muted-foreground">
                    {exp.company}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Spotlight Details Card */}
          <div className="md:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedJob.job}
                initial={{ opacity: 0, y: 50, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-card border border-border p-8 rounded-2xl shadow-lg w-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">
                      {selectedJob.job}
                    </h3>
                    <p className="text-md font-semibold text-foreground">
                      {selectedJob.company}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {selectedJob.date}
                  </p>
                </div>

                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="list-none pl-0 mt-6 space-y-4"
                >
                  {selectedJob.responsibilities.map((task, i) => (
                    <motion.li
                      key={i}
                      variants={itemVariants}
                      className="flex items-start gap-3"
                    >
                      <FaArrowRight className="text-primary/70 mt-1.5 flex-shrink-0" />
                      <span>{task}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

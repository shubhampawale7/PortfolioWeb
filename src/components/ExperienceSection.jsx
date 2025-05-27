/* eslint-disable no-unused-vars */
import { motion, useScroll, useTransform } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { useRef } from "react";

const experiences = [
  {
    job: "Graduate Engineer Trainee",
    company: "Newgen Technomate LLP",
    //  date: "Jul 2023 - Aug 2024",
    badge: "2023–24",
    responsibilities: [
      "Improved system reliability.",
      "Performed detailed analyses of engineering data.",
      "Prepared standard reports and documentation.",
    ],
  },
  {
    job: "Backend Web Developer",
    company: "Newgen Technomate LLP",
    // date: "Sept 2024 - Mar 2025",
    badge: "2024–25",
    responsibilities: [
      "Refactored legacy codebases for improved maintainability.",
      "Integrated third-party APIs into web applications.",
      "Assisted in troubleshooting production issues.",
    ],
  },
  {
    job: "Freelancing",
    company: "",
    // date: "Apr 2025 - Present",
    badge: "2025–Now",
    responsibilities: [
      "Developed and deployed full-stack production websites.",
      "Implemented custom e-commerce features.",
      "Delivered high-performance landing pages and microsites.",
    ],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]); // Adjusted for a smoother reveal

  return (
    <section id="experience" className="py-24 px-4 relative bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Journey</span>
        </h2>

        <div className="relative pl-8" ref={ref}>
          {" "}
          {/* Increased left padding for more space */}
          {/* Animated vertical gradient timeline */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/70 to-transparent rounded-full origin-top"
            style={{ scaleY }}
          />
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }} // Animate from left for a subtle reveal
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }} // Trigger animation earlier
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="mb-14 relative group" // Added group for hover effects on the entire item
            >
              {/* Timeline Dot with Badge */}
              <div className="absolute -left-4 top-0 flex flex-col items-center">
                <div className="bg-primary rounded-full p-2 shadow-lg z-10 transition-transform duration-300 group-hover:scale-110">
                  {" "}
                  {/* Added hover effect */}
                  <FaBriefcase className="text-white text-base" />{" "}
                  {/* Slightly larger icon */}
                </div>
                <motion.div
                  className="relative w-max mt-3" // Adjusted margin-top
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }} // Slightly delayed badge animation
                >
                  <span className="relative z-10 px-3 py-1 text-xs font-medium text-white bg-primary rounded-full shadow-xl animate-pulse group-hover:animate-none transition-all duration-300">
                    {" "}
                    {/* Enhanced badge styling and hover */}
                    {exp.badge}
                  </span>
                  {/* Tooltip (optional) */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-muted text-foreground text-xs rounded px-3 py-1 shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {" "}
                    {/* Improved tooltip style */}
                    {exp.date}
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="bg-card p-6 rounded-lg shadow-xl ml-8 relative border border-border transition-all duration-300 group-hover:border-primary group-hover:shadow-2xl group-hover:-translate-y-1" // Added card styling
                whileHover={{ x: 8 }} // Slightly more pronounced hover
                transition={{ type: "spring", stiffness: 150, damping: 10 }} // Adjusted spring physics
              >
                <h3 className="text-2xl font-semibold mb-1 text-foreground">
                  {exp.job}
                </h3>{" "}
                {/* Larger job title */}
                {exp.company && (
                  <p className="text-primary/80 text-lg mb-2">{exp.company}</p> // Highlight company name
                )}
                <p className="text-sm text-muted-foreground mb-4">{exp.date}</p>
                <ul className="list-disc pl-5 space-y-2 text-foreground/90 text-base leading-relaxed">
                  {" "}
                  {/* Increased line height and text size */}
                  {exp.responsibilities.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* eslint-disable no-unused-vars */
import { motion, useScroll, useTransform } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { useRef } from "react";

const experiences = [
  {
    job: "Graduate Engineer Trainee",
    company: "Newgen Technomate LLP",
    date: "Jul 2023 - Aug 2024",
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
    date: "Sept 2024 - Mar 2025",
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
    date: "Apr 2025 - Present",
    badge: "2025–Now",
    responsibilities: [
      "Developed and deployed full‑stack production websites.",
      "Implemented custom e‑commerce features.",
      "Delivered high‑performance landing pages and microsites.",
    ],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <section id="experience" className="py-24 px-4 relative bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="relative pl-6" ref={ref}>
          {/* Animated vertical gradient timeline */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full origin-top"
            style={{ scaleY }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 relative"
            >
              {/* Timeline Dot with Badge */}
              <div className="absolute -left-4 top-1 flex flex-col items-center">
                <div className="bg-primary rounded-full p-2 shadow-md">
                  <FaBriefcase className="text-white text-sm" />
                </div>
                <motion.div
                  className="relative w-max"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                >
                  <span className="relative z-10 px-2 py-0.5 text-xs font-medium text-white bg-primary rounded-full shadow-lg animate-pulse">
                    {exp.badge}
                  </span>
                  {/* Tooltip (optional) */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 hidden group-hover:block bg-muted text-foreground text-xs rounded px-2 py-1 shadow">
                    {exp.date}
                  </div>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <h3 className="text-xl font-semibold">{exp.job}</h3>
                {exp.company && (
                  <p className="text-muted-foreground mb-1">{exp.company}</p>
                )}
                <p className="text-sm text-muted-foreground mb-4">{exp.date}</p>
                <ul className="list-disc pl-5 space-y-1 text-foreground/90 text-sm">
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

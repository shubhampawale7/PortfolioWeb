/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
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
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { name: "HTML/CSS", icon: <SiHtml5 />, level: 95, category: "frontend" },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    level: 90,
    category: "frontend",
  },
  { name: "React", icon: <SiReact />, level: 90, category: "frontend" },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    level: 90,
    category: "frontend",
  },
  { name: "Next.js", icon: <SiNextdotjs />, level: 80, category: "frontend" },
  { name: "Node.js", icon: <SiNodedotjs />, level: 80, category: "backend" },
  { name: "Express", icon: <SiExpress />, level: 75, category: "backend" },
  { name: "MongoDB", icon: <SiMongodb />, level: 70, category: "backend" },
  { name: "Git/GitHub", icon: <SiGithub />, level: 90, category: "tools" },
  { name: "VS Code", icon: <VscVscode />, level: 95, category: "tools" },
  { name: "Postman", icon: <SiPostman />, level: 85, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const SkillGauge = ({ level, size = 80, strokeWidth = 8 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: level,
        duration: 1.2,
        ease: "power2.out",
        onUpdate: () => {
          textRef.current.textContent = `${Math.round(obj.val)}%`;
        },
      });
    }
  }, [level]);

  return (
    <svg width={size} height={size} className="rotate-[-90deg]">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#e5e7eb"
        strokeWidth={strokeWidth}
        fill="transparent"
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="rgba(167, 139, 250, 01)"
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        strokeLinecap="round"
      />
      <text
        ref={textRef}
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-muted-foreground text-xs font-semibold rotate-[90deg]"
      >
        0%
      </text>
    </svg>
  );
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  useEffect(() => {
    gsap.from("#skills h2", {
      opacity: 1,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".skill-card", {
      scrollTrigger: {
        trigger: ".skill-card",
        start: "top 80%",
      },
      opacity: 1,
      y: 30,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
    });
  }, [activeCategory]);

  return (
    <section
      id="skills"
      className="py-24 px-4 bg-gradient-to-br from-secondary/40 to-background/50 backdrop-blur-md relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm md:text-base transition-all duration-300 font-medium capitalize border",
                activeCategory === category
                  ? "bg-primary text-white shadow-md scale-105 border-primary"
                  : "bg-transparent border-muted text-muted-foreground hover:bg-muted/10"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: idx * 0.05 }}
                className="skill-card bg-card/80 border border-muted rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all hover:scale-[1.02] backdrop-blur-md"
              >
                <div className="relative mb-4">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-muted-foreground z-10">
                    {skill.icon}
                  </div>
                  <SkillGauge level={skill.level} />
                </div>
                <h3 className="text-lg font-semibold mb-1">{skill.name}</h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

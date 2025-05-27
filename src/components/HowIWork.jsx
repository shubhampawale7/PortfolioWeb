/* eslint-disable no-unused-vars */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  Brain,
  Code,
  Rocket,
  Award,
  Handshake,
  MessageCircle,
  Settings,
  Globe,
} from "lucide-react"; // Expanded icon choices

const processSteps = [
  {
    icon: Search,
    title: "1. Discovery & Strategy",
    description:
      "Deep dive into your vision, business goals, and target audience. We define project scope, requirements, and lay down the strategic roadmap together.",
    color: "bg-blue-600/10 text-blue-600", // Example color hint (use your primary/accent)
  },
  {
    icon: Brain,
    title: "2. Planning & Design",
    description:
      "Crafting detailed technical architecture, wireframes, and UI/UX mockups. This phase ensures a clear, shared blueprint before any code is written.",
    color: "bg-green-600/10 text-green-600", // Example color hint
  },
  {
    icon: Code,
    title: "3. Development & Iteration",
    description:
      "Bringing designs to life with clean, scalable code. I work iteratively, providing regular updates and incorporating feedback for precise alignment.",
    color: "bg-purple-600/10 text-purple-600", // Example color hint
  },
  {
    icon: Settings, // Changed for maintenance
    title: "4. Testing & Optimization",
    description:
      "Rigorous testing across devices and environments to ensure flawless functionality and performance. Optimization for speed and responsiveness is key.",
    color: "bg-orange-600/10 text-orange-600", // Example color hint
  },
  {
    icon: Rocket,
    title: "5. Deployment & Launch",
    description:
      "Smooth deployment to a robust hosting environment. Your application goes live, meticulously configured for stability and accessibility to your users.",
    color: "bg-red-600/10 text-red-600", // Example color hint
  },
  {
    icon: Handshake, // Changed for post-launch support
    title: "6. Support & Evolution",
    description:
      "Ongoing support, maintenance, and future enhancement planning. I ensure your application continues to perform optimally and evolves with your needs.",
    color: "bg-indigo-600/10 text-indigo-600", // Example color hint
  },
];

export const HowIWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Stagger animation for each step
      },
    },
  };

  const stepCardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="how-i-work"
      className="py-24 px-4 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 radial-gradient-background opacity-10 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {" "}
          {/* Adjusted margin-bottom */}
          My <span className="text-primary">Development Process</span>
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
          From initial concept to seamless deployment and beyond, my structured
          approach ensures every project is built with{" "}
          <span className="text-primary">
            {" "}
            precision, collaboration, and a focus on lasting impact{" "}
          </span>
          . Here's how we turn ideas into powerful digital solutions.
        </p>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" // Responsive grid for cards
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepCardVariants}
              className="bg-card border border-border rounded-lg shadow-xl p-6 text-center flex flex-col items-center group
                         transition-all duration-300 hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2"
            >
              <div
                className={`p-4 rounded-full mb-4 ${step.color} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
              >
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

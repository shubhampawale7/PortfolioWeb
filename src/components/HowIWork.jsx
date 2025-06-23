/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
// Import React Icons instead of Lucide icons
import {
  HiMagnifyingGlass,
  HiOutlineLightBulb,
  HiCodeBracket,
  HiCog6Tooth,
  HiRocketLaunch,
  HiHandRaised,
} from "react-icons/hi2"; // Using Heroicons v2 (hi2)

// Updated processSteps array with working Unsplash images
const processSteps = [
  {
    icon: HiMagnifyingGlass, // Replaced Search with HiMagnifyingGlass
    title: "Discovery & Strategy",
    description:
      "We start with a deep dive into your vision, goals, and target audience to define the project scope and create a strategic roadmap for success.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232&auto=format&fit=crop",
  },
  {
    icon: HiOutlineLightBulb, // Replaced Brain with HiOutlineLightBulb
    title: "Planning & Design (UX/UI)",
    description:
      "Next, we craft the blueprint. This includes detailed technical architecture, wireframes, and high-fidelity UI/UX mockups to ensure a clear and shared vision.",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: HiCodeBracket, // Replaced Code with HiCodeBracket
    title: "Development & Iteration",
    description:
      "Designs are brought to life with clean, scalable MERN stack code. I work iteratively, providing regular updates and incorporating feedback for precise alignment.",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: HiCog6Tooth, // Replaced Settings with HiCog6Tooth
    title: "Testing & Optimization",
    description:
      "Rigorous testing across devices ensures flawless functionality. Performance is a priority, so I optimize for speed, responsiveness, and Core Web Vitals.",
    image:
      "https://images.unsplash.com/photo-1580894906475-403276d3942d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: HiRocketLaunch, // Replaced Rocket with HiRocketLaunch
    title: "Deployment & Launch",
    description:
      "Your application is deployed to a robust hosting environment like Vercel and Render, meticulously configured for stability, scalability, and accessibility.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: HiHandRaised, // Replaced Handshake with HiHandRaised
    title: "Support & Evolution",
    description:
      "I provide ongoing support, maintenance, and future enhancement planning to ensure your application continues to perform optimally and evolve with your needs.",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
  },
];

export const HowIWork = () => {
  const [activeStep, setActiveStep] = useState(processSteps[0]);

  return (
    <section
      id="how-i-work"
      className="py-24 px-4 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My Development <span className="text-primary">Process</span>
          </h2>
          <p className="text-lg text-center text-muted-foreground mt-4 max-w-3xl mx-auto">
            A structured journey from concept to launch, ensuring precision,
            collaboration, and impactful results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Navigation List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="relative flex flex-col gap-2">
              {processSteps.map((step) => (
                <div
                  key={step.title}
                  onMouseEnter={() => setActiveStep(step)}
                  className={`relative p-4 rounded-lg cursor-pointer transition-colors duration-300 ${
                    activeStep.title === step.title ? "" : "hover:bg-muted/50"
                  }`}
                >
                  {activeStep.title === step.title && (
                    <motion.div
                      layoutId="activeProcessHighlight"
                      className="absolute inset-0 bg-muted rounded-lg border border-primary/30"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}
                  <div className="relative z-10 flex items-center gap-4">
                    <div
                      className={`p-2 rounded-full transition-colors duration-300 ${
                        activeStep.title === step.title
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-primary"
                      }`}
                    >
                      {/* React Icons are rendered directly as components */}
                      <step.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Spotlight Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="w-full h-64 rounded-2xl overflow-hidden shadow-xl border border-border mb-6">
                    <img
                      src={activeStep.image}
                      alt={activeStep.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {activeStep.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {activeStep.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

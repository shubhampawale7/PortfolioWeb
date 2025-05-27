/* eslint-disable no-unused-vars */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Monitor,
  Layers,
  Sparkles,
  Accessibility,
  PieChart,
  CheckCircle,
  // Change Speedometer to Gauge
  Gauge, // Corrected import for speedometer-like icon
  Palette,
} from "lucide-react";

// Data for your UI/UX features
const uiuxFeatures = [
  {
    id: 1,
    icon: Monitor,
    title: "Responsive & Adaptive Design",
    description:
      "Crafting layouts that seamlessly adjust and perform across desktops, tablets, and mobile devices for optimal viewing.",
    //image: "/path/to/responsive-gif.gif", // GIF showing responsiveness
  },
  {
    id: 2,
    icon: Layers,
    title: "Intuitive Navigation Patterns",
    description:
      "Designing clear and consistent navigation systems (e.g., sticky headers, breadcrumbs, mega-menus) that guide users effortlessly.",
    // image: "/path/to/navigation-screenshot.jpg", // Screenshot/GIF of your navigation
  },
  {
    id: 3,
    icon: Sparkles,
    title: "Micro-interactions & Animations",
    description:
      "Enhancing user feedback and delight with subtle, purposeful animations for buttons, inputs, and transitions (Framer Motion expertise).",
    // image: "/path/to/micro-interaction-gif.gif", // GIF of a subtle animation
  },
  {
    id: 4,
    icon: Accessibility,
    title: "Inclusive & Accessible Design",
    description:
      "Building interfaces with robust accessibility (A11Y) in mind, ensuring usability for all users through ARIA, keyboard navigation, and contrast.",
    // image: "/path/to/accessibility-screenshot.jpg", // Screenshot showing A11Y features
  },
  {
    id: 5,
    icon: PieChart,
    title: "Data Visualization & Dashboards",
    description:
      "Transforming complex data into digestible, interactive visual representations for clear insights and informed decision-making.",
    // image: "/path/to/data-viz-screenshot.jpg", // Screenshot of a dashboard/chart
  },
  {
    id: 6,
    icon: CheckCircle,
    title: "User-Friendly Forms & Validation",
    description:
      "Crafting intuitive forms with clear labels, real-time validation feedback, and efficient input patterns to minimize user errors.",
    // image: "/path/to/form-validation-gif.gif", // GIF of form validation
  },
  {
    id: 7,
    // Use Gauge instead of Speedometer
    icon: Gauge, // Corrected icon name
    title: "Performance-Optimized UI",
    description:
      "Prioritizing fast load times and smooth interactions through optimized asset delivery, lazy loading, and efficient rendering techniques.",
    // image: "/path/to/performance-screenshot.jpg", // Screenshot of a fast loading page or before/after metrics
  },
  {
    id: 8,
    icon: Palette,
    title: "Consistent Design Systems",
    description:
      "Applying modular component design to ensure visual consistency, maintainability, and accelerated development across projects.",
    // image: "/path/to/design-system-screenshot.jpg", // Screenshot of components in a system
  },
  // Add more UI/UX features you excel at!
];

export const UIUXShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger animation for each card
      },
    },
  };

  const featureCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="ui-ux-showcase"
      className="py-24 px-4 bg-background relative overflow-hidden"
    >
      {/* Background radial gradient */}
      <div className="absolute inset-0 z-0 radial-gradient-background opacity-10 pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Crafting <span className="text-primary">Exceptional Experiences</span>
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
          Beyond just writing code, I focus on building interfaces that are not
          only functional but also intuitive, aesthetically pleasing, and a joy
          to use. Here are some of the UI/UX principles and features I integrate
          into my work.
        </p>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" // 4 columns on large screens
        >
          {uiuxFeatures.map((feature) => (
            <motion.div
              key={feature.id}
              variants={featureCardVariants}
              className="bg-card border border-border rounded-lg shadow-xl p-6 flex flex-col items-start text-left group
                         transition-all duration-300 hover:shadow-2xl hover:border-primary/50 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between w-full mb-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
                  <feature.icon className="h-6 w-6" />
                </div>
              </div>
              {feature.image && (
                <div className="mb-4 overflow-hidden rounded-md border border-border/50">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

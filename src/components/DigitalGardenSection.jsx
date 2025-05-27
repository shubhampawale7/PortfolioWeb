/* eslint-disable no-unused-vars */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BookOpen,
  Lightbulb,
  Code,
  ExternalLink,
  GitBranch,
  Terminal,
} from "lucide-react"; // Icons for garden notes

// Dummy data for your garden notes
const gardenNotes = [
  {
    id: 1,
    icon: Lightbulb,
    title: "Exploring React Server Components",
    description:
      "A quick dive into the basics of React Server Components and their potential for performance optimization. Understanding the paradigm shift.",
    link: "https://dev.to/shubhampawale/understanding-react-server-components-a-deep-dive-into-their-potential-2k4h", // Example: Link to your blog post on Dev.to
    type: "Learning Insight",
  },
  {
    id: 2,
    icon: Code,
    title: "CSS Custom Properties for Theming",
    description:
      "How to effectively use CSS custom properties (variables) for dynamic theming, leading to cleaner and more maintainable stylesheets.",
    link: "https://gist.github.com/shubhampawale/a1b2c3d4e5f67890abcdefffe", // Example: Link to your GitHub Gist
    type: "Code Snippet",
  },
  {
    id: 3,
    icon: GitBranch,
    title: "Demystifying Git Rebase vs Merge",
    description:
      "A practical breakdown of when to use Git rebase versus merge, and their impact on commit history. Best practices for collaborative projects.",
    link: "https://medium.com/@shubhampawale/git-rebase-vs-merge-when-to-use-which-and-why-a1b2c3d4e5", // Example: Link to your Medium article
    type: "Technical Tip",
  },
  {
    id: 4,
    icon: Terminal,
    title: "Optimizing Webpack Build Times",
    description:
      "Experiments with Webpack configuration to reduce build times in large-scale React applications. Focus on caching and parallelization.",
    link: "https://codesandbox.io/s/webpack-optimization-demo-zyxwv", // Example: Link to a CodeSandbox demo
    type: "Experiment",
  },
  {
    id: 5,
    icon: BookOpen,
    title: "Introduction to WebAssembly (Wasm)",
    description:
      "First impressions and potential use cases for WebAssembly in web development. Beyond JavaScript performance boosts.",
    link: "https://dev.to/shubhampawale/getting-started-with-webassembly-for-web-dev-1j2k3l", // Example: Link to another blog post
    type: "Learning Insight",
  },
  {
    id: 6,
    icon: ExternalLink, // Or a more specific icon for a micro-demo
    title: "Framer Motion: Scroll-Linked Animations",
    description:
      "A small interactive demo showcasing a scroll-linked animation created purely with Framer Motion and React hooks. [Link to demo]",
    link: "https://codesandbox.io/s/framer-motion-scroll-animation-example-abcde", // Example: Link to a CodeSandbox micro-demo
    type: "Micro-Demo",
  },
];

export const DigitalGardenSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger animation for each note
      },
    },
  };

  const noteCardVariants = {
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
      id="digital-garden"
      className="py-24 px-4 bg-background relative overflow-hidden"
    >
      {/* Background radial gradient */}
      <div className="absolute inset-0 z-0 radial-gradient-background opacity-10 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          My <span className="text-primary">Digital Garden</span>
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
          A living collection of my ongoing learning, small experiments, and
          insights from the ever-evolving world of web development. Here's where
          I plant new ideas and watch them grow.
        </p>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {gardenNotes.map((note) => (
            <motion.a
              key={note.id}
              href={note.link} // Link each card to its corresponding content
              target="_blank" // Open in new tab if it's an external link or a detailed view
              rel="noopener noreferrer"
              variants={noteCardVariants}
              className="bg-card border border-border rounded-lg shadow-xl p-6 flex flex-col items-start text-left group
                         transition-all duration-300 hover:shadow-2xl hover:border-primary/50 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between w-full mb-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
                  <note.icon className="h-6 w-6" />
                </div>
                {note.type && (
                  <span className="text-xs font-medium text-muted-foreground px-3 py-1 rounded-full bg-border/50 group-hover:bg-primary/20 transition-colors duration-300">
                    {note.type}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {note.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                {note.description}
              </p>
              <span className="mt-4 text-primary font-medium flex items-center group-hover:underline">
                Read More <ExternalLink size={16} className="ml-2" />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

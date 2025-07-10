/* eslint-disable no-unused-vars */
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Ninad's Pottery - E-Commerce",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://ninad-s-pottery.vercel.app/",
    githubUrl: "https://github.com/shubhampawale7/Ninad-s-Pottery",
  },
  {
    id: 2,
    title: "Prani Seva Ashram - NGO Website",
    description:
      "A dynamic website for a Dog NGO with adoption insights and donation tracking.",
    image: "/projects/project2.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    demoUrl: "https://prani-seva-ashram-2-0.onrender.com/",
    githubUrl: "https://github.com/shubhampawale7/Prani-Seva-Ashram-2.0",
  },
  {
    id: 6,
    title: "BRB Art Fusion - Fullstack E-Commerce Platform",
    description:
      "A complete e-commerce solution , featuring a powerful admin panel for end-to-end control, from product listing to final delivery.",
    image: "/projects/project6.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Fullstack"],
    demoUrl: "https://brb-art-fusion-mern.vercel.app/",
    githubUrl: "https://github.com/shubhampawale7/brb-art-fusion-MERN",
  },
  {
    id: 3,
    title: "Trishha Mines & Minerals",
    description:
      "A modern website for a mining company, highlighting their services and global footprint.",
    image: "/projects/project3.png",
    tags: ["React.js", "Node.js", "MongoDB"],
    demoUrl: "https://www.trishhaminesandminerals.com/",
    githubUrl: "https://github.com/shubhampawale7",
  },
  {
    id: 4,
    title: "Walnut Hotel - Landing Page",
    description:
      "A sleek and responsive landing page for the Walnut Hotel, built using pure HTML, CSS, and JavaScript.",
    image: "/projects/project4.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://walnut-hotel.vercel.app/",
    githubUrl: "https://github.com/shubhampawale7",
  },
  {
    id: 5,
    title: "FlowBit - SaaS Subscription Manager",
    description:
      "A full-stack MERN SaaS application to help users track and manage digital subscriptions. Features secure JWT authentication, full CRUD functionality, an analytics dashboard, and a modern, fully-responsive UI.",
    image: "/projects/flowbit_cover.png",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Framer Motion",
      "SaaS",
    ],
    demoUrl: "https://flow-bit-fcnw.vercel.app/",
    githubUrl: "https://github.com/shubhampawale7/FlowBit",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of projects where I've turned complex problems into
            elegant, functional digital experiences.
          </p>
        </motion.div>

        {/* This container will hold all the alternating project sections */}
        <div className="space-y-28">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                {/* Image Column */}
                <motion.div
                  className={`rounded-2xl overflow-hidden shadow-xl ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Details Column */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className={`flex flex-col justify-center ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <motion.h3
                    variants={itemVariants}
                    className="text-3xl font-bold mb-4 text-foreground"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    variants={itemVariants}
                    className="text-muted-foreground mb-6"
                  >
                    {project.description}
                  </motion.p>
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap gap-2 mb-6"
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center gap-4"
                  >
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-semibold shadow-lg hover:bg-primary/90 transition-all text-sm"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={16} /> Source Code
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/shubhampawale7"
            rel="noopener noreferrer"
          >
            See More on Github <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

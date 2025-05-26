/* eslint-disable no-unused-vars */
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { ProjectModal } from "./ProjectModal";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Ninad's Pottery - E-Commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project1.png",
    extraImages: [
      "/projects/project1.png",
      "/projects/project1b.png",
      "/projects/project1c.png",
    ],
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://www.ninadspottery.com/",
    githubUrl: "https://github.com/shubhampawale7",
  },
  {
    id: 2,
    title: "Prani Seva Ashram - A Dog NGO Website",
    description:
      "A dynamic website for a Dog NGO with adoption insights, donation tracking, and volunteer management features.",
    image: "/projects/project2.png",
    extraImages: [
      "/projects/project2.png",
      "/projects/project2b.png",
      "/projects/project2c.png",
    ],
    tags: ["Node.js", "Express.js", "React.js", "MongoDB"],
    demoUrl: "https://www.pranisevaashram.com/",
    githubUrl: "https://github.com/shubhampawale7",
  },
  {
    id: 3,
    title: "Trishha Mines and Minerals - A Mining Website",
    description:
      "A modern website for a mining company, highlighting their services, products, and global footprint.",
    image: "/projects/project3.png",
    extraImages: [
      "/projects/project3.png",
      "/projects/project3b.png",
      "/projects/project3c.png",
    ],
    tags: ["Node.js", "Express.js", "React.js", "MongoDB"],
    demoUrl: "https://www.trishhaminesandminerals.com/",
    githubUrl: "https://github.com/shubhampawale7",
  },
  {
    id: 4,
    title: "Walnut Hotel - Landing Page",
    description:
      "A sleek and responsive landing page for the Walnut Hotel, built using pure HTML, CSS, and JavaScript.",
    image: "/projects/project4.png",
    extraImages: [
      "/projects/project4.png",
      "/projects/project4b.png",
      "/projects/project4c.png",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://walnut-hotel.vercel.app/",
    githubUrl: "https://github.com/shubhampawale7",
  },
];  

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          A glimpse into the products I’ve built with love for performance,
          design, and scalability.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              onClick={() => openModal(project)}
              key={project.id}
              className="cursor-pointer group bg-card rounded-2xl overflow-hidden shadow-md transition-all hover:shadow-xl hover:-translate-y-1 duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} // prevent modal open on clicking links
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
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
            Check My Github <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
};

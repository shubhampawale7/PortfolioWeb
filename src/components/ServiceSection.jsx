/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaPalette,
  FaLock,
  FaServer,
  FaRocket,
} from "react-icons/fa";

// Data for the services section with image paths
const services = [
  {
    icon: FaLaptopCode,
    title: "Full-Stack Applications",
    description:
      "End-to-end MERN stack development for scalable and secure web apps.",
    image:
      "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: FaShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Custom shopping carts, payment gateway integration, and complete online stores.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2134&auto=format&fit=crop",
  },
  {
    icon: FaPalette,
    title: "UI/UX Development",
    description:
      "Pixel-perfect interfaces using React, Tailwind CSS, and Framer Motion.",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: FaLock,
    title: "Authentication & Security",
    description:
      "Secure JWT-based authentication, role-based access, and modern security practices.",
    image:
      "https://media.istockphoto.com/id/1343499203/photo/lock-data-concept.jpg?s=2048x2048&w=is&k=20&c=qMI1jW4gQj5WN1GCMBEyXPzYw1Hgbmwef9IAdbxWWNY=",
  },
  {
    icon: FaServer,
    title: "API Development",
    description:
      "RESTful and GraphQL APIs with Node.js and Express for well-documented endpoints.",
    image:
      "https://media.istockphoto.com/id/1401675711/photo/application-programming-interface.jpg?s=2048x2048&w=is&k=20&c=saxSDELpUXUD_yuM3xxIz2W864LlxWO7x1f1kU5wXRc=",
  },
  {
    icon: FaRocket,
    title: "Deployment & Performance",
    description:
      "CI/CD setup and deployment on Vercel, Render, and others with a focus on speed.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  },
];

// Reusable Service Item component with the new blur-to-focus effect
const ServiceItem = ({ service, isHovered, onHover }) => {
  const { icon: Icon, title, description, image } = service;

  return (
    <motion.div
      onMouseEnter={onHover}
      className="relative h-60 w-full rounded-2xl overflow-hidden cursor-pointer shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Blurry Background Layer - This fades out on hover */}
      <motion.img
        src={image}
        alt={`${title} blurred background`}
        className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110"
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      {/* Clear Background Layer - Always present underneath */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Text Content */}
      <div className="relative h-full p-6 flex flex-col justify-end text-white">
        {/* Description appears on hover */}
        <motion.div
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mb-2"
        >
          <p className="text-sm">{description}</p>
        </motion.div>
        {/* Title and Icon are always visible */}
        <div className="flex items-center gap-4">
          <Icon className="text-2xl text-primary" />
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export const ServiceSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="services"
      className="py-24 px-4 relative bg-background"
      onMouseLeave={() => setHoveredIndex(null)} // Reset hover on leaving the section
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            From concept to deployment, I offer a complete suite of services to
            build modern, high-performing web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              service={service}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaPalette,
  FaLock,
  FaServer,
  FaRocket,
  FaComments,
  FaTools,
  FaCloudUploadAlt,
  FaBullhorn,
  FaLightbulb,
  FaCode, // A new general tech icon for background
  FaStar, // Another general icon for background
} from "react-icons/fa";

// Array of service data - Reordered and original content length maintained
const services = [
  {
    icon: FaLaptopCode,
    title: "Full-Stack Web Application Development",
    description:
      "End-to-end development using MongoDB, Express.js, React, and Node.js. I build dynamic, scalable, and secure web applications tailored to your business needs.",
  },
  {
    icon: FaShoppingCart,
    title: "Comprehensive E-commerce Solutions",
    description:
      "Custom shopping carts, payment gateway integration (Stripe, Razorpay), product management, order tracking, and more. Creating seamless purchasing journeys.",
  },
  {
    icon: FaPalette,
    title: "Frontend UI/UX Development",
    description:
      "Pixel-perfect responsive interfaces using React, Tailwind CSS, Framer Motion, and GSAP. I focus on clean design, fluid animations, and accessibility.",
  },
  {
    icon: FaLock,
    title: "Authentication & Security Implementation",
    description:
      "Secure user authentication systems with JWT, OAuth, session management, HttpOnly cookies, role-based access control, and rate-limiting.",
  },
  {
    icon: FaServer,
    title: "Backend API Development",
    description:
      "RESTful and GraphQL API design and development with Express.js and Node.js. Modular, secure, and well-documented endpoints.",
  },
  {
    icon: FaRocket,
    title: "Performance Optimization & SEO",
    description:
      "Improve website load time, implement lazy loading, code-splitting, and basic on-page SEO to enhance visibility and speed.",
  },
  {
    icon: FaComments,
    title: "Real-Time Features Integration",
    description:
      "WebSockets and Socket.io integration for live chat, notifications, real-time dashboards, and collaborative tools.",
  },
  {
    icon: FaTools,
    title: "Admin Panels & Dashboards",
    description:
      "Custom-built admin interfaces with analytics, data management, CRUD functionality, and secure login systems.",
  },
  {
    icon: FaCloudUploadAlt,
    title: "Deployment & DevOps Automation",
    description:
      "CI/CD setup, Dockerization, and deployment on platforms like Vercel, Netlify, Render, Railway, or traditional VPS with Nginx + PM2.",
  },
];

// Helper component for the Parallax 3D Card (no changes needed here in core logic)
const ParallaxTiltCard = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17deg", "-17deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17deg", "17deg"]);
  const scale = useTransform(mouseXSpring, [-0.5, 0.5], [1, 1.05]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const offsetX = (e.clientX - centerX) / width;
    const offsetY = (e.clientY - centerY) / height;

    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
        rotateX,
        rotateY,
        scale,
      }}
      className="relative w-full h-full cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

export const ServiceSection = () => {
  return (
    <section
      id="services"
      className="py-24 px-4 relative overflow-hidden bg-background"
    >
      {/* Background aesthetic elements */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute top-1/4 -left-16 text-primary/10 text-[10rem] md:text-[15rem] -rotate-12 z-0 opacity-10 pointer-events-none"
      >
        <FaCode />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.08, y: 0 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="absolute bottom-1/4 -right-16 text-primary/10 text-[8rem] md:text-[12rem] rotate-45 z-0 opacity-8 pointer-events-none"
      >
        <FaStar />
      </motion.div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {" "}
        {/* Ensure content is above background elements */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Services</span>
        </h2>
        {/* Appealing write-up before the cards */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          I offer a comprehensive suite of development services designed to
          transform your vision into robust, high-performing digital realities.
          My focus is on crafting{" "}
          <strong className="text-primary">tailored solutions</strong> that
          prioritize{" "}
          <strong className="text-primary">
            scalability, security, and exceptional user experience{" "}
          </strong>
          from concept to deployment.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="relative rounded-xl overflow-hidden group"
            >
              <ParallaxTiltCard>
                <div className="bg-card border border-border rounded-xl p-8 h-full flex flex-col justify-between items-center text-center shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:border-primary/50 relative z-10 hover:bg-card-hover">
                  <div className="text-primary mb-6 transition-all duration-300 group-hover:text-primary-dark group-hover:drop-shadow-lg">
                    {" "}
                    {/* Icon container */}
                    <service.icon className="text-5xl group-hover:scale-110 transition-transform duration-300" />{" "}
                    {/* Icon scaling */}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {service.description}{" "}
                    {/* No dangerouslySetInnerHTML or bolding */}
                  </p>
                </div>
              </ParallaxTiltCard>
            </motion.div>
          ))}
        </div>
        {/* Appealing write-up after the cards */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: services.length * 0.08 + 0.3 }}
          className="text-lg text-center text-muted-foreground mt-16 max-w-3xl mx-auto leading-relaxed"
        >
          My commitment extends beyond just writing code; it's about delivering{" "}
          {""}
          <strong className="text-primary">
            impactful digital products{" "}
          </strong>{" "}
          that drive growth and efficiency. I believe in clear communication,
          agile methodologies, and a relentless pursuit of excellence. Let's
          collaborate to build something truly remarkable together.
        </motion.p>
      </div>
    </section>
  );
};

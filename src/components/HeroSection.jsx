/* eslint-disable no-unused-vars */
import Tilt from "react-parallax-tilt";
import { ArrowDown } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container max-w-4xl mx-auto text-center z-10"
      >
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight flex flex-wrap justify-center gap-2">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>

            {/* Enhanced 3D Tilt Name with Framer Motion & Glow */}
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareMaxOpacity={0.2}
              perspective={1000}
              scale={1}
              className="inline-block"
              transitionSpeed={1500}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  textShadow: "0px 0px 8px rgba(167, 139, 250, 0.6)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex gap-2"
              >
                <span className="text-primary opacity-0 animate-fade-in-delay-1 drop-shadow-md">
                  Shubham
                </span>
                <span className="text-gradient opacity-0 animate-fade-in-delay-2 drop-shadow-md">
                  Pawale
                </span>
              </motion.div>
            </Tilt>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-loose font-normal opacity-0 animate-fade-in-delay-3 [text-wrap:balance]">
            I create{" "}
            <span className="text-primary font-semibold">innovative</span> web
            experiences using modern technologies that blend design and
            functionality seamlessly. As a{" "}
            <span className="text-primary font-semibold">Full-stack</span>{" "}
            developer, I specialize in building
            <span className="text-primary font-semibold"> responsive</span>,
            user-friendly interfaces backed by powerful and efficient
            server-side logic. My work spans everything from interactive
            websites to dynamic dashboards, using tools like React, Node.js, and
            Tailwind CSS. I’m passionate about crafting clean,{" "}
            <span className="text-primary font-semibold">scalable</span> code
            that brings ideas to life and solves{" "}
            <span className="text-primary font-semibold">
              real-world problems
            </span>
            . Every project I build is designed to be fast, accessible, and
            visually compelling.
          </p>

          <div className="mt-8 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </motion.div>

      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce ">
        <span className="text-sm text-muted-foreground "> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div> */}
    </section>
  );
};

/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Product Manager",
    quote:
      "Working with Shubham was a game-changer. His dedication and expertise took our project to the next level!",
  },
  {
    name: "Mark Thompson",
    role: "CEO at InnovateX",
    quote:
      "Shubham’s code quality and problem-solving skills are outstanding. Highly recommended!",
  },
  {
    name: "Sophie Lee",
    role: "Freelance Designer",
    quote:
      "A true professional who always delivers on time. Loved collaborating on creative projects.",
  },
  {
    name: "John Doe",
    role: "Marketing Specialist",
    quote:
      "Exceptional work ethic and great communication throughout the project.",
  },
  {
    name: "Jane Smith",
    role: "UX Researcher",
    quote:
      "Delivered outstanding designs that truly enhanced the user experience.",
  },
  {
    name: "David Kim",
    role: "CTO at TechSphere",
    quote: "Reliable and skilled developer who meets deadlines consistently.",
  },
];

const TESTIMONIALS_PER_PAGE = 3;
const AUTO_SCROLL_INTERVAL = 6000;

export const TestimonialCarousel = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / TESTIMONIALS_PER_PAGE);
  const intervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const nextPage = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextPage(),
    onSwipedRight: () => prevPage(),
    trackMouse: true,
  });

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(nextPage, AUTO_SCROLL_INTERVAL);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  const currentTestimonials = testimonials.slice(
    page * TESTIMONIALS_PER_PAGE,
    page * TESTIMONIALS_PER_PAGE + TESTIMONIALS_PER_PAGE
  );

  return (
    <section
      id="testimonials"
      className="py-24 px-4 relative bg-background"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto max-w-5xl" {...swipeHandlers}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Client <span className="text-primary">Testimonials</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here’s what clients and collaborators have said about working with me.
          I value clear communication, quality results, and long-term impact.
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentTestimonials.map(({ name, role, quote }, i) => (
              <motion.div
                key={i}
                className="bg-card border border-border rounded-xl p-6 shadow-md relative flex flex-col justify-between group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <p className="text-muted-foreground text-sm italic mb-6 relative z-10">
                  <span className="text-4xl text-primary absolute top-[-10px] left-[-10px] opacity-20">
                    “
                  </span>
                  {quote}
                </p>
                <div className="mt-auto pt-4 border-t text-sm text-foreground">
                  <p className="font-semibold">{name}</p>
                  <p className="text-muted-foreground text-xs">{role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-12 flex justify-center gap-6">
          <button
            onClick={prevPage}
            className="px-6 py-2 border border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition"
          >
            ← Prev
          </button>
          <button
            onClick={nextPage}
            className="px-6 py-2 border border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
};

/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiMiniWrenchScrewdriver,
  HiMiniEnvelope,
  HiMiniClock,
  HiMiniGlobeAsiaAustralia,
  HiMiniShieldCheck,
  HiMiniPaintBrush,
  HiMiniCpuChip,
} from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa6";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I specialize in full-stack web development, including React, Node.js, and modern UI/UX design.",
    icon: <HiMiniWrenchScrewdriver className="text-primary text-xl" />,
  },
  {
    question: "How can I contact you?",
    answer:
      "You can reach me via the Contact section on my website or email me directly at shubhampawale7@gmail.com.",
    icon: <HiMiniEnvelope className="text-primary text-xl" />,
  },
  {
    question: "What’s your typical project timeline?",
    answer:
      "Project timelines vary but typically range from 4 to 12 weeks depending on scope and complexity.",
    icon: <HiMiniClock className="text-primary text-xl" />,
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, I work with clients globally via Zoom, Slack, and email.",
    icon: <HiMiniGlobeAsiaAustralia className="text-primary text-xl" />,
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Absolutely! I offer post-launch support and maintenance packages tailored to your project.",
    icon: <HiMiniShieldCheck className="text-primary text-xl" />,
  },
  {
    question: "Can you redesign existing websites?",
    answer:
      "Yes, I can help modernize and optimize your current website for better UX and performance.",
    icon: <HiMiniPaintBrush className="text-primary text-xl" />,
  },
  {
    question: "What tech stack do you use?",
    answer:
      "Primarily the MERN stack (MongoDB, Express, React, Node), Tailwind CSS, and various modern libraries like Framer Motion and Prisma.",
    icon: <HiMiniCpuChip className="text-primary text-xl" />,
  },
];

export const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <motion.section
      id="faq"
      className="max-w-3xl mx-auto py-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Frequently Asked <span className="text-primary">Questions</span>
      </h2>

      <div className="space-y-5">
        {displayedFaqs.map((faq, index) => {
          const isOpen = index === openIndex;

          return (
            <motion.div
              key={index}
              className="border border-border bg-card rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.08, // cascade effect
              }}
              viewport={{ once: true }}
              layout
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-muted/60 transition-colors"
                aria-expanded={isOpen}
                aria-controls={`faq-content-${index}`}
                id={`faq-header-${index}`}
              >
                <div className="flex items-center gap-3 text-foreground">
                  {faq.icon}
                  <span className="font-semibold text-lg">{faq.question}</span>
                </div>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-2 text-primary"
                >
                  <FaChevronDown />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    id={`faq-content-${index}`}
                    aria-labelledby={`faq-header-${index}`}
                    initial={{ height: 0, opacity: 0, paddingTop: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      paddingTop: "0.5rem",
                    }}
                    exit={{ height: 0, opacity: 0, paddingTop: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
                    className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

        <div className="text-center pt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary hover:underline hover:bg-muted px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium flex items-center justify-center gap-1 mx-auto"
          >
            {showAll ? (
              <>
                Show Less <span className="text-xs">▲</span>
              </>
            ) : (
              <>
                Show More <span className="text-xs">▼</span>
              </>
            )}
          </button>
        </div>
      </div>
    </motion.section>
  );
};

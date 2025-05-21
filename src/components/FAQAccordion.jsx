/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I specialize in full-stack web development, including React, Node.js, and modern UI/UX design.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can reach me via the Contact section on my website or email me directly at shubhampawale7@gmail.com.",
  },
  {
    question: "What’s your typical project timeline?",
    answer:
      "Project timelines vary but typically range from 4 to 12 weeks depending on scope and complexity.",
  },
];

export const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Frequently Asked <span className="text-primary">Questions</span>
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = index === openIndex;
          return (
            <div
              key={index}
              className="border border-muted rounded-md shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left bg-background hover:bg-muted transition"
                aria-expanded={isOpen}
                aria-controls={`faq-content-${index}`}
                id={`faq-header-${index}`}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <span className="ml-2 text-primary">
                  {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    id={`faq-content-${index}`}
                    aria-labelledby={`faq-header-${index}`}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { height: "auto", opacity: 1 },
                      collapsed: { height: 0, opacity: 0 },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-6 pt-0 pb-4 text-muted-foreground text-sm"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

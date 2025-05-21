import React, { useState } from "react";

export const ScheduleCall = () => {
  const [open, setOpen] = useState(false);

  const calendlyUrl = "https://calendly.com/your-calendly-username"; // Replace with your Calendly link

  return (
    <>
      {/* Popup Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-opacity-60 z-50 flex items-center justify-center"
          aria-label="Close Calendly popup"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-lg w-[90vw] max-w-3xl h-[80vh] md:h-[600px] relative"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-5 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              aria-label="Close Calendly popup"
            >
              &times;
            </button>
            <iframe
              src={calendlyUrl}
              className="w-full h-full rounded-lg"
              frameBorder="0"
              title="Schedule a call"
              scrolling="no"
            />
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className=" fixed bottom-8 right-25 z-50 bg-primary text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transform transition-transform flex items-center gap-2 "
        aria-label="Schedule a call"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
          viewBox="0 0 24 24"
        >
          <path d="M8 7V3M16 7V3M3 11h18M5 21h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z" />
        </svg>
        Schedule a Call
      </button>
    </>
  );
};

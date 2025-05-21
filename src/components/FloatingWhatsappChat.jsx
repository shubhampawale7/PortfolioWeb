import { FaWhatsapp } from "react-icons/fa";

export const FloatingWhatsappChat = () => {
  return (
    <div className="group fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/919518364400?text=Hi,%20I'm%20interested%20in%20building%20a%20website.%20Can%20we%20chat?"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="bg-primary dark:bg-primary-dark text-white p-4 rounded-full shadow-lg flex items-center justify-center 
                   transition-transform duration-300 hover:scale-110 "
      >
        <FaWhatsapp size={28} />
      </a>
      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-black dark:bg-white text-white dark:text-black text-sm px-3 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat with me
      </div>
    </div>
  );
};

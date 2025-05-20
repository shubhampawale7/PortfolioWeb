/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const NotFound = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-blue-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/30 backdrop-blur-lg p-10 rounded-3xl shadow-xl text-center max-w-md w-full"
      >
        <h1 className="text-6xl font-bold text-pink-800 mb-4 drop-shadow-lg">
          404
        </h1>
        <p className="text-gray-800 text-xl mb-6">Page Not Found</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClickHandler}
          className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition-all duration-300"
        >
          Go To Portfolio
        </motion.button>
      </motion.div>
    </div>
  );
};

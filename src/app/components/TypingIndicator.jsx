import { motion } from "framer-motion";

const TypingIndicator = () => {
  return (
    <div className="flex items-center mb-2 ml-4 ">
      <div className="bg-gray-300 text-gray-600 p-2 rounded-[14px] w-[60px] py-2.5">
        <div className="flex flex-row justify-evenly">
          <motion.div
            className="w-2 h-2 bg-gray-500 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.6, 1],
              backgroundColor: [
                "#6B7280",
                "#4B5563",
                "#6B7280",
              ],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatDelay: 0.2,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="w-2 h-2 bg-gray-500 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.6, 1],
              backgroundColor: [
                "#6B7280",
                "#4B5563",
                "#6B7280",
              ],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatDelay: 0.2,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />
          <motion.div
            className="w-2 h-2 bg-gray-500 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.6, 1],
              backgroundColor: [
                "#6B7280",
                "#4B5563",
                "#6B7280",
              ],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatDelay: 0.2,
              ease: "easeInOut",
              delay: 0.4,
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default TypingIndicator;

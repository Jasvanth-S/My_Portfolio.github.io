import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRobot } from './RobotBrain';

const RobotTooltip = () => {
  const { activeSection, isOpen, isHovered } = useRobot();

  const getMessage = () => {
    switch(activeSection) {
      case 'about': return "Learning about him? Good choice 😎";
      case 'skills': return "These skills are powerful! ⚡";
      case 'projects': return "Let's explore some cool builds 👀";
      case 'contact': return "Let's connect! 💻";
      case 'hero':
      default: return "Hey! I'm your AI guide 🚀";
    }
  };

  return (
    <AnimatePresence>
      {(!isOpen && isHovered) && (
        <motion.div 
          initial={{ opacity: 0, x: 10, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1, y: [0, -5, 0] }}
          transition={{ y: { repeat: Infinity, duration: 3, ease: "easeInOut" } }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="absolute right-[110px] sm:right-[130px] top-[30%] -translate-y-1/2 bg-white/90 dark:bg-[#1A2E4C]/90 backdrop-blur-md text-gray-800 dark:text-[#E2E8F0] px-5 py-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] dark:shadow-[0_0_20px_rgba(56,189,248,0.15)] whitespace-nowrap font-body text-[0.9rem] font-bold z-40 flex items-center border border-gray-200 dark:border-sky-400/30"
        >
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white/90 dark:bg-[#1A2E4C]/90 backdrop-blur-md rotate-45 border-t border-r border-gray-200 dark:border-sky-400/30" />
          <span className="relative z-10">{getMessage()}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default RobotTooltip;

import React from 'react';
import { motion } from 'framer-motion';
import { useRobot } from './RobotBrain';
import { robotVariants } from './RobotAnimations';

const RobotCharacter = () => {
  const { activeSection, isHovered, setIsHovered, isOpen, setIsOpen } = useRobot();

  return (
    <motion.div 
      variants={robotVariants}
      animate={activeSection}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsOpen(!isOpen)}
      className={`relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] cursor-pointer ${isHovered ? 'scale-110' : 'scale-100'} transition-transform duration-300 z-50 drop-shadow-[0_15px_30px_rgba(6,182,212,0.3)] hover:drop-shadow-[0_20px_40px_rgba(6,182,212,0.6)]`}
    >
        <motion.div 
            className="w-full h-full bg-contain bg-center bg-no-repeat"
            style={{
                // Beautiful, Pixar-style transparent 3D Robot Image
                backgroundImage: `url('https://cdn3d.iconscout.com/3d/premium/thumb/cute-robot-4384112-3640248.png?f=webp')`,
            }}
        />

        {/* Small glowing hover effect disc underneath */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-cyan-500/30 blur-md rounded-[100%]" />
    </motion.div>
  );
};

export default RobotCharacter;

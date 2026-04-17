import React from 'react';
import { motion } from 'framer-motion';
import { useRobot } from './RobotBrain';
import { robotVariants } from './RobotAnimations';

const RobotCharacter = () => {
  const { activeSection, isHovered, setIsHovered, isOpen, setIsOpen } = useRobot();

  // Grid coordinates for a 3x2 Sprite Sheet based on the uploaded image:
  // Top row: [0] Hero/Wave, [1] About/Book, [2] Idle/Leaning
  // Bottom row: [0] Contact/Laptop, [1] Skills/Wrench, [2] Projects/Megaphone
  
  const getSpritePosition = () => {
    switch(activeSection) {
      case 'about': return '50% 0%'; // Top Center: Reading Book
      case 'skills': return '50% 100%'; // Bottom Center: Holding Wrench
      case 'projects': return '100% 100%'; // Bottom Right: Megaphone / Explaining
      case 'contact': return '0% 100%'; // Bottom Left: Laptop
      case 'hero':
      default: return '0% 0%'; // Top Left: Waving
    }
  };

  return (
    <motion.div 
      variants={robotVariants}
      animate={activeSection}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsOpen(!isOpen)}
      className={`relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] cursor-pointer ${isHovered ? 'scale-110' : 'scale-100'} transition-transform duration-300 z-50 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)]`}
    >
        {/* We use a background image for the sprite sheet.
            The mix-blend-mode helps cut out the white background if a JPG is used,
            but a transparent PNG named robot-sprites.png is heavily recommended! */}
        <motion.div 
            className="w-full h-full bg-no-repeat"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL || ''}/assets/robot-sprites.png)`,
                backgroundSize: '300% 200%', // 3 columns, 2 rows
            }}
            animate={{ backgroundPosition: getSpritePosition() }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {/* Small glowing hover effect disc underneath */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-cyan-500/30 blur-md rounded-[100%]" />
    </motion.div>
  );
};

export default RobotCharacter;

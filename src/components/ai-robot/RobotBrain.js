import React, { createContext, useContext, useState, useEffect } from 'react';

const RobotContext = createContext();

export const RobotProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'certifications', 'projects', 'professionalEngagements', 'research', 'contact'];
      let current = 'hero';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section is roughly in the middle of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
            break;
          }
        }
      }
      
      // Grouping sections into logical robot states
      if (['skills', 'certifications'].includes(current)) current = 'skills';
      if (['projects', 'professionalEngagements', 'research'].includes(current)) current = 'projects';
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <RobotContext.Provider value={{ activeSection, isOpen, setIsOpen, isHovered, setIsHovered }}>
      {children}
    </RobotContext.Provider>
  );
};

export const useRobot = () => useContext(RobotContext);

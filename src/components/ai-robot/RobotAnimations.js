export const robotVariants = {
  hero: { 
    y: [0, -12, 0], 
    rotate: [0, 0, 0],
    transition: { y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" } } 
  },
  about: { 
    y: [0, -8, 0], 
    rotate: [0, 5, -5, 0], 
    transition: { repeat: Infinity, duration: 4, ease: "easeInOut" } 
  },
  skills: { 
    x: [0, 2, -2, 0], 
    y: [0, -5, 0], 
    transition: { repeat: Infinity, duration: 0.4 } 
  }, // Intense engineering animation
  projects: { 
    y: [0, -10, 0], 
    scale: [1, 1.05, 1], 
    rotate: [0, -5, 0],
    transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } 
  },
  contact: { 
    y: [0, -3, 0], 
    transition: { repeat: Infinity, duration: 0.15 } 
  }, // Speedy typing animation
};

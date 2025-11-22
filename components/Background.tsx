
import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-dark">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      {/* Floating Orbs - Optimized with hardware acceleration */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0], 
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-40 will-change-transform transform-gpu" 
      />

      <motion.div 
        animate={{ 
          x: [0, -100, 0], 
          y: [0, 100, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear",
          delay: 2
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] opacity-40 will-change-transform transform-gpu" 
      />

      <motion.div 
        animate={{ 
          x: [0, 50, -50, 0], 
          y: [0, 50, 0],
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] opacity-30 will-change-transform transform-gpu" 
      />
    </div>
  );
};

export default Background;

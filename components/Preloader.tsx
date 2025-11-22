import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds total load time
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, duration + 800); // Slight delay after 100% before unmounting

    return () => {
      clearInterval(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-dark flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="relative w-full max-w-md px-6 text-center">
        {/* Name Reveal */}
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold font-mono tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
          >
            BIGG MANUEL
          </motion.h1>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-secondary"
            style={{ width: `${count}%` }}
          />
        </div>

        {/* Stats/Counter */}
        <div className="flex justify-between items-center text-xs font-mono text-primary">
          <span className="animate-pulse">INITIALIZING ASSETS...</span>
          <span>{Math.round(count)}%</span>
        </div>

        {/* Tech Decorations */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-32 pointer-events-none opacity-20">
             <div className="absolute left-0 top-0 w-2 h-2 border-t border-l border-primary" />
             <div className="absolute right-0 top-0 w-2 h-2 border-t border-r border-primary" />
             <div className="absolute left-0 bottom-0 w-2 h-2 border-b border-l border-primary" />
             <div className="absolute right-0 bottom-0 w-2 h-2 border-b border-r border-primary" />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-black/20 py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-2xl font-bold font-mono tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          BIGG.MANUEL
        </div>
        
        <div className="text-gray-300 text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Bigg Manuel. All rights reserved.</p>
          <p className="text-xs mt-1 text-gray-400 opacity-70">Built with React, Tailwind & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useRef } from 'react';
import SectionWrapper from './SectionWrapper';
import { CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  // Mouse Parallax for Background - Optimized with useMotionValue (No Re-renders)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const newX = (clientX / innerWidth - 0.5) * 40; // Move up to 20px
    const newY = (clientY / innerHeight - 0.5) * 40;
    
    x.set(newX);
    y.set(newY);
  };
  
  const springConfig = { damping: 25, stiffness: 120 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);
  // Create negative value for opposite movement
  const mouseXNegative = useTransform(mouseX, (val) => -val);


  const highlights = [
    "Former Solana Intern",
    "Solana Superteam Contributor",
    "Sui Developer Event Attendee",
    "Suiedo Token Creator",
    "Data Analytics Background"
  ];

  return (
    <SectionWrapper id="about">
      <div 
        ref={ref} 
        onMouseMove={handleMouseMove}
        className="grid md:grid-cols-2 gap-12 items-center relative"
      >
        
        {/* Animated Background Elements (Interactive) */}
        <motion.div 
            style={{ y: y1, x: mouseX }} 
            className="absolute -left-20 top-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10 will-change-transform" 
        />
        <motion.div 
            style={{ y: y2, x: mouseXNegative }} 
            className="absolute -right-20 bottom-0 w-60 h-60 bg-secondary/10 rounded-full blur-3xl -z-10 will-change-transform" 
        />

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quiet Additions, <span className="text-primary">Loud Effect.</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6 text-lg">
            I am a multidisciplinary developer bridging Web2 and Web3 through design, technology, and storytelling. 
            With a strong foundation in frontend development, UI/UX, data analytics, and blockchain fundamentals, 
            I build digital products that are not just functional, but engaging.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8 text-lg">
            Known for simplifying complex ideas, executing under pressure, and bringing vision to life with precision. 
            My journey spans from being a studio manager to a hands-on Web3 builder launching tokens on testnets.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3 text-gray-200"
              >
                <CheckCircle2 className="text-accent" size={18} />
                <span className="text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative group cursor-pointer perspective">
          {/* Abstract geometric representation of 'building' */}
          <motion.div 
            style={{ rotateZ: rotate }}
            className="relative z-10 aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-black border border-white/10 p-8 flex flex-col justify-between shadow-2xl shadow-primary/10 group-hover:shadow-primary/20 transition-shadow duration-500 will-change-transform"
          >
             <div className="space-y-4">
                <div className="h-2 w-20 bg-primary/50 rounded-full animate-pulse"></div>
                <div className="h-2 w-32 bg-white/10 rounded-full"></div>
                <div className="h-2 w-24 bg-white/10 rounded-full"></div>
             </div>
             <div className="text-8xl font-bold text-white/5 select-none self-end group-hover:text-white/10 transition-colors">
               WEB3
             </div>
          </motion.div>
          <motion.div 
            style={{ y: y2, rotate: -10 }}
            className="absolute -top-4 -right-4 w-full h-full border border-primary/30 rounded-2xl -z-10 will-change-transform" 
          />
          <motion.div 
            style={{ y: y1, rotate: 5 }}
            className="absolute -bottom-4 -left-4 w-full h-full border border-secondary/30 rounded-2xl -z-10 will-change-transform" 
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;

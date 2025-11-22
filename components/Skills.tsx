
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-16">
         <motion.span 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-accent font-mono text-sm tracking-widest uppercase"
          >
            The Toolkit
          </motion.span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Arsenal</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILLS.map((category, idx) => {
          const Icon = category.icon;
          return (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-primary/20 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 rounded-xl bg-white/5 text-primary group-hover:text-white group-hover:bg-primary transition-colors duration-300 shadow-lg shadow-primary/5">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold tracking-wide">{category.title}</h3>
              </div>
              
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-wrap gap-2 relative z-10"
              >
                {category.skills.map((skill) => (
                  <motion.span 
                    key={skill} 
                    variants={item}
                    className="px-3 py-1.5 text-sm font-mono rounded-md bg-dark border border-white/10 text-gray-300 hover:border-accent hover:text-accent hover:shadow-[0_0_10px_rgba(111,188,240,0.3)] transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Skills;

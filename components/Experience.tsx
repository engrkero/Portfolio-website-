
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EXPERIENCE } from '../constants';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" className="bg-white/5 rounded-3xl my-10">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
        Experience
      </h2>
      
      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
        {EXPERIENCE.map((job, index) => (
          <motion.div 
            key={job.id} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${
              job.highlight ? 'is-active' : ''
            }`}
          >
            {/* Icon on Timeline */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-dark shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-primary transition-colors">
              <div className={`w-3 h-3 rounded-full ${job.highlight ? 'bg-primary animate-pulse' : 'bg-gray-500'}`} />
            </div>
            
            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl glass-panel border-l-4 border-l-transparent hover:border-l-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="font-bold text-xl text-white">{job.role}</h3>
                <span className="text-xs font-mono text-accent flex items-center gap-1 mt-1 sm:mt-0">
                  <Calendar size={12} /> {job.duration}
                </span>
              </div>
              <div className="text-sm font-medium text-gray-400 mb-4">{job.company}</div>
              <ul className="list-disc list-inside space-y-2">
                {job.description.map((desc, i) => (
                  <li key={i} className="text-gray-300 text-sm leading-relaxed">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;

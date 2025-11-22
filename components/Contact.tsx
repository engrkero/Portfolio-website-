
import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { SOCIAL_LINKS } from '../constants';
import { Mail, ArrowRight, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "contact@biggmanuel.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionWrapper id="contact" className="mb-20">
      <div className="relative rounded-3xl overflow-hidden p-8 md:p-16 border border-white/10 bg-gradient-to-br from-dark to-secondary/10">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ready to build <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">the future?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Whether you need a high-performance frontend, a Web3 integration, or creative direction for your next crypto project—I'm ready to deploy.
            </p>
            
            <div className="flex flex-wrap gap-4">
               <a 
                 href={`mailto:${email}`}
                 className="px-8 py-4 bg-white text-dark font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-white/10 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
               >
                 <Mail size={20} /> Send Email
               </a>
               
               <button 
                 onClick={handleCopyEmail}
                 aria-label="Copy email address"
                 className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center gap-2 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
               >
                  <AnimatePresence mode="wait">
                    {copied ? (
                        <motion.div
                            key="check"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="flex items-center gap-2"
                        >
                            <Check size={20} className="text-primary" />
                            <span className="text-primary">Copied!</span>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="copy"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="flex items-center gap-2"
                        >
                            <Copy size={20} />
                            <span>Copy Email</span>
                        </motion.div>
                    )}
                  </AnimatePresence>
               </button>

               <a 
                 href="https://twitter.com/bigg_manuel"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
               >
                 DM on Twitter
               </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto mt-8 md:mt-0">
            <span className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">Connect</span>
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              const isPlaceholder = link.url === '#';
              
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (isPlaceholder) {
                        e.preventDefault();
                        alert(`My ${link.platform} profile is being updated. Please contact me via Email or Twitter!`);
                    }
                  }}
                  className="flex items-center justify-between w-full md:w-64 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-white/10 transition-all group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={20} className="text-gray-400 group-hover:text-primary transition-colors" />
                    <span className="font-medium">{link.platform}</span>
                  </div>
                  <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;

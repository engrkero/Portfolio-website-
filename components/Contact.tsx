
import React, { useState, useRef } from 'react';
import SectionWrapper from './SectionWrapper';
import { SOCIAL_LINKS } from '../constants';
import { Mail, Copy, Check, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const email = "contact@biggmanuel.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
    // You can get these from https://dashboard.emailjs.com/
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    if (formRef.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            setLoading(false);
            setStatus('success');
            if (formRef.current) formRef.current.reset();
            setTimeout(() => setStatus('idle'), 5000); // Reset status after 5s
        }, (error) => {
            console.log(error.text);
            setLoading(false);
            setStatus('error');
        });
    }
  };

  return (
    <SectionWrapper id="contact" className="mb-20">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-dark to-secondary/10 border border-white/10">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700 pointer-events-none" />
        
        <div className="grid lg:grid-cols-2 gap-10 p-8 md:p-12">
          
          {/* Left Column: Text & Info */}
          <div className="flex flex-col justify-between">
            <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Let's build <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">something epic.</span>
                </h2>
                <p className="text-lg text-gray-300 mb-8 max-w-md leading-relaxed">
                  Whether you need a high-performance frontend, a Web3 integration, or creative direction for your next crypto project—I'm ready to deploy.
                </p>

                {/* Email Section with Button Next to Text */}
                <div className="flex flex-wrap items-center gap-3 mb-10">
                  <div className="flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 group hover:border-primary/50 transition-colors">
                    <Mail size={18} className="text-primary" />
                    <span className="font-mono">{email}</span>
                  </div>
                  
                  <button 
                    onClick={handleCopyEmail}
                    className="p-3.5 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-primary hover:text-dark hover:border-primary transition-all active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-lg"
                    aria-label="Copy email address"
                    title="Copy to clipboard"
                  >
                      <AnimatePresence mode="wait" initial={false}>
                        {copied ? (
                            <motion.div
                                key="check"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                            >
                                <Check size={20} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="copy"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                            >
                                <Copy size={20} />
                            </motion.div>
                        )}
                      </AnimatePresence>
                  </button>
                  
                  <AnimatePresence>
                    {copied && (
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-primary text-sm font-medium font-mono"
                        >
                            Copied!
                        </motion.span>
                    )}
                   </AnimatePresence>
                </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-4">
                <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">Connect on Socials</span>
                <div className="flex flex-wrap gap-3">
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
                                alert(`My ${link.platform} profile is being updated.`);
                            }
                          }}
                          className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-white/10 hover:text-primary transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary"
                          aria-label={link.platform}
                        >
                          <Icon size={20} />
                        </a>
                      );
                    })}
                </div>
            </div>
          </div>

          {/* Right Column: EmailJS Form */}
          <div className="bg-black/20 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/5">
             <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                
                <div className="space-y-2">
                    <label htmlFor="user_name" className="text-sm font-medium text-gray-400 ml-1">Name</label>
                    <input 
                        type="text" 
                        name="user_name" 
                        id="user_name"
                        required
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="user_email" className="text-sm font-medium text-gray-400 ml-1">Email</label>
                    <input 
                        type="email" 
                        name="user_email" 
                        id="user_email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Message</label>
                    <textarea 
                        name="message" 
                        id="message"
                        required
                        rows={4}
                        placeholder="Tell me about your project..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    />
                </div>

                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-primary text-dark font-bold rounded-xl py-4 mt-2 hover:bg-primary/90 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
                >
                    {loading ? (
                        <>
                            <Loader2 size={20} className="animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            Send Message <Send size={18} />
                        </>
                    )}
                </button>

                <AnimatePresence>
                    {status === 'success' && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-xl text-sm flex items-center gap-2 mt-2 overflow-hidden"
                        >
                            <Check size={16} />
                            <span>Message sent successfully! I'll be in touch.</span>
                        </motion.div>
                    )}
                    {status === 'error' && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm mt-2 overflow-hidden"
                        >
                            Something went wrong. Please try again later.
                        </motion.div>
                    )}
                </AnimatePresence>

             </form>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;

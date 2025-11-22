
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle Scroll Appearance - Optimized
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Active Link Highlighting
  useEffect(() => {
    const observerOptions = {
      root: null,
      // Hit test around the center of the viewport
      rootMargin: '-20% 0px -35% 0px', 
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);

    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80; // Approximate height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Manually set active section for immediate feedback
      setActiveSection(id);
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-dark shadow-xl border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, 'hero')}
          className="text-2xl font-bold font-mono tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent cursor-pointer relative z-50 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
          whileHover={{ scale: 1.05 }}
          aria-label="Bigg Manuel Portfolio Home"
        >
          BIGG.MANUEL
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`transition-colors font-medium text-sm tracking-wide relative py-2 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-2 ${
                activeSection === link.id ? 'text-primary' : 'text-gray-300 hover:text-white'
              }`}
              aria-current={activeSection === link.id ? 'page' : undefined}
            >
              {link.name.toUpperCase()}
              {/* Active Dot */}
              {activeSection === link.id && (
                <motion.div 
                  layoutId="activeDot"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary shadow-[0_0_10px_rgba(20,241,149,0.5)]" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </a>
          ))}
          <a
             href="#contact"
             onClick={(e) => handleNavClick(e, 'contact')}
             className="px-5 py-2.5 bg-white/5 hover:bg-white/10 hover:scale-105 border border-white/10 rounded-full text-sm font-bold text-primary transition-all active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
          >
            LET'S TALK
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-1 relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-dark md:hidden flex flex-col pt-24 px-6 overflow-y-auto"
          >
            {/* Background Texture for distinction */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="flex flex-col space-y-8 items-center relative z-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  className={`text-2xl font-bold tracking-tight outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-4 py-2 ${
                    activeSection === link.id ? 'text-primary' : 'text-gray-300'
                  }`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.name}
                </a>
              ))}
              <a
                 href="#contact"
                 onClick={(e) => handleNavClick(e, 'contact')}
                 className="mt-8 px-8 py-4 bg-primary/10 border border-primary/50 rounded-xl text-primary font-bold w-full text-center active:scale-95 transition-transform outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
              >
                HIRE ME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;


import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Background from './components/Background';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-dark text-white min-h-screen font-sans selection:bg-primary selection:text-dark overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        ) : (
          <div key="content">
            <Background />
            
            <Navbar />
            
            <main className="relative z-10 flex flex-col gap-0">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>

            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

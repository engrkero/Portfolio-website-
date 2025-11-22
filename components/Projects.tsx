import React, { useState, useRef, useEffect } from 'react';
import SectionWrapper from './SectionWrapper';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Github, ArrowUpRight, Lock, Layers, X, CheckCircle2, AlertCircle } from 'lucide-react';
import { Project } from '../types';

// Individual Card Component
const ProjectCard: React.FC<{ 
  project: Project; 
  getGradient: (cat: string) => string; 
  borderColor: string;
  onSelect: (p: Project) => void;
}> = ({ project, getGradient, borderColor, onSelect }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const xMove = useTransform(mouseX, [-0.5, 0.5], ["8%", "-8%"]); 
  const yMove = useTransform(mouseY, [-0.5, 0.5], ["8%", "-8%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      layoutId={`card-${project.id}`}
      onClick={() => onSelect(project)}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className={`group relative bg-card border border-white/5 rounded-2xl flex flex-col cursor-pointer h-full overflow-hidden`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        zIndex: 10
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onSelect(project);
        }
      }}
      aria-label={`View details for ${project.title}`}
    >
        {/* Dynamic Border Glow on Hover */}
        <motion.div 
          className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 ${borderColor} pointer-events-none`} 
        />
        
        {/* Subtle Gradient Background Overlay on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(project.category)} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />

        {/* Banner Image / Parallax Area */}
        <div className="relative h-52 overflow-hidden w-full rounded-t-xl border-b border-white/5 z-0">
          <motion.div 
            style={{ x: xMove, y: yMove, scale: 1.15 }}
            className={`absolute inset-[-10%] bg-gradient-to-br ${getGradient(project.category)}`}
          >
            <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-black/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-4 p-6 bg-white/5 rounded-tl-3xl backdrop-blur-sm border-t border-l border-white/10">
               <Layers size={32} className="text-white/20" />
            </div>
          </motion.div>
          
          {/* Tags */}
          <div className="absolute top-4 left-4 flex gap-2 z-10 pointer-events-none">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border shadow-lg ${
               project.category === 'Web3' ? 'bg-secondary/20 text-white border-secondary/20' :
               project.category === 'Frontend' ? 'bg-primary/20 text-white border-primary/20' :
               'bg-accent/20 text-white border-accent/20'
             }`}>
               {project.category}
             </span>
             {project.featured && (
               <span className="flex items-center gap-1 text-[10px] font-mono text-yellow-300 bg-yellow-500/20 border border-yellow-400/30 px-2 py-0.5 rounded-full backdrop-blur-md">
                  ★ FEATURED
               </span>
             )}
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow relative z-10 bg-card/50 backdrop-blur-sm rounded-b-2xl">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
            {project.title}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow group-hover:text-gray-300 transition-colors">
            {project.description}
          </p>

          <div className="space-y-4 mt-auto">
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 3).map(t => (
                <span key={t} className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded group-hover:bg-white/10 transition-colors">
                  {t}
                </span>
              ))}
              {project.tech.length > 3 && (
                 <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded group-hover:bg-white/10 transition-colors">
                   +{project.tech.length - 3}
                 </span>
              )}
            </div>
            
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-accent uppercase tracking-widest">
                <span>View Details</span>
                <ArrowUpRight size={16} />
            </div>
          </div>
        </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Web3' | 'Frontend' | 'Design'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const getGradient = (category: string) => {
    switch(category) {
      case 'Web3': return 'from-secondary/80 via-purple-900 to-primary/50';
      case 'Frontend': return 'from-primary/80 via-emerald-900 to-accent/50';
      case 'Design': return 'from-accent/80 via-blue-900 to-secondary/50';
      default: return 'from-gray-800 to-gray-900';
    }
  };

  const getBorderColor = (category: string) => {
    switch(category) {
        case 'Web3': return 'border-secondary/50';
        case 'Frontend': return 'border-primary/50';
        case 'Design': return 'border-accent/50';
        default: return 'border-white/10';
      }
  }

  const handleEmptyLink = (e: React.MouseEvent, type: string) => {
    e.stopPropagation();
    alert(`The ${type} for this project is currently private or under development.`);
  };

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  return (
    <SectionWrapper id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-secondary font-mono text-sm tracking-widest uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">Selected Works</h2>
        </div>
        
        {/* Filter Tabs */}
        <div role="tablist" aria-label="Project Category Filter" className="flex p-1 bg-white/5 rounded-xl backdrop-blur-sm border border-white/5">
          {['All', 'Web3', 'Frontend', 'Design'].map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={filter === tab}
              aria-controls={`panel-${tab}`}
              id={`tab-${tab}`}
              onClick={() => setFilter(tab as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card ${
                filter === tab 
                  ? 'bg-primary text-dark shadow-lg shadow-primary/25' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        role="tabpanel"
        id={`panel-${filter}`}
        aria-labelledby={`tab-${filter}`}
      >
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project) => (
            <ProjectCard 
                key={project.id} 
                project={project} 
                getGradient={getGradient} 
                borderColor={getBorderColor(project.category)}
                onSelect={setSelectedProject}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-dark/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`card-${selectedProject.id}`}
              className="bg-card w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden flex flex-col border border-white/10 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Close details"
              >
                <X size={24} />
              </button>

              {/* Header Image */}
              <div className={`h-48 sm:h-64 w-full relative shrink-0 bg-gradient-to-br ${getGradient(selectedProject.category)}`}>
                  <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                  <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-card to-transparent">
                      <div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border shadow-lg mb-4 inline-block ${
                            selectedProject.category === 'Web3' ? 'bg-secondary/20 text-white border-secondary/20' :
                            selectedProject.category === 'Frontend' ? 'bg-primary/20 text-white border-primary/20' :
                            'bg-accent/20 text-white border-accent/20'
                        }`}>
                            {selectedProject.category}
                        </span>
                        <motion.h2 className="text-3xl md:text-5xl font-bold text-white">
                            {selectedProject.title}
                        </motion.h2>
                      </div>
                  </div>
              </div>

              {/* Content Scroll Area */}
              <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
                  <div className="grid md:grid-cols-[2fr_1fr] gap-10">
                      
                      <div className="space-y-8">
                          <div>
                             <h3 className="text-xl font-bold text-white mb-3">Overview</h3>
                             <p className="text-gray-300 leading-relaxed text-lg">
                                 {selectedProject.longDescription || selectedProject.description}
                             </p>
                          </div>

                          {(selectedProject.challenges && selectedProject.challenges.length > 0) && (
                             <div>
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                   <AlertCircle className="text-red-400" size={20} /> Challenges
                                </h3>
                                <ul className="space-y-3">
                                   {selectedProject.challenges.map((c, i) => (
                                     <li key={i} className="flex gap-3 text-gray-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-400/50 mt-2 shrink-0" />
                                        {c}
                                     </li>
                                   ))}
                                </ul>
                             </div>
                          )}

                          {(selectedProject.solutions && selectedProject.solutions.length > 0) && (
                             <div>
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                   <CheckCircle2 className="text-primary" size={20} /> Solutions
                                </h3>
                                <ul className="space-y-3">
                                   {selectedProject.solutions.map((s, i) => (
                                     <li key={i} className="flex gap-3 text-gray-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                                        {s}
                                     </li>
                                   ))}
                                </ul>
                             </div>
                          )}
                      </div>

                      {/* Sidebar */}
                      <div className="space-y-8">
                          <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Tech Stack</h4>
                              <div className="flex flex-wrap gap-2">
                                  {selectedProject.tech.map(t => (
                                      <span key={t} className="px-3 py-1.5 bg-dark border border-white/10 rounded-md text-sm text-accent font-mono">
                                          {t}
                                      </span>
                                  ))}
                              </div>
                          </div>

                          <div className="space-y-3">
                              {selectedProject.link ? (
                                <a 
                                  href={selectedProject.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-dark font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                                >
                                  Live Demo <ArrowUpRight size={18} />
                                </a>
                              ) : (
                                <button 
                                  onClick={(e) => handleEmptyLink(e, 'demo')}
                                  className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 text-gray-400 font-bold rounded-xl cursor-not-allowed border border-white/5"
                                >
                                  Demo N/A <Lock size={18} />
                                </button>
                              )}
                              
                              <button 
                                onClick={(e) => handleEmptyLink(e, 'repository')}
                                className="flex items-center justify-center gap-2 w-full py-4 bg-dark border border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-colors"
                              >
                                <Github size={18} /> View Code
                              </button>
                          </div>
                      </div>

                  </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default Projects;
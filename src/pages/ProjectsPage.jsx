import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import { projects } from '../data/projects';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('Tous');
  const categories = ['Tous', 'Résidentiel', 'Commercial', 'Rénovation'];

  const filteredProjects = filter === 'Tous' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-black text-white pt-40 pb-20 rounded-b-[3rem] mb-12">
        <div className="container mx-auto px-6 md:px-16 max-w-[90rem]">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-4xl font-black mb-6">Nos Réalisations</h1>
            <p className="text-gray-400 max-w-xl mx-auto text-lg md:text-lg leading-relaxed">
            Découvrez nos projets remarquables qui allient esthétique, fonctionnalité et durabilité.
          </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-16 max-w-[90rem] py-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat 
                  ? 'bg-black text-white shadow-md' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#FF8C00] hover:text-[#FF8C00]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <Link to={`/projects/${project.id}`}>
                  <div className="h-50 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-end p-6">
                       <span className="text-white font-medium flex items-center gap-2">
                         Voir le projet <span className="text-[#FF8C00]">→</span>
                       </span>
                    </div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  <div className="px-6 py-10">
                    <span className="text-xs font-bold text-[#FF8C00] uppercase tracking-wider mb-2 block">{project.category}</span>
                    <h3 className="text-md line-clamp-1 font-bold text-gray-900 group-hover:text-[#FF8C00] transition-colors">{project.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;

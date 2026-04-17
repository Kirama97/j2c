import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';

import { projects } from '../data/projects';

const ProjectDetailPage = () => {
  const { id } = useParams();
  
  // S'assurer que l'id est un nombre pour la recherche
  const projectData = projects.find(p => p.id === parseInt(id));

  // Gérer le cas où le projet n'est pas trouvé
  if (!projectData) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Projet introuvable</h1>
        <Link to="/projects" className="text-[#FF8C00] font-bold">Retourner à la galerie</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white pt-40 pb-20 rounded-b-[3rem] mb-12">
        <div className="container mx-auto px-6 md:px-16 max-w-[90rem]">
          <Link to="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#FF8C00] mb-8 transition-colors font-bold">
            <ArrowLeft size={20} /> Retour aux projets
          </Link>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
               <div>
                 <span className="text-[#FF8C00] font-bold tracking-wider uppercase text-sm mb-3 block">{projectData.category}</span>
                 <h1 className="text-3xl md:text-3xl lg:text-4xl font-black">{projectData.title}</h1>
               </div>
               <Button to="/contact" variant="primary">Discuter d'un projet similaire</Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-16 max-w-[90rem] py-12">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >

          {/* Main Image */}
          <div className="rounded-2xl overflow-hidden h-[60vh] mb-12 shadow-xl">
             <img src={projectData.images[0]} alt={projectData.title} className="w-full h-full object-cover" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
             {/* Info Column */}
             <div className="bg-gray-50 p-8 rounded-xl h-fit">
               <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-4">Détails du Projet</h3>
               
               <div className="space-y-4">
                 <div>
                   <p className="text-sm text-gray-500 mb-1">Client</p>
                   <p className="font-semibold">{projectData.client}</p>
                 </div>
                 <div>
                   <p className="text-sm text-gray-500 mb-1">Durée</p>
                   <p className="font-semibold">{projectData.duration}</p>
                 </div>
                 <div>
                   <p className="text-sm text-gray-500 mb-2">Technologies / Matériaux</p>
                   <ul className="space-y-2">
                     {projectData.technologies.map((tech, i) => (
                       <li key={i} className="flex items-center gap-2 text-sm font-medium">
                         <CheckCircle2 size={16} className="text-[#FF8C00]" /> {tech}
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
             </div>

             {/* Description & Gallery */}
             <div className="lg:col-span-2">
               <h3 className="text-xl font-bold mb-4">À propos du projet</h3>
               <p className="text-gray-600 leading-relaxed mb-8 text-md">
                 {projectData.description}
               </p>

               <h3 className="text-xl font-bold mb-6">Galerie des travaux</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {projectData.images[1] && (
                   <div className="md:col-span-2 rounded-2xl overflow-hidden h-[400px] shadow-lg group">
                     <img src={projectData.images[1]} alt="Vue détaillée 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                   </div>
                 )}
                 {projectData.images[2] && (
                   <div className="rounded-2xl overflow-hidden h-64 shadow-lg group">
                     <img src={projectData.images[2]} alt="Vue détaillée 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                   </div>
                 )}
                 {projectData.images[3] && (
                   <div className="rounded-2xl overflow-hidden h-64 shadow-lg group">
                     <img src={projectData.images[3]} alt="Vue détaillée 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                   </div>
                 )}
               </div>
             </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ProjectDetailPage;

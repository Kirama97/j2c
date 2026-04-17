import { motion } from 'framer-motion';
import Button from '../components/Button';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header section */}
      <div className="bg-black text-white bg-[url('/images/image_dg1.png')] bg-cover bg-center pt-40 pb-20 mb-16 rounded-b-[3rem]">
        <div className="container mx-auto px-6 md:px-16 max-w-[90rem]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-[#FF8C00] font-bold uppercase tracking-wider text-sm mb-4 block">Notre Histoire</span>
            <h1 className="text-4xl md:text-5xl lg:text-4xl font-black mb-6 leading-tight">Construire avec intégrité et passion.</h1>
            <p className="text-gray-400 text-lg md:text-lg leading-relaxed">
              Depuis 15 ans, J2C Immobilier s'impose comme un acteur majeur de la construction et de la conception architecturale à Thiès et partout au Sénégal.
            </p>
          </motion.div>
        </div>
      </div>
   

      <div className="container mx-auto px-4 md:px-8 max-w-7xl pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Qui sommes-nous ?</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              J2C est une entreprise générale de bâtiment spécialisée dans la construction, la rénovation et l'étude architecturale. Nous accompagnons nos clients de la première esquisse jusqu'à la remise des clés.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Notre force réside dans notre équipe pluridisciplinaire composée d'architectes visionnaires, d'ingénieurs rigoureux et d'artisans passionnés.
            </p>
            <div className="flex gap-4">
               <div className="bg-[#FFF4E5] p-4 rounded-lg flex-1 text-center">
                 <h4 className="text-[#FF8C00] font-bold text-2xl mb-1">Qualité</h4>
                 <p className="text-sm text-gray-600">Matériaux premium</p>
               </div>
               <div className="bg-[#FFF4E5] p-4 rounded-lg flex-1 text-center">
                 <h4 className="text-[#FF8C00] font-bold text-2xl mb-1">Délais</h4>
                 <p className="text-sm text-gray-600">Respect strict</p>
               </div>
            </div>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img src="/images/BG_hero.png" alt="Equipe au travail" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Processus */}
        <div className="bg-gray-50 p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Processus</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
             <div className="hidden md:block absolute top-8 left-10 right-10 h-0.5 bg-gray-200 z-0"></div>
             
             {[
               { no: "01", title: "Rencontre & Idéation", desc: "Compréhension de vos besoins et de votre budget." },
               { no: "02", title: "Conception & Plans", desc: "Réalisation des plans 2D/3D et démarches administratives." },
               { no: "03", title: "Construction", desc: "Exécution des travaux avec suivi rigoureux." },
               { no: "04", title: "Remise des clés", desc: "Livraison de votre projet clés en main." }
             ].map((etape, index) => (
               <motion.div 
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.2 }}
                 className="relative z-10 text-center"
               >
                 <div className="w-16 h-16 bg-[#FF8C00] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-lg border-4 border-white">
                   {etape.no}
                 </div>
                 <h3 className="font-bold text-lg mb-2">{etape.title}</h3>
                 <p className="text-gray-500 text-sm">{etape.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, PenTool, HardHat, ShieldCheck, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';



// Composant pour l'animation mot par mot
const AnimatedWord = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const y = useTransform(progress, range, [10, 0]);
  return (
    <motion.span style={{ opacity, y }} className="mr-[0.3em] inline-block mt-1">
      {children}
    </motion.span>
  );
};

const HomePage = () => {
  const heroRef = useRef(null);
  const visionRef = useRef(null);

  // Scroll logic for Hero Parallax
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yHeroText = useTransform(heroScroll, [0, 1], [0, 200]);
  const opacityHeroText = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const scaleHeroBg = useTransform(heroScroll, [0, 1], [1, 1.1]);

  // Scroll logic for Vision section (word by word reveal)
  const { scrollYProgress: visionScroll } = useScroll({
    target: visionRef,
    offset: ["start 70%", "center center"]
  });

  const visionText = "Chaque détail compte. De la première esquisse 2D à la structure brute en acier. Nous allions l'avant-garde du design à des normes de sécurité intransigeantes.";
  const visionWords = visionText.split(" ");

  return (
    <div className="bg-black text-white min-h-screen selection:bg-[#FF8C00] selection:text-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale: scaleHeroBg }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/images/BG_hero.png" 
            alt="Modern Construction" 
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
          />
          {/* <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
            alt="Modern Construction" 
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black"></div>
        </motion.div>
        
        <motion.div 
          style={{ y: yHeroText, opacity: opacityHeroText }}
          className="relative z-10 text-center px-6 md:px-12 max-w-[90rem] mx-auto flex flex-col items-center mt-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter uppercase mb-6">
              Repousser
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] to-[#ffaa4a]">
                les limites.
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-base md:text-lg text-gray-300 font-medium max-w-2xl mb-12 leading-relaxed"
          >
            L'excellence architecturale et la rigueur de construction. Nous ne bâtissons pas seulement des murs, nous forgeons l'avenir de Thiès et du Sénégal.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link to="/projects" className="group relative px-8 py-4 bg-white text-black text-sm font-bold uppercase tracking-widest rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
              <span className="relative z-10 flex items-center gap-2">Découvrir l'audace <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
            </Link>
            <Link to="/contact" className="group relative px-8 py-4 bg-transparent border border-white/30 text-white text-sm font-bold uppercase tracking-widest rounded-full overflow-hidden transition-all hover:bg-white/10 hover:border-white">
              Nous consulter
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. VISION SECTION - Animation au scroll (Word Reveal) */}
      <section ref={visionRef} className="py-40 md:py-56 bg-black relative flex items-center min-h-[60vh]">
        <div className="container mx-auto px-6 md:px-16 max-w-5xl text-center md:text-left">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-relaxed tracking-tight flex flex-wrap">
            {visionWords.map((word, i) => {
              const start = i / visionWords.length;
              const end = start + (1 / visionWords.length);
              
              // Les 3 premiers mots ("Chaque détail compte.") sont colorés en blanc pur, le reste en gris pour le contraste.
              const isHighlight = i < 3; 
              
              return (
                <AnimatedWord key={i} progress={visionScroll} range={[start, end]}>
                  <span className={isHighlight ? "text-white" : "text-gray-500"}>
                    {word}
                  </span>
                </AnimatedWord>
              )
            })}
          </h2>
        </div>
      </section>

      {/* 3. BENTO BOX SERVICES */}
      <section className="py-32 md:py-48 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 md:px-12 max-w-[90rem]">
          <div className="mb-16 px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-[#FF8C00]">Écosystème 360°</h2>
            <p className="text-base md:text-lg text-gray-400 font-medium tracking-wide">Une maîtrise totale, de l'idée à la remise des clés.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
            {/* Bento Card 1 - Large */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 bg-[#141414] rounded-[2rem] p-10 relative overflow-hidden group border border-white/5"
            >
              <div className="absolute top-0 right-0 w-2/3 h-full opacity-30 group-hover:opacity-60 transition-opacity duration-700">
                <img src="/images/image_3d.jpeg" alt="Plans" className="w-full h-full object-cover mix-blend-screen" />
                {/* <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931" alt="Plans" className="w-full h-full object-cover mix-blend-screen" /> */}
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 backdrop-blur-md">
                   <PenTool className="w-6 h-6 text-[#FF8C00]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Conception 2D & 3D</h3>
                <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed hidden sm:block">Des plans d'une précision millimétrique et des modélisations 3D immersives pour visualiser votre projet avant même qu'il ne sorte de terre.</p>
              </div>
            </motion.div>

            {/* Bento Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 0.98 }}
              className="bg-gradient-to-br from-[#FF8C00] to-[#cc7000] rounded-[2rem] p-10 relative overflow-hidden text-black shadow-2xl"
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <HardHat className="w-10 h-10 mb-6" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">Gros Œuvre</h3>
                  <p className="text-black/80 font-medium text-base leading-relaxed">L'ossature parfaite. Béton armé, charpente, maçonnerie de haute résistance.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
                   <ArrowRight className="w-5 h-5 text-black" />
                </div>
              </div>
            </motion.div>

            {/* Bento Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 0.98 }}
              className="bg-[#141414] rounded-[2rem] p-10 flex flex-col justify-end border border-white/5 group relative overflow-hidden"
            >
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-[#FF8C00]/20 transition-colors duration-700"></div>
              <ShieldCheck className="w-10 h-10 text-white mb-6 relative z-10" />
              <h3 className="text-2xl font-bold mb-3 relative z-10">Suivi Intransigeant</h3>
              <p className="text-gray-400 text-base leading-relaxed relative z-10">Contrôle qualité permanent et reporting hebdomadaire. Zéro compromis.</p>
            </motion.div>

            {/* Bento Card 4 - Large Image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 bg-white rounded-[2rem] p-10 relative overflow-hidden text-black min-h-[350px]"
            >
              <img src="/images/maison_3d.jpg" alt="Construction" className="absolute inset-0 w-full h-full object-cover" />
              {/* <img src="https://images.unsplash.com/photo-1541888081622-c3f21876d299?q=80&w=2070" alt="Construction" className="absolute inset-0 w-full h-full object-cover" /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="w-14 h-14 rounded-full bg-[#FF8C00] flex items-center justify-center mb-6">
                   <Ruler className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Études Béton Complexes</h3>
                <p className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed hidden sm:block">Calculs structuraux avancés assurant la durabilité de chaque édifice, qu'il soit résidentiel ou gigantesque building commercial.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SHOWROOM 3D / GALERIE */}
      <section className="bg-white text-black py-32 md:py-48 rounded-t-[4rem] -mt-12 relative z-20 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="container mx-auto px-6 md:px-16 max-w-[90rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-black tracking-tighter mb-6">
                Un design <br/> 
                <span className="text-[#FF8C00]">immaculé.</span>
              </h2>
              <p className="text-base md:text-xl text-gray-500 font-medium mb-10 max-w-xl leading-relaxed">
                Explorez des intérieurs pensés pour le futur. Une esthétique minimaliste, des matériaux bruts nobles et une circulation fluide de la lumière.
              </p>
              <Link to="/projects" className="inline-flex items-center gap-3 text-base md:text-lg font-bold border-b-2 border-black pb-1 hover:text-[#FF8C00] hover:border-[#FF8C00] transition-colors group">
                Voir toutes les modélisations 3D <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative"
            >
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl max-w-md ml-auto">
                <img 
                  src="/images/image_travaux1.jpeg"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
                {/* <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075" 
                  alt="3D Interior" 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                /> */}
                
                {/* Float Element */}
                <motion.div 
                  initial={{ y: 0 }}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute -left-4 md:-left-8 bottom-8 md:bottom-16 bg-white/90 backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-white"
                >
                  <div className="w-12 h-12 rounded-full bg-[#FF8C00] flex items-center justify-center shrink-0">
                    <span className="text-white font-black text-xl">3D</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-0.5">Rendu de projet</p>
                    <p className="font-black text-lg md:text-xl text-black">Photoréaliste</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="bg-black py-32 md:py-48 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#FF8C00]/10 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6 tracking-tight"
          >
            Prêt à démarrer votre projet ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-gray-400 mb-10 text-base md:text-lg max-w-2xl leading-relaxed"
          >
            Notre équipe d'experts est à votre disposition pour étudier vos plans, vous conseiller et réaliser la maison de vos rêves.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 bg-[#FF8C00] text-black text-base md:text-lg font-black uppercase tracking-wider rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,140,0,0.3)]">
               <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">Demander une consultation</span>
               <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12"></div>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;

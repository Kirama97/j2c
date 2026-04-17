import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Hexagon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/about' },
    { name: 'Projets', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none transition-all duration-300">
        <motion.div 
          layout
          className={`pointer-events-auto flex justify-between items-center px-6 py-3 rounded-full transition-all duration-500 ease-out border ${
            isScrolled 
              ? 'bg-black/70 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] w-full max-w-4xl' 
              : 'bg-transparent border-transparent w-full max-w-7xl'
          }`}
        >
          
          <NavLink to="/" className="flex items-center gap-2 group">
            <img 
              src="/images/logoj2c.png" 
              alt="J2C Immobilier" 
              className={`w-auto transition-all duration-300 ${isScrolled ? 'h-8 md:h-10' : 'h-10 md:h-12'}`} 
            />
          </NavLink>

          <nav className="hidden md:flex items-center gap-2 bg-white/5 rounded-full px-2 py-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  `text-sm font-semibold tracking-wide transition-all px-5 py-2 rounded-full ${
                    isActive 
                      ? 'bg-white text-black' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <NavLink to="/contact" className={`text-sm font-bold tracking-wider px-6 py-3 rounded-full transition-all ${
              isScrolled 
                ? 'bg-[#FF8C00] text-black hover:bg-[#ffaa4a]' 
                : 'bg-white text-black hover:bg-gray-200'
            }`}>
              Demander un devis
            </NavLink>
          </div>

          <button 
            className="md:hidden p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-40 bg-black/80 flex items-center justify-center pointer-events-auto"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-black text-white hover:text-[#FF8C00] transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <NavLink 
                  to="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-[#FF8C00] text-black px-8 py-4 rounded-full font-bold text-lg"
                >
                  Démarrer un projet
                </NavLink>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

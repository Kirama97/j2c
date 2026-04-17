import { MapPin, Phone, Mail, Share2, Camera, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src="/images/logoj2c.png" alt="J2C Immobilier" className="h-10 md:h-12 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Agence immobilière d'excellence basée à Thiès, Sénégal. Nous concevons et construisons l'avenir avec passion et rigueur.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF8C00] transition-colors">
                <Share2 size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF8C00] transition-colors">
                <Camera size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF8C00] transition-colors">
                <Briefcase size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              Liens Rapides
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-[#FF8C00] transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#FF8C00] transition-colors">Notre Agence</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-[#FF8C00] transition-colors">Nos Projets</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#FF8C00] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Plans d'architecture</li>
              <li className="text-gray-400">Réalisation de projets</li>
              <li className="text-gray-400">Suivi & contrôle de chantier</li>
              <li className="text-gray-400">Plans béton armé</li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contactez-nous</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="text-[#FF8C00] shrink-0" />
                <span className="text-gray-400 text-sm">Thiès, Sénégal<br/>Quartier Résidentiel</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-[#FF8C00] shrink-0" />
                <span className="text-gray-400 text-sm">+221 77 590 03 20</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-[#FF8C00] shrink-0" />
                <span className="text-gray-400 text-sm">serignediop918@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} J2C Immobilier. Tous droits réservés.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../components/Button';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || "Une erreur s'est produite.");
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage("Impossible de contacter le serveur. Vérifiez votre connexion.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header section pour la page */}
      <div className="bg-black text-white pt-40 pb-20 mb-16 rounded-b-[3rem]">
        <div className="container mx-auto px-6 md:px-16 max-w-[90rem] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-4xl font-black mb-6">Contactez-nous</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-lg leading-relaxed">
              Vous avez un projet en tête ? Notre équipe est prête à vous écouter et à transformer votre vision en réalité.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-8">Nos Coordonnées</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFF4E5] text-[#FF8C00] rounded-full flex items-center justify-center shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h3 className="font-bold text-md mb-1">Notre Bureau</h3>
                  <p className="text-gray-600">Quartier Résidentiel<br />Thiès, Sénégal</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFF4E5] text-[#FF8C00] rounded-full flex items-center justify-center shrink-0">
                  <Phone />
                </div>
                <div>
                  <h3 className="font-bold text-md mb-1">Téléphone</h3>
                  <p className="text-gray-600">+221 77 590 03 20</p>
                  {/* <p className="text-gray-600">+221 33 000 00 00</p> */}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFF4E5] text-[#FF8C00] rounded-full flex items-center justify-center shrink-0">
                  <Mail />
                </div>
                <div>
                  <h3 className="font-bold text-md mb-1">Email</h3>
                  <p className="text-gray-600">serignediop918@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Google Map Mockup */}
            <div className="w-full h-80 bg-gray-200 rounded-xl overflow-hidden relative  hover:grayscale-0 transition-all duration-500 shadow-lg">
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5246.291566010898!2d-16.94762982405601!3d14.780686129598047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2ssn!4v1776441065853!5m2!1sfr!2ssn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
              
            </div>

          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-xl border border-gray-100"
          >
            <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
            
            <AnimatePresence>
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-green-50 text-green-700 p-4 rounded-lg flex gap-3 mb-6 items-start"
                >
                  <CheckCircle className="shrink-0 mt-0.5" />
                  <p>Votre message a été envoyé avec succès. Nous vous contacterons très prochainement.</p>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-red-50 text-red-700 p-4 rounded-lg flex gap-3 mb-6 items-start"
                >
                  <AlertCircle className="shrink-0 mt-0.5" />
                  <p>{errorMessage}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Nom Complet</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent transition-all"
                  placeholder="modou fall"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Adresse Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] transition-all"
                    placeholder="modou@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] transition-all"
                    placeholder="+221 ..."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Votre Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] transition-all"
                  placeholder="Parlez-nous de votre projet..."
                ></textarea>
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                className="w-full mt-4"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">Envoi en cours...</span>
                ) : (
                  <span className="flex items-center gap-2">Envoyer le message <Send size={18} /></span>
                )}
              </Button>
            </form>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

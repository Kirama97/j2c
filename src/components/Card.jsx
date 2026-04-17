import { motion } from 'framer-motion';

const Card = ({ title, description, icon, image, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group transition-all duration-300"
    >
      {image && (
        <div className="h-48 overflow-hidden relative">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
          />
        </div>
      )}
      
      <div className="p-8">
        {icon && (
          <div className="w-14 h-14 bg-[#F5F5F5] text-[#FF8C00] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FF8C00] group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
        )}
        <h3 className="text- font-bold mb-3 text-black group-hover:text-[#FF8C00] transition-colors">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;

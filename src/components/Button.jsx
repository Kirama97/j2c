import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({ children, to, variant = 'primary', className = '', href, onClick, type = 'button' }) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1";
  
  const variants = {
    primary: "bg-[#FF8C00] text-white hover:bg-[#e67e00]",
    secondary: "bg-black text-white hover:bg-gray-800",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black",
  };

  const combinedClassName = `${baseStyle} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <motion.button 
      whileTap={{ scale: 0.95 }}
      type={type} 
      onClick={onClick} 
      className={combinedClassName}
    >
      {children}
    </motion.button>
  );
};

export default Button;

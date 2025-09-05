import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn';
  hoverEffect?: 'zoom' | 'scale' | 'float' | 'glow';
  delay?: number;
  duration?: number;
  children?: ReactNode;
  onClick?: () => void;
}

const AnimatedImage = ({ 
  src,
  alt,
  className = '',
  animation = 'fadeIn',
  hoverEffect = 'zoom',
  delay = 0,
  duration = 0.6,
  children,
  onClick
}: AnimatedImageProps) => {
  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration, delay }
    },
    slideUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay }
    },
    slideInLeft: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
      transition: { duration, delay }
    },
    slideInRight: {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 },
      transition: { duration, delay }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration, delay }
    }
  };

  const hoverVariants = {
    zoom: {
      scale: 1.1,
      transition: { duration: 0.3 }
    },
    scale: {
      scale: 1.05,
      transition: { duration: 0.3 }
    },
    float: {
      y: -10,
      transition: { 
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse"
      }
    },
    glow: {
      boxShadow: "0 0 20px rgba(215, 183, 114, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      {...animations[animation]}
      whileHover={hoverVariants[hoverEffect]}
      className={`relative overflow-hidden ${className}`}
      onClick={onClick}
    >
      <img 
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300"
      />
      {children}
    </motion.div>
  );
};

export default AnimatedImage;
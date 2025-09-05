import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedIconProps {
  children: ReactNode;
  className?: string;
  animation?: 'spin' | 'pulse' | 'bounce' | 'float' | 'wiggle' | 'glow' | 'none';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  delay?: number;
}

const AnimatedIcon = ({ 
  children, 
  className = '',
  animation = 'none',
  size = 'md',
  color,
  delay = 0
}: AnimatedIconProps) => {
  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'h-4 w-4';
      case 'md':
        return 'h-6 w-6';
      case 'lg':
        return 'h-8 w-8';
      case 'xl':
        return 'h-12 w-12';
      default:
        return 'h-6 w-6';
    }
  };

  const animations = {
    spin: {
      animate: { rotate: 360 },
      transition: { duration: 1, repeat: Infinity, ease: "linear" }
    },
    pulse: {
      animate: { scale: [1, 1.2, 1] },
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    },
    bounce: {
      animate: { y: [0, -10, 0] },
      transition: { duration: 1, repeat: Infinity, ease: "easeInOut" }
    },
    float: {
      animate: { y: [0, -10, 0] },
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    },
    wiggle: {
      whileHover: { 
        rotate: [0, -3, 3, -3, 0],
        transition: { duration: 0.5 }
      }
    },
    glow: {
      whileHover: { 
        boxShadow: "0 0 20px rgba(215, 183, 114, 0.4)",
        transition: { duration: 0.3 }
      }
    },
    none: {}
  };

  return (
    <motion.div
      {...animations[animation]}
      className={`${getSizeClass()} ${className}`}
      style={{ color }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedIcon;
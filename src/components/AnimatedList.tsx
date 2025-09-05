import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedListProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
  animation?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn' | 'none';
  direction?: 'left' | 'right' | 'up' | 'down';
}

const AnimatedList = ({ 
  children, 
  className = '',
  staggerDelay = 0.1,
  animation = 'fadeIn',
  direction = 'up'
}: AnimatedListProps) => {
  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    },
    slideUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 }
    },
    slideInLeft: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 }
    },
    slideInRight: {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 }
    },
    none: {}
  };

  return (
    <div className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          {...animations[animation]}
          transition={{ 
            duration: 0.6, 
            delay: index * staggerDelay 
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedList;
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface AnimatedTooltipProps {
  children: ReactNode;
  content: ReactNode;
  className?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  animation?: 'fade' | 'scale' | 'slide' | 'none';
  delay?: number;
  color?: string;
}

const AnimatedTooltip = ({ 
  children, 
  content,
  className = '',
  position = 'top',
  animation = 'fade',
  delay = 0,
  color = 'hsl(var(--primary))'
}: AnimatedTooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const getPositionClass = () => {
    switch (position) {
      case 'top':
        return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2';
      case 'bottom':
        return 'top-full left-1/2 transform -translate-x-1/2 mt-2';
      case 'left':
        return 'right-full top-1/2 transform -translate-y-1/2 mr-2';
      case 'right':
        return 'left-full top-1/2 transform -translate-y-1/2 ml-2';
      default:
        return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2';
    }
  };

  const animations = {
    fade: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
      transition: { duration: 0.2, delay }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
      transition: { duration: 0.2, delay }
    },
    slide: {
      initial: { 
        opacity: 0, 
        y: position === 'top' ? 10 : -10,
        x: position === 'left' ? 10 : position === 'right' ? -10 : 0
      },
      animate: { opacity: 1, y: 0, x: 0 },
      exit: { 
        opacity: 0, 
        y: position === 'top' ? 10 : -10,
        x: position === 'left' ? 10 : position === 'right' ? -10 : 0
      },
      transition: { duration: 0.2, delay }
    },
    none: {}
  };

  const getArrowClass = () => {
    switch (position) {
      case 'top':
        return 'top-full left-1/2 transform -translate-x-1/2 border-t-4 border-t-current';
      case 'bottom':
        return 'bottom-full left-1/2 transform -translate-x-1/2 border-b-4 border-b-current';
      case 'left':
        return 'left-full top-1/2 transform -translate-y-1/2 border-l-4 border-l-current';
      case 'right':
        return 'right-full top-1/2 transform -translate-y-1/2 border-r-4 border-r-current';
      default:
        return 'top-full left-1/2 transform -translate-x-1/2 border-t-4 border-t-current';
    }
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            className={`absolute z-50 px-3 py-2 text-sm text-white rounded-lg shadow-lg pointer-events-none ${getPositionClass()} ${className}`}
            style={{ backgroundColor: color }}
            {...animations[animation]}
          >
            {content}
            <div 
              className={`absolute w-0 h-0 ${getArrowClass()}`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedTooltip;

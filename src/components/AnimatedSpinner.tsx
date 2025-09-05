import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  animation?: 'spin' | 'pulse' | 'bounce' | 'dots' | 'bars' | 'none';
  speed?: 'slow' | 'normal' | 'fast';
}

const AnimatedSpinner = ({ 
  className = '',
  size = 'md',
  color = 'hsl(var(--primary))',
  animation = 'spin',
  speed = 'normal'
}: AnimatedSpinnerProps) => {
  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'w-4 h-4';
      case 'md':
        return 'w-6 h-6';
      case 'lg':
        return 'w-8 h-8';
      case 'xl':
        return 'w-12 h-12';
      default:
        return 'w-6 h-6';
    }
  };

  const getSpeedClass = () => {
    switch (speed) {
      case 'slow':
        return 2;
      case 'normal':
        return 1;
      case 'fast':
        return 0.5;
      default:
        return 1;
    }
  };

  const animations = {
    spin: {
      animate: { rotate: 360 },
      transition: { duration: getSpeedClass(), repeat: Infinity, ease: "linear" }
    },
    pulse: {
      animate: { scale: [1, 1.2, 1] },
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    },
    bounce: {
      animate: { y: [0, -10, 0] },
      transition: { duration: 1, repeat: Infinity, ease: "easeInOut" }
    },
    dots: {
      animate: { scale: [1, 1.2, 1] },
      transition: { duration: 0.6, repeat: Infinity, ease: "easeInOut" }
    },
    bars: {
      animate: { scaleY: [0.4, 1, 0.4] },
      transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
    },
    none: {}
  };

  const renderSpinner = () => {
    switch (animation) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            <motion.div 
              className="w-2 h-2 bg-current rounded-full" 
              {...animations.dots}
              style={{ animationDelay: '0ms' }}
            />
            <motion.div 
              className="w-2 h-2 bg-current rounded-full" 
              {...animations.dots}
              style={{ animationDelay: '150ms' }}
            />
            <motion.div 
              className="w-2 h-2 bg-current rounded-full" 
              {...animations.dots}
              style={{ animationDelay: '300ms' }}
            />
          </div>
        );
      
      case 'bars':
        return (
          <div className="flex space-x-1">
            <motion.div 
              className="w-1 h-6 bg-current" 
              {...animations.bars}
              style={{ animationDelay: '0ms' }}
            />
            <motion.div 
              className="w-1 h-6 bg-current" 
              {...animations.bars}
              style={{ animationDelay: '150ms' }}
            />
            <motion.div 
              className="w-1 h-6 bg-current" 
              {...animations.bars}
              style={{ animationDelay: '300ms' }}
            />
            <motion.div 
              className="w-1 h-6 bg-current" 
              {...animations.bars}
              style={{ animationDelay: '450ms' }}
            />
          </div>
        );
      
      default:
        return (
          <div className="border-2 border-current border-t-transparent rounded-full w-full h-full" />
        );
    }
  };

  return (
    <motion.div
      className={`flex items-center justify-center ${getSizeClass()} ${className}`}
      style={{ color }}
      {...animations[animation]}
    >
      {renderSpinner()}
    </motion.div>
  );
};

export default AnimatedSpinner;

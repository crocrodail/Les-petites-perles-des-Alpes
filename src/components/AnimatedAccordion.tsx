import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface AnimatedAccordionProps {
  children: ReactNode;
  title: ReactNode;
  className?: string;
  defaultOpen?: boolean;
  animation?: 'slide' | 'fade' | 'scale' | 'none';
  duration?: number;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const AnimatedAccordion = ({ 
  children, 
  title,
  className = '',
  defaultOpen = false,
  animation = 'slide',
  duration = 300,
  icon,
  iconPosition = 'right'
}: AnimatedAccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const animations = {
    slide: {
      initial: { height: 0, opacity: 0 },
      animate: { height: 'auto', opacity: 1 },
      exit: { height: 0, opacity: 0 },
      transition: { duration: duration / 1000, ease: "easeInOut" }
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: duration / 1000 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
      transition: { duration: duration / 1000 }
    },
    none: {}
  };

  return (
    <div className={`border border-border rounded-lg overflow-hidden ${className}`}>
      {/* Header */}
      <motion.button
        onClick={toggle}
        className="w-full px-4 py-3 text-left bg-background hover:bg-accent transition-smooth flex items-center justify-between"
        whileHover={{ backgroundColor: 'hsl(var(--accent))' }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center space-x-3">
          {icon && iconPosition === 'left' && (
            <div className="text-primary">
              {icon}
            </div>
          )}
          <span className="font-medium text-foreground">{title}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          {icon && iconPosition === 'right' && (
            <div className="text-primary">
              {icon}
            </div>
          )}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-5 h-5"
          >
            <svg
              className="w-full h-full"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </div>
      </motion.button>

      {/* Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            {...animations[animation]}
            className="overflow-hidden"
          >
            <div className="px-4 py-3 text-muted-foreground">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedAccordion;

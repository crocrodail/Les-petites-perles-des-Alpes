import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

interface AnimatedModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  animation?: 'scale' | 'fade' | 'slideUp' | 'slideDown' | 'none';
  duration?: number;
}

const AnimatedModal = ({ 
  children, 
  isOpen,
  onClose,
  className = '',
  animation = 'scale',
  duration = 300
}: AnimatedModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration]);

  const animations = {
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
      transition: { duration: duration / 1000 }
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: duration / 1000 }
    },
    slideUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 },
      transition: { duration: duration / 1000 }
    },
    slideDown: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -50 },
      transition: { duration: duration / 1000 }
    },
    none: {}
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: duration / 1000 }}
        >
          <motion.div 
            className={`relative transition-smooth ${className}`}
            onClick={(e) => e.stopPropagation()}
            {...animations[animation]}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedModal;

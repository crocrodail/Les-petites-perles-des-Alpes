import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

interface AnimatedNotificationProps {
  children: ReactNode;
  isVisible: boolean;
  onClose: () => void;
  className?: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  animation?: 'slide' | 'bounce' | 'fade' | 'scale' | 'none';
  duration?: number;
  autoClose?: boolean;
  autoCloseDelay?: number;
}

const AnimatedNotification = ({ 
  children, 
  isVisible,
  onClose,
  className = '',
  type = 'info',
  position = 'top-right',
  animation = 'slide',
  duration = 300,
  autoClose = true,
  autoCloseDelay = 5000
}: AnimatedNotificationProps) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      if (autoClose) {
        const timer = setTimeout(() => {
          onClose();
        }, autoCloseDelay);
        return () => clearTimeout(timer);
      }
    } else {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose, autoClose, autoCloseDelay, duration]);

  const getPositionClass = () => {
    switch (position) {
      case 'top-right':
        return 'top-4 right-4';
      case 'top-left':
        return 'top-4 left-4';
      case 'bottom-right':
        return 'bottom-4 right-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
      case 'top-center':
        return 'top-4 left-1/2 transform -translate-x-1/2';
      case 'bottom-center':
        return 'bottom-4 left-1/2 transform -translate-x-1/2';
      default:
        return 'top-4 right-4';
    }
  };

  const getTypeClass = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500 text-white';
      case 'error':
        return 'bg-red-500 text-white';
      case 'warning':
        return 'bg-yellow-500 text-white';
      case 'info':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const animations = {
    slide: {
      initial: { 
        opacity: 0, 
        x: position.includes('right') ? 100 : -100,
        y: position.includes('top') ? -50 : 50
      },
      animate: { opacity: 1, x: 0, y: 0 },
      exit: { 
        opacity: 0, 
        x: position.includes('right') ? 100 : -100,
        y: position.includes('top') ? -50 : 50
      },
      transition: { duration: duration / 1000 }
    },
    bounce: {
      initial: { opacity: 0, scale: 0.3 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.3 },
      transition: { 
        duration: duration / 1000,
        type: "spring",
        stiffness: 500,
        damping: 30
      }
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: duration / 1000 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
      transition: { duration: duration / 1000 }
    },
    none: {}
  };

  return (
    <AnimatePresence>
      {shouldRender && (
        <motion.div 
          className={`fixed z-50 max-w-sm w-full px-4 py-3 rounded-lg shadow-lg ${getPositionClass()} ${getTypeClass()} ${className}`}
          {...animations[animation]}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedNotification;

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface AnimatedButtonProps {
  children: ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  animation?: 'bounce' | 'pulse' | 'wiggle' | 'glow' | 'none';
  delay?: number;
}

const AnimatedButton = ({ 
  children, 
  variant = 'default', 
  size = 'default',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  animation = 'none',
  delay = 0
}: AnimatedButtonProps) => {
  const animations = {
    bounce: {
      whileHover: { 
        y: -2,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      },
      whileTap: { y: 0 }
    },
    pulse: {
      whileHover: { 
        scale: 1.05,
        transition: { duration: 0.2 }
      }
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Button
        type={type}
        variant={variant}
        size={size}
        onClick={onClick}
        disabled={disabled}
        className={className}
        asChild
      >
        <motion.button
          {...animations[animation]}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          {children}
        </motion.button>
      </Button>
    </motion.div>
  );
};

export default AnimatedButton;
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface NeumorphismCardProps {
  children: ReactNode;
  className?: string;
  depth?: 'sm' | 'md' | 'lg' | 'xl';
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'float' | 'none';
  animation?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn' | 'none';
  delay?: number;
  color?: string;
  lightSource?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const NeumorphismCard = ({ 
  children, 
  className = '',
  depth = 'md',
  hoverEffect = 'lift',
  animation = 'none',
  delay = 0,
  color = 'hsl(var(--background))',
  lightSource = 'top-left'
}: NeumorphismCardProps) => {
  const getDepthClass = () => {
    switch (depth) {
      case 'sm':
        return 'shadow-neumorphism-sm';
      case 'md':
        return 'shadow-neumorphism-md';
      case 'lg':
        return 'shadow-neumorphism-lg';
      case 'xl':
        return 'shadow-neumorphism-xl';
      default:
        return 'shadow-neumorphism-md';
    }
  };

  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.6, delay }
    },
    slideUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay }
    },
    slideInLeft: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6, delay }
    },
    slideInRight: {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6, delay }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.6, delay }
    },
    none: {}
  };

  const hoverVariants = {
    lift: {
      y: -8,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
    },
    glow: {
      boxShadow: "0 0 20px rgba(215, 183, 114, 0.3)"
    },
    scale: {
      scale: 1.05
    },
    float: {
      y: -10,
      transition: { 
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse"
      }
    },
    none: {}
  };

  const getLightSourceClass = () => {
    switch (lightSource) {
      case 'top-left':
        return 'shadow-neumorphism-tl';
      case 'top-right':
        return 'shadow-neumorphism-tr';
      case 'bottom-left':
        return 'shadow-neumorphism-bl';
      case 'bottom-right':
        return 'shadow-neumorphism-br';
      default:
        return 'shadow-neumorphism-tl';
    }
  };

  return (
    <motion.div
      {...animations[animation]}
      whileHover={hoverVariants[hoverEffect]}
      className={className}
    >
      <Card 
        className={`relative overflow-hidden transition-smooth ${getDepthClass()} ${getLightSourceClass()}`}
        style={{
          backgroundColor: color
        }}
      >
        <CardContent className="p-6">
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default NeumorphismCard;

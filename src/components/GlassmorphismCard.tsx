import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'float' | 'none';
  animation?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn' | 'none';
  delay?: number;
  border?: boolean;
  borderColor?: string;
  borderWidth?: number;
}

const GlassmorphismCard = ({ 
  children, 
  className = '',
  blur = 'md',
  opacity = 0.1,
  hoverEffect = 'lift',
  animation = 'none',
  delay = 0,
  border = true,
  borderColor = 'rgba(255, 255, 255, 0.2)',
  borderWidth = 1
}: GlassmorphismCardProps) => {
  const getBlurClass = () => {
    switch (blur) {
      case 'sm':
        return 'backdrop-blur-sm';
      case 'md':
        return 'backdrop-blur-md';
      case 'lg':
        return 'backdrop-blur-lg';
      case 'xl':
        return 'backdrop-blur-xl';
      default:
        return 'backdrop-blur-md';
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

  return (
    <motion.div
      {...animations[animation]}
      whileHover={hoverVariants[hoverEffect]}
      className={className}
    >
      <Card 
        className={`relative overflow-hidden transition-smooth ${getBlurClass()}`}
        style={{
          backgroundColor: `rgba(255, 255, 255, ${opacity})`,
          borderColor: border ? borderColor : undefined,
          borderWidth: border ? borderWidth : undefined
        }}
      >
        <CardContent className="p-6">
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default GlassmorphismCard;

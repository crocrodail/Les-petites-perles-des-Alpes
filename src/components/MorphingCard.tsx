import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface MorphingCardProps {
  children: ReactNode;
  morphTo: ReactNode;
  className?: string;
  morphOnHover?: boolean;
  morphOnClick?: boolean;
  morphDuration?: number;
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'float' | 'none';
  animation?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn' | 'none';
  delay?: number;
}

const MorphingCard = ({ 
  children, 
  morphTo,
  className = '',
  morphOnHover = true,
  morphOnClick = false,
  morphDuration = 300,
  hoverEffect = 'lift',
  animation = 'none',
  delay = 0
}: MorphingCardProps) => {
  const [isMorphed, setIsMorphed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMorph = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIsMorphed(!isMorphed);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, morphDuration);
  };

  const handleMouseEnter = () => {
    if (morphOnHover) {
      handleMorph();
    }
  };

  const handleMouseLeave = () => {
    if (morphOnHover) {
      handleMorph();
    }
  };

  const handleClick = () => {
    if (morphOnClick) {
      handleMorph();
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <Card className="relative overflow-hidden transition-smooth">
        <CardContent className="p-6">
          <motion.div
            className="transition-smooth"
            animate={{
              y: isMorphed ? -100 : 0,
              opacity: isMorphed ? 0 : 1
            }}
            transition={{ duration: morphDuration / 1000 }}
          >
            {children}
          </motion.div>
          
          <motion.div
            className="absolute inset-0 p-6 transition-smooth"
            animate={{
              y: isMorphed ? 0 : 100,
              opacity: isMorphed ? 1 : 0
            }}
            transition={{ duration: morphDuration / 1000 }}
          >
            {morphTo}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MorphingCard;

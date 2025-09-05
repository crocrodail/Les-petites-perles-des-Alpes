import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ShimmerCardProps {
  children: ReactNode;
  className?: string;
  shimmerColor?: string;
  shimmerDuration?: number;
  shimmerDelay?: number;
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'float' | 'none';
  animation?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn' | 'none';
  delay?: number;
  showShimmer?: boolean;
}

const ShimmerCard = ({ 
  children, 
  className = '',
  shimmerColor = 'rgba(255, 255, 255, 0.4)',
  shimmerDuration = 2000,
  shimmerDelay = 0,
  hoverEffect = 'lift',
  animation = 'none',
  delay = 0,
  showShimmer = true
}: ShimmerCardProps) => {
  const [isShimmering, setIsShimmering] = useState(false);

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
      onMouseEnter={() => setIsShimmering(true)}
      onMouseLeave={() => setIsShimmering(false)}
    >
      <Card className="relative overflow-hidden transition-smooth">
        <CardContent className="p-6">
          {children}
        </CardContent>
        
        {showShimmer && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: shimmerDuration / 1000,
              delay: shimmerDelay / 1000,
              repeat: Infinity,
              repeatDelay: 2
            }}
            style={{
              background: `linear-gradient(90deg, transparent, ${shimmerColor}, transparent)`
            }}
          />
        )}
      </Card>
    </motion.div>
  );
};

export default ShimmerCard;

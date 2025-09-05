import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'tilt';
  animation?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn' | 'none';
  delay?: number;
  duration?: number;
  title?: string;
  content?: ReactNode;
}

const AnimatedCard = ({ 
  children, 
  className = '',
  hoverEffect = 'lift',
  animation = 'fadeIn',
  delay = 0,
  duration = 0.6,
  title,
  content
}: AnimatedCardProps) => {
  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration, delay }
    },
    slideUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay }
    },
    slideInLeft: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
      transition: { duration, delay }
    },
    slideInRight: {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 },
      transition: { duration, delay }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration, delay }
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
    tilt: {
      rotateX: 5,
      rotateY: 5,
      scale: 1.05
    }
  };

  return (
    <motion.div
      {...animations[animation]}
      whileHover={hoverVariants[hoverEffect]}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <Card className="h-full">
        {title && (
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
        )}
        <CardContent>
          {content || children}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AnimatedCard;
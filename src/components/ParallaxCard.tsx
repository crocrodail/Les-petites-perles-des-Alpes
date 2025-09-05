import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ParallaxCardProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  offset?: number;
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'float' | 'none';
  animation?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn' | 'none';
  delay?: number;
}

const ParallaxCard = ({ 
  children, 
  className = '',
  speed = 0.5,
  direction = 'up',
  offset = 0,
  hoverEffect = 'lift',
  animation = 'none',
  delay = 0
}: ParallaxCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const getTransform = () => {
    const y = useTransform(scrollYProgress, [0, 1], [0, -50 * speed]);
    const x = useTransform(scrollYProgress, [0, 1], [0, -50 * speed]);
    
    switch (direction) {
      case 'up':
        return { y: useTransform(scrollYProgress, [0, 1], [0, -50 * speed]) };
      case 'down':
        return { y: useTransform(scrollYProgress, [0, 1], [0, 50 * speed]) };
      case 'left':
        return { x: useTransform(scrollYProgress, [0, 1], [0, -50 * speed]) };
      case 'right':
        return { x: useTransform(scrollYProgress, [0, 1], [0, 50 * speed]) };
      default:
        return { y: useTransform(scrollYProgress, [0, 1], [0, -50 * speed]) };
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
      ref={ref}
      {...animations[animation]}
      whileHover={hoverVariants[hoverEffect]}
      style={getTransform()}
      className={className}
    >
      <Card className="h-full">
        <CardContent className="p-6">
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ParallaxCard;

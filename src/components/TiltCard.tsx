import { motion } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltIntensity?: number;
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'float' | 'none';
  animation?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn' | 'none';
  delay?: number;
}

const TiltCard = ({ 
  children, 
  className = '',
  tiltIntensity = 10,
  hoverEffect = 'lift',
  animation = 'none',
  delay = 0
}: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

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
      className={className}
      onMouseMove={(e) => {
        if (!ref.current) return;
        
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / centerY * tiltIntensity;
        const rotateY = (centerX - x) / centerX * tiltIntensity;
        
        ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
      }}
      onMouseLeave={() => {
        if (ref.current) {
          ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        }
      }}
    >
      <Card className="h-full">
        <CardContent className="p-6">
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TiltCard;

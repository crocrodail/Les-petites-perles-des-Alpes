import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  offset?: number;
}

const ParallaxSection = ({ 
  children, 
  className = '',
  speed = 0.5,
  direction = 'up',
  offset = 0
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const getTransform = () => {
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

  return (
    <motion.div
      ref={ref}
      className={className}
      style={getTransform()}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;

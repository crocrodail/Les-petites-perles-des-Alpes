import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

export interface ParallaxScrollProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  offset?: number;
  as?: keyof JSX.IntrinsicElements;
}

const ParallaxScroll = ({
  children,
  className = '',
  speed = 0.5,
  direction = 'up',
  offset = 0,
  as: Component = 'div'
}: ParallaxScrollProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const getTransform = () => {
    const baseTransform = scrollYProgress.get() * 100 * speed;
    
    switch (direction) {
      case 'up':
        return useTransform(scrollYProgress, [0, 1], [offset, -100 * speed + offset]);
      case 'down':
        return useTransform(scrollYProgress, [0, 1], [offset, 100 * speed + offset]);
      case 'left':
        return useTransform(scrollYProgress, [0, 1], [offset, -100 * speed + offset]);
      case 'right':
        return useTransform(scrollYProgress, [0, 1], [offset, 100 * speed + offset]);
      default:
        return useTransform(scrollYProgress, [0, 1], [offset, -100 * speed + offset]);
    }
  };

  const y = direction === 'up' || direction === 'down' ? getTransform() : 0;
  const x = direction === 'left' || direction === 'right' ? getTransform() : 0;

  return (
    <motion.div
      ref={ref}
      style={{ y, x }}
      className={className}
      as={Component}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxScroll;

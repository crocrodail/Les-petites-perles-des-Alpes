import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export interface StaggeredAnimationProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scaleIn';
  duration?: number;
  distance?: number;
  as?: keyof JSX.IntrinsicElements;
}

const animationVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  slideDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }
};

const StaggeredAnimation = ({
  children,
  className = '',
  staggerDelay = 0.1,
  animation = 'fadeIn',
  duration = 0.6,
  distance = 50,
  as: Component = 'div'
}: StaggeredAnimationProps) => {
  const { ref, isInView } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  const variant = animationVariants[animation];

  // Personnaliser la distance pour les animations de slide
  if (animation.includes('slide')) {
    const direction = animation.replace('slide', '').toLowerCase();
    if (direction === 'up') {
      variant.hidden.y = distance;
    } else if (direction === 'down') {
      variant.hidden.y = -distance;
    } else if (direction === 'left') {
      variant.hidden.x = distance;
    } else if (direction === 'right') {
      variant.hidden.x = -distance;
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: variant.hidden,
    visible: {
      ...variant.visible,
      transition: {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  const motionProps: MotionProps = {
    ref,
    initial: 'hidden',
    animate: isInView ? 'visible' : 'hidden',
    variants: containerVariants,
    className
  };

  return (
    <motion.div as={Component} {...motionProps}>
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-full"
            >
              {child}
            </motion.div>
          ))
        : (
            <motion.div variants={itemVariants}>
              {children}
            </motion.div>
          )
      }
    </motion.div>
  );
};

export default StaggeredAnimation;

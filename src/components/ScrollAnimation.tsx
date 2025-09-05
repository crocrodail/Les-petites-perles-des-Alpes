import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { useScrollAnimation, ScrollAnimationOptions } from '@/hooks/useScrollAnimation';

export interface ScrollAnimationProps extends ScrollAnimationOptions {
  children: ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'rotateIn';
  duration?: number;
  distance?: number;
  delay?: number;
  stagger?: number;
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
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -10, scale: 0.9 },
    visible: { opacity: 1, rotate: 0, scale: 1 }
  }
};

const ScrollAnimation = ({
  children,
  className = '',
  animation = 'fadeIn',
  duration = 0.6,
  distance = 50,
  delay = 0,
  stagger = 0,
  as: Component = 'div',
  ...scrollOptions
}: ScrollAnimationProps) => {
  const { ref, isInView } = useScrollAnimation({
    delay,
    ...scrollOptions
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

  const motionProps: MotionProps = {
    ref,
    initial: 'hidden',
    animate: isInView ? 'visible' : 'hidden',
    variants: variant,
    transition: {
      duration,
      delay: stagger,
      ease: [0.25, 0.46, 0.45, 0.94], // Ease out cubic
      type: 'spring',
      stiffness: 100,
      damping: 12
    },
    className
  };

  return (
    <motion.div as={Component} {...motionProps}>
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;

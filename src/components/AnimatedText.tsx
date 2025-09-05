import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scaleIn';
  duration?: number;
  delay?: number;
  stagger?: number;
  as?: keyof JSX.IntrinsicElements;
}

const AnimatedText = ({
  children,
  className = '',
  animation = 'fadeIn',
  duration = 0.6,
  delay = 0,
  stagger = 0,
  as: Component = 'div'
}: AnimatedTextProps) => {
  const { ref, isInView } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    delay
  });

  const animationVariants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    slideUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 }
    },
    slideDown: {
      hidden: { opacity: 0, y: -30 },
      visible: { opacity: 1, y: 0 }
    },
    slideLeft: {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 }
    },
    slideRight: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 }
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 }
    }
  };

  const variant = animationVariants[animation];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
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
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Si c'est une chaîne de caractères, on peut la diviser en mots pour l'animation
  const isString = typeof children === 'string';
  const words = isString ? children.split(' ') : [children];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={className}
      as={Component}
    >
      {isString ? (
        words.map((word, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))
      ) : (
        <motion.div variants={itemVariants}>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

export default AnimatedText;
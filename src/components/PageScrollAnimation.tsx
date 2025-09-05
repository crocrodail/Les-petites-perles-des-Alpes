import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export interface PageScrollAnimationProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const PageScrollAnimation = ({
  children,
  className = '',
  as: Component = 'div'
}: PageScrollAnimationProps) => {
  return (
    <motion.div
      as={Component}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageScrollAnimation;

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0
  } = options;

  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold,
    rootMargin,
    once: triggerOnce
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasAnimated, delay]);

  return {
    ref,
    isInView: isInView || hasAnimated,
    hasAnimated
  };
};

export default useScrollAnimation;

import { useEffect, useRef, useCallback } from 'react';

export interface ScrollOptimizationOptions {
  throttleMs?: number;
  passive?: boolean;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useScrollOptimization = (options: ScrollOptimizationOptions = {}) => {
  const {
    throttleMs = 16, // ~60fps
    passive = true,
    rootMargin = '0px 0px -50px 0px',
    threshold = 0.1
  } = options;

  const rafId = useRef<number | null>(null);
  const lastScrollTime = useRef<number>(0);

  const throttledCallback = useCallback((callback: () => void) => {
    const now = Date.now();
    
    if (now - lastScrollTime.current >= throttleMs) {
      callback();
      lastScrollTime.current = now;
    } else {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      
      rafId.current = requestAnimationFrame(() => {
        callback();
        lastScrollTime.current = Date.now();
      });
    }
  }, [throttleMs]);

  useEffect(() => {
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return {
    throttledCallback,
    observerOptions: {
      rootMargin,
      threshold,
      passive
    }
  };
};

export default useScrollOptimization;

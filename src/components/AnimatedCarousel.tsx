import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useState, useEffect } from 'react';

interface AnimatedCarouselProps {
  children: ReactNode[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  animation?: 'slide' | 'fade' | 'scale' | 'none';
  showDots?: boolean;
  showArrows?: boolean;
  infinite?: boolean;
}

const AnimatedCarousel = ({ 
  children, 
  className = '',
  autoPlay = true,
  autoPlayInterval = 5000,
  animation = 'slide',
  showDots = true,
  showArrows = true,
  infinite = true
}: AnimatedCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex(prev => 
      infinite ? (prev + 1) % children.length : Math.min(prev + 1, children.length - 1)
    );
    
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex(prev => 
      infinite ? (prev - 1 + children.length) % children.length : Math.max(prev - 1, 0)
    );
    
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    
    setTimeout(() => setIsAnimating(false), 300);
  };

  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlay, autoPlayInterval]);

  const animations = {
    slide: {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -100 },
      transition: { duration: 0.3 }
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
      transition: { duration: 0.3 }
    },
    none: {}
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            {...animations[animation]}
            className="w-full"
          >
            {children[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {showArrows && (
        <>
          <motion.button
            onClick={prevSlide}
            disabled={!infinite && currentIndex === 0}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-smooth disabled:opacity-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ←
          </motion.button>
          <motion.button
            onClick={nextSlide}
            disabled={!infinite && currentIndex === children.length - 1}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-smooth disabled:opacity-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            →
          </motion.button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && (
        <div className="flex justify-center space-x-2 mt-4">
          {children.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-smooth ${
                index === currentIndex 
                  ? 'bg-primary' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimatedCarousel;

import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

interface AnimatedProgressProps {
  value: number;
  max?: number;
  className?: string;
  showValue?: boolean;
  color?: string;
  animation?: 'fill' | 'pulse' | 'glow' | 'none';
  duration?: number;
  children?: ReactNode;
}

const AnimatedProgress = ({ 
  value,
  max = 100,
  className = '',
  showValue = true,
  color = 'hsl(var(--primary))',
  animation = 'fill',
  duration = 1000,
  children
}: AnimatedProgressProps) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const percentage = (animatedValue / max) * 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(value);
    }, 100);

    return () => clearTimeout(timer);
  }, [value]);

  const animations = {
    fill: {
      initial: { width: '0%' },
      animate: { width: `${percentage}%` },
      transition: { duration: duration / 1000, ease: "easeOut" }
    },
    pulse: {
      animate: { scale: [1, 1.05, 1] },
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    },
    glow: {
      animate: { 
        boxShadow: ["0 0 5px rgba(215, 183, 114, 0.2)", "0 0 20px rgba(215, 183, 114, 0.4)", "0 0 5px rgba(215, 183, 114, 0.2)"]
      },
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    },
    none: {}
  };

  return (
    <div className={`w-full ${className}`}>
      {children}
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <motion.div 
          className="h-full rounded-full"
          {...animations[animation]}
          style={{
            backgroundColor: color
          }}
        />
      </div>
      {showValue && (
        <div className="text-sm text-muted-foreground mt-1">
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  );
};

export default AnimatedProgress;

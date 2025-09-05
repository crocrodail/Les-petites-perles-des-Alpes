import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
  flipDirection?: 'horizontal' | 'vertical';
  flipSpeed?: number;
  flipOnHover?: boolean;
  flipOnClick?: boolean;
}

const FlipCard = ({ 
  front, 
  back, 
  className = '',
  flipDirection = 'horizontal',
  flipSpeed = 0.6,
  flipOnHover = true,
  flipOnClick = false
}: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (flipOnClick) {
      setIsFlipped(!isFlipped);
    }
  };

  const getRotateY = () => {
    return isFlipped ? 180 : 0;
  };

  const getRotateX = () => {
    return isFlipped ? 180 : 0;
  };

  return (
    <div 
      className={`relative w-full h-full perspective-1000 ${className}`}
      onMouseEnter={() => flipOnHover && setIsFlipped(true)}
      onMouseLeave={() => flipOnHover && setIsFlipped(false)}
      onClick={handleFlip}
    >
      <motion.div
        className="relative w-full h-full transform-style-preserve-3d"
        animate={{
          rotateY: flipDirection === 'horizontal' ? getRotateY() : 0,
          rotateX: flipDirection === 'vertical' ? getRotateX() : 0
        }}
        transition={{ duration: flipSpeed }}
      >
        {/* Front */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <Card className="w-full h-full">
            <CardContent className="p-6 h-full flex items-center justify-center">
              {front}
            </CardContent>
          </Card>
        </div>
        
        {/* Back */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{
            transform: flipDirection === 'horizontal' ? 'rotateY(180deg)' : 'rotateX(180deg)'
          }}
        >
          <Card className="w-full h-full">
            <CardContent className="p-6 h-full flex items-center justify-center">
              {back}
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;

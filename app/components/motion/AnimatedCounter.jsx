// AnimatedCounter.jsx

'use client'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

function AnimatedCounter({ finalNumber, duration = 2 }) {
  // 1. Create a motion value to track the number being animated.
  const count = useMotionValue(0); 

  // 2. Use useTransform to round the number to an integer for display.
  const rounded = useTransform(count, Math.round);

  // 3. Start the animation when the component mounts or finalNumber changes.
  useEffect(() => {
    const controls = animate(count, finalNumber, {
      duration: duration, 
      ease: "easeOut",
    });

    return controls.stop; 
  }, [finalNumber, duration]);

  return (
    <motion.span>
      {rounded} 
    </motion.span>
  );
}

export default AnimatedCounter;
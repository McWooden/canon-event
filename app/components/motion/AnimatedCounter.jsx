// AnimatedCounter.jsx

'use client'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

/**
 * @typedef {object} AnimatedCounterProps
 * @property {number} finalNumber - The number to count up to.
 */

/**
 * Animated number counter component.
 * @param {AnimatedCounterProps} props
 */
function AnimatedCounter({ finalNumber }) {
  // 1. Create a motion value to track the number being animated.
  const count = useMotionValue(0); 

  // 2. Use useTransform to round the number to an integer for display.
  const rounded = useTransform(count, Math.round);

  // 3. Start the animation when the component mounts or finalNumber changes.
  useEffect(() => {
    const controls = animate(count, finalNumber, {
      duration: 2, 
      ease: "easeOut",
    });

    return controls.stop; 
  }, [finalNumber]);

  return (
    <motion.span>
      {rounded} 
    </motion.span>
  );
}

export default AnimatedCounter;
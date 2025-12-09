// AnimatedCounter.jsx

'use client'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

/**
 * @typedef {object} AnimatedCounterProps
 * @property {number} finalNumber - The number to count up to.
 * @property {string} [locale='en-US'] - Optional locale for number formatting (e.g., 'de-DE' for European format).
 */

/**
 * Animated number counter component with comma separation.
 * @param {AnimatedCounterProps} props
 */
function AnimatedCounter({ finalNumber, locale = 'en-US' }) {
  const count = useMotionValue(0); 

  // Function to format the number with the specified locale (adds commas/separators)
  const formatter = new Intl.NumberFormat(locale);

  // 1. First useTransform: Rounds the animating number to an integer.
  const rounded = useTransform(count, Math.round);

  // 2. Second useTransform: Converts the rounded number into a formatted string.
  // We use .toSring() because the formatter only accepts a number type.
  const formatted = useTransform(rounded, (latest) => formatter.format(latest.toString()));

  // Start the animation when the component mounts or finalNumber changes.
  useEffect(() => {
    const controls = animate(count, finalNumber, {
      duration: 2.5, // Increased duration slightly for better viewing of large numbers
      ease: "easeOut",
    });

    return controls.stop; 
  }, [finalNumber, locale]);

  return (
    // Use the 'formatted' motion value in the span
    <motion.span 
      style={{ 
        fontSize: '4em', 
        fontWeight: 'bold', 
        display: 'block', 
        color: '#2ecc71',
      }}
    >
      {formatted} 
    </motion.span>
  );
}

export default AnimatedCounter;
'use client'

import { motion } from 'framer-motion';
import { ReactNode, useState, useEffect } from 'react';

// --- Utility Function ---
/**
 * Generates a random integer between min (inclusive) and max (inclusive).
 * @param {number} min - The minimum duration.
 * @param {number} max - The maximum duration.
 * @returns {number} The random duration.
 */
const getRandomDuration = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// --- Component Types ---
interface FlyingCloudProps {
  className?: string;
  children: ReactNode;
}

// --- Component ---
function FlyingCloud({ className, children }: FlyingCloudProps) {
  // State to hold the randomized duration values
  const [durations, setDurations] = useState({
    parentDuration: 60, // Default to max for initial render safety
    childDuration: 12,
  });

  // Calculate random durations ONCE when the component mounts
  useEffect(() => {
    setDurations({
      parentDuration: getRandomDuration(20, 40),
      childDuration: getRandomDuration(6, 12),
    });
  }, []); // Empty dependency array ensures this runs only once

  const { parentDuration, childDuration } = durations;

  return (
    <motion.div
      className={className} 
      
      // 1. Parent (Horizontal Drift)
      animate={{
        // Using x keyframes for subtle side-to-side movement
        x: ["-5%", "5%"], 
      }}
      transition={{
        x: {
          // Use the randomized duration
          duration: parentDuration, 
          repeat: Infinity,
          repeatType: "reverse", // Use 'reverse' for smooth back-and-forth movement
          ease: "easeInOut",
        },
      }}
    >
      {/* 2. Child (Vertical Drift) */}
      <motion.div
        animate={{ y: [0, 3, 0] }}
        transition={{
          y: {
            // Use the randomized duration
            duration: childDuration, 
            repeat: Infinity,
            repeatType: "loop", 
            ease: "easeInOut",
          },
        }}
      >
        {children} 
      </motion.div>
    </motion.div>
  );
}

export default FlyingCloud;
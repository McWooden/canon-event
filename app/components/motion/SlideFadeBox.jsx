// SlideFadeBox.jsx

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// 1. Define the variants inside the component file
const slideFadeVariants = {
  // Entrance (Starts faded and from the bottom)
  hidden: {
    opacity: 0,
    y: 50, 
  },
  // Visible (Slides up and fades in)
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  // Exit (Slides out to the left and fades out)
  exit: {
    opacity: 0,
    x: -100, // Slides to the left
    transition: {
      duration: 0.3,
    },
  },
};

function SlideFadeBox() {
  const [isVisible, setIsVisible] = useState(true);

  // Toggle function to remove/show the component
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <button 
        onClick={toggleVisibility}
        style={{ marginBottom: '20px', padding: '10px 20px', cursor: 'pointer', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px' }}
      >
        {isVisible ? "Slide Out Left & Hide" : "Slide In/Fade In"}
      </button>

      {/* AnimatePresence enables the exit animation */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="slide-fade-content" // Critical for AnimatePresence to track the element
            variants={slideFadeVariants}
            initial="hidden" 
            animate="visible" 
            exit="exit" // Triggers the slide-out when `isVisible` becomes false
            style={{
              width: '200px',
              height: '100px',
              backgroundColor: '#3498db',
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
              fontSize: '18px',
              // Ensures the animation doesn't affect surrounding elements during exit
              position: 'relative', 
            }}
          >
            I Slide and Fade!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default SlideFadeBox;
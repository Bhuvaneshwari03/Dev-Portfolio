import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: { 
        opacity: 0, 
        y: 20,
        scale: 0.98,
        filter: 'blur(10px)' // Start blurry
    },
    animate: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        filter: 'blur(0px)' // Clear up
    },
    exit: { 
        opacity: 0, 
        y: -20,
        scale: 0.98,
        filter: 'blur(10px)' // Blur out
    }
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
};

const PageWrapper = ({ children, className = "", style = {} }) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            className={className}
            style={{ width: '100%', ...style }}
        >
            {children}
        </motion.div>
    );
};

export default PageWrapper;

import { motion } from 'framer-motion';

const AnimatedWrapper = ({ children, duration = 0.6, delay = 0, initialY = 50, initialOpacity = 0 }) => {
    return (
        <motion.div
            initial={{ y: initialY, opacity: initialOpacity }} 
            animate={{ y: 0, opacity: 1 }} 
            // exit={{ y: initialY, opacity: initialOpacity }} 
            transition={{ duration, delay, ease: "easeOut" }} 
        >
            {children} 
        </motion.div>
    );
};

export default AnimatedWrapper;
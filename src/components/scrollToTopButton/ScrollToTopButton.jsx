import { useState, useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUp } from "react-icons/fi";

export const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

      const toggleVisibility = () => {
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
  
      useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }, []);
  
      return (
        <AnimatePresence>
            {
                isVisible && (
                    <motion.div
    					initial={{ scale: 0, opacity: 0, visibility: 'hidden' }}
    					animate={{ scale: 1.1, opacity: 1, visibility: 'visible' }}
    					exit={{ scale: 0, opacity: 0, visibility: 'hidden' }}
                        onClick={scrollToTop}
    					className="fixed bottom-10 cursor-pointer right-10 z-10 p-3 text-white rounded-full border border-sky-500 bg-slate-800/50 transition-all duration-300 hover:bg-slate-800/80"
    				>
                        <FiArrowUp />
                    </motion.div>
                )
            }
        </AnimatePresence>
      )
}

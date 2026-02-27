import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children, type = "fade-up", delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Define animation variants
  const variants = {
    "fade-up": {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 },
    },
    "fade-down": {
      initial: { opacity: 0, y: -60 },
      animate: { opacity: 1, y: 0 },
    },
    "fade-left": {
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x: 0 },
    },
    "fade-right": {
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 },
    },
    zoom: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
  };

  const animation = variants[type] || variants["fade-up"];

  return (
    <motion.div
      ref={ref}
      initial={animation.initial}
      animate={inView ? animation.animate : animation.initial}  
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;

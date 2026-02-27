import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function TextAnimate({
  text,
  mode = "letters",
  delay = 0,
  className = "",
  ...props
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) controls.start("animate");
  }, [inView]);

  const letters = text.split("");
  const words = text.split(" ");

  // ----------- LETTERS -----------
  if (mode === "letters") {
    return (
      <div
        ref={ref}
        className={className}
        style={{ display: "inline-block" }}
        {...props}
      >
        {letters.map((ch, i) => (
          <motion.span
            key={i}
            style={{ display: "inline-block",  }}
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
            }}
            initial="initial"
            animate={controls}
            transition={{
              delay: delay + i * 0.04,
              duration: 0.45,
              ease: "easeOut",
            }}
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        ))}
      </div>
    );
  }

  // ----------- WORDS -----------
  if (mode === "words") {
    return (
      <div ref={ref} className={className} {...props}>
        {words.map((w, i) => (
          <motion.span
            key={i}
            style={{ display: "inline-block", marginRight: 6 }}
            variants={{
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
            }}
            initial="initial"
            animate={controls}
            transition={{
              delay: delay + i * 0.08,
              duration: 0.45,
            }}
          >
            {w}
          </motion.span>
        ))}
      </div>
    );
  }

  // ----------- CLIP-PATH -----------
  if (mode === "clip") {
    return (
      <motion.div
        ref={ref}
        className={className}
        style={{ display: "inline-block", overflow: "hidden" }}
        variants={{
          initial: { clipPath: "inset(0 100% 0 0)" },
          animate: { clipPath: "inset(0 0% 0 0)" },
        }}
        initial="initial"
        animate={controls}
        transition={{
          duration: 0.8,
          delay,
          ease: "easeOut",
        }}
        {...props}
      >
        {text}
      </motion.div>
    );
  }

  return null;
}

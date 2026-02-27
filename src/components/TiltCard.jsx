import React, { useRef } from "react";
import { motion } from "framer-motion";

 function TiltCard({
  image,
  width = "350px",
  height = "220px",
  radius = "20px",
}) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  function handleMove(e) {
    const card = cardRef.current;
    const img = imgRef.current;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    // Parallax for image
    const moveX = (x - centerX) * 0.1;
    const moveY = (y - centerY) * 0.1;
    img.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
  }

  function resetTilt() {
    const card = cardRef.current;
    const img = imgRef.current;

    card.style.transform = "rotateX(0deg) rotateY(0deg)";
    img.style.transform = "translate(0px, 0px) scale(1)";
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 150, damping: 10 }}
      style={{
        width,
        height,
        borderRadius: radius,
        background: "linear-gradient(135deg, #00eaff55, #c8ced755)",
        padding: "3px",
        perspective: "1000px",
        boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          borderRadius: radius,
          position: "relative",
          background: "#000",
        }}
      >
        {/* Glow overlay */}
        <div
          style={{
            position: "absolute",
            inset: "0",
            background:
              "radial-gradient(circle at 50% 20%, rgba(222, 232, 232, 0.25), transparent)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        ></div>

        {/* Image */}
        <img
          ref={imgRef}
          src={image}
          alt="tilt-card"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.2s ease-out",
          }}
        />
      </div>
    </motion.div>
  );
}
export default TiltCard;
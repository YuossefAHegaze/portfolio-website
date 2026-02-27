import { motion } from "framer-motion";
import { useState } from "react";

/**
 * Responsive Fancy Card Stack (Farmer Motion Style)
 * Perfectly centered, responsive, smooth swipe, with rotations.
 * NO overflow issues, works on all screen sizes.
 */
export default function CardStackResponsive({ images = [] }) {
  const [cards, setCards] = useState(images);

  const handleSwipe = () => {
    setCards((prev) => {
      const newOrder = [...prev];
      const first = newOrder.shift();
      newOrder.push(first);
      return newOrder;
    });
  };

  return (
    <div className="stack-wrapper">
      {cards.map((img, i) => {
        const rotate = [-8, 6, -4, 3][i % 4];
        const offset = i * -22;

        return (
          <motion.img
            key={img + i}
            src={img}
            className="card-item"
            style={{ zIndex: images.length - i }}
            initial={{ y: offset, rotate, scale: 1 - i * 0.06 }}
            animate={{ y: offset, rotate, scale: 1 - i * 0.06 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x > 120 || info.offset.x < -120) {
                handleSwipe();
              }
            }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          />
        );
      })}

      <style>{`
        .stack-wrapper {
          position: relative;
          width: min(90vw, 360px);
          height: min(80vw, 420px);
          margin: 40px auto;
          perspective: 1200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-item {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 18px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.28);
          cursor: grab;
          user-select: none;
          transition: box-shadow 0.2s ease;
        }

        .card-item:hover {
          box-shadow: 0 25px 60px rgba(0,0,0,0.36);
        }

        @media (max-width: 480px) {
          .stack-wrapper {
            width: 85vw;
            height: 110vw;
          }
        }
      `}</style>
    </div>
  );
}

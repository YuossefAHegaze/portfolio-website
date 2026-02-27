"use client";
import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import holder from "../Data/photos/box2.jpg";
export default function UseAnimationFrame() {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    if (!ref.current) return;

    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div className="ss">
      <div className="cube" ref={ref}>
        <div className="side front" />
        <div className="side left" />
        <div className="side right" />
        <div className="side top" />
        <div className="side bottom" />
        <div className="side back" />
      </div>
      <StyleSheet />
    </div>
  );
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
  return (
    <style>{`
     
    
      .ss{
      
        perspective: 800px;
        width: 100px;
        height: 100px;
        margin-top : 25% ;
        margin-left : 50% ;
      }
      .cube {
        width: 200px;
        height: 200px;
        position: relative;
        transform-style: preserve-3d;
        
      }

      .side {
        position: absolute;
        width: 100%;
        height: 100%; 
   background-image: url(${holder});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
        opacity: 0.6;
      }

      .front {
        transform: rotateY(0deg) translateZ(100px);
        
      }
      .right {
        transform: rotateY(90deg) translateZ(100px);
         
      }
      .back {
        transform: rotateY(180deg) translateZ(100px);
         
      }
      .left {
        transform: rotateY(-90deg) translateZ(100px);
       
      }
      .top {
        transform: rotateX(90deg) translateZ(100px);
       
      }
      .bottom {
        transform: rotateX(-90deg) translateZ(100px);
       
      }
    `}</style>
  );
}

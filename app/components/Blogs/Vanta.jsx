'use client'
import { useEffect, useRef } from "react";

const VantaGlobe = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect;
    const setVanta = () => {
      if (window.VANTA) {
        vantaEffect = window.VANTA.GLOBE({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
        });
      }
    };

    setVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        height: "70vh",
        width: "100%",
      }}
    ></div>
  );
};

export default VantaGlobe;

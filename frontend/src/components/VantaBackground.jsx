import React, { useEffect, useRef } from "react";
// import * as THREE from "three";

const VantaBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    // Ensure THREE is available globally before Vanta initializes
    // if (!window.THREE) window.THREE = THREE;

    const scriptThree = document.createElement("script");
    scriptThree.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    scriptThree.onload = () => {
      const scriptVanta = document.createElement("script");
      scriptVanta.src = "https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.net.min.js";
      scriptVanta.onload = () => {
        if (window.VANTA) {
          const vantaEffect = window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x812746,
            backgroundColor: 0x190d31,
            points: 14.0,
            maxDistance: 22.0,
            spacing: 17.0,
          });
          return () => vantaEffect?.destroy();
        }
      };
      document.body.appendChild(scriptVanta);
    };
    document.body.appendChild(scriptThree);
  }, []);

  return <div ref={vantaRef} className="vanta-background" style={{ width: "100vw", height: "100vh" }}></div>;
};

export default VantaBackground;
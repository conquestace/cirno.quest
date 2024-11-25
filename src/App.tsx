import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const App: React.FC = () => {
  const snowContainerRef = useRef<HTMLDivElement>(null);
  const snowflakes = useRef<HTMLDivElement[]>([]);

  // Create Snowflakes
  useEffect(() => {
    const container = snowContainerRef.current;
    if (!container) return;

    // Generate snowflakes
    const count = 100;
    for (let i = 0; i < count; i++) {
      const flake = document.createElement("div");
      flake.className = "snowflake";
      flake.style.left = `${Math.random() * 100}vw`;
      flake.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(flake);
      snowflakes.current.push(flake);
    }

    // Animate snow accumulation at the bottom
    gsap.to(snowflakes.current, {
      y: "100vh", // Fall to the bottom
      duration: 10,
      ease: "linear",
      stagger: { amount: 10, from: "random" }, // Randomize timings
    });
  }, []);

  // Handle Mouse Movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Apply force to snowflakes near the mouse
      snowflakes.current.forEach((flake) => {
        const flakeRect = flake.getBoundingClientRect();
        const dx = flakeRect.x - clientX;
        const dy = flakeRect.y - clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Only apply force to close snowflakes
        if (dist < 100) {
          gsap.to(flake, {
            x: dx * 2,
            y: dy * 2,
            duration: 1,
            ease: "power2.out",
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative bg-icyWhite min-h-screen overflow-hidden">
      <div
        ref={snowContainerRef}
        className="absolute inset-0"
        style={{ pointerEvents: "none" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center py-20">
        <h1 className="text-5xl font-bold text-cirnoBlue">Cirno's Quest</h1>
        <p className="text-xl mt-4 text-gray-700">
          Watch the snow fall, pile up, and dance with your mouse!
        </p>
      </div>

      {/* Footer (Snow will pile above this) */}
      <footer className="relative bg-cirnoBlue text-white text-center py-6 z-10">
        <p>&copy; 2024 Cirno's Quest. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
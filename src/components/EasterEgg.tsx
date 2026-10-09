import { useEffect, useRef, useState } from "react";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

interface Firefly {
  id: number;
  left: number;
  size: number;
  duration: number;
  drift: number;
  delay: number;
  color: string;
}

let fireflyId = 0;

function spawnFireflies(count: number): Firefly[] {
  const colors = ["#8bd5ff", "#9be7c4"];
  return Array.from({ length: count }, () => ({
    id: fireflyId++,
    left: Math.random() * 100,
    size: 3 + Math.random() * 4,
    duration: 2.6 + Math.random() * 2.2,
    drift: (Math.random() - 0.5) * 60,
    delay: Math.random() * 0.6,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));
}

function EasterEgg() {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);
  const progress = useRef(0);
  const logged = useRef(false);

  useEffect(() => {
    if (!logged.current) {
      logged.current = true;
      console.log(
        "%c👋 curious engineer detected.",
        "font-size: 14px; font-weight: 600; color: #8bd5ff;"
      );
      console.log(
        "%cthere's a Konami code on this page, for what it's worth.",
        "color: #9be7c4;"
      );
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      const expected = KONAMI[progress.current];

      if (key === expected) {
        progress.current += 1;
        if (progress.current === KONAMI.length) {
          progress.current = 0;
          const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches;
          console.log(
            "%c✨ you found it. hi, I build things like this for fun.",
            "font-size: 13px; color: #8bd5ff;"
          );
          if (!reduceMotion) {
            setFireflies((prev) => [...prev, ...spawnFireflies(16)]);
          }
        }
      } else {
        progress.current = key === KONAMI[0] ? 1 : 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (fireflies.length === 0) return null;

  return (
    <div aria-hidden="true">
      {fireflies.map((fly) => (
        <span
          key={fly.id}
          className="firefly"
          style={
            {
              left: `${fly.left}vw`,
              width: `${fly.size}px`,
              height: `${fly.size}px`,
              background: fly.color,
              boxShadow: `0 0 ${fly.size * 2}px ${fly.color}`,
              animationDuration: `${fly.duration}s`,
              animationDelay: `${fly.delay}s`,
              "--firefly-drift": `${fly.drift}px`,
            } as React.CSSProperties
          }
          onAnimationEnd={() =>
            setFireflies((prev) => prev.filter((f) => f.id !== fly.id))
          }
        />
      ))}
    </div>
  );
}

export default EasterEgg;

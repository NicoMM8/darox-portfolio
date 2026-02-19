import React, { useEffect, useState } from 'react';

const NUM_STARS = 60;

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

interface StarData {
  left: number;
  top: number;
  size: number;
  delay: number;
}

const StarsBackground: React.FC = () => {
  const [stars, setStars] = useState<StarData[]>([]);
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Respeta prefers-reduced-motion del sistema operativo
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);

    const generatedStars = Array.from({ length: NUM_STARS }).map(() => ({
      left: getRandom(0, 100),
      top: getRandom(0, 100),
      size: getRandom(1, 2.5),
      delay: getRandom(0, 6),
    }));
    setStars(generatedStars);

    return () => mq.removeEventListener('change', handler);
  }, []);

  if (!mounted) return null;

  return (
    <div className="stars-bg" aria-hidden="true">
      {stars.map((star, i) => {
        const leftClass = `star-left-${Math.round(star.left / 10) * 10}`;
        const topClass = `star-top-${Math.round(star.top / 10) * 10}`;
        const sizeClass = `star-size-${Math.round(star.size)}`;
        const delayClass = `star-delay-${Math.round(star.delay)}`;
        return (
          <div
            key={i}
            className={`star ${leftClass} ${topClass} ${sizeClass} ${delayClass}`}
            style={reducedMotion ? { animation: 'none', opacity: 0.12 } : undefined}
          />
        );
      })}
    </div>
  );
};

export default StarsBackground;

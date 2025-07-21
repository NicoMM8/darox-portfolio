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

  useEffect(() => {
    setMounted(true);
    // Solo genera las estrellas una vez en el cliente
    const generatedStars = Array.from({ length: NUM_STARS }).map(() => ({
      left: getRandom(0, 100),
      top: getRandom(0, 100),
      size: getRandom(1, 2.5),
      delay: getRandom(0, 6),
    }));
    setStars(generatedStars);
  }, []);

  if (!mounted) return null;

  return (
    <div className="stars-bg">
      {stars.map((star, i) => {
        const leftClass = `star-left-${Math.round(star.left / 10) * 10}`;
        const topClass = `star-top-${Math.round(star.top / 10) * 10}`;
        const sizeClass = `star-size-${Math.round(star.size)}`;
        const delayClass = `star-delay-${Math.round(star.delay)}`;
        return (
          <div
            key={i}
            className={`star ${leftClass} ${topClass} ${sizeClass} ${delayClass}`}
          />
        );
      })}
    </div>
  );
};

export default StarsBackground;
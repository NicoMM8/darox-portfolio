import React from 'react';

const NUM_STARS = 60;

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const StarsBackground: React.FC = () => {
  const stars = Array.from({ length: NUM_STARS }).map((_, i) => {
    const left = getRandom(0, 100);
    const top = getRandom(0, 100);
    const size = getRandom(1, 2.5); // más pequeñas
    const delay = getRandom(0, 6); // Más rango para delays

    const leftClass = `star-left-${Math.round(left / 10) * 10}`;
    const topClass = `star-top-${Math.round(top / 10) * 10}`;
    const sizeClass = `star-size-${Math.round(size)}`;
    const delayClass = `star-delay-${Math.round(delay)}`;

    return (
      <div
        key={i}
        className={`star ${leftClass} ${topClass} ${sizeClass} ${delayClass}`}
      />
    );
  });

  return <div className="stars-bg">{stars}</div>;
};

export default StarsBackground;
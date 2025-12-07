'use client';

import { useState, useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const [balls, setBalls] = useState([]);
  const idCounterRef = useRef(0);
  
  const getStableSeed = () => {
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem('balls-seed');
      if (stored) return parseFloat(stored);
      const newSeed = Math.random();
      sessionStorage.setItem('balls-seed', newSeed.toString());
      return newSeed;
    }
    return Math.random();
  };
  
  const seedRef = useRef(getStableSeed());

  useEffect(() => {
    const seed = seedRef.current;
    let seedValue = seed;

    const seededRandom = () => {
      seedValue = (seedValue * 9301 + 49297) % 233280;
      return seedValue / 233280;
    };

    const speeds = [15, 10, 6];
    const MAX_BALLS = 50;
    
    const initialBalls = Array.from({ length: 30 }, (_, i) => {
      const duration = speeds[Math.floor(seededRandom() * speeds.length)];
      const initialProgress = seededRandom();
      const delay = -initialProgress * duration;
      
      return {
        id: idCounterRef.current++,
        left: seededRandom() * 100,
        duration: duration,
        delay: delay,
        createdAt: Date.now(),
      };
    });
    setBalls(initialBalls);

    const interval = setInterval(() => {
      setBalls((prevBalls) => {
        if (prevBalls.length >= MAX_BALLS) {
          return prevBalls;
        }
        const duration = speeds[Math.floor(seededRandom() * speeds.length)];
        const newBall = {
          id: idCounterRef.current++,
          left: seededRandom() * 100,
          duration: duration,
          delay: 0,
          createdAt: Date.now(),
        };
        return [...prevBalls, newBall];
      });
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes rise {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
        .ball {
          position: absolute;
          width: 0.5px;
          height: 0.5px;
          border-radius: 50%;
          background-color: white;
          bottom: 0;
          animation: rise linear forwards;
          will-change: transform;
        }
      `}</style>
      <div className="absolute inset-0">
        {balls.map((ball) => (
          <div
            key={ball.id}
            className="ball"
            style={{
              left: `${ball.left}%`,
              animationDuration: `${ball.duration}s`,
              animationDelay: `${ball.delay}s`,
              animationFillMode: 'both',
            }}
            onAnimationEnd={() => {
              setBalls((prevBalls) => prevBalls.filter((b) => b.id !== ball.id));
            }}
          />
        ))}
      </div>
    </>
  );
}


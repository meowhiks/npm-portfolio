'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Home() {
  const [balls, setBalls] = useState([]);
  const [isDark, setIsDark] = useState(true);
  const [language, setLanguage] = useState('ru');
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
        @keyframes underlineSweep {
          0% {
            left: -30%;
          }
          100% {
            left: 130%;
          }
        }
        
        @keyframes colorTransition {
          0% {
            background: white;
          }
          55% {
            background: white;
          }
          60% {
            background: linear-gradient(90deg, #a855f7, #ec4899, #ef4444);
          }
          80% {
            background: linear-gradient(90deg, #a855f7, #ec4899, #ef4444);
          }
          85% {
            background: white;
          }
          100% {
            background: white;
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
        .glassmorphism-nav {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 12px 24px;
        }
        .nav-item {
          position: relative;
        }
        .nav-text {
          display: inline-block;
          max-width: 0;
          opacity: 0;
          overflow: hidden;
          white-space: nowrap;
          transition: max-width 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s ease-out 0.2s, margin-left 0.4s ease-out 0.15s;
          margin-left: 0;
          font-size: 18px;
          vertical-align: middle;
        }
        .nav-item:hover .nav-text {
          max-width: 150px;
          opacity: 1;
          margin-left: 8px;
          transition: max-width 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s ease-out, margin-left 0.4s ease-out;
        }
      `}</style>
      <div className="min-h-screen relative overflow-hidden bg-[#02030a]">
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

        <nav className="absolute top-8 left-0 right-0 z-20 flex justify-center">
          <div className="glassmorphism-nav flex items-center gap-6">
            <button
              onClick={() => setIsDark(!isDark)}
              className="nav-item flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all relative group overflow-hidden"
            >
              <i className={`fas ${isDark ? 'fa-moon' : 'fa-sun'} text-gray-300 flex-shrink-0 text-2xl`}></i>
              <span className="nav-text whitespace-nowrap text-2xl">Switch theme</span>
            </button>
            
            <div className="w-px h-8 bg-white/20"></div>
            
            <button
              onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
              className="nav-item flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all text-gray-300 hover:text-white font-medium relative group overflow-hidden"
            >
              <span className="flex-shrink-0 text-2xl">{language.toUpperCase()}</span>
              <span className="nav-text whitespace-nowrap text-2xl">Change Language</span>
            </button>
            
            <div className="w-px h-8 bg-white/20"></div>
            
            <a
              href="https://t.me/meowhiks"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all text-gray-300 hover:text-white relative group overflow-hidden"
            >
              <i className="fab fa-telegram text-2xl flex-shrink-0"></i>
              <span className="nav-text whitespace-nowrap text-2xl">Telegram</span>
            </a>
            <a
              href="https://github.com/meowhiks"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all text-gray-300 hover:text-white relative group overflow-hidden"
            >
              <i className="fab fa-github text-2xl flex-shrink-0"></i>
              <span className="nav-text whitespace-nowrap text-2xl">Github</span>
            </a>
          </div>
        </nav>

        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="flex items-center gap-8">
            <div className="relative inline-block">
              <h1 className="text-5xl font-normal text-white">
                <span className="relative inline-block">
                  Приветствую, я
                </span>
                {' '}
                <span className="relative inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  meowhiks
                </span>
              </h1>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="relative w-28 h-28 rounded-full p-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                <div className="w-full h-full rounded-full bg-[#02030a] flex items-center justify-center p-1">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/icon.svg"
                      alt="meowhiks"
                      width={112}
                      height={112}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

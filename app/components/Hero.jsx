'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { translations } from '../translations';

export default function Hero({ language = 'ru' }) {
  const t = translations[language];
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);
  const layer4Ref = useRef(null);
  const layer5Ref = useRef(null);
  const layer6Ref = useRef(null);

useEffect(() => {
    const containerRef = document.querySelector('.relative.z-10.flex.items-center.justify-center');
    
    const createStar = () => {
      const trail = [];
      const trailLength = 8;
      
      // Анимация по дуге вверх (медленнее)
      const duration = Math.random() * 5000 + 4000;
      const startY = Math.random() * 50 + 20;
      const startTime = Date.now();
      const baseOpacity = Math.random() * 0.5 + 0.3;
      const size = Math.random() * 3 + 1;
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / duration;
        
        if (progress >= 1) {
          trail.forEach(particle => particle.remove());
          return;
        }
        
        const x = Math.pow(progress, 0.7) * 120;
        const y = startY + progress * 60;
        
        const particle = document.createElement('div');
        particle.style.cssText = `
          position: absolute;
          left: ${x}%;
          bottom: ${y}%;
          width: ${size}px;
          height: ${size}px;
          background: white;
          border-radius: 50%;
          opacity: ${(1 - progress) * baseOpacity};
          pointer-events: none;
          z-index: 5;
          box-shadow: 0 0 ${size * 2}px rgba(255, 255, 255, 0.5);
        `;
        
        if (containerRef) {
          containerRef.appendChild(particle);
        }
        
        trail.push(particle);
        
        if (trail.length > trailLength) {
          const oldParticle = trail.shift();
          oldParticle.remove();
        }

        trail.forEach((p, i) => {
          const trailOpacity = (i / trailLength) * (1 - progress) * baseOpacity;
          p.style.opacity = trailOpacity;
        });
        
        requestAnimationFrame(animate);
      };
      
      animate();
    };
    
    const interval = setInterval(createStar, 300);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen overflow-hidden bg-[#02030a]">

      {/* Контент */}
      <div className="relative z-10 flex items-center gap-8">
        <div className="relative">
          <h1 className="text-5xl font-normal text-white mb-3">
            <span className="relative inline-block">
              {t.hero.greeting}
            </span>
            {' '}
            <span className="relative inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              meowhiks
            </span>
          </h1>
          <p className="text-lg text-gray-400 italic">
            {t.hero.subtitle}
          </p>
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
  );
}

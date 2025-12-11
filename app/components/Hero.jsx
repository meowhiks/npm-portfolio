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
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5);
      const y = (clientY / innerHeight - 0.5);
      
      // Разные скорости для каждого слоя (ближние быстрее, дальние медленнее)
      if (layer1Ref.current) {
        layer1Ref.current.style.transform = `translate(${x * 50}px, ${y * 50}px) translateZ(150px)`;
      }
      if (layer2Ref.current) {
        layer2Ref.current.style.transform = `translate(${x * 40}px, ${y * 40}px) translateZ(120px)`;
      }
      if (layer3Ref.current) {
        layer3Ref.current.style.transform = `translate(${x * 30}px, ${y * 30}px) translateZ(90px)`;
      }
      if (layer4Ref.current) {
        layer4Ref.current.style.transform = `translate(${x * 20}px, ${y * 20}px) translateZ(60px)`;
      }
      if (layer5Ref.current) {
        layer5Ref.current.style.transform = `translate(${x * 12}px, ${y * 12}px) translateZ(30px)`;
      }
      if (layer6Ref.current) {
        layer6Ref.current.style.transform = `translate(${x * 6}px, ${y * 6}px) translateZ(0px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen overflow-hidden bg-[#02030a]">
      {/* Контейнер с 3D перспективой */}
      <div className="absolute inset-0" style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
        {/* Слой 1 - Ближайший (самый быстрый) */}
        <div 
          ref={layer1Ref}
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0',
            maskImage: 'radial-gradient(ellipse 100% 60% at 50% 30%, black 0%, black 50%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 100% 60% at 50% 30%, black 0%, black 50%, transparent 100%)',
            transformStyle: 'preserve-3d',
          }}
        />
        
        {/* Слой 2 */}
        <div 
          ref={layer2Ref}
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.12) 0.8px, transparent 0.8px)`,
            backgroundSize: '14px 14px',
            backgroundPosition: '7px 7px',
            maskImage: 'radial-gradient(ellipse 90% 55% at 50% 28%, black 0%, black 45%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 55% at 50% 28%, black 0%, black 45%, transparent 85%)',
            transformStyle: 'preserve-3d',
          }}
        />
        
        {/* Слой 3 */}
        <div 
          ref={layer3Ref}
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.1) 0.6px, transparent 0.6px)`,
            backgroundSize: '10px 10px',
            backgroundPosition: '5px 5px',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 25%, black 0%, black 40%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 25%, black 0%, black 40%, transparent 80%)',
            transformStyle: 'preserve-3d',
          }}
        />
        
        {/* Слой 4 */}
        <div 
          ref={layer4Ref}
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.08) 0.5px, transparent 0.5px)`,
            backgroundSize: '8px 8px',
            backgroundPosition: '4px 4px',
            maskImage: 'radial-gradient(ellipse 70% 45% at 50% 22%, black 0%, black 35%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 45% at 50% 22%, black 0%, black 35%, transparent 75%)',
            transformStyle: 'preserve-3d',
          }}
        />
        
        {/* Слой 5 */}
        <div 
          ref={layer5Ref}
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.1) 1.2px, transparent 1.2px)`,
            backgroundSize: '24px 24px',
            backgroundPosition: '0 0',
            maskImage: 'radial-gradient(ellipse 110% 65% at 50% 32%, black 0%, black 55%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(ellipse 110% 65% at 50% 32%, black 0%, black 55%, transparent 95%)',
            transformStyle: 'preserve-3d',
          }}
        />
        
        {/* Слой 6 - Дальний (самый медленный) */}
        <div 
          ref={layer6Ref}
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.06) 0.4px, transparent 0.4px)`,
            backgroundSize: '6px 6px',
            backgroundPosition: '3px 3px',
            maskImage: 'radial-gradient(ellipse 60% 40% at 50% 20%, black 0%, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 40% at 50% 20%, black 0%, black 30%, transparent 70%)',
            transformStyle: 'preserve-3d',
          }}
        />
        
        {/* Градиентное свечение к центру и верху */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 100% 70% at 50% 20%, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 30%, transparent 70%)',
          }}
        />
      </div>

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

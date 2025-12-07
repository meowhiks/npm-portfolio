'use client';

import Image from 'next/image';
import { translations } from '../translations';

export default function About({ language = 'ru' }) {
  const t = translations[language];
  return (
    <section className="relative z-10 min-h-screen flex items-center px-8 py-20 bg-[#02030a]">
      <div className="w-full relative">
        {/* Аватарка справа с затуханием */}
        <div className="relative flex justify-end items-center h-[90vh]">
          {/* Градиент затухания на аватарке */}
          <div className="relative z-0">
            <div className="relative w-[90vh] h-[90vh]">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/icon.png"
                  alt="meowhiks"
                  width={900}
                  height={900}
                  className="w-full h-full object-cover"
                />
                {/* Градиент затухания слева (к тексту) */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1/3 z-10 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to right, rgba(2, 3, 10, 1), rgba(2, 3, 10, 0))'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Текст поверх картинки */}
        <div className="absolute top-1/2 -translate-y-1/2 z-30 max-w-2xl" style={{ left: '96px' }}>
          <h2 className="text-5xl font-normal text-white" style={{ marginBottom: '50px' }}>
            {t.about.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500" style={{ marginBottom: '48px' }}></div>
          <p className="text-2xl text-gray-300 leading-relaxed">
            {t.about.text}{' '}
            <span className="font-medium" style={{ color: '#ee99c2' }}>
              {t.about.name}
            </span>
            {t.about.text2}
          </p>
        </div>
      </div>
    </section>
  );
}


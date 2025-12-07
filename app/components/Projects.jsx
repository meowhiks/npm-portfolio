'use client';

import Image from 'next/image';
import { translations } from '../translations';

export default function Projects({ language = 'ru' }) {
  const t = translations[language];
  return (
    <section className="relative z-10 min-h-screen flex items-start px-8 py-20 bg-[#02030a]">
      <div className="max-w-7xl w-full">
        <h2 className="text-5xl font-normal text-white" style={{ marginBottom: '64px', marginLeft: '80px' }}>{t.projects.title}</h2>
        
        <div className="flex justify-start" style={{ marginLeft: '80px' }}>
          <div className="bg-gradient-to-r from-purple-400 to-purple-800 rounded-lg" style={{ padding: '1px', maxWidth: '800px', width: '100%' }}>
            <div className="bg-[#02030a] rounded-lg" style={{ padding: '32px', position: 'relative' }}>
              {/* Кнопка ссылки справа вверху */}
              <a 
                href="https://starlyplay.kz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-white/5 border border-white/10 rounded-lg px-4 py-2 hover:bg-white/10 transition-colors"
              >
                <i className="fas fa-external-link-alt text-gray-300"></i>
              </a>
              
              {/* Заголовок и иконка */}
              <div className="flex items-center gap-4 mb-6" style={{ paddingRight: '60px' }}>
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/starlyplay/favicon.ico"
                    alt="StarlyPlay"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-normal text-white mb-2">starlyplay.kz</h3>
                </div>
              </div>
              
              {/* Описание */}
              <div className="mb-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t.projects.starlyplay.description}
                </p>
              </div>
              
              {/* Технологии */}
              <div>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-white/5 border border-white/10 rounded-full px-4 py-2">
                    <span className="text-gray-300">Next.js</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-full px-4 py-2">
                    <span className="text-gray-300">Python</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { translations } from '../translations';

export default function Footer({ language = 'ru' }) {
  const t = translations[language];
  
  return (
    <footer className="relative z-10 px-8 bg-[#02030a]" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 via-pink-500 via-red-500 to-transparent"></div>
      <div className="max-w-7xl mx-auto flex justify-center">
        <p className="text-gray-300 text-center" style={{ fontSize: '16px' }}>
          {t.footer.text}{' '}
          <a 
            href="https://t.me/meowhiks" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent hover:from-purple-300 hover:via-pink-400 hover:to-red-400 transition-all"
          >
            by meowhiks
          </a>
        </p>
      </div>
    </footer>
  );
}

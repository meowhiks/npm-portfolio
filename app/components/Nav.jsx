'use client';

import { translations } from '../translations';

export default function Nav({ isDark, setIsDark, language, setLanguage }) {
  const t = translations[language];
  
  return (
    <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center">
      <div className="bg-white/5 backdrop-blur-md rounded-xl flex items-center gap-6" style={{ padding: '5px 20px' }}>
        <button
          onClick={() => setIsDark(!isDark)}
          className="theme-toggle-btn relative flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all group overflow-hidden"
        >
          <i className={`fas ${isDark ? 'fa-moon' : 'fa-sun'} text-gray-300 flex-shrink-0 text-2xl`}></i>
          <span className="inline-block max-w-0 opacity-0 overflow-hidden whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ml-0 text-lg align-middle group-hover:max-w-[150px] group-hover:opacity-100 group-hover:ml-2 whitespace-nowrap text-2xl">{t.nav.switchTheme}</span>
        </button>
        
        <div className="w-px h-8 bg-white/20"></div>
        
        <button
          onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
          className="relative flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all text-gray-300 hover:text-white font-medium group overflow-hidden"
        >
          <span className="flex-shrink-0 text-2xl">{language.toUpperCase()}</span>
          <span className="inline-block max-w-0 opacity-0 overflow-hidden whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ml-0 text-lg align-middle group-hover:max-w-[150px] group-hover:opacity-100 group-hover:ml-2 whitespace-nowrap text-2xl">{t.nav.changeLanguage}</span>
        </button>
        
        <div className="w-px h-8 bg-white/20"></div>
        
        <a
          href="https://t.me/meowhiks"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all text-gray-300 hover:text-white group overflow-hidden"
        >
          <i className="fab fa-telegram text-2xl flex-shrink-0"></i>
          <span className="inline-block max-w-0 opacity-0 overflow-hidden whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ml-0 text-lg align-middle group-hover:max-w-[150px] group-hover:opacity-100 group-hover:ml-2 whitespace-nowrap text-2xl">Telegram</span>
        </a>
        <a
          href="https://github.com/meowhiks"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all text-gray-300 hover:text-white group overflow-hidden"
        >
          <i className="fab fa-github text-2xl flex-shrink-0"></i>
          <span className="inline-block max-w-0 opacity-0 overflow-hidden whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ml-0 text-lg align-middle group-hover:max-w-[150px] group-hover:opacity-100 group-hover:ml-2 whitespace-nowrap text-2xl">Github</span>
        </a>
      </div>
    </nav>
  );
}


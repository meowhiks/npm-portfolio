'use client';

import { translations } from '../translations';

export default function Socials({ language = 'ru' }) {
  const t = translations[language];
  
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-8 py-20 bg-[#02030a]">
      <div className="max-w-7xl w-full">
        <h2 className="text-5xl font-normal text-white text-center" style={{ marginBottom: '64px' }}>{t.socials.title}</h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {/* GitHub */}
          <div className="bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg" style={{ padding: '1px', width: '300px' }}>
            <div 
              className="bg-gradient-to-br from-[#02030a] via-[#02030a] to-gray-900/20 rounded-lg" 
              style={{ padding: '32px', position: 'relative', minHeight: '200px' }}
            >
              <a 
                href="https://github.com/meowhiks" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-white/5 border border-white/10 rounded-lg px-4 py-2 hover:bg-white/10 transition-colors"
              >
                <i className="fas fa-external-link-alt text-gray-300"></i>
              </a>
              
              <div className="flex flex-col items-start gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <i className="fab fa-github text-4xl text-gray-300"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-normal text-white mb-2">GitHub</h3>
                  <p className="text-gray-300 text-sm">github.com/meowhiks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Telegram */}
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg" style={{ padding: '1px', width: '300px' }}>
            <div 
              className="bg-gradient-to-br from-[#02030a] via-[#02030a] to-cyan-900/20 rounded-lg" 
              style={{ padding: '32px', position: 'relative', minHeight: '200px' }}
            >
              <a 
                href="https://t.me/meowhiks" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-white/5 border border-white/10 rounded-lg px-4 py-2 hover:bg-white/10 transition-colors"
              >
                <i className="fas fa-external-link-alt text-gray-300"></i>
              </a>
              
              <div className="flex flex-col items-start gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <i className="fab fa-telegram text-4xl text-cyan-400"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-normal text-white mb-2">Telegram</h3>
                  <p className="text-gray-300 text-sm">@meowhiks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Discord Profile */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg" style={{ padding: '1px', width: '300px' }}>
            <div 
              className="bg-gradient-to-br from-[#02030a] via-[#02030a] to-indigo-900/20 rounded-lg" 
              style={{ padding: '32px', position: 'relative', minHeight: '200px' }}
            >
              <a 
                href="https://discordapp.com/users/705015972473470994" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-white/5 border border-white/10 rounded-lg px-4 py-2 hover:bg-white/10 transition-colors"
              >
                <i className="fas fa-external-link-alt text-gray-300"></i>
              </a>
              
              <div className="flex flex-col items-start gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <i className="fab fa-discord text-4xl text-indigo-400"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-normal text-white mb-2">Discord</h3>
                  <p className="text-gray-300 text-sm">Профиль</p>
                </div>
              </div>
            </div>
          </div>

          {/* Discord Server */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg" style={{ padding: '1px', width: '300px' }}>
            <div 
              className="bg-gradient-to-br from-[#02030a] via-[#02030a] to-indigo-900/20 rounded-lg" 
              style={{ padding: '32px', position: 'relative', minHeight: '200px' }}
            >
              <a 
                href="https://discord.gg/NCVT4CyUgu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-white/5 border border-white/10 rounded-lg px-4 py-2 hover:bg-white/10 transition-colors"
              >
                <i className="fas fa-external-link-alt text-gray-300"></i>
              </a>
              
              <div className="flex flex-col items-start gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <i className="fab fa-discord text-4xl text-indigo-400"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-normal text-white mb-2">Discord Server</h3>
                  <p className="text-gray-300 text-sm">Сервер</p>
                </div>
              </div>
            </div>
          </div>

          {/* Telegram Server */}
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg" style={{ padding: '1px', width: '300px' }}>
            <div 
              className="bg-gradient-to-br from-[#02030a] via-[#02030a] to-cyan-900/20 rounded-lg" 
              style={{ padding: '32px', position: 'relative', minHeight: '200px' }}
            >
              <a 
                href="https://t.me/serverforkittens" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-white/5 border border-white/10 rounded-lg px-4 py-2 hover:bg-white/10 transition-colors"
              >
                <i className="fas fa-external-link-alt text-gray-300"></i>
              </a>
              
              <div className="flex flex-col items-start gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <i className="fab fa-telegram text-4xl text-cyan-400"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-normal text-white mb-2">Telegram</h3>
                  <p className="text-gray-300 text-sm">@serverforkittens</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

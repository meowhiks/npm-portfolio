'use client';

import { useState, useEffect } from 'react';

const translations = {
  ru: {
    socials: {
      title: 'Связаться со мной'
    }
  }
};

export default function Socials({ language = 'ru' }) {
  const t = translations[language];
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const socials = [
    {
      id: 'github',
      name: 'GitHub',
      handle: 'github.com/meowhiks',
      url: 'https://github.com/meowhiks',
      icon: 'fab fa-github',
      color1: '#6b7280',
      color2: '#374151',
      description: 'Мои проекты и код'
    },
    {
      id: 'telegram',
      name: 'Telegram',
      handle: '@meowhiks',
      url: 'https://t.me/meowhiks',
      icon: 'fab fa-telegram',
      color1: '#06b6d4',
      color2: '#3b82f6',
      description: 'Личные сообщения'
    },
    {
      id: 'discord-profile',
      name: 'Discord',
      handle: 'Профиль',
      url: 'https://discordapp.com/users/705015972473470994',
      icon: 'fab fa-discord',
      color1: '#8b5cf6',
      color2: '#a855f7',
      description: 'Мой Discord профиль'
    },
    {
      id: 'discord-server',
      name: 'Discord Server',
      handle: 'Сервер',
      url: 'https://discord.gg/NCVT4CyUgu',
      icon: 'fab fa-discord',
      color1: '#8b5cf6',
      color2: '#a855f7',
      description: 'Присоединяйся к сообществу'
    },
    {
      id: 'telegram-server',
      name: 'Telegram',
      handle: '@serverforkittens',
      url: 'https://t.me/serverforkittens',
      icon: 'fab fa-telegram',
      color1: '#06b6d4',
      color2: '#3b82f6',
      description: 'Telegram канал'
    }
  ];
  
  return (
    <>
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
      />
      
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 20px',
        backgroundColor: '#02030a',
        overflow: 'hidden'
      }}>
        {/* Background effects */}
        {mounted && (
          <>
            <div style={{
              position: 'absolute',
              top: '20%',
              left: '20%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
              filter: 'blur(60px)',
              animation: 'pulse 4s ease-in-out infinite',
              pointerEvents: 'none'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '20%',
              right: '20%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
              filter: 'blur(60px)',
              animation: 'pulse 4s ease-in-out infinite 2s',
              pointerEvents: 'none'
            }} />
          </>
        )}

        <div style={{
          maxWidth: '1200px',
          width: '100%',
          position: 'relative',
          zIndex: 10
        }}>
          {/* Title */}
          <div style={{
            textAlign: 'center',
            marginBottom: '80px'
          }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '24px',
              letterSpacing: '-0.02em'
            }}>
              {t.socials.title}
            </h2>
            <div style={{
              height: '4px',
              width: '100px',
              margin: '0 auto',
              borderRadius: '9999px',
              background: 'linear-gradient(90deg, #06b6d4, #8b5cf6)'
            }} />
          </div>
          
          {/* Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {socials.map((social, index) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredCard(social.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  position: 'relative',
                  textDecoration: 'none',
                  display: 'block',
                  animation: mounted ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                {/* Glow effect */}
                <div style={{
                  position: 'absolute',
                  inset: '-4px',
                  borderRadius: '16px',
                  background: `linear-gradient(135deg, ${social.color1}, ${social.color2})`,
                  opacity: hoveredCard === social.id ? 0.5 : 0,
                  filter: 'blur(20px)',
                  transition: 'opacity 0.5s ease',
                  pointerEvents: 'none'
                }} />

                {/* Card */}
                <div style={{
                  position: 'relative',
                  background: `linear-gradient(135deg, ${social.color1}, ${social.color2})`,
                  borderRadius: '16px',
                  padding: '2px',
                  transform: hoveredCard === social.id ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.3s ease'
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(2, 3, 10, 0.98), rgba(2, 3, 10, 0.95))',
                    borderRadius: '14px',
                    padding: '32px 24px',
                    minHeight: '200px',
                    position: 'relative'
                  }}>
                    {/* Top section */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      marginBottom: '24px'
                    }}>
                      {/* Icon */}
                      <div style={{
                        padding: '16px',
                        borderRadius: '12px',
                        background: hoveredCard === social.id 
                          ? `${social.color1}20`
                          : 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s ease'
                      }}>
                        <i 
                          className={social.icon}
                          style={{
                            fontSize: '32px',
                            color: hoveredCard === social.id ? social.color1 : '#d1d5db',
                            transition: 'all 0.3s ease',
                            transform: hoveredCard === social.id ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                            display: 'inline-block'
                          }}
                        />
                      </div>

                      {/* External link */}
                      <div style={{
                        padding: '8px 12px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        opacity: hoveredCard === social.id ? 1 : 0,
                        transition: 'opacity 0.3s ease'
                      }}>
                        <i className="fas fa-arrow-up-right" style={{
                          fontSize: '14px',
                          color: '#d1d5db'
                        }} />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 style={{
                        fontSize: '24px',
                        fontWeight: '600',
                        marginBottom: '8px',
                        color: hoveredCard === social.id ? social.color1 : '#ffffff',
                        transition: 'color 0.3s ease'
                      }}>
                        {social.name}
                      </h3>
                      <p style={{
                        fontSize: '14px',
                        color: '#9ca3af',
                        marginBottom: '12px',
                        fontFamily: 'monospace'
                      }}>
                        {social.handle}
                      </p>
                      <p style={{
                        fontSize: '12px',
                        color: hoveredCard === social.id ? '#9ca3af' : '#6b7280',
                        transition: 'color 0.3s ease'
                      }}>
                        {social.description}
                      </p>
                    </div>

                    {/* Bottom line */}
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      height: '4px',
                      width: hoveredCard === social.id ? '100%' : '0%',
                      background: `linear-gradient(90deg, ${social.color1}, transparent)`,
                      borderBottomLeftRadius: '14px',
                      borderBottomRightRadius: '14px',
                      transition: 'width 0.5s ease'
                    }} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.15;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.25;
            }
          }
        `}</style>
      </section>
    </>
  );
}
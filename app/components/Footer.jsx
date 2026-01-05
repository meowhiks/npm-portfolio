'use client';

import { useState, useEffect } from 'react';

// Пример translations для демонстрации
const translations = {
  ru: {
    footer: {
      text: 'Сделано с ❤️'
    }
  },
  en: {
    footer: {
      text: 'Made with ❤️'
    }
  }
};

export default function Footer({ language = 'ru' }) {
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const footer = document.getElementById('footer-section');
    if (footer) {
      observer.observe(footer);
    }
    
    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);
  
  return (
    <footer 
      id="footer-section"
      className="relative z-10 bg-[#02030a]" 
      style={{ 
        paddingTop: '64px', 
        paddingBottom: '64px',
        paddingLeft: '32px',
        paddingRight: '32px'
      }}
    >
      {/* Градиентная линия сверху с анимацией */}
      <div 
        className="absolute top-0 left-0 right-0 h-px overflow-hidden"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s ease-out'
        }}
      >
        <div 
          className="h-full bg-gradient-to-r from-transparent via-purple-500 via-pink-500 via-red-500 to-transparent"
          style={{
            animation: isVisible ? 'slideInLine 1.2s ease-out forwards' : 'none',
            transform: 'translateX(-100%)'
          }}
        ></div>
      </div>
      
      {/* Контент футера */}
      <div 
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <p 
          style={{ 
            fontSize: '16px', 
            lineHeight: '1.6',
            color: '#d1d5db',
            textAlign: 'center',
            margin: 0,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease-out 0.3s'
          }}
        >
          {t.footer.text}{' '}
          <a 
            href="https://t.me/meowhiks" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
            style={{
              position: 'relative',
              display: 'inline-block',
              background: 'linear-gradient(135deg, #a78bfa 0%, #ec4899 50%, #ef4444 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              textDecoration: 'none'
            }}
          >
            by meowhiks
          </a>
        </p>
      </div>
      
      <style jsx>{`
        @keyframes slideInLine {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #a78bfa 0%, #ec4899 50%, #ef4444 100%);
          transition: width 0.3s ease;
        }
        
        .footer-link:hover::after {
          width: 100%;
        }
        
        .footer-link:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}
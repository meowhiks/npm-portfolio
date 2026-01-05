'use client';

export default function SkillItem({ icon, name, tag, delay }) {
  return (
    <div 
      className="skill-item text-center transition-all duration-300 hover:scale-110 cursor-pointer group relative"
      style={{ 
        marginBottom: '8px',
        opacity: 0,
        animation: `fadeInUp 0.6s ease-out ${delay}s forwards`
      }}
    >
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <i 
          className={`${icon} text-4xl text-gray-300 transition-all duration-300`}
          style={{ 
            marginBottom: '8px', 
            display: 'block'
          }}
        ></i>
        <i 
          className={`${icon} text-4xl gradient-icon`}
          style={{ 
            marginBottom: '8px', 
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            background: 'linear-gradient(135deg, #a78bfa 0%, #ec4899 50%, #ef4444 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            opacity: 0,
            transition: 'opacity 0.3s ease'
          }}
        ></i>
      </div>
      <div className="flex items-center justify-center gap-2">
        <div className="skill-name text-gray-300 text-sm transition-all duration-300">
          {name}
        </div>
        {tag && (
          <div className="bg-white/10 border border-white/20 rounded px-1.5 py-0.5 text-xs text-gray-300">
            {tag}
          </div>
        )}
      </div>
    </div>
  );
}
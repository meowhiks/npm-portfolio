'use client';

import SkillItem from './SkillItem';

const colorThemes = {
  blue: {
    border: 'from-blue-400 via-cyan-500 to-teal-500',
    underline: 'from-blue-400 via-cyan-500 to-teal-500',
  },
  pink: {
    border: 'from-pink-400 via-rose-500 to-fuchsia-500',
    underline: 'from-pink-400 via-rose-500 to-fuchsia-500',
  },
  red: {
    border: 'from-red-400 via-orange-500 to-red-600',
    underline: 'from-red-400 via-orange-500 to-red-600',
  },
};

export default function SkillGroup({ title, skills = [], columns = 4, colorTheme = 'blue', baseDelay = 0 }) {
  const theme = colorThemes[colorTheme] || colorThemes.blue;
  
  if (!skills || skills.length === 0) {
    return null;
  }
  
  return (
    <div 
      className={`skill-group bg-gradient-to-r ${theme.border} rounded-lg`}
      style={{ 
        padding: '1px',
        opacity: 0,
        animation: `fadeIn 0.8s ease-out ${baseDelay}s forwards`
      }}
    >
      <div className="bg-[#02030a] rounded-lg" style={{ padding: '24px' }}>
        <h3 
          className="skill-group-title text-3xl font-normal text-white text-left"
          style={{ 
            marginTop: '0', 
            marginBottom: '0',
            opacity: 0,
            animation: `fadeInLeft 0.6s ease-out ${baseDelay + 0.2}s forwards`
          }}
        >
          {title}
        </h3>
        <div 
          className={`skill-underline w-24 h-1 bg-gradient-to-r ${theme.underline}`}
          style={{ 
            marginTop: '12px', 
            marginBottom: '24px',
            transformOrigin: 'left',
            transform: 'scaleX(0)',
            animation: `expandWidth 0.6s ease-out ${baseDelay + 0.4}s forwards`
          }}
        ></div>
        <div className={`grid ${columns === 4 ? 'grid-cols-4' : 'grid-cols-8'} gap-4 w-full`}>
          {skills.map((skill, index) => {
            const row = Math.floor(index / columns);
            const col = index % columns;
            const itemDelay = baseDelay + 0.6 + (row * 0.15) + (col * 0.03);
            
            return (
              <SkillItem 
                key={`skill-${index}-${skill.name}`}
                icon={skill.icon} 
                name={skill.name} 
                tag={skill.tag}
                delay={itemDelay}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
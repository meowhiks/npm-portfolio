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

export default function SkillGroup({ title, skills, columns = 4, colorTheme = 'blue' }) {
  const theme = colorThemes[colorTheme] || colorThemes.blue;
  
  return (
    <div className={`bg-gradient-to-r ${theme.border} rounded-lg`} style={{ padding: '1px' }}>
      <div className="bg-[#02030a] rounded-lg" style={{ padding: '24px' }}>
        <h3 className="text-3xl font-normal text-white text-left skills-section-title" style={{ marginTop: '0', marginBottom: '0' }}>{title}</h3>
        <div className={`w-24 h-1 bg-gradient-to-r ${theme.underline}`} style={{ marginTop: '12px', marginBottom: '24px' }}></div>
        <div className={`grid ${columns === 4 ? 'grid-cols-4' : 'grid-cols-8'} gap-4 w-full`}>
          {skills.map((skill, index) => (
            <SkillItem key={index} icon={skill.icon} name={skill.name} tag={skill.tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

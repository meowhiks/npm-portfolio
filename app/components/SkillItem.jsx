'use client';

export default function SkillItem({ icon, name }) {
  return (
    <div className="text-center transition-all duration-300 hover:scale-110 cursor-pointer group" style={{ marginBottom: '8px' }}>
      <i className={`${icon} text-4xl text-gray-300 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-500 group-hover:to-red-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`} style={{ marginBottom: '8px', display: 'block' }}></i>
      <div className="text-gray-300 text-sm group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-500 group-hover:to-red-500 group-hover:bg-clip-text transition-all duration-300">{name}</div>
    </div>
  );
}

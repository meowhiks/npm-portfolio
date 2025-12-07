'use client';

import SkillGroup from './SkillGroup';

const SKILLS_DATA = {
  backend: [
    { icon: 'fab fa-python', name: 'Python', tag: 'ЯП' },
    { icon: 'fas fa-bolt', name: 'FastAPI', tag: 'Фреймворк' },
    { icon: 'fab fa-node-js', name: 'Node.js', tag: 'ЯП' },
    { icon: 'fas fa-server', name: 'Express', tag: 'Фреймворк' },
    { icon: 'fas fa-database', name: 'PostgreSQL', tag: 'БД' },
    { icon: 'fas fa-database', name: 'MySQL', tag: 'БД' },
    { icon: 'fas fa-code', name: 'REST API', tag: 'API' },
    { icon: 'fas fa-plug', name: 'Интеграции', tag: 'API' },
  ],
  frontend: [
    { icon: 'fas fa-layer-group', name: 'Next.js', tag: 'Фреймворк' },
    { icon: 'fab fa-react', name: 'React', tag: 'Библиотека' },
    { icon: 'fab fa-js', name: 'TypeScript', tag: 'ЯП' },
    { icon: 'fab fa-css3-alt', name: 'Tailwind CSS', tag: 'Стили' },
    { icon: 'fab fa-sass', name: 'Sass', tag: 'Стили' },
    { icon: 'fas fa-box', name: 'Redux', tag: 'Состояние' },
    { icon: 'fas fa-store', name: 'Zustand', tag: 'Состояние' },
  ],
  tools: [
    { icon: 'fab fa-git-alt', name: 'Git', tag: 'Инструмент' },
    { icon: 'fab fa-github', name: 'GitHub', tag: 'Инструмент' },
    { icon: 'fab fa-docker', name: 'Docker', tag: 'DevOps' },
    { icon: 'fab fa-linux', name: 'Linux', tag: 'ОС' },
    { icon: 'fas fa-server', name: 'Nginx', tag: 'DevOps' },
    { icon: 'fas fa-terminal', name: 'SSH/SFTP', tag: 'DevOps' },
    { icon: 'fas fa-sync', name: 'CI/CD', tag: 'DevOps' },
    { icon: 'fab fa-java', name: 'Java', tag: 'ЯП' },
    { icon: 'fas fa-robot', name: 'Боты', tag: 'Проекты' },
    { icon: 'fas fa-brain', name: 'ML/Нейросети', tag: 'AI' },
    { icon: 'fas fa-gamepad', name: 'Minecraft', tag: 'Моддинг' },
  ],
};

export default function Skills() {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center bg-[#02030a]" style={{ padding: '80px 32px' }}>
      <div className="max-w-7xl w-full">
        <h2 className="text-5xl font-normal text-white text-center" style={{ marginBottom: '32px' }}>Навыки</h2>
        <div>
          <div className="grid grid-cols-2 gap-16" style={{ padding: '48px', marginBottom: '-60px' }}>
            <SkillGroup title="Backend" skills={SKILLS_DATA.backend} columns={4} colorTheme="blue" />
            <SkillGroup title="Frontend" skills={SKILLS_DATA.frontend} columns={4} colorTheme="pink" />
          </div>
          <div style={{ padding: '48px' }}>
            <SkillGroup title="Tools & Other" skills={SKILLS_DATA.tools} columns={8} colorTheme="red" />
          </div>
        </div>
      </div>
    </section>
  );
}

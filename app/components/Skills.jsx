'use client';

import SkillGroup from './SkillGroup';

const SKILLS_DATA = {
  backend: [
    { icon: 'fab fa-node-js', name: 'Node.js' },
    { icon: 'fas fa-server', name: 'Express' },
    { icon: 'fas fa-cube', name: 'NestJS' },
    { icon: 'fab fa-python', name: 'Python' },
    { icon: 'fas fa-bolt', name: 'FastAPI' },
    { icon: 'fas fa-database', name: 'PostgreSQL' },
    { icon: 'fas fa-database', name: 'MongoDB' },
    { icon: 'fas fa-memory', name: 'Redis' },
  ],
  frontend: [
    { icon: 'fab fa-react', name: 'React' },
    { icon: 'fas fa-layer-group', name: 'Next.js' },
    { icon: 'fab fa-vuejs', name: 'Vue.js' },
    { icon: 'fab fa-js', name: 'TypeScript' },
    { icon: 'fab fa-css3-alt', name: 'Tailwind CSS' },
    { icon: 'fab fa-sass', name: 'Sass' },
    { icon: 'fas fa-box', name: 'Redux' },
    { icon: 'fas fa-store', name: 'Zustand' },
  ],
  tools: [
    { icon: 'fab fa-git-alt', name: 'Git' },
    { icon: 'fab fa-docker', name: 'Docker' },
    { icon: 'fab fa-linux', name: 'Linux' },
    { icon: 'fab fa-aws', name: 'AWS' },
    { icon: 'fas fa-server', name: 'Nginx' },
    { icon: 'fas fa-plug', name: 'WebSocket' },
    { icon: 'fas fa-project-diagram', name: 'GraphQL' },
    { icon: 'fas fa-code', name: 'REST API' },
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

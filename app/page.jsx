'use client';

import { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [language, setLanguage] = useState('ru');

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#02030a]">
      <ParticleBackground />
      <Nav 
        isDark={isDark} 
        setIsDark={setIsDark} 
        language={language} 
        setLanguage={setLanguage} 
      />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

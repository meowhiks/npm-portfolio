'use client';

import { useEffect, useState } from 'react';

export default function ActiveUsersTracker() {
  const [activeUsers, setActiveUsers] = useState(1);

  useEffect(() => {
    // Генерируем уникальный ID для этой сессии
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Сохраняем информацию о сессии
    const updateSession = () => {
      const sessions = JSON.parse(localStorage.getItem('activeSessions') || '{}');
      sessions[sessionId] = Date.now();
      
      // Удаляем старые сессии (неактивные более 30 секунд)
      const now = Date.now();
      Object.keys(sessions).forEach(key => {
        if (now - sessions[key] > 30000) {
          delete sessions[key];
        }
      });
      
      localStorage.setItem('activeSessions', JSON.stringify(sessions));
      
      // Подсчитываем активные сессии
      const activeCount = Object.keys(sessions).length;
      setActiveUsers(activeCount);
      
      return activeCount;
    };

    // Обновляем сессию каждые 5 секунд
    const sessionInterval = setInterval(updateSession, 5000);
    
    // Выводим в консоль каждые 10 секунд
    const consoleInterval = setInterval(() => {
      const count = updateSession();
      console.log(`👥 Активных пользователей на странице: ${count}`);
    }, 10000);

    // Инициализация
    updateSession();

    // Очистка при размонтировании
    return () => {
      clearInterval(sessionInterval);
      clearInterval(consoleInterval);
      const sessions = JSON.parse(localStorage.getItem('activeSessions') || '{}');
      delete sessions[sessionId];
      localStorage.setItem('activeSessions', JSON.stringify(sessions));
    };
  }, []);

  return null; // Компонент не рендерит ничего визуально
}


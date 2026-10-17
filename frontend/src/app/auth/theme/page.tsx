'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

export default function ThemeSelectionScreen() {
  const router = useRouter();
  const { setTheme } = useTheme();
  const [selected, setSelected] = useState<'light' | 'dark' | 'system'>('system');

  const handleContinue = () => {
    setTheme(selected);
    router.push('/');
  };

  const ThemeCard = ({ id, label, description, icon }: { id: string, label: string, description: string, icon: string }) => (
    <div
      onClick={() => setSelected(id as any)}
      className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
        selected === id
          ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 ring-4 ring-blue-600/10'
          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-300 dark:hover:border-blue-700'
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="text-3xl">{icon}</div>
        <div className="text-left">
          <h3 className={`font-bold ${selected === id ? 'text-blue-600 dark:text-blue-400' : 'text-slate-800 dark:text-white'}`}>{label}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-950 transition-colors">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Выберите тему</h1>
        <p className="text-slate-500 dark:text-slate-400">Настройте внешний вид приложения под себя</p>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-md mb-12">
        <ThemeCard
          id="light"
          label="Светлая тема"
          description="Классический чистый вид для дневного обучения"
          icon="☀️"
        />
        <ThemeCard
          id="dark"
          label="Темная тема"
          description="Снижает нагрузку на глаза в вечернее время"
          icon="🌙"
        />
        <ThemeCard
          id="system"
          label="Системная тема"
          description="Автоматически подстраивается под ваши настройки"
          icon="💻"
        />
      </div>

      <button
        onClick={handleContinue}
        className="w-full max-w-xs py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 dark:shadow-none"
      >
        Начать обучение
      </button>
    </div>
  );
}

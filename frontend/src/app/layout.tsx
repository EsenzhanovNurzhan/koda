import React from 'react';
import { ThemeProvider } from 'next-themes';
import { Home, BookOpen, Calendar, RotateCcw, User, Moon, Sun, Globe } from 'lucide-react';
import Link from 'next/link';

const SidebarItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <Link
    href="#"
    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all cursor-pointer ${
      active ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400'
    }`}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </Link>
);

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-8 fixed h-full z-20">
        <div className="flex items-center gap-2 px-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">K</div>
          <h1 className="text-xl font-bold text-slate-800 dark:text-white">Koda Study</h1>
        </div>

        <nav className="flex flex-col gap-2">
          <SidebarItem icon={Home} label="Главная" active />
          <SidebarItem icon={BookOpen} label="Уроки" />
          <SidebarItem icon={Calendar} label="План" />
          <SidebarItem icon={RotateCcw} label="Повторение" />
          <SidebarItem icon={User} label="Профиль" />
        </nav>

        <div className="mt-auto p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/30">
          <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mb-2 uppercase tracking-wider">Твой прогресс</p>
          <div className="w-full bg-blue-200 dark:bg-blue-800 h-2 rounded-full overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-500 h-full w-3/4"></div>
          </div>
          <p className="text-xs text-blue-500 dark:text-blue-400 mt-2 font-medium">75% курса пройдено</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1">
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-8 flex items-center justify-between sticky top-0 z-10 transition-colors">
          <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Личный кабинет</h2>

          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <Globe size={16} />
              <span>RU / KK</span>
            </button>

            {/* Theme Switcher */}
            <button className="p-2 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <Moon size={18} className="dark:hidden" />
              <Sun size={18} className="hidden dark:block" />
            </button>

            <div className="flex items-center gap-3 ml-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Александр</span>
              <div className="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded-full border border-slate-300 dark:border-slate-600 overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
              </div>
            </div>
          </div>
        </header>

        <div className="p-8">
          {children}
        </div>
      </main>

      {/* AI Assistant Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center text-2xl group">
          <span className="group-hover:rotate-12 transition-transform">🤖</span>
        </button>
      </div>
    </div>
  );
}

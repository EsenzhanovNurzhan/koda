import React from 'react';

export default function WelcomeScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-white dark:bg-slate-950">
      <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-4xl font-bold mb-8 shadow-xl shadow-blue-200 dark:shadow-blue-900/20">
        K
      </div>
      <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Koda Study</h1>
      <p className="text-slate-500 dark:text-slate-400 max-w-md mb-12 text-lg">
        Персонализированная платформа для подготовки к ЕНТ. Начни свой путь к успеху прямо сейчас.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button className="flex items-center justify-center gap-3 py-3 px-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" />
          Продолжить с Google
        </button>
        <button className="flex items-center justify-center gap-3 py-3 px-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 dark:shadow-none">
          <span>📞</span>
          Продолжить по номеру
        </button>
      </div>

      <div className="mt-12 flex items-center gap-4">
        <button className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">Русский</button>
        <span className="text-slate-300">|</span>
        <button className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">Қазақша</button>
      </div>

      <div className="mt-8 flex gap-4 text-xs text-slate-400">
        <Link href="#" className="hover:underline">Политика конфиденциальности</Link>
        <Link href="#" className="hover:underline">Условия использования</Link>
      </div>
    </div>
  );
}

function Link({ href, children }: { href: string, children: React.ReactNode }) {
  return <a href={href} className="inline-block">{children}</a>;
}

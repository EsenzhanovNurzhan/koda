'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, PlayCircle, BookOpen, MessageSquare, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function LessonDetail() {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Breadcrumbs & Navigation */}
      <div className="flex items-center justify-between mb-8">
        <Link href="/subjects/hist-kz" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">
          <ChevronLeft size={18} />
          Назад к программе
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Урок 1 из 12</span>
          <div className="w-32 bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-blue-600 h-full w-1/12"></div>
          </div>
        </div>
      </div>

      {/* Lesson Header */}
      <header className="mb-10">
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-bold mb-3 uppercase tracking-wide">
          <BookOpen size={16} />
          <span>Теория</span>
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
          Каменные века на территории Казахстана
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Изучаем первые поселения людей, развитие орудий труда и особенности быта древних жителей степей.
        </p>
      </header>

      {/* Video Content */}
      <div className="aspect-video w-full bg-slate-900 rounded-3xl mb-12 overflow-hidden shadow-2xl group relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
            <PlayCircle size={48} />
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1505664194779-8beばかり-8be869-666"
          className="w-full h-full object-cover opacity-40"
          alt="Lesson Video Thumbnail"
        />
      </div>

      {/* Educational Text */}
      <div className="prose prose-slate dark:prose-invert max-w-none mb-16">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            История Казахстана начинается с палеолита. В этот период люди начали использовать первые каменные орудия...
          </p>

          <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border-l-4 border-blue-600">
            <h4 className="text-blue-700 dark:text-blue-400 font-bold mb-2 flex items-center gap-2">
              💡 Важный факт
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              Первые стоянки каменного века на территории Казахстана были обнаружены в горах Каратау и в долине реки Или.
            </p>
          </div>

          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Переход к неолиту ознаменовался «неолитической революцией» — переходом от присваивающего хозяйства к производящему.
          </p>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-slate-200 dark:border-slate-800">
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl text-slate-600 dark:text-slate-400 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
          <ChevronLeft size={20} />
          Предыдущий урок
        </button>

        <button
          onClick={() => setCompleted(true)}
          className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all shadow-lg ${
            completed
              ? 'bg-green-500 text-white'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {completed ? <CheckCircle size={20} /> : null}
          {completed ? 'Завершено' : 'Завершить урок'}
        </button>

        <button className="flex items-center gap-2 px-6 py-3 rounded-xl text-slate-600 dark:text-slate-400 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
          Следующий урок
          <ChevronRight size={20} />
        </button>
      </div>

      {/* AI-Helper Fixed Button */}
      <div className="fixed bottom-8 right-8">
        <button className="flex items-center gap-3 px-6 py-4 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition-all group">
          <MessageSquare size={24} className="group-hover:rotate-12 transition-transform" />
          <span className="font-bold">Спросить Koda AI</span>
        </button>
      </div>
    </div>
  );
}

function Link({ href, children }: { href: string, children: React.ReactNode }) {
  return <a href={href} className="inline-block">{children}</a>;
}

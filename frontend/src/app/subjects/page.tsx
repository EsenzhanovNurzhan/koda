'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SUBJECTS } from '@/lib/constants';
import { BookOpen, ChevronRight, Search } from 'lucide-react';

const SubjectCard = ({ subject }: { subject: any }) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
          {subject.icon}
        </div>
        <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${
          subject.category === 'Обязательный'
            ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400'
            : 'bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400'
        }`}>
          {subject.category}
        </span>
      </div>
      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">{subject.title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-2">{subject.description}</p>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
        <div className="flex flex-col">
          <span className="text-xs text-slate-400 dark:text-slate-500 uppercase font-semibold">Темы</span>
          <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{subject.topicsCount}</span>
        </div>
        <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-bold text-sm group-hover:translate-x-1 transition-transform">
          Открыть <ChevronRight size={16} />
        </div>
      </div>
    </div>
  );
};

export default function SubjectCatalog() {
  const [search, setSearch] = useState('');

  const filteredSubjects = SUBJECTS.filter(s =>
    s.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">Каталог предметов</h1>
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Поиск предмета..."
            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all text-slate-700 dark:text-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSubjects.map(subject => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>

      {filteredSubjects.length === 0 && (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white">Ничего не найдено</h3>
          <p className="text-slate-500 dark:text-slate-400">Попробуйте изменить запрос поиска</p>
        </div>
      )}
    </div>
  );
}

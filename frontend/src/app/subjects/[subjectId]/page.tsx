'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle2, Circle, Lock, PlayCircle } from 'lucide-react';
import Link from 'next/link';

interface Topic {
  id: string;
  title: string;
  status: 'completed' | 'in-progress' | 'locked' | 'not-started';
  duration: string;
}

interface Section {
  id: string;
  title: string;
  topics: Topic[];
}

const SECTIONS: Record<string, Section[]> = {
  'hist-kz': [
    {
      id: 's1',
      title: 'Древний период',
      topics: [
        { id: 't1', title: 'Каменные века на территории Казахстана', status: 'completed', duration: '15 мин' },
        { id: 't2', title: 'Эпоха бронзы и железного века', status: 'in-progress', duration: '20 мин' },
        { id: 't3', title: 'Ранние кочевые культуры', status: 'not-started', duration: '15 мин' },
      ]
    },
    {
      id: 's2',
      title: 'Средневековый период',
      topics: [
        { id: 't4', title: 'Тюркские каганаты', status: 'locked', duration: '25 мин' },
        { id: 't5', title: 'Золотая Орда и ее наследники', status: 'locked', duration: '20 мин' },
      ]
    }
  ],
  // Другие предметы будут добавляться по аналогии
};

const TopicItem = ({ topic }: { topic: Topic }) => {
  const statusStyles = {
    completed: { icon: <CheckCircle2 size={18} className="text-green-500" />, text: 'Завершено', bg: 'bg-green-50 dark:bg-green-900/20 text-green-600' },
    'in-progress': { icon: <Circle size={18} className="text-blue-500 fill-blue-500" />, text: 'В процессе', bg: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600' },
    locked: { icon: <Lock size={18} className="text-slate-400" />, text: 'Заблокировано', bg: 'bg-slate-100 dark:bg-slate-800 text-slate-500' },
    'not-started': { icon: <Circle size={18} className="text-slate-300 dark:text-slate-600" />, text: 'Не начато', bg: 'bg-slate-50 dark:bg-slate-900 text-slate-400' },
  };

  const current = statusStyles[topic.status];

  return (
    <div className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors cursor-pointer group">
      <div className="flex items-center gap-4">
        {current.icon}
        <div>
          <p className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{topic.title}</p>
          <span className="text-xs text-slate-400">{topic.duration}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${current.bg}`}>
          {current.text}
        </span>
        <ChevronRight size={18} className="text-slate-300 group-hover:text-blue-500 transition-all" />
      </div>
    </div>
  );
};

export default function TopicTree({ params }: { params: { subjectId: string } }) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['s1']);

  const toggleSection = (id: string) => {
    setExpandedSections(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const subjectData = SECTIONS[params.subjectId] || [];

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="mb-10 flex items-center gap-4">
        <Link href="/subjects" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <ChevronRight size={24} className="rotate-180 text-slate-500" />
        </Link>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Программа курса</h1>
      </div>

      <div className="flex flex-col gap-6">
        {subjectData.map(section => (
          <div key={section.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between p-5 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <div className="flex items-center gap-3">
                {expandedSections.includes(section.id) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                <h2 className="text-lg font-bold text-slate-800 dark:text-white">{section.title}</h2>
              </div>
              <span className="text-xs font-semibold text-slate-500">{section.topics.length} темы</span>
            </button>

            {expandedSections.includes(section.id) && (
              <div className="p-2 flex flex-col gap-1 border-t border-slate-100 dark:border-slate-800">
                {section.topics.map(topic => (
                  <TopicItem key={topic.id} topic={topic} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Link({ href, children }: { href: string, children: React.ReactNode }) {
  return <a href={href} className="inline-block">{children}</a>;
}

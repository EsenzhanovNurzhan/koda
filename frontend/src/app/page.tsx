'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';

const CourseCard = ({ course }: { course: any }) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 hover:shadow-lg transition-shadow cursor-pointer group">
      <div className="relative w-full h-40 bg-slate-100 dark:bg-slate-800 rounded-xl mb-4 overflow-hidden">
        {course.cover_image ? (
          <img src={course.cover_image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">📚</div>
        )}
        <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
          Курс
        </div>
      </div>
      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {course.title}
      </h3>
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">0% завершено</span>
        <div className="w-24 bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
          <div className="bg-blue-600 dark:bg-blue-500 h-full w-0"></div>
        </div>
      </div>
      <button className="w-full py-2 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-sm font-semibold hover:bg-blue-600 hover:text-white transition-all">
        Перейти к обучению
      </button>
    </div>
  );
};

export default function Home() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchCourses() {
      setLoading(true);
      const data = await api.getCourses();
      setCourses(data);
      setLoading(false);
    }
    fetchCourses();
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <section className="mb-10">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Привет, Александр! 👋</h1>
        <p className="text-slate-500 dark:text-slate-400">Рады видеть тебя снова. Твои курсы уже ждут тебя.</p>
      </section>

      <section className="mb-12">
        <div className="bg-blue-600 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-200 dark:shadow-none relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">Вернуться к обучению</h2>
            <p className="text-blue-100 mb-6 max-w-md">Выбери курс из списка ниже, чтобы продолжить с того места, где ты остановился.</p>
            <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-sm">
              Открыть мои курсы →
            </button>
          </div>
          <div className="relative z-10 hidden md:block">
            <span className="text-8xl">🚀</span>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">Твои курсы</h2>
          <button className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">Все курсы</button>
        </div>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-slate-200 dark:bg-slate-800 animate-pulse rounded-2xl h-64"></div>
            ))}
          </div>
        ) : courses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Курсов пока нет</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-6">Добавьте курсы через панель администратора, чтобы они появились здесь.</p>
            <button className="px-6 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all">
              Найти курсы
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

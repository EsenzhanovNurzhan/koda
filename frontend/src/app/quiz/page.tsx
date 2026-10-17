'use client';
import React, { useState } from 'react';
import { ChevronLeft, CheckCircle2, XCircle, HelpCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';

interface Question {
  id: string;
  text: string;
  options: { id: string, text: string }[];
  correctId: string;
  explanation: string;
}

const MOCK_QUESTIONS: Question[] = [
  {
    id: 'q1',
    text: 'Решите уравнение: x² - 5x + 6 = 0',
    options: [
      { id: 'A', text: 'x = 1, x = 6' },
      { id: 'B', text: 'x = 2, x = 3' },
      { id: 'C', text: 'x = -2, x = -3' },
      { id: 'D', text: 'x = 0, x = 5' },
    ],
    correctId: 'B',
    explanation: '1. Найдем два числа, произведение которых равно 6, а сумма равна 5. Это числа 2 и 3.\\n2. Разложим выражение на множители: (x-2)(x-3)=0.\\n3. Решим оба множителя: x=2 и x=3.',
  },
];

export default function QuizScreen() {
  const [currentStep, setCurrentStep] = useState<'question' | 'result'>('question');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const question = MOCK_QUESTIONS[0];
  const isCorrect = selectedOption === question.correctId;

  const handleSubmit = () => {
    if (selectedOption) {
      setIsSubmitted(true);
    }
  };

  const handleNext = () => {
    // В реальном приложении здесь будет переход к следующему вопросу
    setCurrentStep('result');
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Link href="/lessons/1" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">
          <ChevronLeft size={18} />
          Вернуться к уроку
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-slate-400 uppercase">Вопрос 1 из 10</span>
          <div className="w-32 bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-blue-600 h-full w-1/10"></div>
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm mb-8">
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-bold mb-4 uppercase tracking-wide">
          <HelpCircle size={16} />
          <span>Проверка знаний</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 leading-snug">
          {question.text}
        </h2>

        <div className="flex flex-col gap-3">
          {question.options.map((opt) => {
            let style = 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-300 dark:hover:border-blue-700';

            if (isSubmitted) {
              if (opt.id === question.correctId) {
                style = 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 ring-2 ring-green-500/20';
              } else if (opt.id === selectedOption) {
                style = 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400';
              } else {
                style = 'border-slate-200 dark:border-slate-800 opacity-50';
              }
            } else if (selectedOption === opt.id) {
              style = 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 ring-2 ring-blue-600/20';
            }

            return (
              <button
                key={opt.id}
                disabled={isSubmitted}
                onClick={() => setSelectedOption(opt.id)}
                className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left font-medium ${style}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold">{opt.id}</span>
                  {opt.text}
                </div>
                {isSubmitted && opt.id === question.correctId && <CheckCircle2 size={20} className="text-green-500" />}
                {isSubmitted && opt.id === selectedOption && opt.id !== question.correctId && <XCircle size={20} className="text-red-500" />}
              </button>
            );
          })}
        </div>

        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={!selectedOption}
            className="w-full mt-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-200 dark:shadow-none"
          >
            Подтвердить ответ
          </button>
        ) : (
          <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className={`p-6 rounded-2xl border-l-4 mb-6 ${
              isCorrect
                ? 'bg-green-50 dark:bg-green-900/20 border-green-500 text-green-800 dark:text-green-300'
                : 'bg-red-50 dark:bg-red-900/20 border-red-500 text-red-800 dark:text-red-300'
            }`}>
              <div className="flex items-center gap-2 font-bold mb-2">
                {isCorrect ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                {isCorrect ? 'Правильно!' : 'Не совсем так'}
              </div>
              <p className="text-sm leading-relaxed opacity-90">
                {question.explanation}
              </p>
            </div>
            <button
              onClick={handleNext}
              className="w-full py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-xl font-bold hover:opacity-90 transition-all"
            >
              Следующий вопрос →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

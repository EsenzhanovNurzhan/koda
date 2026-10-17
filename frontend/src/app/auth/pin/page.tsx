import React, { useState } from 'react';

export default function PinScreen() {
  const [pin, setPin] = useState<string>('');

  const handleNumberClick = (num: string) => {
    if (pin.length < 4) setPin(prev => prev + num);
  };

  const handleDelete = () => {
    setPin(prev => prev.slice(0, -1));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-950 transition-colors">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Создайте ваш PIN</h1>
        <p className="text-slate-500 dark:text-slate-400">Этот код будет использоваться для быстрого и безопасного входа в приложение</p>
      </div>

      {/* PIN Dots */}
      <div className="flex gap-6 mb-16">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
              pin.length > i
                ? 'bg-blue-600 border-blue-600 scale-125'
                : 'border-slate-300 dark:border-slate-700 bg-transparent'
            }`}
          />
        ))}
      </div>

      {/* Numeric Keypad */}
      <div className="grid grid-cols-3 gap-6 w-full max-w-[300px]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => handleNumberClick(num.toString())}
            className="w-16 h-16 rounded-full text-2xl font-semibold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 transition-all active:scale-90"
          >
            {num}
          </button>
        ))}
        <div className="w-16 h-16"></div>
        <button
          onClick={handleDelete}
          className="w-16 h-16 rounded-full text-xl font-semibold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 transition-all active:scale-90"
        >
          ⌫
        </button>
        <button
          className="w-16 h-16 rounded-full text-xl font-semibold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 transition-all active:scale-90"
          onClick={() => alert('PIN создан!')}
        >
          OK
        </button>
      </div>
    </div>
  );
}

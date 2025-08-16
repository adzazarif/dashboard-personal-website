"use client";
import React from "react";
import CardWelcome from "@/components/dashboard/CardWelcome";
import CardAgenda from "@/components/dashboard/CardAgenda";
import CardTasks from "@/components/dashboard/CardTasks";
import CardLearningProgress from "@/components/dashboard/CardLearningProgress";
import CardQuickNotes from "@/components/dashboard/CardQuickNotes";

export default function Dashboard() {
  // Use CSS classes to detect dark mode instead of state
  const isDarkMode = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');
  
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Selamat Pagi" : currentHour < 17 ? "Selamat Siang" : "Selamat Sore";
  const currentDay = new Date().toLocaleDateString('id-ID', { weekday: 'long' });
  
  const motivationalQuotes = [
    "Setiap ahli pernah menjadi pemula. Setiap pro pernah menjadi amatir.",
    "Investasi terbaik adalah investasi pada diri sendiri.",
    "Belajar adalah perjalanan seumur hidup yang tidak pernah berakhir."
  ];
  
  const todayQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  return (
    <div className="min-h-screen p-6 transition-colors duration-300 bg-gradient-to-br from-slate-50 to-slate-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">
            Dashboard Pembelajaran
          </h1>
          <p className="text-slate-600 dark:text-gray-300">
            Kelola perjalanan belajar Anda dengan efektif
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <CardWelcome 
            isDarkMode={isDarkMode}
            greeting={greeting}
            currentDay={currentDay}
            todayQuote={todayQuote}
          />
          <CardAgenda isDarkMode={isDarkMode} />
          <CardTasks isDarkMode={isDarkMode} />
          <CardLearningProgress isDarkMode={isDarkMode} />
          <CardQuickNotes isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import { Target, Quote } from "lucide-react";

interface CardWelcomeProps {
  isDarkMode: boolean;
  greeting: string;
  currentDay: string;
  todayQuote: string;
}

export default function CardWelcome({ greeting, currentDay }: CardWelcomeProps) {
  const [quote, setQuote] = useState("");
  
  const motivationalQuotes = [
    "Setiap ahli pernah menjadi pemula. Setiap pro pernah menjadi amatir.",
    "Investasi terbaik adalah investasi pada diri sendiri.",
    "Belajar adalah perjalanan seumur hidup yang tidak pernah berakhir."
  ];

  useEffect(() => {
    // Generate quote only on client side to avoid hydration mismatch
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="lg:col-span-12">
      <div className="rounded-lg text-white shadow-theme-xs bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800">
        <div className="p-8">
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                {greeting}, Zarif! 🌟
              </h2>
              <p className="text-blue-100">
                Semangat untuk hari {currentDay}!
              </p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Quote className="h-5 w-5 text-blue-200 mt-1 flex-shrink-0" />
                <p className="text-blue-50 italic">{quote || "Memuat kutipan inspiratif..."}</p>
              </div>
            </div>
            
            <div className="bg-white/15 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <Target className="h-5 w-5 text-yellow-300" />
                <span className="font-semibold text-yellow-100">Fokus Utama Hari Ini</span>
              </div>
              <p className="text-white font-medium">
                Menyelesaikan Bab 3 kursus UI/UX dan membuat wireframe untuk project portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


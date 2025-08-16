"use client";
import React from "react";
import { BookOpen } from "lucide-react";

interface CardLearningProgressProps {
  isDarkMode: boolean;
}

export default function CardLearningProgress({ isDarkMode }: CardLearningProgressProps) {
  return (
    <div className="lg:col-span-8">
      <div className="shadow-theme-xs rounded-lg border bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-800">
        <div className="p-6 pb-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
            <BookOpen className="h-5 w-5 text-purple-600" />
            Progress Belajar Terkini
          </h3>
        </div>
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-gradient-to-r from-purple-50 to-blue-50 border-purple-100 dark:from-purple-900/30 dark:to-blue-900/30 dark:border-purple-800">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold mb-1 text-slate-800 dark:text-gray-100">
                    Pemrograman Python untuk Analisis Data
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-gray-300">
                    Sedang mempelajari: <span className="font-medium">Fungsi & Lambda</span>
                  </p>
                </div>
                <span className="px-2 py-1 bg-purple-600 text-white text-sm rounded">70%</span>
              </div>
              <div className="space-y-2">
                <div className="w-full rounded-full h-2 bg-gray-200 dark:bg-gray-700">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '70%'}}></div>
                </div>
                <p className="text-xs text-slate-500 dark:text-gray-400">
                  7 dari 10 modul selesai
                </p>
              </div>
            </div>
            
            <div className="p-4 rounded-lg border bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-100 dark:from-emerald-900/30 dark:to-teal-900/30 dark:border-emerald-800">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold mb-1 text-slate-800 dark:text-gray-100">
                    UI/UX Design Fundamentals
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-gray-300">
                    Sedang mempelajari: <span className="font-medium">Wireframing Basics</span>
                  </p>
                </div>
                <span className="px-2 py-1 bg-emerald-600 text-white text-sm rounded">45%</span>
              </div>
              <div className="space-y-2">
                <div className="w-full rounded-full h-2 bg-gray-200 dark:bg-gray-700">
                  <div className="bg-emerald-600 h-2 rounded-full" style={{width: '45%'}}></div>
                </div>
                <p className="text-xs text-slate-500 dark:text-gray-400">
                  9 dari 20 video selesai
                </p>
              </div>
            </div>
          </div>
          
          <button className="w-full px-4 py-2 rounded-lg transition-colors border border-gray-300 hover:bg-gray-50 text-gray-700 dark:border-gray-600 dark:hover:bg-gray-700 dark:text-gray-300">
            Lihat Peta Pembelajaran
          </button>
        </div>
      </div>
    </div>
  );
}
         
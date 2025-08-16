"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";

interface CardTasksProps {
  isDarkMode: boolean;
}

export default function CardTasks({ isDarkMode }: CardTasksProps) {
  return (
    <div className="lg:col-span-6">
      <div className="h-full shadow-theme-xs rounded-lg border bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-800">
        <div className="p-6 pb-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            Tugas Prioritas (Top 3)
          </h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg transition-colors hover:bg-slate-50 dark:hover:bg-gray-700">
              <input type="checkbox" id="task1" className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300" />
              <div className="flex-1">
                <label htmlFor="task1" className="text-sm font-medium cursor-pointer text-slate-700 dark:text-gray-300">
                  Kirim email follow-up ke klien X
                </label>
                <span className="ml-2 px-2 py-1 text-xs bg-red-100 text-red-800 rounded">Urgent</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 rounded-lg transition-colors hover:bg-slate-50 dark:hover:bg-gray-700">
              <input type="checkbox" id="task2" className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300" />
              <div className="flex-1">
                <label htmlFor="task2" className="text-sm font-medium cursor-pointer text-slate-700 dark:text-gray-300">
                  Bayar tagihan internet
                </label>
                <span className="ml-2 px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded">Due Today</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 rounded-lg transition-colors hover:bg-slate-50 dark:hover:bg-gray-700">
              <input type="checkbox" id="task3" className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300" />
              <div className="flex-1">
                <label htmlFor="task3" className="text-sm font-medium cursor-pointer text-slate-700 dark:text-gray-300">
                  Baca 1 artikel tentang tren desain terbaru
                </label>
                <span className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Learning</span>
              </div>
            </div>
          </div>
          
          <button className="w-full mt-4 px-4 py-2 rounded-lg transition-colors border border-gray-300 hover:bg-gray-50 text-gray-700 dark:border-gray-600 dark:hover:bg-gray-700 dark:text-gray-300">
            Lihat Semua Tugas
          </button>
        </div>
      </div>
    </div>
  );
}
          
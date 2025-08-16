"use client";
import React from "react";
import { Calendar, Clock } from "lucide-react";

interface CardAgendaProps {
  isDarkMode: boolean;
}

export default function CardAgenda({ isDarkMode }: CardAgendaProps) {
  return (
    <div className="lg:col-span-6">
      <div className="h-full shadow-theme-xs rounded-lg border bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-800">
        <div className="p-6 pb-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
            <Calendar className="h-5 w-5 text-blue-600" />
            Agenda Hari Ini
          </h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-3 rounded-lg border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20">
              <Clock className="h-4 w-4 text-green-600" />
              <div>
                <p className="font-medium text-green-800 dark:text-green-300">
                  09:00 - 10:00
                </p>
                <p className="text-sm text-green-600 dark:text-green-400">
                  Rapat Proyek Tim A
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                  Zoom Meeting
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-3 rounded-lg border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20">
              <Clock className="h-4 w-4 text-blue-600" />
              <div>
                <p className="font-medium text-blue-800 dark:text-blue-300">
                  14:00 - 15:30
                </p>
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  Kelas Belajar Bahasa Jepang
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                  Online
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-3 rounded-lg border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20">
              <Clock className="h-4 w-4 text-orange-600" />
              <div>
                <p className="font-medium text-orange-800 dark:text-orange-300">
                  19:00 - 20:00
                </p>
                <p className="text-sm text-orange-600 dark:text-orange-400">
                  Sesi Olahraga di Gym
                </p>
                <span className="inline-block px-2 py-1 text-xs rounded bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                  Fitness Center
                </span>
              </div>
            </div>
          </div>
          
          <button className="w-full mt-4 px-4 py-2 rounded-lg transition-colors border border-gray-300 hover:bg-gray-50 text-gray-700 dark:border-gray-600 dark:hover:bg-gray-700 dark:text-gray-300">
            Lihat Semua Agenda
          </button>
        </div>
      </div>
    </div>
  );
}
         
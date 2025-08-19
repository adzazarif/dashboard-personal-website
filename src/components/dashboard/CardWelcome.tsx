"use client";
import React, { useState, useEffect } from "react";
import { Calendar, BookOpen, Trophy, Flame } from "lucide-react";

interface CardWelcomeProps {
  isDarkMode: boolean;
  greeting: string;
  currentDay: string;
  todayQuote: string;
}

export default function CardWelcome({ greeting, currentDay }: CardWelcomeProps) {
  const [contributionData, setContributionData] = useState<{level: number, date: Date}[]>([]);
  
  // Generate mock contribution data with actual dates
  useEffect(() => {
    const data = [];
    const today = new Date();
    for (let i = 364; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      data.push({
        level: Math.floor(Math.random() * 5),
        date: date
      });
    }
    setContributionData(data);
  }, []);

  const getContributionColor = (level: number) => {
    const colors = [
      "bg-gray-200 dark:bg-gray-700", // No activity
      "bg-green-200 dark:bg-green-900", // Low
      "bg-green-400 dark:bg-green-700", // Medium
      "bg-green-600 dark:bg-green-500", // High
      "bg-green-800 dark:bg-green-400", // Very high
    ];
    return colors[level] || colors[0];
  };

  const getMonthLabels = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    const labels = [];
    const today = new Date();
    
    for (let i = 0; i < 12; i++) {
      const date = new Date(today.getFullYear(), today.getMonth() - 11 + i, 1);
      labels.push({
        month: months[date.getMonth()],
        position: i * 4.3 // Approximate position
      });
    }
    return labels;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getActivityText = (level: number) => {
    const activities = [
      'Tidak ada aktivitas',
      'Aktivitas ringan (1-2 jam)',
      'Aktivitas sedang (2-4 jam)', 
      'Aktivitas tinggi (4-6 jam)',
      'Aktivitas sangat tinggi (6+ jam)'
    ];
    return activities[level] || activities[0];
  };

  const totalDays = contributionData.filter(item => item.level > 0).length;
  const currentStreak = contributionData.slice(-7).filter(item => item.level > 0).length;
  const totalHours = contributionData.reduce((sum, item) => sum + item.level, 0) * 2;

  return (
    <div className="lg:col-span-12">
      <div className="rounded-lg text-white shadow-theme-xs dark:bg-gray-800 bg-gray-100">
        <div className="p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2 dark:text-white text-gray-800">
                {greeting}, Zarif! 🌟
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Semangat untuk hari {currentDay}!
              </p>
            </div>

            {/* Contribution Calendar */}
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-5 w-5 dark:text-white text-gray-800" />
                <span className="font-semibold dark:text-white text-gray-800">Aktivitas Belajar</span>
                <span className="text-xs dark:tekt-white text-gray-800 ml-auto">
                  {totalDays} hari aktif dalam setahun terakhir
                </span>
              </div>
              
              {/* Month Labels */}
              <div className="relative mb-2">
                <div className="flex justify-between text-xs dark:text-white text-gray-800 px-4">
                  {getMonthLabels().map((label, index) => (
                    <span key={index}>{label.month}</span>
                  ))}
                </div>
              </div>
              
              {/* Calendar Grid - Horizontal */}
              <div className="overflow-x-auto">
                <div className="grid grid-rows-7 grid-flow-col gap-1" style={{ gridTemplateColumns: 'repeat(53, minmax(0, 1fr))' }}>
                  {contributionData.map((item, index) => {
                    const weekIndex = Math.floor(index / 7);
                    const dayIndex = index % 7;
                    return (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-sm ${getContributionColor(item.level)} hover:ring-2 hover:ring-white/50 transition-all duration-200 cursor-pointer relative group`}
                        style={{ 
                          gridRow: dayIndex + 1,
                          gridColumn: weekIndex + 1
                        }}
                      >
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 whitespace-nowrap">
                          <div className="font-semibold">{formatDate(item.date)}</div>
                          <div>{getActivityText(item.level)}</div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Legend */}
              <div className="flex items-center justify-between mt-4 text-xs text-blue-200">
                <span>Kurang</span>
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map(level => (
                    <div
                      key={level}
                      className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
                    />
                  ))}
                </div>
                <span>Lebih</span>
              </div>
            </div>

            {/* Summary Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="dark:bg-white/15 bg-gray-300/50 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6 dark:text-yellow-300 text-yellow-400" />
                  <div>
                    <p className="text-2xl font-bold dark:text-white text-gray-800">{totalHours}</p>
                    <p className="dark:text-yellow-100 text-gray-600 text-sm">Jam Belajar</p>
                  </div>
                </div>
              </div>
              
              <div className="dark:bg-white/15 bg-gray-300/50 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Flame className="h-6 w-6 text-orange-300" />
                  <div>
                    <p className="text-2xl font-bold dark:text-white text-gray-800">{currentStreak}</p>
                    <p className="dark:text-white text-gray-600 text-sm">Streak 7 Hari</p>
                  </div>
                </div>
              </div>
              
              <div className="dark:bg-white/15 bg-gray-300/50 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Trophy className="h-6 w-6 text-green-300" />
                  <div>
                    <p className="text-2xl font-bold dark:text-white text-gray-800">{totalDays}</p>
                    <p className="dark:text-white text-gray-600 text-sm">Hari Aktif</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


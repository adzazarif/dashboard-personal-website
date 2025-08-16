"use client";
import React, { useState } from "react";
import { StickyNote } from "lucide-react";

interface CardQuickNotesProps {
  isDarkMode: boolean;
}

interface Note {
  id: string;
  text: string;
  timestamp: Date;
}

export default function CardQuickNotes({ isDarkMode }: CardQuickNotesProps) {
  const [noteText, setNoteText] = useState("");
  const [savedNotes, setSavedNotes] = useState<Note[]>([
    {
      id: "1",
      text: "Cek tutorial Figma untuk auto-layout",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
    }
  ]);

  const handleSaveNote = () => {
    if (noteText.trim()) {
      const newNote: Note = {
        id: Date.now().toString(),
        text: noteText.trim(),
        timestamp: new Date()
      };
      
      setSavedNotes(prev => [newNote, ...prev.slice(0, 4)]); // Keep only 5 most recent
      setNoteText("");
    }
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return "Baru saja";
    if (diffInMinutes < 60) return `${diffInMinutes} menit lalu`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} jam lalu`;
    return `${Math.floor(diffInMinutes / 1440)} hari lalu`;
  };

  return (
    <div className="lg:col-span-4">
      <div className="h-full shadow-theme-xs rounded-lg border bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="p-6 pb-4 border-b border-gray-200 dark:border-gray-800">
          <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-800 dark:text-white/90">
            <StickyNote className="h-5 w-5 text-yellow-600" />
            Catatan Cepat
          </h3>
        </div>
        <div className="p-6 space-y-4">
          <textarea 
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Tulis ide, pengingat, atau catatan cepat di sini..."
            className="w-full min-h-[120px] p-3 rounded-lg border text-sm resize-none transition-colors focus:outline-hidden focus:ring-3 bg-transparent border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:ring-brand-500/10 dark:bg-gray-900 dark:border-gray-800 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 dark:focus:ring-brand-500/10 dark:bg-white/[0.03]"
          />
          
          <button 
            onClick={handleSaveNote}
            disabled={!noteText.trim()}
            className={`w-full h-11 px-4 rounded-lg text-sm font-medium transition-colors ${
              noteText.trim()
                ? 'bg-yellow-600 hover:bg-yellow-700 text-white shadow-theme-xs'
                : 'bg-gray-50 text-gray-400 cursor-not-allowed border border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-800 dark:bg-white/[0.03]'
            }`}
          >
            Simpan Catatan
          </button>
          
          <div className="border-t pt-4 border-gray-200 dark:border-gray-800">
            <h4 className="text-sm font-medium mb-3 text-gray-800 dark:text-white/90">
              Catatan Terbaru:
            </h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {savedNotes.length > 0 ? (
                savedNotes.map((note) => (
                  <div key={note.id} className="p-3 rounded-lg border-l-2 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/10">
                    <p className="text-sm mb-1 text-gray-800 dark:text-white/90">
                      asd
                    </p>
                    <span className="text-xs text-gray-400 dark:text-white/30">
                      {formatTimeAgo(note.timestamp)}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-center py-4 text-gray-400 dark:text-white/30">
                  Belum ada catatan tersimpan
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
            
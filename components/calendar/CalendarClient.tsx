"use client";

import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Plus, X, Clock, Trash2, Calendar as CalIcon, Lock } from "lucide-react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays } from "date-fns";
import { nl } from "date-fns/locale"; 
import { createCalendarItem, deleteCalendarItem } from "@/app/actions/calendar-actions"; 
import { useRouter } from "next/navigation";

// --- Interface voor calendar items ---
// Beschrijft de structuur van een kalenderitem
interface CalendarItem {
  id: string;
  title: string;
  description?: string | null;
  startDatetime: string; 
  endDatetime: string;
  userId: string;
}

// --- Map voor taken per datum ---
interface TaskMap {
  [dateKey: string]: CalendarItem[];
}

// --- CalendarClient component ---
// Dit component toont een kalender, taken per dag en een modal voor toevoegen/bewerken
export default function CalendarClient({ initialTasks = [], isReadOnly }: { initialTasks: CalendarItem[], isReadOnly: boolean }) {
  const router = useRouter();

  // --- State variabelen ---
  const [currentMonth, setCurrentMonth] = useState(new Date()); // huidige maand
  const [isModalOpen, setIsModalOpen] = useState(false); // modal open/gesloten
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // geselecteerde datum
  const [editingId, setEditingId] = useState<string | null>(null); // id van item dat bewerkt wordt

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(""); // titel van item
  const [type, setType] = useState("agenda"); // type document
  const [startTime, setStartTime] = useState("09:00"); // starttijd
  const [endTime, setEndTime] = useState("10:00"); // eindtijd

  // --- Taken mappen per datum ---
  const taskMap = useMemo<TaskMap>(() => {
    const map: TaskMap = {};
    initialTasks.forEach((item) => {
      const d = new Date(item.startDatetime);
      const dateKey = format(d, "yyyy-MM-dd");
      if (!map[dateKey]) map[dateKey] = [];
      map[dateKey].push(item);
    });
    return map;
  }, [initialTasks]);

  // --- Modal openen voor nieuwe taak ---
  const openAddModal = (date: Date) => {
    if (isReadOnly) return; // alleen lezen modus
    setEditingId(null);
    setSelectedDate(date);
    setTitle("");
    setType("agenda");
    setStartTime("09:00");
    setEndTime("10:00");
    setIsModalOpen(true);
  };

  // --- Modal openen voor bewerken ---
  const openEditModal = (e: React.MouseEvent, task: CalendarItem) => {
    e.stopPropagation();
    if (isReadOnly) return;
    setEditingId(task.id);
    setSelectedDate(new Date(task.startDatetime));
    setTitle(task.title);
    setType(task.description || "agenda");
    setStartTime(format(new Date(task.startDatetime), "HH:mm"));
    setEndTime(format(new Date(task.endDatetime), "HH:mm"));
    setIsModalOpen(true);
  };

  // --- Opslaan van taak ---
  const handleSave = async () => {
    if (isReadOnly || !title || !selectedDate) return;
    setLoading(true);
    try {
      const res = await createCalendarItem({
        id: editingId,
        titel: title,
        documentType: type,
        datum: format(selectedDate, "yyyy-MM-dd"),
        startTime,
        endTime
      });
      if (res.success) {
        setIsModalOpen(false);
        router.refresh(); // pagina verversen
      }
    } finally {
      setLoading(false);
    }
  };

  // --- Verwijderen van taak ---
  const handleDelete = async () => {
    if (isReadOnly || !editingId) return;
    setLoading(true);
    try {
      const res = await deleteCalendarItem(editingId);
      if (res.success) {
        setIsModalOpen(false);
        router.refresh();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1600px] mx-auto px-4 py-10 relative font-sans">
      {/* --- Header met maand en status --- */}
      <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-2 h-2 rounded-full animate-pulse ${isReadOnly ? 'bg-orange-500' : 'bg-fuchsia-500'}`} />
            <span className={`${isReadOnly ? 'text-orange-500' : 'text-fuchsia-500'} text-[10px] font-black tracking-[0.5em] uppercase`}>
              {isReadOnly ? "Systeem Alleen Lezen" : "Systeem Operationeel"}
            </span>
          </div>
          <h1 className="text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
            Age<span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>nda</span>
          </h1>
        </div>
        
        {/* --- Maand navigatie --- */}
        <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-2 rounded-2xl backdrop-blur-md">
          <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} className="p-3 hover:bg-white/10 rounded-xl text-teal-400 transition-all"><ChevronLeft size={24} /></button>
          <span className="text-lg font-bold text-white w-48 text-center uppercase tracking-widest italic">
            {format(currentMonth, "MMMM yyyy", { locale: nl })}
          </span>
          <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="p-3 hover:bg-white/10 rounded-xl text-teal-400 transition-all"><ChevronRight size={24} /></button>
        </div>
      </div>

      {/* --- Kalender grid --- */}
      <div className="bg-black/40 border border-white/10 rounded-[40px] overflow-hidden shadow-2xl backdrop-blur-3xl">
        <div className="grid grid-cols-7 bg-white/5 py-5 border-b border-white/10 text-center font-bold text-teal-500/30 text-[11px] uppercase tracking-[0.4em]">
          {["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"].map(d => <span key={d}>{d}</span>)}
        </div>
        <div className="grid grid-cols-7">
          {/* --- Dagen genereren --- */}
          {(() => {
            const days = [];
            let day = startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 1 });
            const endDate = endOfWeek(endOfMonth(currentMonth), { weekStartsOn: 1 });
            while (day <= endDate) {
              const dObj = day;
              const dateKey = format(dObj, "yyyy-MM-dd");
              const dayTasks = taskMap[dateKey] || [];
              const isCurrentMonth = isSameMonth(day, currentMonth);
              const isToday = isSameDay(day, new Date());

              days.push(
                <div 
                  key={day.toString()} 
                  onClick={() => !isReadOnly && isCurrentMonth && openAddModal(dObj)} 
                  className={`min-h-[180px] border border-white/5 p-4 transition-all relative group 
                    ${!isCurrentMonth ? "opacity-10 pointer-events-none" : ""} 
                    ${isReadOnly ? "cursor-default" : "cursor-pointer hover:bg-white/[0.02]"}`}
                > 
                  <span className={`text-sm font-mono transition-all ${isToday ? "text-fuchsia-500 font-bold" : "text-white/20"}`}>
                    {format(day, "d")}
                  </span>
                  <div className="mt-3 space-y-2">
                    {dayTasks.map((t) => (
                      <div 
                        key={t.id} 
                        onClick={(e) => openEditModal(e, t)} 
                        className={`group/item text-[10px] px-3 py-2 rounded-xl border transition-all 
                          ${isReadOnly ? 'cursor-default' : 'hover:scale-[1.02] active:scale-95 cursor-pointer'} 
                          ${t.description === 'agenda' 
                            ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' 
                            : 'bg-fuchsia-500/10 border-fuchsia-500/20 text-fuchsia-400'}`}
                      >
                        <div className="flex justify-between items-center font-bold uppercase tracking-tight">
                          <span className="truncate pr-1">{t.title}</span>
                          <span className="opacity-40 font-mono text-[8px] shrink-0">{format(new Date(t.startDatetime), "HH:mm")}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {!isReadOnly && (
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0">
                      <Plus size={16} className="text-fuchsia-500" />
                    </div>
                  )}
                </div>
              );
              day = addDays(day, 1);
            }
            return days;
          })()}
        </div>
      </div>

      {/* --- Modal voor toevoegen/bewerken --- */}
      {isModalOpen && !isReadOnly && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl px-4 animate-in fade-in duration-300">
          <div className="bg-[#0a0a0f] border border-white/10 p-10 rounded-[48px] w-full max-w-lg shadow-[0_0_80px_rgba(0,0,0,0.5)] relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 text-white/10 hover:text-white transition-all p-2 hover:bg-white/5 rounded-full"><X size={28} /></button>
            
            {/* --- Modal header --- */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-3">
                <CalIcon size={14} className="text-fuchsia-500" />
                <span className="text-fuchsia-500 font-bold uppercase text-[10px] tracking-[0.4em]">
                  {editingId ? "Item Bewerken" : "Nieuw Item"}
                </span>
              </div>
              <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase">
                {selectedDate && format(selectedDate, "eeee d MMMM", { locale: nl })}
              </h2>
            </div>

            {/* --- Modal body --- */}
            <div className="space-y-8">
              {/* Titel */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-white/20 uppercase tracking-widest ml-1">Omschrijving</label>
                <input 
                  autoFocus
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  className="w-full bg-white/5 border border-white/10 p-5 text-white font-bold focus:border-fuchsia-500 outline-none rounded-2xl text-lg transition-all" 
                  placeholder="Bijv. Project Deadline..."
                />
              </div>

              {/* Start / Eind tijd */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/20 uppercase tracking-widest ml-1">Starttijd</label>
                  <div className="relative">
                    <Clock size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                    <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="w-full bg-white/5 border border-white/10 p-4 pl-12 text-white rounded-2xl font-mono outline-none focus:border-teal-500 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/20 uppercase tracking-widest ml-1">Eindtijd</label>
                  <div className="relative">
                    <Clock size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                    <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="w-full bg-white/5 border border-white/10 p-4 pl-12 text-white rounded-2xl font-mono outline-none focus:border-teal-500 transition-all" />
                  </div>
                </div>
              </div>

              {/* Categorie */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-white/20 uppercase tracking-widest ml-1">Categorie</label>
                <div className="grid grid-cols-2 gap-3">
                  {['agenda', 'assignment', 'meeting', 'daily'].map((cat) => (
                    <button 
                      key={cat} 
                      onClick={() => setType(cat)} 
                      className={`py-4 text-[10px] font-bold uppercase border transition-all rounded-xl tracking-widest ${
                        type === cat ? 'bg-white text-black border-white' : 'bg-white/5 border-white/5 text-white/30 hover:border-white/20'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actieknoppen */}
              <div className="flex gap-4 pt-4">
                {editingId && (
                  <button 
                    onClick={handleDelete} 
                    className="p-6 bg-red-500/10 text-red-500 border border-red-500/20 rounded-2xl hover:bg-red-500 hover:text-white transition-all group"
                  >
                    <Trash2 size={24} className="group-active:scale-90 transition-transform" />
                  </button>
                )}
                <button 
                  onClick={handleSave} 
                  disabled={loading || !title} 
                  className="flex-1 bg-fuchsia-600 text-white font-black py-6 hover:bg-fuchsia-500 transition-all uppercase text-sm tracking-[0.4em] rounded-2xl shadow-lg active:scale-[0.98] disabled:opacity-20"
                >
                  {loading ? "Laden..." : (editingId ? "Bijwerken" : "Opslaan")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
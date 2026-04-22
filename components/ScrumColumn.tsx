"use client";
import { useState, Dispatch, SetStateAction } from "react";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import { Plus, X, Sparkles, Layout } from "lucide-react";
import TaskItem from "./TaskItem";

// Definieer het type voor de kolommen van het ScrumBoard
interface ScrumColumns {
  backlog: string[];
  sprint: string[];
  todo: string[];
  progress: string[];
  done: string[];
}

// Props die elke ScrumColumn component ontvangt
interface ScrumColumnProps {
  id: keyof ScrumColumns; // Het type van de kolom (backlog, sprint, etc.)
  title: string; // De titel die wordt weergegeven bovenaan de kolom
  items: string[]; // Lijst van taaknamen in deze kolom
  setColumns: Dispatch<SetStateAction<ScrumColumns>>; // Functie om de kolommen state bij te werken
  activeSprint: string; // Huidige actieve sprint
}

export default function ScrumColumn({ id, title, items, setColumns, activeSprint }: ScrumColumnProps) {
  const [showForm, setShowForm] = useState<boolean>(false); // Staat bijhouden of het taakformulier zichtbaar is
  const [input, setInput] = useState<string>(""); // Huidige waarde van het inputveld
  const { setNodeRef } = useDroppable({ id }); // DnD-kit droppable hook voor deze kolom

  // Functie om een nieuwe taak toe te voegen
  const addTask = async () => {
    if (!input.trim()) return; // Voorkom lege taken
    
    // Verstuur POST verzoek naar de backend om taak op te slaan
    const res = await fetch("/api/scrumboard/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: input, columnId: id, sprint: activeSprint }),
    });

    if (res.ok) {
      const newItem = await res.json();
      // Update de kolommen state met de nieuwe taak
      setColumns((prev) => ({ 
        ...prev, 
        [id]: [...prev[id], newItem.title] 
      }));
      setInput(""); // Reset het inputveld
      setShowForm(false); // Sluit het formulier
    }
  };

  return (
    <div 
      ref={setNodeRef} // Maak de kolom droppable
      className="bg-[#14161F]/60 p-3 rounded-2xl flex-1 border border-white/5 flex flex-col gap-4 h-[calc(100vh-100px)] overflow-hidden shadow-xl min-w-0 transition-all"
    >
      {/* Kolomheader met titel en aantal items */}
      <div className="flex justify-between items-center px-1 pt-1 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-1 h-3 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
          <h2 className="text-[10px] font-black text-slate-400 tracking-wider uppercase">{title}</h2>
        </div>
        <span className="text-[9px] bg-white/5 text-slate-500 px-2 py-0.5 rounded-md border border-white/5 font-mono">
          {items?.length || 0} {/* Toon het aantal taken in deze kolom */}
        </span>
      </div>

      {/* Takenlijst, scrollbaar en drag & drop context */}
      <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-2.5 pr-1">
        <SortableContext items={items || []} strategy={verticalListSortingStrategy}>
          {items?.map((item: string) => <TaskItem key={item} id={item} text={item} />)}
        </SortableContext>
      </div>
      
      {/* Knop om het taakformulier te openen */}
      <button 
        onClick={() => setShowForm(true)} 
        className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-slate-500 hover:text-white hover:bg-white/5 transition-all font-bold text-[10px] border border-transparent hover:border-white/5 flex-shrink-0"
      >
        <Plus size={14} /> ADD TASK
      </button>
      
      {/* Modal formulier om een nieuwe taak toe te voegen */}
      {showForm && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 backdrop-blur-md bg-black/60 animate-in fade-in duration-300">
          <div className="relative bg-[#161922] w-full max-w-sm rounded-[2.5rem] border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] overflow-hidden animate-in zoom-in-95 duration-300">
            
            {/* Decoratieve gradient lijn bovenaan modal */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-40" />
            
            {/* Inhoud van het formulier */}
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-500/10 rounded-2xl">
                    <Sparkles size={18} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base leading-none">Nieuwe Taak</h3>
                    <div className="flex items-center gap-2 mt-1.5">
                      <Layout size={10} className="text-slate-600" />
                      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-tighter italic">{title}</p>
                    </div>
                  </div>
                </div>
                {/* Knop om modal te sluiten */}
                <button 
                  onClick={() => setShowForm(false)} 
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-slate-500 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Textarea om taak in te voeren */}
              <div className="space-y-4">
                <div className="relative group">
                  <textarea 
                    className="w-full p-5 bg-black/40 border border-white/5 rounded-3xl text-white outline-none focus:border-blue-500/40 focus:ring-4 focus:ring-blue-500/5 transition-all min-h-[140px] resize-none text-sm placeholder:text-slate-700 shadow-inner" 
                    placeholder="Wat moet er gebeuren?"
                    value={input} 
                    onChange={e => setInput(e.target.value)} 
                    autoFocus 
                  />
                </div>
              </div>

              {/* Knoppen onderaan modal */}
              <div className="flex gap-3 mt-8">
                <button 
                  onClick={() => setShowForm(false)} 
                  className="flex-1 py-4 rounded-2xl text-slate-500 font-bold text-[11px] hover:bg-white/5 transition-all border border-transparent hover:border-white/5"
                >
                  Annuleren
                </button>
                <button 
                  onClick={addTask} 
                  className="flex-[2] bg-gradient-to-br from-blue-600 to-indigo-700 py-4 rounded-2xl text-white font-bold text-[11px] hover:from-blue-500 hover:to-indigo-600 shadow-[0_15px_30px_-5px_rgba(37,99,235,0.3)] active:scale-[0.96] transition-all tracking-wider"
                >
                  BEVESTIGEN
                </button>
              </div>
            </div>

            {/* Decoratieve blur cirkels */}
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-blue-600/10 blur-[60px] pointer-events-none" />
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-indigo-600/10 blur-[60px] pointer-events-none" />
          </div>
        </div>
      )}
    </div>
  );
}
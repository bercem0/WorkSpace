"use client";
import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Trash2, Edit3, AlertTriangle, Type } from "lucide-react";

// Props voor elke taakitem
interface TaskItemProps {
  id: string; // Unieke ID van de taak
  text: string; // Tekst van de taak
}

export default function TaskItem({ id, text }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false); // Staat bijhouden of modal bewerken actief is
  const [isDeleting, setIsDeleting] = useState<boolean>(false); // Staat bijhouden of modal verwijderen actief is
  const [newTitle, setNewTitle] = useState<string>(text); // Bijhouden van de nieuwe titel bij bewerken

  // Hook voor drag & drop functionaliteit
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ 
    id, 
    disabled: isEditing || isDeleting // Disable DnD tijdens bewerken of verwijderen
  });

  // CSS transform en overgang voor drag & drop
  const style: React.CSSProperties = { 
    transform: CSS.Transform.toString(transform), 
    transition, 
    opacity: isDragging ? 0.4 : 1, // Verminder opacity tijdens drag
    position: 'relative' as const,
  };

  // Functie om taak te updaten
  const handleUpdate = async () => {
    if (!newTitle.trim() || newTitle === text) return setIsEditing(false); // Stop bij lege input of geen verandering
    const res = await fetch("/api/scrumboard/items", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: text, newTitle: newTitle }),
    });
    if (res.ok) window.location.reload(); // Herlaad pagina na succesvolle update
  };

  // Functie om taak te verwijderen
  const handleDelete = async () => {
    const res = await fetch("/api/scrumboard/items", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: text }),
    });
    if (res.ok) window.location.reload(); // Herlaad pagina na succesvolle verwijdering
  };

  return (
    <>
      {/* Hoofd taakitem */}
      <div 
        ref={setNodeRef} 
        style={style} 
        className="group relative p-4 rounded-xl bg-[#1A1D29]/90 border border-white/5 hover:border-blue-500/30 transition-all duration-200 shadow-lg min-h-[60px] flex flex-col justify-center"
      >
        {/* Knoppen bewerken / verwijderen zichtbaar bij hover */}
        <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10 bg-[#1A1D29]/80 backdrop-blur-sm rounded-md p-1">
          <button onClick={() => setIsEditing(true)} className="p-1 hover:bg-blue-500/20 text-slate-500 hover:text-blue-400 rounded transition-colors">
            <Edit3 size={12} /> {/* Bewerk icoon */}
          </button>
          <button onClick={() => setIsDeleting(true)} className="p-1 hover:bg-red-500/20 text-slate-500 hover:text-red-400 rounded transition-colors">
            <Trash2 size={12} /> {/* Verwijder icoon */}
          </button>
        </div>

        {/* Tekst van de taak, drag & drop handlers */}
        <div 
          {...attributes} 
          {...listeners} 
          className="w-full cursor-grab active:cursor-grabbing text-[12px] text-slate-300 leading-relaxed font-medium break-words pr-8"
        >
          {text}
        </div>
      </div>

      {/* 1. Modal voor taak bewerken */}
      {isEditing && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 backdrop-blur-md bg-black/60 animate-in fade-in duration-200">
          <div className="bg-[#1C1F2B]/95 w-full max-w-[400px] rounded-[2rem] border border-white/10 shadow-2xl p-8 text-center animate-in zoom-in-95">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/20">
              <Type size={28} className="text-blue-500" /> {/* Icon voor bewerken */}
            </div>
            <h3 className="text-white font-bold text-xl mb-6">Taak Bewerken</h3>
            {/* Textarea voor nieuwe titel */}
            <textarea 
              className="w-full p-4 bg-black/30 border border-white/10 rounded-xl text-white text-sm outline-none focus:border-blue-500 min-h-[120px] resize-none mb-8 shadow-inner" 
              value={newTitle} 
              onChange={e => setNewTitle(e.target.value)} 
              autoFocus 
            />
            {/* Knoppen onderaan modal */}
            <div className="flex flex-col gap-3">
              <button 
                onClick={handleUpdate} 
                className="w-full bg-blue-600 py-4 rounded-2xl text-white font-black text-xs hover:bg-blue-500 shadow-xl shadow-blue-600/20 active:scale-95 transition-all tracking-widest"
              >
                WIJZIGINGEN OPSLAAN
              </button>
              <button 
                onClick={() => setIsEditing(false)} 
                className="w-full py-4 text-slate-500 font-bold text-xs hover:text-white transition-all underline decoration-white/10"
              >
                Annuleren
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Modal voor taak verwijderen */}
      {isDeleting && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 backdrop-blur-md bg-black/60 animate-in fade-in duration-200">
          <div className="bg-[#1C1F2B]/95 w-full max-w-[360px] rounded-[2.5rem] border border-red-500/20 shadow-2xl p-10 text-center animate-in zoom-in-95">
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/20">
              <AlertTriangle size={28} className="text-red-500" /> {/* Icon voor waarschuwing */}
            </div>
            <h3 className="text-white font-bold text-xl mb-3">Verwijderen?</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-10 px-2 font-medium">
              Weet je zeker dat je <span className="text-white italic">{text}</span> wilt verwijderen? Dit kan niet ongedaan worden gemaakt.
            </p>
            {/* Knoppen onderaan modal */}
            <div className="flex flex-col gap-3">
              <button 
                onClick={handleDelete} 
                className="w-full bg-red-600 py-4 rounded-2xl text-white font-black text-xs hover:bg-red-500 shadow-xl shadow-red-600/20 active:scale-95 transition-all tracking-widest"
              >
                JA, VERWIJDEREN
              </button>
              <button 
                onClick={() => setIsDeleting(false)} 
                className="w-full py-4 text-slate-500 font-bold text-xs hover:text-white transition-all underline decoration-white/10"
              >
                NEE, ANNULEREN
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
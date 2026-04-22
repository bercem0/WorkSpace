"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import TaskFormModal from "@/components/tasks/TaskFormModal";
import { Textarea } from "@/components/ui/textarea";
import { updateTaskContent } from "@/app/actions/task-actions";
import { Plus } from "lucide-react";

// Interface voor de initiële items die we van backend krijgen
interface InitialItem {
  id: string;
  title: string;
  content: string | null; // JSON-string met task details
  sprint?: string | number;
}

// Interface voor de geselecteerde task die we in editor bewerken
interface SelectedTask {
  id: string;
  titel: string;
  documentType: "review" | "retrospective" | string;
  geleerd?: string;
  nietVoldoende?: string;
  actiepunten?: string;
  goed?: string;
  beter?: string;
  actiepunt?: string;
  [key: string]: string | number | undefined; 
}

export default function TasksPageClient({ initialItems }: { initialItems: InitialItem[] }) {
  const [open, setOpen] = useState(false); // Modal open/close state
  const [geselecteerdItem, setGeselecteerdItem] = useState<SelectedTask | null>(null); // Huidig geselecteerde task

  // Functie om een veld in de geselecteerde task te updaten en naar backend te sturen
  const update = async (id: string, key: string, val: string) => {
    if (!geselecteerdItem) return;
    const updatedItem = { ...geselecteerdItem, [key]: val }; // Kopieer en update veld
    setGeselecteerdItem(updatedItem); // Update lokale state
    await updateTaskContent(id, updatedItem); // Verstuur update naar backend
  };

  // Render dynamisch velden afhankelijk van documentType
  const renderFields = (item: SelectedTask) => {
    if (!item) return null;

    // Herbruikbaar component voor tekstvelden
    const Field = ({ label, fieldKey }: { label: string; fieldKey: keyof SelectedTask }) => (
      <div className="space-y-3 group">
        <label className="text-[11px] font-black text-teal-500 uppercase tracking-widest opacity-60">
          {label}
        </label>
        <Textarea
          value={(item[fieldKey] as string) || ""}
          onChange={(e) => update(item.id, fieldKey as string, e.target.value)}
          placeholder="Vul hier in..."
          className="bg-[#0b1233]/40 border-teal-500/20 focus:border-fuchsia-500/50 min-h-[120px] text-teal-50 transition-all outline-none"
        />
      </div>
    );

    // Velden per documentType
    switch (item.documentType) {
      case "review":
        return (
          <>
            <Field label="WAT heb jij gemaakt/geleerd?" fieldKey="geleerd" />
            <Field label="Wat beheers jij nog niet voldoende?" fieldKey="nietVoldoende" />
            <Field label="Hoe ga jij dit verhelpen?" fieldKey="actiepunten" />
          </>
        );
      case "retrospective":
        return (
          <>
            <Field label="Wat ging allemaal goed?" fieldKey="goed" />
            <Field label="Wat kan beter?" fieldKey="beter" />
            <Field label="Actiepunt" fieldKey="actiepunt" />
          </>
        );
      default:
        return <p className="text-teal-500/40 italic">Selecteer een document om te bewerken.</p>;
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#070B24] text-teal-200 py-10 px-8">
      <TaskFormModal open={open} setOpen={setOpen} /> {/* Modal om nieuwe tasks te maken */}

      {/* Hoofd card voor sidebar + editor */}
      <Card className="w-full max-w-7xl mx-auto bg-[#0E153A]/60 border-teal-400/30 shadow-2xl overflow-hidden rounded-3xl">
        <div className="grid grid-cols-12 min-h-[800px]">
          
          {/* SIDEBAR */}
          <div className="col-span-3 border-r border-teal-400/10 p-6 bg-black/20">
            <Button 
              onClick={() => setOpen(true)} 
              className="w-full bg-teal-400 hover:bg-teal-300 text-black font-black py-6 rounded-xl mb-6 transition-all"
            >
              + NIEUW DOCUMENT
            </Button>

            {/* Lijst van alle items in sidebar */}
            <div className="space-y-3">
              {initialItems.map((item) => {
                let data: Partial<SelectedTask>;
                try {
                   data = JSON.parse(item.content || "{}"); // JSON parse
                } catch {
                   data = { documentType: "unknown" };
                }
                
                const isActive = geselecteerdItem?.id === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => setGeselecteerdItem({ ...data as SelectedTask, id: item.id, titel: data.titel || item.title })}
                    className={`p-4 rounded-xl cursor-pointer border transition-all ${
                      isActive ? "border-teal-400 bg-teal-400/10 shadow-lg" : "bg-white/5 border-transparent hover:border-white/10"
                    }`}
                  >
                    <div className="text-[10px] font-black text-fuchsia-500 uppercase">{data.documentType || "DOC"}</div>
                    <div className={`font-bold text-sm truncate ${isActive ? "text-white" : ""}`}>{item.title}</div>
                    <div className="text-[9px] opacity-40 mt-2 italic uppercase font-mono">SPRINT {item.sprint || "X"}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* EDITOR */}
          <div className="col-span-9 p-12 bg-black/5">
            {geselecteerdItem ? (
              <div className="space-y-10 animate-in fade-in slide-in-from-right-2 duration-300">
                <div className="border-l-4 border-fuchsia-500 pl-6">
                   <h1 className="text-4xl font-black text-white italic uppercase tracking-tighter">
                     {geselecteerdItem.titel}
                   </h1>
                   <p className="text-[10px] text-teal-500 font-bold tracking-widest mt-2">PROJECT ENGINE // SYSTEM ACTIVE</p>
                </div>
                {/* Render velden afhankelijk van documentType */}
                <div className="space-y-12">{renderFields(geselecteerdItem)}</div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center opacity-10 space-y-4">
                 <Plus size={48} />
                 <span className="font-black italic tracking-widest">SELECTEER EEN DOCUMENT</span>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
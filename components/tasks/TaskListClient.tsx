"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Trash2, ArrowLeft, Plus } from "lucide-react";
import TaskFormModal from "./TaskFormModal";
import { deleteTask, updateTaskContent } from "@/app/actions/task-actions";

// Basis interfaces
interface Task {
  id: string;
  title: string;
  description: string | null; // JSON-string met task details
}

interface TaskData {
  id: string;
  titel: string;
  documentType: "review" | "retrospective" | "sprintplan" | "daily" | "release";
  sprint: string | number;
  datum: string;
  // Extra velden afhankelijk van type document
  geleerd?: string;
  nietVoldoende?: string;
  actiepunten?: string;
  goed?: string;
  beter?: string;
  actiepunt?: string;
  backlog?: string;
  todo?: string;
  dod?: string;
  klaar?: string;
  planningStatus?: string;
  obstakels?: string;
  s1?: string;
  s2?: string;
  s3?: string;
  [key: string]: string | number | undefined; 
}

// Component voor een slim veld dat automatisch updates opslaat
function SmartField({ label, value, onSave }: { label: string; value: string; onSave: (val: string) => void }) {
  const [localValue, setLocalValue] = useState(value);

  // Synchroniseer lokale waarde met externe updates
  useEffect(() => { setLocalValue(value); }, [value]);

  return (
    <div className="space-y-3 group mt-8">
      <label className="text-[11px] font-black text-teal-500 uppercase tracking-widest opacity-70 group-focus-within:opacity-100 italic">
        {label}
      </label>
      <Textarea
        value={localValue || ""}
        onChange={(e) => {
          setLocalValue(e.target.value); // Update lokale waarde
          onSave(e.target.value); // Sla direct op via callback
        }}
        className="bg-[#0b1233]/40 border-teal-500/20 focus:border-fuchsia-500/50 min-h-[150px] text-teal-50 text-lg border-l-4 focus:border-l-fuchsia-500 transition-all"
        placeholder="Typ hier..."
      />
    </div>
  );
}

// Hoofdcomponent voor de task lijst en details
export default function TaskListClient({ initialTasks }: { initialTasks: Task[] }) {
  const [open, setOpen] = useState(false); // Modal open/close
  const [geselecteerdItem, setGeselecteerdItem] = useState<TaskData | null>(null); // Huidig geselecteerd task item

  // Functie om een veld in real-time te updaten
  const handleUpdate = async (id: string, key: string, val: string) => {
    if (!geselecteerdItem) return;
    const updated = { ...geselecteerdItem, [key]: val }; // Maak een kopie met de update
    setGeselecteerdItem(updated); // Update lokale state
    await updateTaskContent(id, updated); // Stuur update naar backend
  };

  // Genereer dynamisch velden afhankelijk van het documentType
  const renderTemplateFields = (item: TaskData) => {
    switch (item.documentType) {
      case "review":
        return (
          <>
            <SmartField label="WAT heb jij gemaakt/geleerd?" value={item.geleerd || ""} onSave={(v) => handleUpdate(item.id, "geleerd", v)} />
            <SmartField label="Wat beheers jij nog niet voldoende?" value={item.nietVoldoende || ""} onSave={(v) => handleUpdate(item.id, "nietVoldoende", v)} />
            <SmartField label="Hoe ga jij dit verhelpen?" value={item.actiepunten || ""} onSave={(v) => handleUpdate(item.id, "actiepunten", v)} />
          </>
        );
      case "retrospective":
        return (
          <>
            <SmartField label="Wat ging allemaal goed?" value={item.goed || ""} onSave={(v) => handleUpdate(item.id, "goed", v)} />
            <SmartField label="Wat kan beter?" value={item.beter || ""} onSave={(v) => handleUpdate(item.id, "beter", v)} />
            <SmartField label="Actiepunt voor volgende Sprint" value={item.actiepunt || ""} onSave={(v) => handleUpdate(item.id, "actiepunt", v)} />
          </>
        );
      case "sprintplan":
        return (
          <>
            <SmartField label="Sprint Backlog" value={item.backlog || ""} onSave={(v) => handleUpdate(item.id, "backlog", v)} />
            <SmartField label="To Do lijst" value={item.todo || ""} onSave={(v) => handleUpdate(item.id, "todo", v)} />
            <SmartField label="Definition of Done" value={item.dod || ""} onSave={(v) => handleUpdate(item.id, "dod", v)} />
          </>
        );
      case "daily":
        return (
          <>
            <SmartField label="Wat is klaar?" value={item.klaar || ""} onSave={(v) => handleUpdate(item.id, "klaar", v)} />
            <SmartField label="Planning Status" value={item.planningStatus || ""} onSave={(v) => handleUpdate(item.id, "planningStatus", v)} />
            <SmartField label="Obstakels" value={item.obstakels || ""} onSave={(v) => handleUpdate(item.id, "obstakels", v)} />
          </>
        );
      case "release":
        return (
          <>
            <SmartField label="Sprint 1 Userstories" value={item.s1 || ""} onSave={(v) => handleUpdate(item.id, "s1", v)} />
            <SmartField label="Sprint 2 Userstories" value={item.s2 || ""} onSave={(v) => handleUpdate(item.id, "s2", v)} />
            <SmartField label="Sprint 3 Userstories" value={item.s3 || ""} onSave={(v) => handleUpdate(item.id, "s3", v)} />
          </>
        );
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#070B24] text-teal-200 py-10 px-8 flex flex-col items-center w-full">
      <TaskFormModal open={open} setOpen={setOpen} /> {/* Modal om nieuwe tasks te maken */}
      <div className="w-full max-w-7xl">
        {/* Header met titel en knop */}
        <div className="flex justify-between items-end mb-8 border-b border-teal-500/10 pb-6">
          <div>
            <h1 className="text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
              Scrum <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Dashboard</span>
            </h1>          
          </div>
          <Button onClick={() => setOpen(true)} className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-black px-8 py-6 rounded-none skew-x-[-12deg] transition-all">
            <Plus className="mr-2 skew-x-[12deg]" /> <span className="skew-x-[12deg]">NIEUW DOCUMENT</span>
          </Button>
        </div>

        {/* Toon overzicht of geselecteerde task */}
        {!geselecteerdItem ? (
          <div className="bg-[#0E153A]/40 backdrop-blur-xl border border-teal-500/20 rounded-2xl overflow-hidden shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-teal-500/5 text-teal-500 text-[10px] font-black uppercase tracking-[0.2em]">
                  <th className="px-8 py-5">Type</th>
                  <th>Document Naam</th>
                  <th>Sprint</th>
                  <th>Datum</th>
                  <th className="text-right px-8">Actie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-teal-500/5">
                {initialTasks.map((task) => {
                  let data: Partial<TaskData>;
                  try { data = JSON.parse(task.description || "{}"); } catch { data = {}; } // Parse JSON
                  return (
                    <tr key={task.id} onClick={() => setGeselecteerdItem({ ...data as TaskData, id: task.id })} className="group hover:bg-teal-500/5 cursor-pointer transition-colors">
                      <td className="px-8 py-6"><span className="bg-fuchsia-500/10 text-fuchsia-400 text-[10px] font-black px-2 py-1 rounded border border-fuchsia-500/20 uppercase">{data.documentType}</span></td>
                      <td className="font-bold text-teal-50 group-hover:text-fuchsia-300">{task.title}</td>
                      <td className="font-mono text-teal-400/70">S-{data.sprint}</td>
                      <td className="text-xs text-teal-400/50">{data.datum}</td>
                      <td className="text-right px-8">
                        <button onClick={(e) => { e.stopPropagation(); deleteTask(task.id); }} className="p-2 text-teal-900 hover:text-red-500 transition-all">
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="animate-in slide-in-from-bottom-10 duration-500">
            <button onClick={() => setGeselecteerdItem(null)} className="flex items-center text-fuchsia-400 font-black text-xs tracking-widest mb-8 hover:text-white transition-colors">
              <ArrowLeft size={16} className="mr-2" /> TERUG NAAR OVERZICHT
            </button>
            <div className="bg-[#0E153A]/60 backdrop-blur-2xl border border-teal-400/30 p-16 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-500 via-teal-500 to-transparent shadow-[0_0_15px_#d946ef]" />
                <div className="max-w-3xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-6xl font-black text-white italic uppercase tracking-tighter leading-tight">{geselecteerdItem.titel}</h2>
                        <p className="text-teal-500 font-bold text-xs mt-4 tracking-widest opacity-50 uppercase">{geselecteerdItem.documentType} Sprint {geselecteerdItem.sprint} {geselecteerdItem.datum}</p>
                    </div>
                    {renderTemplateFields(geselecteerdItem)} {/* Render velden afhankelijk van documentType */}
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
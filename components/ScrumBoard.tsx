"use client";

import { useState, useEffect } from "react";
import { DndContext, pointerWithin, DragEndEvent, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import ScrumColumn from "./ScrumColumn";
import { LayoutDashboard, ChevronDown } from "lucide-react";

// Type voor de kolommen van de ScrumBoard
interface ScrumColumns {
  backlog: string[];
  sprint: string[];
  todo: string[];
  progress: string[];
  done: string[];
}

export default function ScrumBoard() {
  // State voor alle kolommen
  const [columns, setColumns] = useState<ScrumColumns>({ 
    backlog: [], 
    sprint: [], 
    todo: [], 
    progress: [], 
    done: [] 
  });
  
  // Actieve sprint en lijst van beschikbare sprints
  const [activeSprint, setActiveSprint] = useState<string>("Sprint 1");
  const sprints: string[] = ["Sprint 1", "Sprint 2", "Sprint 3", "Sprint 4"];

  // Haal items op wanneer de actieve sprint verandert
  useEffect(() => {
    fetch(`/api/scrumboard/items?sprint=${activeSprint}`)
      .then((res) => res.json())
      .then((data: ScrumColumns) => setColumns(data));
  }, [activeSprint]);

  // Drag & Drop sensors configureren
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }));

  // Functie voor het afhandelen van het einde van een drag & drop
  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    
    const activeId = active.id as string;
    const overId = over.id as string;

    // Vind in welke kolom een item zit
    const findColumn = (id: string): keyof ScrumColumns | undefined => {
      if (id in columns) return id as keyof ScrumColumns;
      return Object.keys(columns).find((key) => 
        columns[key as keyof ScrumColumns].includes(id)
      ) as keyof ScrumColumns | undefined;
    };

    const sourceCol = findColumn(activeId);
    const destCol = (findColumn(overId) || overId) as keyof ScrumColumns;

    if (!sourceCol || !destCol || sourceCol === destCol) return;

    // Update lokale state met de nieuwe kolomindeling
    setColumns((prev) => {
      const sourceItems = [...prev[sourceCol]];
      const destItems = [...prev[destCol]];
      const activeIndex = sourceItems.indexOf(activeId);
      
      if (activeIndex !== -1) {
        sourceItems.splice(activeIndex, 1);
        destItems.push(activeId);
      }
      
      return { ...prev, [sourceCol]: sourceItems, [destCol]: destItems };
    });

    // Stuur update naar backend
    await fetch("/api/scrumboard/items", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: activeId, newColumnId: destCol }),
    });
  };

  return (
    <div className="bg-[#0B0C10] h-screen w-full flex flex-col overflow-hidden font-sans text-slate-300">
      
      {/* Header met titel en sprintselectie */}
      <header className="h-14 px-8 flex items-center justify-between border-b border-white/5 bg-[#0F111A] z-50 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
            <LayoutDashboard size={16} className="text-white" />
          </div>
          <h1 className="text-white font-bold tracking-tight text-base">ScrumFlow</h1>
        </div>

        <div className="flex items-center gap-4">
          {/* Dropdown voor sprintselectie */}
          <div className="relative group">
            <select 
              value={activeSprint}
              onChange={(e) => setActiveSprint(e.target.value)}
              className="appearance-none bg-white/5 hover:bg-white/10 text-white text-[11px] font-bold py-2 pl-4 pr-10 rounded-xl border border-white/10 outline-none cursor-pointer transition-all min-w-[120px]"
            >
              {sprints.map(s => <option key={s} value={s} className="bg-[#1A1D29]">{s}</option>)}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={12} />
          </div>
        </div>
      </header>

      {/* Hoofd content area met DnD context */}
      <main className="flex-1 overflow-hidden bg-[#0B0C10]">
        <DndContext sensors={sensors} collisionDetection={pointerWithin} onDragEnd={handleDragEnd}>
          <div className="flex gap-3 p-4 h-full w-full justify-between">
            {/* Render alle kolommen */}
            {(Object.keys(columns) as Array<keyof ScrumColumns>).map((colKey) => (
              <ScrumColumn 
                key={colKey}
                id={colKey} 
                title={colKey.replace(/([A-Z])/g, ' $1').toUpperCase()} 
                items={columns[colKey]} 
                setColumns={setColumns} 
                activeSprint={activeSprint} 
              />
            ))}
          </div>
        </DndContext>
      </main>
    </div>
  );
}
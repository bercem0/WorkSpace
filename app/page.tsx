import { prisma } from "@/src/lib/prisma";
import { Activity, Zap, Target, Box } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; 
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  // --- Session controle --- 
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/auth/signin"); // Gebruiker is niet ingelogd → redirect naar login
  }

  // --- User ID ophalen uit session ---
  const userId = (session.user as any).id;

  // --- Taken ophalen uit de database ---
  const allTasks = await prisma.task.findMany({ 
    where: { userId: userId },
    orderBy: { createdAt: 'desc' } 
  });

  const latestTask = allTasks[0];
  let activeSprint = "1";
  
  if (latestTask) {
    try { 
      // Active sprint ophalen uit de laatste taak
      activeSprint = JSON.parse(latestTask.description || "{}").sprint || "1"; 
    } catch { 
      activeSprint = "1"; 
    }
  }

  // --- Taken filteren voor de actieve sprint en percentage berekenen ---
  const activeSprintTasks = allTasks.filter(task => {
    try { 
      return JSON.parse(task.description || "{}").sprint === activeSprint; 
    } catch { 
      return false; 
    }
  }).map(task => {
    try {
      const data = JSON.parse(task.description || "{}");
      const checkFields: Record<string, string[]> = {
        review: ['geleerd', 'nietVoldoende', 'actiepunten'],
        retrospective: ['goed', 'beter', 'actiepunt'],
        daily: ['klaar', 'planningStatus', 'obstakels'],
        sprintplan: ['backlog', 'todo', 'dod']
      };
      const fields = checkFields[data.documentType] || [];
      const filled = fields.filter(f => data[f] && String(data[f]).trim().length > 0).length;
      return { ...task, data, percentage: fields.length > 0 ? Math.round((filled / fields.length) * 100) : 0 };
    } catch { 
      return { ...task, data: {}, percentage: 0 }; 
    }
  });

  // --- Gemiddeld percentage berekenen voor actieve sprint ---
  const totalPercentage = activeSprintTasks.length > 0
    ? Math.round(activeSprintTasks.reduce((acc, curr) => acc + curr.percentage, 0) / activeSprintTasks.length)
    : 0;

  return (
    <div className="space-y-10 p-6">
      {/* --- Header sectie --- */}
      <div className="flex justify-between items-end border-b border-teal-500/10 pb-6">
        <div>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter text-white">Neuro-Dashboard</h1>
          <p className="text-[10px] text-teal-400 font-mono tracking-[0.3em] uppercase mt-1">
            System Status: Connected // User: {session.user.email?.split('@')[0]} {/* Toon ingelogde gebruiker */}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* --- Progress Chart --- */}
        <div className="col-span-12 lg:col-span-4 bg-[#0a0e17]/50 border border-white/5 p-8 relative flex flex-col items-center justify-center min-h-[400px] rounded-3xl">
           <div className="absolute top-6 left-6 flex items-center gap-2 text-[10px] font-black text-teal-500 uppercase tracking-widest">
              <Activity size={14} /> Global Completion {/* Algemeen voortgangspercentage */}
           </div>
           <div className="relative w-56 h-56">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="transparent" stroke="rgba(20, 184, 166, 0.1)" strokeWidth="8" />
                <circle cx="50" cy="50" r="45" fill="transparent" stroke="#d946ef" strokeWidth="8" strokeDasharray="282.7" strokeDashoffset={282.7 - (282.7 * totalPercentage) / 100} strokeLinecap="round" style={{ filter: "drop-shadow(0 0 8px #d946ef)" }} />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-black text-white italic">{totalPercentage}%</span> {/* Percentage weergave */}
                <span className="text-[9px] text-teal-500 font-bold tracking-widest uppercase">Sprint {activeSprint}</span>
              </div>
           </div>
        </div>

        {/* --- Active Nodes List --- */}
        <div className="col-span-12 lg:col-span-8 bg-[#0a0e17]/50 border border-white/5 p-8 rounded-3xl">
          <div className="flex justify-between items-center mb-8">
              <h2 className="text-xs font-black uppercase italic tracking-widest flex items-center gap-2">
                  <Target className="text-fuchsia-500" size={16} /> Active Nodes {/* Lijst van actieve taken */}
              </h2>
          </div>
          <div className="space-y-6 overflow-y-auto max-h-[320px] pr-4 custom-scrollbar">
            {activeSprintTasks.length > 0 ? (
              activeSprintTasks.map((task) => (
                <div key={task.id} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-[8px] px-2 py-0.5 border border-fuchsia-500/30 text-fuchsia-400 font-mono uppercase rounded bg-fuchsia-500/5">
                        {task.data.documentType || 'Task'} {/* Type document */}
                      </span>
                      <span className="text-[11px] font-bold text-white uppercase tracking-tight">
                        {task.title} {/* Titel van de taak */}
                      </span>
                    </div>
                    <span className="text-[10px] font-black italic text-teal-400">{task.percentage}%</span> {/* Taakvoltooiing */}
                  </div>
                  <div className="h-1 w-full bg-white/5 overflow-hidden rounded-full">
                    <div 
                      className={`h-full transition-all duration-700 ${task.percentage === 100 ? 'bg-teal-400' : 'bg-fuchsia-500'}`} 
                      style={{ width: `${task.percentage}%` }} 
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-white/10 text-[10px] uppercase tracking-[0.5em] py-20 italic">No data detected</p>
            )}
          </div>
        </div>

        {/* --- Stats Cards --- */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-4 gap-6">
           {[
             { label: "Integrity", val: "100%", icon: Zap, color: "text-teal-400" },
             { label: "Nodes", val: activeSprintTasks.length, icon: Box, color: "text-fuchsia-500" },
             { label: "Cycle", val: `S-${activeSprint}`, icon: Target, color: "text-white" },
             { label: "Uptime", val: "24/7", icon: Activity, color: "text-teal-400" }
           ].map((stat, i) => (
             <div key={i} className="bg-[#0a0e17]/50 border border-white/5 p-5 flex items-center justify-between group rounded-2xl">
               <div>
                 <p className="text-[8px] font-black uppercase tracking-widest text-white/30 mb-1">{stat.label}</p> {/* Label */}
                 <p className={`text-lg font-black italic ${stat.color}`}>{stat.val}</p> {/* Waarde */}
               </div>
               <stat.icon className="text-white/5" size={24} /> {/* Icon */}
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
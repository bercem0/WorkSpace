import React from 'react';

// Footer component voor onderaan de pagina
export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/5 bg-[#0a0e17]/90 backdrop-blur-2xl py-16 overflow-hidden">
      {/* Achtergrondblobs voor visueel effect */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-600/10 blur-[100px] rounded-full"></div>
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-fuchsia-600/10 blur-[100px] rounded-full"></div>

      {/* Gradient lijn bovenaan de footer */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & beschrijving */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center border border-white/20 shadow-[0_0_20px_rgba(37,99,235,0.3)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <span className="text-sm font-black text-white tracking-widest">WS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-[0.1em] text-white uppercase italic leading-none">
                  Work<span className="text-blue-400">Space</span>
                </span>
                <span className="text-[8px] text-blue-500/60 font-bold tracking-[0.4em] mt-1">NEURAL INTERFACE</span>
              </div>
            </div>
            <p className="text-[11px] text-white/40 leading-relaxed uppercase tracking-widest font-medium max-w-[200px]">
              Optimizing human potential through <span className="text-white/60 font-bold">neural-driven</span> task management.
            </p>
          </div>

          {/* Navigatie links */}
          <div>
            <h3 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] mb-8 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-blue-400/30"></span> Navigation
            </h3>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-white/40">
              <li>
                <a href="/ " className="hover:text-white hover:translate-x-1 flex items-center gap-2 transition-all duration-300 group">
                  <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-all"></span>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/tasks" className="hover:text-white hover:translate-x-1 flex items-center gap-2 transition-all duration-300 group">
                  <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-all"></span>
                  Task Terminal
                </a>
              </li>
            </ul>
          </div>

          {/* Status sectie */}
          <div>
            <h3 className="text-[10px] font-black text-fuchsia-500 uppercase tracking-[0.4em] mb-8 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-fuchsia-500/30"></span> Status
            </h3>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-teal-500/5 border border-teal-500/20 shadow-[0_0_15px_rgba(20,184,166,0.05)]">
              {/* Status indicator met ping animatie */}
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-teal-500 animate-ping absolute inset-0"></div>
                <div className="w-2 h-2 rounded-full bg-teal-500 relative shadow-[0_0_8px_#14b8a6]"></div>
              </div>
              <span className="text-[10px] font-mono text-teal-400 uppercase tracking-tighter italic font-bold">
                Nodes: Operational
              </span>
            </div>
            <p className="text-[9px] text-white/20 mt-4 font-mono uppercase tracking-widest italic">Stable Build v2.0.4</p>
          </div>

          {/* Connectie/social links */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-8">Connect</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-blue-400 hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                {/* GitHub icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-fuchsia-400 hover:border-fuchsia-500/40 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(217,70,239,0.2)] transition-all duration-300">
                {/* Twitter icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Onderste sectie footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">
              © 2026 WORKSPACE NEURAL SYSTEMS
            </span>
            <div className="flex gap-4">
              <a href="#" className="text-[9px] font-bold text-white/10 hover:text-white/40 transition-colors uppercase tracking-[0.2em]">Privacy</a>
              <a href="#" className="text-[9px] font-bold text-white/10 hover:text-white/40 transition-colors uppercase tracking-[0.2em]">Protocol</a>
            </div>
          </div>
          
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-500/5 border border-blue-500/10 group">
             <svg className="text-blue-500/40 group-hover:text-blue-400 transition-colors" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
               <polyline points="4 17 10 11 4 5"></polyline>
               <line x1="12" y1="19" x2="20" y2="19"></line>
             </svg>
             <span className="text-[9px] font-black text-blue-500/40 tracking-[0.3em] uppercase">Core_Module: Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
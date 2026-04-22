"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

// Component voor uitloggen van de gebruiker
export default function LogoutButton() {
  return (
    <button 
      // Bij klikken wordt de gebruiker uitgelogd en naar de signin pagina gestuurd
      onClick={() => signOut({ callbackUrl: "/auth/signin" })}
      className="flex items-center gap-2 text-[10px] font-black text-white/40 hover:text-red-500 uppercase tracking-[0.3em] transition-all duration-300 group"
    >
      {/* Logout icoon met hover animatie */}
      <LogOut size={14} className="group-hover:rotate-12 transition-transform" />
      {/* Tekst van de knop */}
      Terminate Session
    </button>
  );
}
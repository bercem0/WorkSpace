import ScrumBoard from "@/components/ScrumBoard";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default async function ScrumboardPage() {
  // Haal de sessie op van de server om de rol van de gebruiker te checken
  const session = await getServerSession(authOptions);
  const isAdmin = session?.user?.role === "ADMIN";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* HEADER SECTIE */}
      <div className="p-6 border-b border-white/10 flex items-center justify-between">
         <h1 className="text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
            Scrum<span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Board</span>
          </h1>

          {/* Laat de Admin Beheer knop alleen zien aan gebruikers met de rol ADMIN */}
          {/* {isAdmin && (
            <Link 
              href="/admin" 
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-full font-bold transition-all shadow-lg"
            >
              <ShieldCheck size={20} />
              Admin Beheer
            </Link>
          )} */}
      </div>

      {/* SCRUM BOARD COMPONENT */}
      <div className="p-6">
        <ScrumBoard />
      </div>
    </div>
  );
}
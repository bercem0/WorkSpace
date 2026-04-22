import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/src/lib/prisma";
import { redirect } from "next/navigation";
import { Trash2, ShieldCheck, Mail, UserX } from "lucide-react";
import { deleteUser, deleteMessage } from "@/app/actions/admin-actions";

export default async function AdminPage() {
  // Controleer de sessie op de server om te zien wie er is ingelogd
  const session = await getServerSession(authOptions);

  // Beveiliging: Als de gebruiker geen ADMIN is, stuur hem direct terug naar het dashboard
  if (session?.user?.role !== "ADMIN") {
    redirect("/dashboard");
  }

  // Haal alle gebruikers op uit de database
  const users = await prisma.user.findMany();

  // Haal alle contactberichten op en sorteer ze op datum (nieuwste eerst)
  const messages = await prisma.contact.findMany({ 
    orderBy: { createdAt: 'desc' } 
  });

  return (
    <div className="min-h-screen bg-[#020617] p-10 text-white">
      {/* Pagina Titel */}
      <div className="flex items-center gap-4 mb-10">
        <ShieldCheck className="text-amber-500" size={40} />
        <h1 className="text-4xl font-bold text-amber-500">Admin Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* SECTIE: GEBRUIKERS BEHEREN */}
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <UserX className="text-blue-500" /> Gebruikers Beheren ({users.length})
          </h2>
          <div className="space-y-4">
            {users.map((u) => (
              <div key={u.id} className="p-4 bg-white/5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-all border border-transparent hover:border-white/10">
                <div>
                  <p className="font-bold text-gray-100">{u.name || "Geen naam"}</p>
                  <p className="text-sm text-gray-400">{u.email}</p>
                </div>
                
                <div className="flex items-center gap-4">
                  {/* Rol weergave met verschillende kleuren */}
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${u.role === 'ADMIN' ? 'bg-amber-500/20 text-amber-500' : 'bg-blue-500/20 text-blue-500'}`}>
                    {u.role}
                  </span>

                  {/* Verwijder knop: Een admin kan zichzelf niet verwijderen */}
                  {u.email !== session.user.email && (
                    <form action={async () => {
                      "use server";
                      await deleteUser(u.id);
                    }}>
                      <button className="text-red-500 hover:bg-red-500/20 p-2 rounded-lg transition-all" title="Verwijder Gebruiker">
                        <Trash2 size={20} />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTIE: CONTACT BERICHTEN BEHEREN */}
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Mail className="text-amber-500" /> Inkomende Berichten
          </h2>
          <div className="space-y-4">
            {messages.length === 0 ? (
              <p className="text-gray-500 italic">Geen berichten gevonden in de database.</p>
            ) : (
              messages.map((m) => (
                <div key={m.id} className="p-5 bg-white/5 border-l-4 border-amber-500 rounded-r-xl group relative">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-amber-500 font-bold">{m.name}</p>
                      <p className="text-xs text-gray-500">{m.email}</p>
                    </div>

                    {/* Verwijder knop voor berichten */}
                    <form action={async () => {
                      "use server";
                      await deleteMessage(m.id);
                    }}>
                      <button className="text-gray-500 hover:text-red-500 transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </form>
                  </div>

                  {/* Het eigenlijke bericht */}
                  <p className="text-sm text-gray-300 leading-relaxed bg-black/20 p-3 rounded-lg italic">
                    "{m.message}"
                  </p>

                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-[10px] text-gray-500">
                      Ontvangen op: {new Date(m.createdAt).toLocaleString('nl-NL')}
                    </p>
                    
                    {/* Beantwoorden via mailto link (opent mail programma van de admin) */}
                    <a 
                      href={`mailto:${m.email}?subject=Re: Uw bericht via ScrumBoard`}
                      className="text-xs bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-bold transition-all shadow-md"
                    >
                      Beantwoorden
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
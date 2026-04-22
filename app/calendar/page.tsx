import { prisma } from "@/src/lib/prisma";
import CalendarClient from "@/components/calendar/CalendarClient";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; 

// Kalender item interface
interface CalItem {
  id: string;
  userId: string;
  title: string;
  description: string | null;
  startDatetime: Date;
  endDatetime: Date;
}

export default async function CalendarPage() {
  // Server-side session ophalen
  const session = await getServerSession(authOptions) as {
    user: { id: string; email?: string; name?: string };
  } | null;

  const isReadOnly = !session || !session.user; // Alleen lezen als geen sessie

  let calendarItems: CalItem[] = [];

  if (!isReadOnly && session?.user?.id) {
    // Items van de gebruiker ophalen uit de database
    calendarItems = await prisma.calender.findMany({
      where: { userId: session.user.id },
      orderBy: { startDatetime: 'asc' }, // Sorteren op startdatum
    });
  }

  // Items formatteren voor client-side component
  const formattedTasks = calendarItems.map(item => ({
    id: item.id,
    userId: item.userId,
    title: item.title,
    description: item.description, 
    startDatetime: item.startDatetime.toISOString(),
    endDatetime: item.endDatetime.toISOString(),
  }));

  return (
    <div className="min-h-screen bg-[#070B24] p-8">
      {/* Preview modus melding */}
      {isReadOnly && (
        <div className="mb-6 p-4 bg-fuchsia-600/10 border border-fuchsia-500/30 rounded-xl text-center animate-pulse">
          <p className="text-fuchsia-400 text-sm font-bold italic tracking-widest uppercase">
            PREVIEW MODUS — LOG IN OM TE BEWERKEN
          </p>
        </div>
      )}

      {/* Kalender client component */}
      <CalendarClient initialTasks={formattedTasks} isReadOnly={isReadOnly} />
    </div>
  );
}
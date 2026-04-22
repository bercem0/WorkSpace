"use server"; 
// Dit bestand draait alleen op de server. Nodig voor server-side code in Next.js.

import { prisma } from "@/src/lib/prisma"; 
// Importeer Prisma client om met de database te werken.

import { revalidatePath } from "next/cache"; 
// Herlaadt een specifieke pagina cache zodat wijzigingen zichtbaar worden.

import { getServerSession } from "next-auth"; 
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; 
// Importeer NextAuth om de gebruikerssessie op de server te krijgen.

interface SessionUser {
  id: string;
  email?: string | null;
  name?: string | null;
}
// Type definitie voor de gebruiker uit de sessie.

async function getUserId(): Promise<string | null> {
  // Haal de ID van de ingelogde gebruiker op
  const session = await getServerSession(authOptions);
  const user = session?.user as SessionUser | undefined;
  return user?.id || null; // Geeft null terug als gebruiker niet ingelogd is
}

export async function createCalendarItem(data: {
  id?: string | null;
  titel: string;
  documentType: string;
  datum: string;
  startTime: string;
  endTime: string;
}) {
  // Functie om een kalenderitem aan te maken of bij te werken
  try {
    const userId = await getUserId(); // Haal de gebruiker ID op

    if (!userId) {
      // Als gebruiker niet ingelogd is, geef foutmelding
      return { success: false, error: "Log in om door te gaan." };
    }

    // Zet datum en tijd strings om naar JavaScript Date objecten
    const start = new Date(`${data.datum}T${data.startTime}:00`);
    const end = new Date(`${data.datum}T${data.endTime}:00`);

    if (data.id) {
      // Als er een ID is, update bestaand kalenderitem
      await prisma.calender.update({
        where: { 
          id: data.id,
          userId: userId // Zorg dat het item bij de gebruiker hoort
        },
        data: {
          title: data.titel,
          description: data.documentType,
          startDatetime: start,
          endDatetime: end,
        },
      });
    } else {
      // Anders, maak een nieuw kalenderitem aan
      await prisma.calender.create({
        data: {
          userId: userId,
          title: data.titel,
          description: data.documentType,
          startDatetime: start,
          endDatetime: end,
        },
      });
    }

    revalidatePath("/calendar"); 
    // Herlaad de kalenderpagina om de wijzigingen te laten zien

    return { success: true }; // Succes teruggeven
  } catch (error: unknown) {
    // Foutafhandeling en loggen
    const errorMessage = error instanceof Error ? error.message : "Onbekende fout";
    console.error("Calendar Save Error:", errorMessage);
    return { success: false, error: errorMessage };
  }
}

export async function deleteCalendarItem(id: string) {
  // Functie om een kalenderitem te verwijderen
  try {
    const userId = await getUserId();
    if (!userId) return { success: false, error: "Niet geautoriseerd." }; 
    // Gebruiker is niet ingelogd, dus niet toegestaan

    await prisma.calender.delete({
      where: { 
        id: id,
        userId: userId // Zorg dat de gebruiker zijn eigen item verwijdert
      },
    });

    revalidatePath("/calendar"); 
    // Herlaad de kalenderpagina na verwijderen

    return { success: true };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Verwijderen mislukt";
    console.error("Delete Error:", errorMessage);
    return { success: false, error: errorMessage };
  }
}
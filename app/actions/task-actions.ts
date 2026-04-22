"use server";
// Dit bestand draait alleen op de server, nodig voor server-side code in Next.js.

import { prisma } from "@/src/lib/prisma";
// Prisma client importeren om database queries uit te voeren.

import { revalidatePath } from "next/cache";
// Hiermee kan je een pagina herladen zodat de laatste data zichtbaar wordt.

import { getServerSession } from "next-auth"; 
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// NextAuth importeren om de sessie van de ingelogde gebruiker te krijgen.

interface SessionUser {
  id: string;
  email?: string | null;
  name?: string | null;
}
// Type definitie voor de user uit de sessie.

async function getAuthenticatedUser(): Promise<string | null> {
  // Haal de ID van de ingelogde gebruiker op
  const session = await getServerSession(authOptions);
  const user = session?.user as SessionUser | undefined;
  
  if (!user?.id) return null; // Geen gebruiker ingelogd
  return user.id;
}

export async function createNewTask(data: { titel: string; [key: string]: unknown }) {
  // Functie om een nieuwe taak aan te maken
  try {
    const userId = await getAuthenticatedUser();
    
    if (!userId) {
      // Gebruiker is niet ingelogd
      return { success: false, error: "Niet ingelogd. Log opnieuw in." };
    }

    await prisma.task.create({
      data: {
        title: data.titel,
        description: JSON.stringify(data), 
        userId: userId, // Koppelen aan ingelogde gebruiker
      },
    });

    revalidatePath("/tasks"); 
    // Herlaad de takenpagina om nieuwe taak te tonen

    return { success: true };
  } catch (error) {
    console.error("Create Error:", error);
    return { success: false, error: "Fout bij aanmaken" };
  }
}

export async function deleteTask(id: string) {
  // Functie om een taak te verwijderen
  try {
    const userId = await getAuthenticatedUser();
    if (!userId) return { success: false, error: "Niet geautoriseerd" };

    await prisma.task.delete({
      where: { 
        id: id,
        userId: userId // Alleen verwijderen als taak bij gebruiker hoort
      },
    });

    revalidatePath("/tasks"); 
    // Herlaad takenpagina na verwijderen

    return { success: true };
  } catch (error) {
    console.error("Delete Error:", error);
    return { success: false, error: "Verwijderen mislukt" };
  }
}

export async function updateTaskContent(id: string, fullData: { [key: string]: unknown }) {
  // Functie om de inhoud van een taak bij te werken
  try {
    const userId = await getAuthenticatedUser();
    if (!userId) return { success: false, error: "Geen sessie" };

    await prisma.task.update({
      where: { 
        id: id,
        userId: userId // Alleen update als taak bij gebruiker hoort
      },
      data: {
        description: JSON.stringify(fullData),
      },
    });
    
    revalidatePath("/tasks"); 
    // Herlaad takenpagina na update

    return { success: true };
  } catch (error) {
    console.error("Update Error:", error);
    return { success: false, error: "Update mislukt" };
  }
}
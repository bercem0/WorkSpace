"use server";
import { prisma } from "@/src/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { writeFile } from "fs/promises";
import { join } from "path";

// Functie om de profielfoto van de ingelogde gebruiker bij te werken
export async function updateProfileImage(formData: FormData) {
  try {
    // Verkrijg de sessie van de huidige gebruiker
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) throw new Error("Sessie niet gevonden");

    // Haal het geüploade bestand op uit het FormData object
    const file = formData.get("image") as File;
    if (!file) throw new Error("De bestand komt niet.");

    // Converteer het bestand naar een Buffer om op te slaan
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Maak een unieke bestandsnaam en bepaal het pad
    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
    const filePath = join(process.cwd(), "public", "uploads", fileName);
    const dbUrl = `/uploads/${fileName}`; // URL voor database / frontend gebruik

    // Schrijf het bestand naar de server
    await writeFile(filePath, buffer);

    // Update het image-veld van de gebruiker in de database
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: { image: dbUrl },
    });

    // Retourneer de URL van de nieuwe profielfoto
    return { url: updatedUser.image };
  } catch (error) {
    // Foutafhandeling: log de fout en gooi een nieuwe error
    console.error("KRITIEKE FOUT", error);
    throw new Error("Fout bij het bijwerken van de database.");
  }
}
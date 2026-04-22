"use server";

import { prisma } from "@/src/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function updateProfileInfo(formData: FormData) {
  // Verkrijg de huidige sessie van de gebruiker
  const session = await getServerSession(authOptions);
  if (!session?.user) throw new Error("Onbevoegd"); // Als er geen gebruiker is, geef een foutmelding

  // Haal de e-mail en geslacht uit het formulier
  const email = formData.get("email") as string;
  const gender = formData.get("gender") as string;

  // Werk de gebruikersgegevens bij in de database
  await prisma.user.update({
    where: { email: session.user.email! },
    data: { email, gender },
  });

  // Geef een succesmelding terug
  return { success: true };
}
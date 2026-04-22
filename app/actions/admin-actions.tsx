"use server";

import { prisma } from "@/src/lib/prisma";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// --- GEBRUIKER VERWIJDEREN ---
export async function deleteUser(userId: string) {
  const session = await getServerSession(authOptions);

  // Beveiliging: Alleen ADMIN mag dit doen
  if (session?.user?.role !== "ADMIN") {
    throw new Error("Niet geautoriseerd!");
  }

  try {
    await prisma.user.delete({
      where: { id: userId },
    });
    // Ververs de admin pagina zodat de lijst update
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Fout bij verwijderen gebruiker:", error);
    return { success: false, error: "Kon gebruiker niet verwijderen." };
  }
}

// --- BERICHT VERWIJDEREN ---
export async function deleteMessage(messageId: string) {
  const session = await getServerSession(authOptions);

  if (session?.user?.role !== "ADMIN") {
    throw new Error("Niet geautoriseerd!");
  }

  try {
    await prisma.contact.delete({
      where: { id: messageId },
    });
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Fout bij verwijderen bericht:", error);
    return { success: false, error: "Kon bericht niet verwijderen." };
  }
}
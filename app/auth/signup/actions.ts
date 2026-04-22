"use server";

import { prisma } from "@/src/lib/prisma";
import bcrypt from "bcrypt";
import { Role } from "@/src/generated"; 

// Functie om nieuwe gebruiker te registreren
export async function register(formData: FormData) {
  // Haal formulierdata op
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  
  const roleInput = formData.get("role") as string;
  // Bepaal rol: ADMIN of USER
  const role = (roleInput === "ADMIN" ? Role.ADMIN : Role.USER) as Role;

  // Haal gender op, standaard "other"
  const gender = formData.get("gender") as string || "other";

  // Verplichte velden check
  if (!email || !password) {
    return { error: "Email en wachtwoord zijn verplicht" };
  }

  try {
    // Controleer of gebruiker al bestaat
    const exists = await prisma.user.findUnique({
      where: { email },
    });

    if (exists) {
      return { error: "E-mail bestaat al!" };
    }

    // Hash wachtwoord voor veiligheid
    const hashed = await bcrypt.hash(password, 10);

    // Maak nieuwe gebruiker aan in database
    await prisma.user.create({
      data: {
        email: email,
        password: hashed,
        role: role,     
        gender: gender, 
        name: email.split('@')[0], // Default naam uit email
      },
    });

    // Succes response
    return { success: true };
    
  } catch (err) {
    // Foutafhandeling
    console.error("Register Error:", err);
    return { error: "Er is een technische." };
  }
}
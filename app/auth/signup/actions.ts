"use server";

import { prisma } from "@/src/lib/prisma";
import bcrypt from "bcrypt";
import { Role } from "@prisma/client"; // ❗ FIX

export async function register(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const roleInput = formData.get("role") as string;
  const role = roleInput === "ADMIN" ? Role.ADMIN : Role.USER;

  const gender = (formData.get("gender") as string) || "other";

  if (!email || !password) {
    return { error: "Email en wachtwoord zijn verplicht" };
  }

  try {
    const exists = await prisma.user.findUnique({
      where: { email },
    });

    if (exists) {
      return { error: "E-mail bestaat al!" };
    }

    const hashed = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        password: hashed,
        role,
        gender,
        name: email.split("@")[0],
      },
    });

    return { success: true };
  } catch (err) {
    console.error("Register Error:", err);
    return { error: "Er is een technische fout." };
  }
}
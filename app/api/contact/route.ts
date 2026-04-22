import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma"; 
// Prisma client importeren om met de database te werken

export async function POST(req: Request) {
  // Functie om contactform data op te slaan via POST request
  try {
    const { name, email, message } = await req.json();
    // JSON body uitlezen

    if (!name || !email || !message) {
      // Controleer of alle velden ingevuld zijn
      return NextResponse.json(
        { error: "Alle velden zijn verplicht." },
        { status: 400 }
      );
    }

    // Nieuwe contact entry in de database aanmaken
    const newContact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    // Succesvol response terugsturen
    return NextResponse.json({ success: true, data: newContact });
  } catch (error) {
    // Foutafhandeling
    console.error("Contact Error:", error);
    return NextResponse.json(
      { error: "Er is iets misgegaan bij het verzenden." },
      { status: 500 }
    );
  }
}
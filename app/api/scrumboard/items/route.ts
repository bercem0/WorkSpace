import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// Type definitie voor Scrum board data met kolommen
interface ScrumBoardData {
  backlog: string[];
  sprint: string[];
  todo: string[];
  progress: string[];
  done: string[];
}

// Type definitie voor veilige sessie van ingelogde gebruiker
interface SafeSession {
  user: {
    id: string;
    email?: string | null;
    name?: string | null;
    image?: string | null;
  };
}

// GET request: haal alle scrum board items van de gebruiker op
export async function GET(req: Request) {
  try {
    // Haal sprint naam op uit query params, standaard "Sprint 1"
    const { searchParams } = new URL(req.url);
    const sprint = searchParams.get("sprint") || "Sprint 1";

    // Haal sessie op van ingelogde gebruiker
    const session = (await getServerSession(authOptions)) as SafeSession | null;
    
    // Lege structuur voor het board, zodat altijd dezelfde kolommen bestaan
    const emptyBoard: ScrumBoardData = { backlog: [], sprint: [], todo: [], progress: [], done: [] };
    
    if (!session?.user?.id) {
      // Als gebruiker niet ingelogd is, geef leeg board terug
      return NextResponse.json(emptyBoard);
    }

    // Haal alle items van de gebruiker en specifieke sprint uit de database
    const items = await prisma.scrumItem.findMany({ 
      where: { 
        userId: session.user.id,
        sprint: sprint 
      } 
    });

    // Maak board kopie om items in te plaatsen
    const columns: ScrumBoardData = { ...emptyBoard };

    // Zet elk item in de juiste kolom gebaseerd op columnId
    items.forEach(item => {
      const colId = item.columnId as keyof ScrumBoardData;
      if (columns[colId]) {
        columns[colId].push(item.title);
      }
    });

    // Stuur het board terug als JSON
    return NextResponse.json(columns);
  } catch (error) {
    // Foutafhandeling bij ophalen van items
    return NextResponse.json({ error: "Fout bij ophalen" }, { status: 500 });
  }
}

// POST request: voeg een nieuw scrum item toe
export async function POST(req: Request) {
  try {
    // Controleer sessie van gebruiker
    const session = (await getServerSession(authOptions)) as SafeSession | null;
    if (!session?.user?.id) {
      // Niet ingelogd → 401 Unauthorized
      return NextResponse.json({ error: "Niet ingelogd" }, { status: 401 });
    }

    // Haal data uit JSON body van request
    const { title, columnId, sprint } = await req.json();
    
    // Maak een nieuw item in de database aan
    const newItem = await prisma.scrumItem.create({ 
      data: { 
        title, 
        columnId, 
        sprint: sprint || "Sprint 1", 
        userId: session.user.id 
      } 
    });
    
    // Stuur het nieuwe item terug als response
    return NextResponse.json(newItem);
  } catch (error: unknown) {
    // Foutafhandeling
    const errorMessage = error instanceof Error ? error.message : "Onbekende fout";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

// PATCH request: update van bestaand scrum item
export async function PATCH(req: Request) {
  try {
    const session = (await getServerSession(authOptions)) as SafeSession | null;
    if (!session?.user?.id) {
      // Niet ingelogd → 401 Unauthorized
      return NextResponse.json({ error: "Niet ingelogd" }, { status: 401 });
    }

    // Haal update gegevens op uit request body
    const { title, newColumnId, newTitle } = await req.json();

    // Update alle items met dezelfde titel van deze gebruiker
    await prisma.scrumItem.updateMany({
      where: { 
        title, 
        userId: session.user.id 
      },
      data: { 
        columnId: newColumnId || undefined, 
        title: newTitle || undefined 
      }
    });
    
    // Stuur succes response
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    // Foutafhandeling bij update
    const errorMessage = error instanceof Error ? error.message : "Onbekende fout";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

// DELETE request: verwijder scrum item
export async function DELETE(req: Request) {
  try {
    const session = (await getServerSession(authOptions)) as SafeSession | null;
    if (!session?.user?.id) {
      // Niet ingelogd → 401 Unauthorized
      return NextResponse.json({ error: "Niet ingelogd" }, { status: 401 });
    }

    // Haal title van te verwijderen item uit JSON body
    const { title } = await req.json();
    
    // Verwijder alle items met deze titel van deze gebruiker
    await prisma.scrumItem.deleteMany({ 
      where: { 
        title, 
        userId: session.user.id 
      } 
    });
    
    // Stuur succes response
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    // Foutafhandeling bij verwijderen
    const errorMessage = error instanceof Error ? error.message : "Onbekende fout";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
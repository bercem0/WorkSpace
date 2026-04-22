import { prisma } from "@/src/lib/prisma";
import TaskListClient from "@/components/tasks/TaskListClient";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; 
import { redirect } from "next/navigation";

// Zorg ervoor dat de pagina altijd dynamisch wordt gerenderd
export const dynamic = "force-dynamic";

interface CustomSession {
  user: {
    id: string;
  };
}

export default async function TasksPage() {
  // Verkrijg de huidige sessie van de gebruiker
  const session = (await getServerSession(authOptions)) as CustomSession | null;

  // Redirect naar inlogpagina als er geen sessie is
  if (!session || !session.user) {
    redirect("/auth/signin");
  }

  // Haal alle taken van de ingelogde gebruiker op, gesorteerd op aanmaakdatum
  const tasks = await prisma.task.findMany({
    where: {
      userId: session.user.id
    },
    orderBy: { createdAt: "desc" },
  });

  // Geef de TaskListClient component weer met de opgehaalde taken
  return <TaskListClient initialTasks={tasks} />;
}
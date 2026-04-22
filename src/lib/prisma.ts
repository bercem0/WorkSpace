// Importeer de MariaDB adapter en de Prisma Client
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
// import { PrismaClient } from "../generated"; // Gemaakt door Prisma generator
import { PrismaClient } from "@prisma/client";
// Maak een globale variabele aan voor Prisma om meerdere instanties in dev te voorkomen
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};


// Configuratie van de MariaDB adapter
const adapter = new PrismaMariaDb({
  host: "localhost",     // database host
  user: "root",          // database gebruiker
  password: "",          // wachtwoord (hier leeg)
  database: "workspace", // database naam
  port: 3306,            // standaard MariaDB/MySQL poort
});

// Maak een Prisma client aan met de adapter
// Als er al een globale prisma bestaat (bijv. bij hot-reload in dev), gebruik die
export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

// Alleen in development: sla de Prisma client op in globalThis
// Zo voorkom je dat Prisma meerdere verbindingen opent bij HMR (hot module reload)
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
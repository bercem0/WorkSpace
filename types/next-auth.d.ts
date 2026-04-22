// Importeer NextAuth en het DefaultSession type
import NextAuth, { DefaultSession } from "next-auth";

// Breid de types van NextAuth uit met extra velden voor User en Session
declare module "next-auth" {
  // Extra velden voor het User object
  interface User {
    id: string;               // unieke gebruikers-ID
    role: string;             // rol, bv. "USER" of "ADMIN"
    gender: string | null;    // geslacht, optioneel
    image: string | null;     // profielfoto, optioneel
  }

  // Pas het Session object aan zodat de extra velden beschikbaar zijn
  interface Session {
    user: {
      id: string;
      role: string;
      gender: string | null;
      image: string | null;
    } & DefaultSession["user"]; // behoudt standaard velden zoals name en email
  }
}

// Breid het JWT object uit zodat de extra velden ook beschikbaar zijn in het token
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
    gender: string | null;
    image: string | null;
  }
}
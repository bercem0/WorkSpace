"use client";

import { useSession, signOut } from "next-auth/react"; // Hook en functie van NextAuth
import Link from "next/link";

export function UserMenu() {
  const { data: session, status } = useSession(); 
  // Haalt sessie-informatie op en status: "loading", "authenticated", of "unauthenticated"

  // 1. Loading state tonen
  if (status === "loading") {
    return (
      <div className="w-32 h-8 bg-gray-200 rounded-full animate-pulse" />
      // Placeholder balk met pulserende animatie
    );
  }

  // 2. Niet ingelogd: toon inlog- en registratieknoppen
  if (!session) {
    return (
      <div className="flex items-center gap-3">
        <Link
          href="/auth/signin"
          className="px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition"
        >
          Inloggen
        </Link>
        <Link
          href="/auth/signup"
          className="px-4 py-2 rounded-xl bg-gray-800 text-white hover:bg-gray-700 transition"
        >
          Registreren
        </Link>
      </div>
    );
  }

  // 3. Ingelogd: toon uitlogknop
  return (
    <button
      onClick={() => signOut()} // Logt de gebruiker uit via NextAuth
      className="px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
    >
      Uitloggen
    </button>
  );
}
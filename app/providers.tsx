"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

// --- Providers component ---
// Dit component wikkelt de app in de NextAuth SessionProvider
// zodat alle kinderen toegang hebben tot de sessiegegevens
export default function Providers({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>; // SessionProvider toevoegen rond alle children
}
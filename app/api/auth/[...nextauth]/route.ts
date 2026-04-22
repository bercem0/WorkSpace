import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/src/lib/prisma";
import bcrypt from "bcrypt";

// NextAuth configuratie
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // --- GAST LOGIN LOGICA ---
        if (credentials?.email === "guest@proje.com" && credentials?.password === "guest123") {
          // Controleer of gastgebruiker al bestaat
          let guestUser = await prisma.user.findUnique({
            where: { email: "guest@proje.com" },
          });

          if (!guestUser) {
            // Als gastgebruiker niet bestaat, maak een nieuwe aan
            const hashedGuestPassword = await bcrypt.hash("guest123", 10);
            guestUser = await prisma.user.create({
              data: {
                email: "guest@proje.com",
                password: hashedGuestPassword,
                name: "Guest User",
                role: "USER",
                gender: "other",
              },
            });
          }

          // Retourneer gastgebruiker info
          return {
            id: guestUser.id,
            email: guestUser.email,
            role: guestUser.role,
            gender: guestUser.gender,
            image: guestUser.image,
          };
        }

        // Controleer of email en wachtwoord aanwezig zijn
        if (!credentials?.email || !credentials?.password) return null;

        // Zoek gebruiker in database
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) return null;

        // Vergelijk ingevoerd wachtwoord met opgeslagen hash
        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) return null;

        // Retourneer ingelogde gebruiker info
        return {
          id: user.id,
          email: user.email,
          role: user.role,
          gender: user.gender,
          image: user.image as string,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      // JWT token bijwerken bij inloggen of sessie-update
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;      // Extra velden van gebruiker
        token.gender = (user as any).gender;  // Extra velden van gebruiker
        token.picture = (user as any).image;  // Extra velden van gebruiker
      }
      if (trigger === "update" && session?.user) {
        // Bij sessie update, token velden bijwerken
        token.gender = session.user.gender;
        token.picture = session.user.image;
        token.email = session.user.email;
      }
      return token;
    },
    async session({ session, token }) {
      // Sessie vullen met JWT token data
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
        (session.user as any).gender = token.gender;
        session.user.image = token.picture as string;
      }
      return session;
    },
  },
  session: { strategy: "jwt" }, 
  // JWT sessies worden gebruikt in plaats van database sessies

  pages: { signIn: "/auth/signin" }, 
  // Aangepaste login pagina

  secret: process.env.NEXTAUTH_SECRET, 
  // Secret key voor JWT en sessiebeveiliging
};

// NextAuth handler exporteren voor GET en POST requests
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
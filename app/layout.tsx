import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"; /* Navigatiebalk component importeren */
import Footer from "@/components/footer"; /* Footer component importeren */
import Providers from "./providers"; /* Context providers importeren */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* --- Metadata voor de pagina --- */
export const metadata: Metadata = {
  title: "Workspace", /* Pagina titel */
  description: "Dashboard App", /* Pagina omschrijving */
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0E153A] h-full`}
      >
        <Providers> {/* Context providers toepassen */}
          <div className="flex flex-col min-h-screen">
            <Navbar> {/* Navigatiebalk */}
              <div className="flex flex-col min-h-[calc(100vh-64px)]"> 
                <main className="flex-grow w-full"> {/* Hoofd content */}
                  {children}
                </main>
                <Footer /> {/* Footer component */}
              </div>
            </Navbar>
          </div>
        </Providers>
      </body>
    </html>
  );
}
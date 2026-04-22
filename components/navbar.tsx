"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react"; // Sessie importeren
import { UserMenu } from "./user-menu";
import { 
  LayoutDashboard, 
  ClipboardList, 
  Calendar, 
  LayoutPanelLeft, 
  Mail, 
  User, 
  ShieldCheck // Admin icoon
} from "lucide-react";

// Props type voor de navigatielinks
interface NavLinkProps {
  href: string;
  icon: React.ReactNode; 
  label: string;
  adminOnly?: boolean; // Optionele prop voor admin-only links
}

// Hoofd Navbar component
export default function Navbar({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession(); // Haal de huidige sessie op
  const isAdmin = session?.user?.role === "ADMIN"; // Check of de gebruiker admin is

  return (
    <div className="flex flex-col min-h-screen bg-[#070B24] text-teal-200">
      
      {/* Header banner met logo */}
      <div className="relative w-full h-56 md:h-72 overflow-hidden border-b border-teal-400/20 bg-[#0E153A]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        
        <div className="relative w-full h-full flex items-center justify-center p-4">
          <Image
            src="/img/logo.png" 
            alt="WorkSpace Banner Logo"
            width={1200}
            height={400}
            className="object-contain w-full max-w-5xl h-auto invert brightness-200 drop-shadow-[0_0_30px_rgba(45,212,191,0.3)]"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#070B24] via-transparent to-transparent" />
      </div>

      <div className="flex flex-1">
        {/* Sidebar navigatie */}
        <aside className="w-64 bg-[#0E153A]/80 border-r border-teal-400/20 backdrop-blur-xl p-6 flex flex-col shrink-0">
          <nav className="flex flex-col gap-3 flex-1 sticky top-6">
            <h2 className="text-xs font-bold text-teal-500/50 uppercase tracking-[0.2em] mb-2 px-4">Menu</h2>
            
            {/* Navigatielinks */}
            <NavLink href="/" icon={<LayoutDashboard size={20}/>} label="Dashboard" />
            <NavLink href="/tasks" icon={<ClipboardList size={20}/>} label="Taken" />
            <NavLink href="/scrumboard" icon={<LayoutPanelLeft size={20}/>} label="Scrumboard" />
            <NavLink href="/calendar" icon={<Calendar size={20}/>} label="Agenda" />
            <NavLink href="/contact" icon={<Mail size={20}/>} label="Contact" />
            <NavLink href="/profile" icon={<User size={20}/>} label="Profiel" />

            {/* ADMIN SECTIE: Alleen zichtbaar als de gebruiker een ADMIN is */}
            {isAdmin && (
              <>
                <h2 className="text-xs font-bold text-amber-500/50 uppercase tracking-[0.2em] mt-6 mb-2 px-4">Admin</h2>
                <NavLink 
                  href="/admin" 
                  icon={<ShieldCheck size={20} className="text-amber-500" />} 
                  label="Beheer" 
                />
              </>
            )}
            
            {/* Gebruikersmenu onderaan de sidebar */}
            <div className="mt-auto pt-6 border-t border-teal-400/10">
              <UserMenu />
            </div>
          </nav>
        </aside>

        {/* Hoofd content area */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto bg-[#0E153A]/30 rounded-[2.5rem] border border-teal-400/10 p-10 shadow-2xl backdrop-blur-sm">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

// Component voor individuele navigatielinks
function NavLink({ href, icon, label }: NavLinkProps) {
  return (
    <Link 
      href={href} 
      className="flex items-center gap-4 px-5 py-3.5 rounded-2xl hover:bg-teal-400/10 hover:text-white transition-all group border border-transparent hover:border-teal-400/20"
    >
      {/* Icoon met hover animatie */}
      <span className="text-teal-400 group-hover:scale-110 group-hover:text-fuchsia-400 transition-all duration-300">
        {icon}
      </span>
      {/* Label tekst */}
      <span className="font-semibold tracking-wide text-sm">
        {label}
      </span>
    </Link>
  );
}
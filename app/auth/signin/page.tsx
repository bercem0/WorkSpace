"use client";

import { signIn } from "next-auth/react";
import { useState, FormEvent } from "react";

// Inlogpagina component
export default function SignInPage() {
  const [error, setError] = useState(""); // Foutmelding tonen
  const [loading, setLoading] = useState(false); // Laadstatus

  // Form submit handler
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Form data ophalen
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Probeer in te loggen met credentials
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      // Foutmelding tonen bij verkeerde inloggegevens
      setError("Email of wachtwoord klopt niet.");
      setLoading(false);
      return;
    }

    // Succesvolle login → redirect naar home
    window.location.href = "/";
  }

  // Gastmodus login
  async function handleGuestLogin() {
    setLoading(true);
    const res = await signIn("credentials", {
      email: "guest@proje.com",
      password: "guest123", 
      redirect: false,
    });

    if (res?.error) {
      setError("Gastmodus is momenteel niet beschikbaar.");
      setLoading(false);
      return;
    }
    // Succesvolle gast login → redirect naar tasks
    window.location.href = "/tasks";
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#0E153A] px-4 font-sans text-white overflow-hidden">
      {/* Achtergrond effecten */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[45%] bg-indigo-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative w-full max-w-[420px]">
        {/* Logo en titel */}
        <div className="mb-8 flex flex-col items-center">
          <div className="w-16 h-16 rounded-[1.25rem] bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg flex items-center justify-center border border-white/20 shadow-2xl mb-4 transform hover:scale-105 transition-transform duration-300">
            <span className="text-2xl font-black tracking-tighter text-white">WS</span>
          </div>
          <h1 className="text-3xl font-black tracking-[0.15em] text-white uppercase italic">
            Work<span className="text-blue-400/80">Space</span>
          </h1>
          <div className="h-0.5 w-10 bg-blue-500/50 mt-2 rounded-full"></div>
        </div>

        {/* Inlogformulier */}
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-b from-blue-500/20 to-transparent rounded-[2.5rem] blur opacity-30"></div>
          <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
            <h2 className="text-xl font-bold text-white text-center mb-8 tracking-tight uppercase">
              Inloggen
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email & Wachtwoord velden */}
              <div className="space-y-5">
                <div className="group">
                  <label className="text-[10px] font-bold text-blue-300/60 uppercase tracking-[0.2em] ml-1 mb-2 block">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@company.com"
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:bg-white/10 transition-all duration-300 shadow-inner"
                  />
                </div>
                <div className="group">
                  <label className="text-[10px] font-bold text-blue-300/60 uppercase tracking-[0.2em] ml-1 mb-2 block">Wachtwoord</label>
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="••••••••"
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:bg-white/10 transition-all duration-300 shadow-inner"
                  />
                </div>
              </div>

              {/* Foutmelding */}
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 py-3 rounded-xl text-red-400 text-center text-[11px] font-bold tracking-wide italic">
                  {error}
                </div>
              )}

              {/* Buttons: login & gastmodus */}
              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-white text-[#0E153A] p-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-50 transition-all active:scale-[0.97] shadow-[0_10px_20px_-5px_rgba(255,255,255,0.2)] disabled:opacity-50"
                >
                  {loading ? "Verifying..." : "Access Terminal"}
                </button>

                <button
                  type="button"
                  onClick={handleGuestLogin}
                  disabled={loading}
                  className="w-full bg-transparent border border-blue-500/30 text-blue-300/80 p-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-500/10 transition-all active:scale-[0.97] disabled:opacity-50"
                >
                  Proberen als Gast
                </button>
              </div>

              {/* Signup link */}
              <div className="text-center pt-2">
                <p className="text-white/40 text-[11px] font-medium tracking-tight">
                  {`Don't`} have an account?{" "}
                  <a href="/auth/signup" className="text-white font-bold hover:text-blue-400 transition-colors underline underline-offset-8 decoration-blue-500/50">
                    SIGN UP
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
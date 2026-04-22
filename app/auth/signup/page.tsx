"use client";

import { register } from "./actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface RegisterResponse {
  success?: boolean;
  error?: string;
}

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState(""); // Foutmelding state
  const [loading, setLoading] = useState(false); // Loading state

  // Formulier actie handler
  async function handleFormAction(formData: FormData) {
    setLoading(true);
    setError("");

    try {
      const result = (await register(formData)) as RegisterResponse;

      if (result?.success) {
        // Succes: doorsturen naar inlogpagina
        router.push("/auth/signin");
      } else {
        // Fout: weergeven
        setError(result?.error || "Registratie mislukt.");
        setLoading(false);
      }
    } catch (err) {
      setError("Er is een onverwachte fout opgetreden.");
      setLoading(false);
    }
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#0E153A] px-4 font-sans text-white overflow-hidden">
      {/* Achtergrond decoratie */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] right-[-5%] w-[50%] h-[50%] bg-indigo-500/10 blur-[130px] rounded-full"></div>
        <div className="absolute bottom-[-15%] left-[-5%] w-[50%] h-[50%] bg-blue-500/10 blur-[130px] rounded-full"></div>
      </div>

      {/* Hoofd container */}
      <div className="relative w-full max-w-[420px] py-10">
        {/* Logo en titel */}
        <div className="mb-10 flex flex-col items-center">
          <div className="w-16 h-16 rounded-[1.25rem] bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg flex items-center justify-center border border-white/20 shadow-2xl mb-4 transform hover:scale-105 transition-all duration-500">
            <span className="text-2xl font-black tracking-tighter text-white">WS</span>
          </div>
          <h1 className="text-3xl font-black tracking-[0.15em] text-white uppercase italic">
            Work<span className="text-blue-400/80">Space</span>
          </h1>
          <p className="text-blue-200/40 text-[10px] mt-2 tracking-[0.4em] uppercase font-bold">
            Create New Account
          </p>
        </div>

        {/* Formulier container */}
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-b from-indigo-500/20 to-transparent rounded-[2.5rem] blur opacity-30"></div>

          <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
            <h2 className="text-xl font-bold text-white text-center mb-8 tracking-tight uppercase">
              Registreren
            </h2>

            {/* Formulier */}
            <form
              action={handleFormAction} // Verzend handler
              encType="multipart/form-data"
              className="space-y-6"
            >
              <div className="space-y-5">
                {/* Email */}
                <div className="group">
                  <label className="text-[10px] font-bold text-blue-300/60 uppercase tracking-[0.2em] ml-1 mb-2 block">
                    E-mail Adres
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@workspace.com"
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:bg-white/10 transition-all duration-300"
                  />
                </div>

                {/* Wachtwoord */}
                <div className="group">
                  <label className="text-[10px] font-bold text-blue-300/60 uppercase tracking-[0.2em] ml-1 mb-2 block">
                    Wachtwoord
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="••••••••"
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:bg-white/10 transition-all duration-300"
                  />
                </div>

                {/* Rol select */}
                <div className="group">
                  <label className="text-[10px] font-bold text-blue-300/60 uppercase tracking-[0.2em] ml-1 mb-2 block">
                    Rol
                  </label>
                  <select
                    name="role"
                    required
                    className="w-full bg-white/5 border border-white/10 p-3 rounded-2xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:bg-white/10 transition-all duration-300"
                  >
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                  </select>
                </div>

                {/* Gender select */}
                <div className="group">
                  <label className="text-[10px] font-bold text-blue-300/60 uppercase tracking-[0.2em] ml-1 mb-2 block">
                    Gender
                  </label>
                  <select
                    name="gender"
                    required
                    className="w-full bg-white/5 border border-white/10 p-3 rounded-2xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:bg-white/10 transition-all duration-300"
                  >
                    <option value="female">Vrouw</option>
                    <option value="male">Man</option>
                    <option value="other">Anders</option>
                  </select>
                </div>

                {/* Profielfoto optioneel */}
                <div className="group">
                  <label className="text-[10px] font-bold text-blue-300/60 uppercase tracking-[0.2em] ml-1 mb-2 block">
                    Profielfoto (optioneel)
                  </label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    className="w-full bg-white/5 border border-white/10 p-3 rounded-2xl text-white text-sm"
                  />
                </div>
              </div>

              {/* Foutmelding */}
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-xl text-red-400 text-[11px] text-center font-bold italic">
                  {error}
                </div>
              )}

              {/* Verzend knop */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-[#0E153A] p-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-indigo-50 transition-all active:scale-[0.97] shadow-[0_10px_20px_-5px_rgba(255,255,255,0.2)] disabled:opacity-50"
              >
                {loading ? "Verwerken..." : "Account Aanmaken"}
              </button>

              {/* Link naar inloggen */}
              <div className="text-center pt-2">
                <p className="text-white/40 text-[11px] font-medium tracking-tight">
                  Al een account?{" "}
                  <a
                    href="/auth/signin"
                    className="text-white font-bold hover:text-blue-400 transition-colors underline underline-offset-8 decoration-blue-500/50"
                  >
                    LOG HIER IN
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
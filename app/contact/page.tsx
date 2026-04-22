'use client';

import { useState } from 'react';

export default function ContactTwoStep() {
  // --- STATE HOOKS ---
  const [showForm, setShowForm] = useState<boolean>(false); // Toon hero of formulier
  const [submitted, setSubmitted] = useState<boolean>(false); // Formulier is verzonden?
  const [loading, setLoading] = useState<boolean>(false); // Verzenden bezig?
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // --- FORMULIER VERZEND HANDLER ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // Verzending gelukt
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
          setSubmitted(false);
          setShowForm(false); // Formulier verbergen
        }, 5000);
      } else {
        alert("Er is een fout opgetreden. Probeer opnieuw."); // Server fout
      }
    } catch (error) {
      console.error("Verzendfout:", error);
      alert("Netwerkfout. Controleer uw verbinding."); // Netwerk fout
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* --- FASE 1: HERO --- */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${showForm ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/img/contact.webp')` }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 min-h-screen flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center text-center text-white px-6">
            <h1 className="text-5xl md:text-6xl font-light tracking-wide">CONTACT</h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl">
              Uw reis begint hier. Wij vertellen u graag meer over dit unieke en spectaculaire project.
            </p>

            <button
              onClick={() => setShowForm(true)} // Toon formulier
              aria-label="Ga verder"
              className="mt-10 group"
            >
              <div className="w-8 h-14 border-2 border-white/60 rounded-full flex items-start justify-center">
                <div className="w-1 h-4 bg-white/80 mt-2 rounded group-hover:h-6 transition-all" />
              </div>
              <span className="mt-2 block text-sm text-white/70">Ga verder</span>
            </button>
          </div>
        </div>
      </div>

      {/* --- FASE 2: FORMULIERPANEEL --- */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${showForm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/img/download.jpg')` }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
          <div className="w-full max-w-lg">

            {/* --- TITEL --- */}
            <div className="text-center text-white mb-6">
              <h2 className="tracking-widest text-sm uppercase">Sublime Contact Form</h2>
              <h1 className="mt-2 text-2xl font-semibold uppercase">Neem Contact Op</h1>
            </div>

            {/* TERUG KNOP */}
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setShowForm(false)} // Terug naar hero
                className="text-white/70 hover:text-white text-sm underline underline-offset-4 transition-colors"
              >
                ← Terug
              </button>
            </div>

            {submitted ? (
              // --- SUCCES MELDING ---
              <div className="bg-green-600/20 border border-green-500/50 text-green-200 rounded-2xl p-8 text-center animate-in zoom-in-95 duration-300">
                <div className="text-3xl mb-4">✓</div>
                <p className="font-medium">Bedankt voor uw bericht!</p>
                <p className="text-sm text-green-200/70 mt-2">We nemen zo snel mogelijk contact met u op.</p>
              </div>
            ) : (
              // --- FORMULIER ---
              <form
                onSubmit={handleSubmit}
                className="bg-black/50 border border-white/10 rounded-2xl p-8 space-y-6 text-white backdrop-blur-md shadow-2xl"
              >
                {/* NAAM */}
                <div>
                  <label className="block text-[10px] tracking-[0.2em] mb-2 text-white/60 font-bold uppercase">
                    Naam
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Uw volledige naam"
                    className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 placeholder:text-white/20 transition-all"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-[10px] tracking-[0.2em] mb-2 text-white/60 font-bold uppercase">
                    E-mailadres
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="mail@voorbeeld.com"
                    className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 placeholder:text-white/20 transition-all"
                  />
                </div>

                {/* BERICHT */}
                <div>
                  <label className="block text-[10px] tracking-[0.2em] mb-2 text-white/60 font-bold uppercase">
                    Uw Bericht
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Wat wilt u ons vertellen?"
                    className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none py-2 placeholder:text-white/20 transition-all resize-none"
                  />
                </div>

                {/* VERSTUREN KNOP */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-4 bg-white text-black font-bold tracking-widest py-4 rounded-xl hover:bg-slate-200 disabled:bg-white/50 disabled:cursor-not-allowed transition-all active:scale-[0.98]"
                >
                  {loading ? 'VERZENDEN...' : 'VERSTUREN'}
                </button>
              </form>
            )}

            {/* FOOTER */}
            <div className="mt-8 text-center text-[10px] text-white/40 tracking-widest uppercase">
              © 2026 Sublime. Alle rechten voorbehouden.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
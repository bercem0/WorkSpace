"use client";

import { useSession } from "next-auth/react";
import { useState, useRef } from "react";
import { updateProfileImage } from "./updateImage";
import { updateProfileInfo } from "./updateInfo";
import { Camera, Save, Loader2 } from "lucide-react";

export default function ProfilePage() {
  // --- SESSION & STATE HOOKS ---
  const { data: session, update } = useSession();
  const [imageLoading, setImageLoading] = useState(false); // Profielfoto upload status
  const [infoLoading, setInfoLoading] = useState(false); // Profiel info update status
  const [previewImage, setPreviewImage] = useState<string | null>(null); // Voorvertoning van geselecteerde afbeelding
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // Geselecteerd bestand
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- LAADSTATUS ---
  if (!session) return <div className="p-20 text-white text-center">Laden...</div>;

  const user = session.user;
  const defaultAvatar =
    user.gender === "female" ? "/gender/female.png" :
    user.gender === "male" ? "/gender/male.png" : "/gender/other.png";

  // --- BESTAND SELECTEREN ---
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewImage(URL.createObjectURL(file)); // Toon preview
    }
  };

  // --- PROFIELFOTO OPSLAAN ---
  async function handleImageSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedFile) return;

    setImageLoading(true);
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const result = await updateProfileImage(formData);

      // Session updaten met nieuwe foto
      await update({
        ...session,
        user: { ...session.user, image: result.url }
      });

      setSelectedFile(null);
      alert("Profielfoto succesvol opgeslagen!");
    } catch (err) {
      console.error(err);
      alert("Fout: Bestand kon niet worden verzonden.");
    } finally {
      setImageLoading(false);
    }
  }

  // --- PROFIELINFO BIJWERKEN ---
  async function handleInfoSubmit(formData: FormData) {
    setInfoLoading(true);
    try {
      await updateProfileInfo(formData);

      // Session updaten met nieuwe info
      await update({
        ...session,
        user: {
          ...session.user,
          email: formData.get("email") as string,
          gender: formData.get("gender") as string,
        },
      });

      alert("Uw gegevens zijn succesvol bijgewerkt!");
    } catch (err) {
      alert("Er is een fout opgetreden bij het bijwerken.");
    } finally {
      setInfoLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#020617] p-8 text-white flex justify-center">
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* --- LINKER KANT: PROFIELFOTO --- */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative group w-48 h-48">
              <img
                src={previewImage || user.image || defaultAvatar}
                className="w-full h-full rounded-3xl object-cover ring-2 ring-white/10 shadow-2xl"
                alt="Profiel"
              />
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="absolute inset-0 bg-black/40 rounded-3xl opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer transition-all"
              >
                <Camera size={32} />
              </div>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
                accept="image/*"
              />
            </div>

            <form onSubmit={handleImageSubmit} className="w-full">
              <button
                type="submit"
                disabled={!selectedFile || imageLoading}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-800 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
              >
                {imageLoading ? <Loader2 className="animate-spin" /> : "Foto opslaan"}
              </button>
            </form>
          </div>

          {/* --- RECHTER KANT: PROFIELINFO --- */}
          <form action={handleInfoSubmit} className="space-y-6">
            <div>
              <label className="text-gray-400 text-sm mb-2 block">E-mailadres</label>
              <input
                type="email"
                name="email"
                defaultValue={user.email || ""}
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-blue-500 transition-all"
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm mb-2 block">Geslacht</label>
              <select
                name="gender"
                defaultValue={user.gender || "other"}
                className="w-full bg-[#0f172a] border border-white/10 p-4 rounded-xl outline-none focus:border-blue-500"
              >
                <option value="male">Man (👨)</option>
                <option value="female">Vrouw (👩)</option>
                <option value="other">Anders</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={infoLoading}
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
            >
              {infoLoading ? <Loader2 className="animate-spin" /> : <><Save size={20} /> Gegevens bijwerken</>}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
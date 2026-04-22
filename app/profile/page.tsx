"use client";

import { useSession } from "next-auth/react";
import { useState, useRef, useEffect } from "react";
import { updateProfileImage } from "./updateImage";
import { updateProfileInfo } from "./updateInfo";
import { Camera, Save, Loader2 } from "lucide-react";

export default function ProfilePage() {
  // status bilgisini ekleyerek yükleme durumunu daha iyi yönetiyoruz
  const { data: session, update, status } = useSession();

  const [imageLoading, setImageLoading] = useState(false);
  const [infoLoading, setInfoLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Session yüklenirken bekleme ekranı
  if (status === "loading") {
    return <div className="p-20 text-white text-center">Laden...</div>;
  }

  // Session yoksa yönlendirme veya hata mesajı
  if (!session || !session.user) {
    return <div className="p-20 text-white text-center">U bent niet ingelogd.</div>;
  }

  const user = session.user;

  // Cinsiyete göre default avatar belirleme
  const defaultAvatar =
    user.gender === "female"
      ? "/gender/female.png"
      : user.gender === "male"
      ? "/gender/male.png"
      : "/gender/other.png";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // Memory leak önlemek için eski preview URL'ini temizlemek iyi bir pratik
      if (previewImage) URL.revokeObjectURL(previewImage);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  async function handleImageSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedFile) return;

    setImageLoading(true);
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const result = await updateProfileImage(formData);

      // ✅ NextAuth session güncellemesi
      // Sadece değişen alanı göndermek genellikle yeterlidir
      await update({
        image: result.url,
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

  async function handleInfoSubmit(formData: FormData) {
    setInfoLoading(true);

    try {
      await updateProfileInfo(formData);

      // ✅ NextAuth session güncellemesi
      // Form verilerini alıp session'ı tetikliyoruz
      await update({
        email: formData.get("email"),
        gender: formData.get("gender"),
      });

      alert("Uw gegevens zijn succesvol bijgewerkt!");
    } catch (err) {
      console.error(err);
      alert("Er is bir hata oluştu.");
    } finally {
      setInfoLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#020617] p-8 text-white flex justify-center">
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* PROFIEL FOTO */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative group w-48 h-48">
              <img
                src={previewImage || user.image || defaultAvatar}
                className="w-full h-full rounded-3xl object-cover ring-2 ring-white/10 shadow-2xl"
                alt="Profiel"
              />

              <div
                onClick={() => fileInputRef.current?.click()}
                className="absolute inset-0 bg-black/40 rounded-3xl opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer transition-opacity"
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
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-800 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
              >
                {imageLoading ? <Loader2 className="animate-spin" /> : "Foto opslaan"}
              </button>
            </form>
          </div>

          {/* PROFIEL INFO */}
          <form action={handleInfoSubmit} className="space-y-6">
            <div>
              <label className="text-gray-400 text-sm mb-2 block">E-mailadres</label>
              <input
                type="email"
                name="email"
                required
                defaultValue={user.email || ""}
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm mb-2 block">Geslacht</label>
              <select
                name="gender"
                defaultValue={user.gender || "other"}
                className="w-full bg-[#0f172a] border border-white/10 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="male">Man (👨)</option>
                <option value="female">Vrouw (👩)</option>
                <option value="other">Anders</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={infoLoading}
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
            >
              {infoLoading ? <Loader2 className="animate-spin" /> : <><Save size={20} /> Gegevens bijwerken</>}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createNewTask } from "@/app/actions/task-actions";

interface TaskFormModalProps {
  open: boolean; // Bepaalt of de modal geopend is
  setOpen: (open: boolean) => void; // Functie om de modal te openen of sluiten
}

export default function TaskFormModal({ open, setOpen }: TaskFormModalProps) {
  const [loading, setLoading] = useState(false); // Houdt bij of de form bezig is met submitten

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Voorkomt dat de pagina herlaadt bij submit
    setLoading(true); // Zet loading status aan

    // Haal de waarden uit de form
    const formData = new FormData(e.currentTarget);
    const data = {
      titel: formData.get("titel") as string, // Titel van het document
      sprint: formData.get("sprint") as string, // Sprint nummer
      documentType: formData.get("type") as string, // Template type
      datum: formData.get("datum") as string, // Datum van het document
    };

    // Verstuur de data naar de backend
    const res = await createNewTask(data);
    if (res.success) {
      setOpen(false); // Sluit de modal bij succes
      (e.target as HTMLFormElement).reset(); // Reset de form
    }
    setLoading(false); // Zet loading status uit
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Modal inhoud */}
      <DialogContent className="bg-[#0E153A] border border-teal-400/30 text-white">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Header van de modal */}
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-teal-400 italic uppercase">
              Nieuw Document {/* Titel van de modal */}
            </DialogTitle>
          </DialogHeader>
          
          {/* Form velden */}
          <div className="space-y-4">
            {/* Titel veld */}
            <div className="space-y-2">
              <Label className="text-teal-500 font-bold text-[10px] uppercase">Titel</Label>
              <Input 
                name="titel" 
                className="bg-[#070B24] border-teal-500/20 text-teal-100" 
                placeholder="Bijv: Sprint 1 Review" 
                required 
              />
            </div>

            {/* Datum veld */}
            <div className="space-y-2">
              <Label className="text-teal-500 font-bold text-[10px] uppercase">Datum</Label>
              <Input 
                name="datum" 
                type="date" 
                defaultValue={new Date().toISOString().split('T')[0]} 
                className="bg-[#070B24] border-teal-500/20 text-teal-100"
                required 
              />
            </div>
            
            {/* Sprint en Template Type */}
            <div className="grid grid-cols-2 gap-4">
              {/* Sprint */}
              <div className="space-y-2">
                <Label className="text-teal-500 font-bold text-[10px] uppercase">Sprint</Label>
                <Input name="sprint" type="number" defaultValue="1" className="bg-[#070B24] border-teal-500/20 text-teal-100" />
              </div>
              {/* Template Type */}
              <div className="space-y-2">
                <Label className="text-teal-500 font-bold text-[10px] uppercase">Template Type</Label>
                <select name="type" className="w-full h-10 px-3 bg-[#070B24] border border-teal-500/20 rounded-md text-teal-200 text-sm focus:outline-none">
                  <option value="review">Sprint Review</option>
                  <option value="retrospective">Retrospective</option>
                  <option value="sprintplan">Sprint Plan</option>
                  <option value="daily">Daily Scrum</option>
                  <option value="release">Release Plan</option>
                </select>
              </div>
            </div>
          </div>

          {/* Footer met submit knop */}
          <DialogFooter>
            <Button type="submit" disabled={loading} className="w-full bg-teal-400 text-[#070B24] font-black py-6">
              {loading ? "INITIALIZING..." : "GENERATE DOCUMENT"} {/* Knop tekst verandert tijdens loading */}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
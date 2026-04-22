import * as React from "react"
import { cn } from "@/lib/utils"

// Eenvoudige input component met Tailwind styling en klasse-combinatie
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type} // type van de input (text, number, date, etc.)
      className={cn(
        // basis styling: hoogte, breedte, padding, afgeronde hoeken, border en tekst
        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base outline-none transition-colors",
        className // extra classes kunnen meegegeven worden bij gebruik
      )}
      {...props} // overige props zoals value, onChange, placeholder, required, etc.
    />
  )
}

// Exporteer de component zodat deze elders gebruikt kan worden
export { Input }
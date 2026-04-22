import * as React from "react"
import { Label as LabelPrimitive } from "@radix-ui/react-label"
import { cn } from "@/lib/utils"

// Eenvoudige Label component gebaseerd op Radix UI Label
function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive>) {
  return (
    <LabelPrimitive
      // Standaard styling: kleine tekst, medium font-weight, en geen extra line-height
      className={cn("text-sm font-medium leading-none", className)}
      {...props} // overige props zoals htmlFor en children
    />
  )
}

// Exporteer de component zodat deze elders gebruikt kan worden
export { Label }
import * as React from "react"
import { cn } from "@/lib/utils" // ClassName helper

// Hoofd Card component (forwardRef voor ref support)
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref} 
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm", 
        className // Extra classes meegeven
      )}
      {...props} // Props zoals onClick, id, style, etc.
    />
  )
)
Card.displayName = "Card" // Naam voor DevTools

// CardHeader: voor de header sectie
const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
)

// CardTitle: voor de titel in de header
const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
)

// CardDescription: optionele beschrijving onder de titel
const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props} />
)

// CardContent: content gedeelte van de card
const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
)

export { Card, CardHeader, CardTitle, CardDescription, CardContent }
// Importeer helper libraries
import { clsx, type ClassValue } from "clsx" // clsx helpt bij het conditioneel samenvoegen van CSS-klassen
import { twMerge } from "tailwind-merge" // twMerge combineert Tailwind-klassen en verwijdert conflicten

// Functie om Tailwind-klassen netjes samen te voegen
export function cn(...inputs: ClassValue[]) {
  // clsx verwerkt arrays, strings en conditionele klassen
  // twMerge zorgt dat conflicterende Tailwind-klassen worden overschreven volgens laatste waarde
  return twMerge(clsx(inputs))
}
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility for conditionally joining Tailwind CSS classes.
 * Merges clsx output through tailwind-merge to resolve conflicts.
 *
 * @example
 * cn("px-4 py-2", isActive && "bg-accent", className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

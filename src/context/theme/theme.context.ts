'use client'

import { createContext, useContext } from "react"

export type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used within an ThemeProvider")
  return context
}


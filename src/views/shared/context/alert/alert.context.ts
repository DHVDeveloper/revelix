'use client'
import { createContext, useContext } from "react"
import { AlertData } from "./alert.interface"

interface AlertContextType {
  showAlert: (alert:AlertData) => void
}

export const AlertContext = createContext<AlertContextType | null>(null)

export const useAlertContext = () => {
  const context = useContext(AlertContext)
  if (!context) throw new Error("useAlert must be used within an AlertProvider")
  return context
}


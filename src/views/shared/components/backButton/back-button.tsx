"use client"
import { useRouter } from "next/navigation"
import { ArrowIcon } from "../../icons/arrow.icon"
import styles from "./back-button.module.css"

interface BackButtonProps {
  route: string
  children: React.ReactNode
}
export function BackButton({ route, children }: BackButtonProps) {
  const router = useRouter()
  
  return (
    <button
      className={`${styles.buttonBack}`}
      onClick={() => router.push(route)}
    >
      <ArrowIcon />
      {children}
    </button>
  )
}

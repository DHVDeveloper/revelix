"use client"

import utils from "@/views/shared/styles/utils.module.css"
import Image from "next/image"
import styles from "./header.module.css"
import { useRef, useState } from "react"
import { useClickOutside } from "@/hooks/use-click-outside"
import { authServices } from "@/application/service/auth.service"
import { useAlertContext } from "../../context/alert/alert.context"
import { useRouter } from "next/navigation"

export function Header() {
  const [isSignOutOpen, setIsSignOutOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const userSectionRef = useRef<HTMLDivElement>(null)
  const { showAlert } = useAlertContext()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useClickOutside(userSectionRef, () => {
    if (isSignOutOpen && !isAnimating) {
      handleToggleSignOut()
    }
  })

  const handleToggleSignOut = () => {
    if (isAnimating) return

    if (isSignOutOpen) {
      setIsAnimating(true)
      setTimeout(() => {
        setIsSignOutOpen(false)
        setIsAnimating(false)
      }, 200)
    } else {
      setIsSignOutOpen(true)
    }
  }

  const handleLogout = async () => {
    setIsLoading(true)
    const response = await authServices.logout()
    if (!response.success) {
        showAlert({
            type: "danger",
            message: response.error ?? "Error sign out",
        })
        setIsLoading(false)
        return
    }
    router.push("/login")
    setIsLoading(false)
  }

  return (
    <div className={styles.main}>
      <div ref={userSectionRef} className={styles.userSection}>
        <div className={styles.imageContainer} onClick={handleToggleSignOut}>
          <Image
            width={38}
            height={38}
            alt="userImage"
            src="/images/user.png"
          />
        </div>

        <button
          onClick={handleLogout}
          disabled={isLoading}
          className={`${styles.signOutButton} ${utils.button} ${
            utils.highlightButton
          } ${isSignOutOpen ? "animate-fade-in" : "animate-fade-out"}`}
          style={{ display: isSignOutOpen || isAnimating ? "flex" : "none" }}
        >
          {isLoading ? 'Loading...' : 'Sign out' }
        </button>
      </div>
    </div>
  )
}

'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AppConfig } from "@/lib/environments"
import { getCookie } from "@/utils/cookies"
import { AuthContext } from "./auth.context"

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const token = await getCookie(AppConfig.COOKIE_NAME)
      if (!token) {
        setAuthenticated(false)
        router.push("/login")
      } else {
        setAuthenticated(true)
      }
    }
    checkAuth()
  }, [router])

  const handleAuthenticated = (isAuthenticated:boolean) => {
    setAuthenticated(isAuthenticated)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, handleAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

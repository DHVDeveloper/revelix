'use client'

import { authServices } from "@/application/service/auth.service"
import { useAlertContext } from "@/views/shared/context/alert/alert.context"
import { useState } from "react"
import styles from "./login-form.module.css"
import utils from "@/views/shared/styles/utils.module.css"
import { useRouter } from "next/navigation"


export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const {showAlert} = useAlertContext()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true)
    e.preventDefault()

    const authResponse = await authServices.login(email,password)

    if(!authResponse.success) {
      showAlert({message: authResponse.error ?? 'Login error', type:'danger'})
      setIsLoading(false)
      return
    }
    showAlert({message: 'You have logged in successfully!', type: 'success'})
    router.push('/')
    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.mainContainer}>
      <div className={styles.fieldsContainer}>
        <input className={styles.input} required onChange={(e) => setEmail(e.target.value)} placeholder="Username" type="email" />
        <input className={styles.input} required onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
        <button disabled={isLoading} className={`${styles.button} ${utils.button} ${utils.highlightButton} ${isLoading ? 'animate-pulse' : ''}`}>{isLoading ? 'Loading...' : 'Sign in'}</button>
      </div>
    </form>
  )
}

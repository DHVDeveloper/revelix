import { AuthServices } from "@/domain/port/auth-service.port"
import { login, logout } from "../../infraestructure/repository/auth.repository"
import { deleteCookie } from "@/utils/cookies"
import { AppConfig } from "@/lib/environments"

export const authServices: AuthServices = ({
  login: async (email, password) => {
    const response = await login({ email, password })
    
    if (!response.success) {
      return {success: false, error: response.error}
    }

    return {success:true}
  },
  
  logout: async () => {
    const response = await logout()
    if(response.success) {
      deleteCookie(AppConfig.COOKIE_NAME)
    }
    return response
  },
})
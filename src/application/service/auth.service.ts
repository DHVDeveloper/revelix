import { AuthServices } from "@/domain/port/auth-service.port"
import { login, logout } from "../../infraestructure/repository/auth.repository"
import { setCookie } from "@/utils/cookie"
import { AppConfig } from "@/lib/environments"

export const authServices: AuthServices = ({
  login: async (email, password) => {
    const response = await login({ email, password })
    
    if (!response.data) {
      return {success: false, error: response.error}
    }

    if (response.data) {
      setCookie(AppConfig.COOKIE_NAME, response.data.token)
    }
   
    return {success:true}
  },
  
  logout: async () => {
    const response = await logout()
    return response
  },
})
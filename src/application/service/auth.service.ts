import { AuthServices } from "@/domain/port/auth-service.port"
import { login, logout } from "../../infraestructure/repository/auth.repository"

export const authServices: AuthServices = ({
  login: async (email, password) => {
    const response = await login({ email, password })
    
    if (!response.data) {
      return {success: false, error: response.error}
    }

    return {success:true}
  },
  
  logout: async () => {
    const response = await logout()
    return response
  },
})
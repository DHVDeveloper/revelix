import { AppConfig } from "@/lib/environments"
import { AuthRequestBody, LoginResponse } from "../interfaces/auth-response"
import { ApiResponse } from "@/types/api-response.interface"

export async function login(credentials: AuthRequestBody): Promise<ApiResponse<LoginResponse>> {
  try {
    const response = await fetch(`/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(credentials),
    })

    const data = await response.json()

    if (!response.ok) {
      return {
        success: false,
        error: "User not found",
      }
    }

    return {
      success: true,
      data,
    }

  } catch {
    return {
      success: false,
      error: "Server error",
    }
  }
}

export async function logout(): Promise<ApiResponse<void>> {
  try {
    const response = await fetch(`${AppConfig.API_BASE_URL}/films/auth/logout`, {
      method: "POST",
      credentials: "include",
    })

    const data = await response.json()

    if (!response.ok) {
      return {
        success: false,
        error: data?.message || "Error logging out",
      }
    }

    return {
      success: true,
    }

  } catch {
    return {
      success: false,
      error: "Server error",
    }
  }
}

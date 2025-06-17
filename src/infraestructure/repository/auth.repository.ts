"use server"
import { AppConfig } from "@/lib/environments"
import { ApiResponse } from "@/types/api-response.interface"
import { apiFetch } from "@/utils/fetch"
import { cookies } from "next/headers"
import { AuthRequestBody } from "../interfaces/auth-response"

export async function login(credentials: AuthRequestBody): Promise<ApiResponse<void>> {
  try {
    const response = await apiFetch(`${AppConfig.API_BASE_URL}/films/auth/sign-in`, {
      method: "POST",
      body: JSON.stringify(credentials),
    })

    if (!response.ok) {
      if(response.status === 500) {
        return {
          success: false,
          error: "Server error",
        }
      }
      return {
        success: false,
        error: "User not found",
      }
    }
    
    const { token } = await response.json();
    const clientCookies = await cookies();
    
    clientCookies.set({
      name: AppConfig.COOKIE_NAME,
      value: token,
      httpOnly: false,
      secure: AppConfig.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

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

export async function logout(): Promise<ApiResponse<void>> {
  try {
    const response = await apiFetch(`${AppConfig.API_BASE_URL}/films/auth/sign-out`)

    const data = await response.json()

    if (!response.ok) {
      return {
        success: false,
        error: data?.message || "Error logout",
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

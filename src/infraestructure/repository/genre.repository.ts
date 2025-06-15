"use server"
import { ApiResponse } from "@/types/api-response.interface"
import { GenreResponse } from "../interfaces/genre-response"
import { AppConfig } from "@/lib/environments"
import { apiFetch } from "@/utils/fetch"

export async function getGenres(): Promise<ApiResponse<GenreResponse[]>> {
  try {
    const response = await apiFetch(`${AppConfig.API_BASE_URL}/films/genres`)

    if (!response.ok) {
      return {
        success: false,
        error: "Error getting movies by Genre",
      }
    }

    const data = await response.json()

    return {
      success: true,
      data: data as GenreResponse[],
    }
  } catch {
    return {
      success: false,
      error: "Server error",
    }
  }
}

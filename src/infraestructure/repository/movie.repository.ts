'use server'
import { AppConfig } from "@/lib/environments"
import { ApiResponse } from "@/types/api-response.interface"
import { MovieResponse } from "../interfaces/movie-response"
import { apiFetch } from "@/utils/fetch"




export async function getMovies(): Promise<ApiResponse<MovieResponse[]>> {
  try {
    const response = await apiFetch(`${AppConfig.API_BASE_URL}/films/movies`)

    if (!response.ok) {
      return {
        success: false,
        error: "Error getting movies",
      }
    }

    const data = await response.json()

    return {
      success: true,
      data: data as MovieResponse[],
    }
  } catch {
    return {
      success: false,
      error: "Server error",
    }
  }
}


export async function getMovieByMovieId(movieId: string): Promise<ApiResponse<MovieResponse>> {
  try {
    const response = await apiFetch(`${AppConfig.API_BASE_URL}/films/movies/${movieId}`)

    if (!response.ok) {
      return {
        success: false,
        error: "Error getting movie by movie id",
      }
    }

    const data = await response.json()

    return {
      success: true,
      data: data as MovieResponse,
    }
  } catch {
    return {
      success: false,
      error: "Server error",
    }
  }
}

export async function getMoviesByGenreId(
  genreId: string
): Promise<ApiResponse<MovieResponse[]>> {
  try {
    const response = await apiFetch(`${AppConfig.API_BASE_URL}/films/genres/${genreId}/movies`)
    if (!response.ok) {
      return {
        success: false,
        error: "Error getting movies by Genre",
      }
    }

    const data = await response.json()

    return {
      success: true,
      data: data as MovieResponse[],
    }
  } catch {
    return {
      success: false,
      error: "Server error",
    }
  }
}

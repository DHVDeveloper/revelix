'use server'
import { AppConfig } from "@/lib/environments"
import { ApiResponse } from "@/types/api-response.interface"
import { MovieResponse } from "../interfaces/movie-response"
import { apiFetch } from "@/utils/fetch"
import { getIdBySlug, getSlugById, initializeSlugStore } from "@/lib/slug/slug-store"

export async function getMovies(): Promise<ApiResponse<MovieResponse[]>> {
  try {
    const response = await apiFetch(`${AppConfig.API_BASE_URL}/films/movies`)

    if (!response.ok) {
      return {
        success: false,
        error: "Error getting movies",
      }
    }

    const data:MovieResponse[] = await response.json()
    await initializeSlugStore()

    const moviesWithSlug = data.map((movie) =>  {
      const slug = getSlugById(movie.id)
      return{
      ...movie, slug: slug ?? ""
    }})

    return {
      success: true,
      data: moviesWithSlug,
    }
  } catch {
    return {
      success: false,
      error: "Server error",
    }
  }
}

export async function getMoviesSlug(): Promise<ApiResponse<MovieResponse[]>> {
  try {
    const response = await apiFetch(`${AppConfig.API_BASE_URL}/films/movies`)

    if (!response.ok) {
      return {
        success: false,
        error: "Error getting movies",
      }
    }
    const data:MovieResponse[] = await response.json()
    return {
      success: true,
      data: data,
    }
  } catch {
    return {
      success: false,
      error: "Server error",
    }
  }
}


export async function getMovieByMovieSlug(movieSlug: string): Promise<ApiResponse<MovieResponse>> {
  try {
    await initializeSlugStore()
    const movieId = getIdBySlug(movieSlug)
    if (!movieId) {
      return {
        success: false,
        error: "Error getting movie by slug",
      }
    }

    return await getMovieByMovieId(movieId)
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
    const data: MovieResponse = await response.json()

    await initializeSlugStore()

    const movieSlug = getSlugById(data.id)

    return {
      success: true,
      data: {...data, slug: movieSlug} as MovieResponse,
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

    const data: MovieResponse[] = await response.json()

    await initializeSlugStore()

    const moviesWithSlug = data.map((movie) => ({
      ...movie, slug: getSlugById(movie.id) ?? ""
    }))
    
    return {
      success: true,
      data: moviesWithSlug,
    }
  } catch {
    return {
      success: false,
      error: "Server error",
    }
  }
}


export async function getUserMovies(): Promise<ApiResponse<string[]>> {
  try {
    const response = await apiFetch(`${AppConfig.API_BASE_URL}/films/user`)
    if (!response.ok) {
      return {
        success: false,
        error: "Error getting movies user movies",
      }
    }

    await initializeSlugStore()
    
    const data = await response.json()

    return {
      success: true,
      data: data as string[],
    }
  } catch {
    return {
      success: false,
      error: "Server error",
    }
  }
}

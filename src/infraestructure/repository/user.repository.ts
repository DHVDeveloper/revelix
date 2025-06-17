"use server"
import { MovieId } from "@/domain/port/user-service.port";
import { AppConfig } from "@/lib/environments";
import { ApiResponse } from "@/types/api-response.interface";
import { apiFetch } from "@/utils/fetch";

export async function setUserMovieFromList(
  movieId: MovieId
): Promise<ApiResponse<void>> {
  try {
    const response = await apiFetch(
      `${AppConfig.API_BASE_URL}/films/user/list`,
      {
        method: "POST",
        body: JSON.stringify(movieId),
      }
    );

    if (!response.ok) {
      return {
        success: false,
        error: "Error trying to saving the movie from the list",
      };
    }

    return {
      success: true,
    };
  } catch {
    return {
      success: false,
      error: "Server error",
    };
  }
}

export async function deleteUserMovieFromList(
  movieId: MovieId
): Promise<ApiResponse<void>> {
  try {
    const response = await apiFetch(
      `${AppConfig.API_BASE_URL}/films/user/list/${movieId.id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      return {
        success: false,
        error: "Error trying to remove the movie from the list",
      };
    }

    return {
      success: true,
    };
  } catch {
    return {
      success: false,
      error: "Server error",
    };
  }
}

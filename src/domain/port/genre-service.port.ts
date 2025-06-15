import { ApiResponse } from "@/types/api-response.interface"
import { Genre } from "../entities/genre.entity"

export type GenreServices = {
  genres: () => Promise<ApiResponse<Genre[]>>
}
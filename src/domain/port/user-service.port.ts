import { ApiResponse } from "@/types/api-response.interface"
import { Movie } from "../entities/movie.entity"

export interface MovieId {
  id: Movie['id']
}

export type UserServices = {
  addFilmFromList: (movieId: MovieId) => Promise<ApiResponse<void>>
  deleteFilmFromList: (movieId: MovieId) => Promise<ApiResponse<void>>
}
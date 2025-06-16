import { ApiResponse } from "@/types/api-response.interface";
import { Movie } from "../entities/movie.entity";

export type MovieServices = {
  movies: () => Promise<ApiResponse<Movie[]>>
  movieById: (movieId:string) => Promise<ApiResponse<Movie>>
  moviesByGenreId: (genreId:string) => Promise<ApiResponse<Movie[]>>
  userMovies: () => Promise<ApiResponse<Movie["id"][]>>
}
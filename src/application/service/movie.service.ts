
import { MovieServices } from "@/domain/port/movie-service.port"
import { mapMovieResponseListToMovieList, mapMovieResponseToMovie } from "@/infraestructure/mapper/movie.mapper"
import { getMovieByMovieId, getMovieByMovieSlug, getMovies, getMoviesByGenreId, getUserMovies } from "@/infraestructure/repository/movie.repository"

export  const movieServices: MovieServices = {
  moviesByGenreId: async (genreId) => {
    const response = await getMoviesByGenreId(genreId)
    if (!response.data) {
      return { success: false, error: response.error }
    }

    return {...response, data: mapMovieResponseListToMovieList(response.data)}
  },
  
  movieBySlug: async (movieSlug) => {
    const response = await getMovieByMovieSlug(movieSlug)

    if (!response.data) {
      return response
    }

    return {...response, data: mapMovieResponseToMovie(response.data)}
  },
  
  movieById: async (movieId) => {
    const response = await getMovieByMovieId(movieId)

    if (!response.data) {
      return response
    }

    return {...response, data: mapMovieResponseToMovie(response.data)}
  },
  
  movies: async () => {
    const response = await getMovies()

    if (!response.data) {
      return response
    }

    return {...response, data: mapMovieResponseListToMovieList(response.data)}
  },
  
  userMovies: async () => {
    const response = await getUserMovies()
    return response
  }
}

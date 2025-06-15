import { GenreServices } from "@/domain/port/genre-service.port"
import { mapGenreResponseListToGenreList } from "@/infraestructure/mapper/genre.mapper"
import { getGenres } from "@/infraestructure/repository/genre.repository"

export const genreServices: GenreServices = {
  genres: async () => {
    const response = await getGenres()

    if (!response.data) {
      return { success: false, error: response.error }
    }

    return {...response, data: mapGenreResponseListToGenreList(response.data)}
  }
}

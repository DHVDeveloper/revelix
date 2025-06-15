import { Genre } from "@/domain/entities/genre.entity"
import { GenreResponse } from "../interfaces/genre-response"

export function mapGenreResponseToGenre(genreResponse:GenreResponse): Genre {
    return {
        id: genreResponse.id,
        name: genreResponse.name
    }
}

export function mapGenreResponseListToGenreList(genreResponseList:GenreResponse[]): Genre  [] {
    return genreResponseList.map(genre => mapGenreResponseToGenre(genre))
}
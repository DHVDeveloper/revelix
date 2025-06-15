import { Movie } from "@/domain/entities/movie.entity";
import { MovieResponse } from "../interfaces/movie-response";

export function mapMovieResponseToMovie(movieResponse:MovieResponse): Movie {
    return {
        highlighted: movieResponse.highlighted,
        rating: movieResponse.rating,
        poster: movieResponse.poster,
        cast: movieResponse.cast,
        thumbnail: movieResponse.thumbnail,
        description: movieResponse.description,
        id: movieResponse.id,
        genre: movieResponse.genre,
        availableDate: movieResponse.availableDate,
        title: movieResponse.title,
    }
}

export function mapMovieResponseListToMovieList(movieResponseList:MovieResponse[]): Movie[] {
    return movieResponseList.map(movie => mapMovieResponseToMovie(movie))
}
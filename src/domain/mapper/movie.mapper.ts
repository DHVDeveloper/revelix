import { Genre } from "../entities/genre.entity";
import { Movie } from "../entities/movie.entity";

export function mapMovieByGenreList(movie:Movie, genreList:Genre[]): Movie {
    const movieGenre =  genreList.find(genre => genre.id === movie.genre)
    return {...movie, genre: movieGenre?.name ?? 'unknown gender'}
}

export function mapMovieListByGenreList(movieList:Movie[], genreList:Genre[]): Movie[] {
    return movieList.map(movie => mapMovieByGenreList(movie,genreList))
}
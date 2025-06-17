import { genreServices } from "@/application/service/genre.service";
import { movieServices } from "@/application/service/movie.service";
import { mapMovieListByGenreList } from "@/domain/mapper/movie.mapper";
import { HomePage } from "@/views/pages/home/home.page";

export default async function Home() {
    const allMovies = await movieServices.movies()
    const genreListResponse = await genreServices.genres()
    const genreList = genreListResponse.data || []
    return <HomePage allMovies={allMovies.data ? mapMovieListByGenreList(allMovies.data,genreList) : []} genreList={genreList} />
}
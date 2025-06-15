import { movieServices } from "@/application/service/movie.service";
import { Movie } from "@/domain/entities/movie.entity";
import { HomePage } from "@/views/pages/home/home.page";

export interface MoviesByGenre {
  genreName: string
  movies: Movie[]
}

export default async function Home() {
    const allMovies = await movieServices.movies()
    return <HomePage allMovies={allMovies.data ?? []} />;
}
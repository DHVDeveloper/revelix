import { movieServices } from "@/application/service/movie.service";
import { HomePage } from "@/views/pages/home/home.page";

export default async function Home() {
    const allMovies = await movieServices.movies()
    return <HomePage allMovies={allMovies.data ?? []} />
}
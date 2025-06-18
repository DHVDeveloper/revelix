import { genreServices } from "@/application/service/genre.service"
import { movieServices } from "@/application/service/movie.service"
import { Genre } from "@/domain/entities/genre.entity"
import { mapMovieListByGenreList } from "@/domain/mapper/movie.mapper"
import { HomePage } from "@/views/pages/home/home.page"

export default async function Home() {
  const allMovies = await movieServices.movies()
  const genreListResponse = await genreServices.genres()
  const genreList: Genre[] = (genreListResponse.data || []).sort((a, b) =>
    a.name.localeCompare(b.name)
  )

  if (!allMovies.data) {
    return (
      <HomePage discoverMovies={[]} allMovies={[]} genreList={[]} />
    )
  }

  const discoverMovies = [...allMovies.data]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4)

  return (
    <HomePage
      allMovies={mapMovieListByGenreList(allMovies.data, genreList)}
      genreList={genreList}
      discoverMovies={discoverMovies}
    />
  )
}
import { genreServices } from "@/application/service/genre.service"
import { movieServices } from "@/application/service/movie.service"
import { mapMovieByGenreList } from "@/domain/mapper/movie.mapper"
import { MovieDetailsPage } from "@/views/pages/movie-details/movie-details.page"

export default async function MovieDetails({
  params,
}: {
  params: Promise<{ movieSlug: string }>
}) {
  const { movieSlug } = await params

  const [genresRes, movieRes, userMoviesRes] = await Promise.all([
    genreServices.genres(),
    movieServices.movieBySlug(movieSlug),
    movieServices.userMovies(),
  ])

  const isSuccess =
    genresRes.success && movieRes.success && userMoviesRes.success

  if (!isSuccess || !genresRes.data || !movieRes.data) {
    return <MovieDetailsPage movie={null} isOnList={false} />
  }

  const isOnList = userMoviesRes.data?.includes(movieRes.data.id) ?? false
  const movieToShow = mapMovieByGenreList(movieRes.data, genresRes.data)
  return <MovieDetailsPage movie={movieToShow} isOnList={isOnList} />
}

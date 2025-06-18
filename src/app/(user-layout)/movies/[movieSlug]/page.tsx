import { genreServices } from "@/application/service/genre.service"
import { movieServices } from "@/application/service/movie.service"
import { MovieDetailsPage } from "@/views/pages/movie-details/movie-details.page"

export default async function MovieDetails({ params }: { params: { movieSlug: string } }) {
  const [genresRes, userMoviesRes] = await Promise.all([
    genreServices.genres(),
    movieServices.userMovies(),
  ])

  const genreList = genresRes.success ? genresRes.data ?? [] : []
  const userMovieIds = userMoviesRes.success ? userMoviesRes.data ?? [] : []

  return (
    <MovieDetailsPage
      slug={params.movieSlug}
      genreList={genreList}
      userMovieIds={userMovieIds}
    />
  )
}

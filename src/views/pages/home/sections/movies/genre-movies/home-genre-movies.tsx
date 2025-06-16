import { movieServices } from "@/application/service/movie.service"
import { Genre } from "@/domain/entities/genre.entity"
import { Movie } from "@/domain/entities/movie.entity"
import { mapMovieListByGenreList } from "@/domain/mapper/movie.mapper"
import { MovieCategorySection } from "@/views/shared/components/movies/movie-category-section/movie-category-section"
import { MovieCategorySectionSkeleton } from "@/views/shared/components/movies/movie-category-section/movie-category-section-skeleton"
import { useEffect, useState } from "react"
import styles from "./home-genre-movies.module.css"
import { HomeGenreMoviesSkeleton } from "./skeleton/home-genre-movies-skeleton"

export interface MoviesByGenre {
  genreName: string
  movies: Movie[]
}

interface HomeGenreMoviesProps {
  genreList: Genre[]
}

export function HomeGenreMovies({genreList}:HomeGenreMoviesProps) {
  const [genreListToShow, setGenreListToShow] = useState<Genre[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingFilters, setIsLoadingFilters] = useState(false)
  const [moviesByCategoryList, setMoviesByCategoryList] = useState<
    MoviesByGenre[]
  >([])
  const [activeGenreId, setActiveGenreId] = useState<string | null>(null)

  useEffect(() => {
    setGenreListToShow(genreList)
    const getData = async () => {
      setIsLoading(true)
      try {
        setGenreListToShow(genreList)
        await fetchAllMoviesByGenreList(genreList)
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [genreList])

  const fetchAllMoviesByGenreList = async (genres: Genre[]) => {
    const moviesByGenre: MoviesByGenre[] = await Promise.all(
      genres.map(async (genre) => {
        const moviesResponse = await movieServices.moviesByGenreId(genre.id)
        return {
          genreName: genre.name,
          movies: moviesResponse.data
            ? mapMovieListByGenreList(moviesResponse.data, genres)
            : [],
        }
      })
    )
    setMoviesByCategoryList(moviesByGenre)
  }

  const fetchMoviesByGenreId = async (genre: Genre) => {
    const moviesResponse = await movieServices.moviesByGenreId(genre.id)
    const movies = moviesResponse.data
      ? mapMovieListByGenreList(moviesResponse.data, genreListToShow)
      : []

    setMoviesByCategoryList([
      {
        genreName: genre.name,
        movies,
      },
    ])
  }

  const handleGenreClick = async (genre: Genre) => {
    const isSameGenre = activeGenreId === genre.id
    setIsLoadingFilters(true)

    if (isSameGenre) {
      await fetchAllMoviesByGenreList(genreListToShow)
      setActiveGenreId(null)
    } else {
      await fetchMoviesByGenreId(genre)
      setActiveGenreId(genre.id)
    }

    setIsLoadingFilters(false)
  }

  if (isLoading) return <HomeGenreMoviesSkeleton />

  return (
    <div className="animate-fade-in">
      <div className={styles.genreButtonContainer}>
        {genreListToShow.map((genre) => (
          <button
            key={genre.id}
            disabled={isLoadingFilters}
            onClick={() => handleGenreClick(genre)}
            className={`${styles.genreButton} ${
              activeGenreId === genre.id ? styles.active : ""
            }`}
          >
            {genre.name}
          </button>
        ))}
      </div>
      {!isLoadingFilters ? (
        <div className={styles.moviesContainer}>
          {moviesByCategoryList.map((movies, i) => (
            <MovieCategorySection
              key={i}
              movieDisplayType="vertical"
              movieList={movies.movies}
              title={movies.genreName}
            />
          ))}
        </div>
      ) : (
        <div className={styles.moviesContainer}>
          {[...Array(3)].map((_, i) => (
            <MovieCategorySectionSkeleton key={i} movieDisplayType="vertical" />
          ))}
        </div>
      )}
    </div>
  )
}

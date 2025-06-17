"use client"
import { movieServices } from "@/application/service/movie.service"
import { Genre } from "@/domain/entities/genre.entity"
import { Movie } from "@/domain/entities/movie.entity"
import { mapMovieListByGenreList } from "@/domain/mapper/movie.mapper"
import { MovieCategorySection } from "@/views/shared/components/movies/movie-category-section/movie-category-section"
import { MovieCategorySectionSkeleton } from "@/views/shared/components/movies/movie-category-section/movie-category-section-skeleton"
import { useEffect, useState } from "react"

interface HomeUserMoviesProps {
  genreList: Genre[]
}
export function HomeUserMovies({ genreList }: HomeUserMoviesProps) {
  const [userMovies, setUserMovies] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      try {
        const userMoviesId = await movieServices.userMovies()
        if (!userMoviesId.data) return
        const userListResponse = await getAllUserMoviesByMoviesId(
          userMoviesId.data
        )
        setUserMovies(mapMovieListByGenreList(userListResponse, genreList))
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [genreList])

  const getAllUserMoviesByMoviesId = async (
    moviesId: string[]
  ): Promise<Movie[]> => {
    try {
      const moviesByMoviesId: (Movie | null)[] = await Promise.all(
        moviesId.map(async (movieId) => {
          const movieResponse = await movieServices.movieById(movieId)
          return movieResponse.data ?? null
        })
      )

      const validMovies = moviesByMoviesId.filter((movie) => movie !== null)

      return validMovies
    } catch {
      return []
    }
  }

  if (isLoading) {
    return <MovieCategorySectionSkeleton movieDisplayType="vertical" />
  }

  return (
    <div>
      <MovieCategorySection
        movieDisplayType="vertical"
        movieList={userMovies}
        title={"My list"}
      />
    </div>
  )
}

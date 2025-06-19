"use client"

import { useEffect, useState } from "react"
import { Movie } from "@/domain/entities/movie.entity"
import { Genre } from "@/domain/entities/genre.entity"
import { MovieDetailsHeader } from "./sections/header/movie-details-header"
import { MovieDetailsInfo } from "./sections/info/movie-details-info"
import { MovieDetailsNoContent } from "./movie-details-no-content"
import { movieServices } from "@/application/service/movie.service"
import { mapMovieByGenreList } from "@/domain/mapper/movie.mapper"
import { MovieDetailsSkeleton } from "./skeleton/movie-details-skeleton"

interface MovieDetailsPageProps {
  slug: string
  genreList: Genre[]
  userMovieIds: string[]
}

export function MovieDetailsPage({
  slug,
  genreList,
  userMovieIds,
}: MovieDetailsPageProps) {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isOnList, setIsOnList] = useState(false)

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true)
      try {
        const movieRes = await movieServices.movieBySlug(slug)

        if (movieRes?.success && movieRes?.data) {
          const mapped = mapMovieByGenreList(movieRes.data, genreList)
          setMovie(mapped)

          const included = userMovieIds.includes(movieRes.data.id)
          setIsOnList(included)
        } else {
          setMovie(null)
        }
      } catch (err) {
        console.error("Error loading movie:", err)
        setMovie(null)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovieDetails()
  }, [])

  if (isLoading) return <MovieDetailsSkeleton />
  if (!movie) return <MovieDetailsNoContent />

  return (
    <main>
      <MovieDetailsHeader posterImage={movie.poster} />
      <MovieDetailsInfo movie={movie} isOnList={isOnList} />
    </main>
  )
}

'use client'
import { Movie } from "@/domain/entities/movie.entity";
import { MovieCategorySection } from "@/views/shared/components/movies/movie-category-section/movie-category-section";
import { MovieCategorySectionSkeleton } from "@/views/shared/components/movies/movie-category-section/movie-category-section-skeleton";
import { useEffect, useState } from "react";

interface HomeSoonMovies {
  movieList: Movie[]
}

export function HomeSoonMovies({ movieList }: HomeSoonMovies) {
  const [soonMovies, setSoonMovies] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const referenceDate = new Date('2024-01-01T00:00:00Z')

    const filteredMovies = movieList.filter((movie) => {
      const availableDate = new Date(movie.availableDate)
      return availableDate > referenceDate
    });

    setSoonMovies(filteredMovies)
    setIsLoading(false)
  }, [movieList])

  if (isLoading) {
    return <MovieCategorySectionSkeleton movieDisplayType="horizontal" />
  }

  return (
    <div>
        <MovieCategorySection
          movieDisplayType="horizontal"
          movieList={soonMovies}
          title={"Coming soon"}
        />
    </div>
  )
}

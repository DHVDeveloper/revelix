'use client'
import { Movie } from "@/domain/entities/movie.entity";
import { HomeHeader } from "./sections/header/home-header";
import { HomeGenreMovies } from "./sections/movies/genre-movies/home-genre-movies";

interface HomePageProps {
  allMovies:Movie[]
}
export function HomePage({allMovies}:HomePageProps) {

  return (
    <div>
      <HomeHeader movieList={allMovies.slice(0,5)} />
      <HomeGenreMovies />

    </div>
  )
}

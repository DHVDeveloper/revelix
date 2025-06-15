'use client'
import { Movie } from "@/domain/entities/movie.entity";
import { HomeHeader } from "./sections/header/home-header";

interface HomePageProps {
  allMovies:Movie[]
}
export function HomePage({allMovies}:HomePageProps) {

  return (
    <div>
      <HomeHeader movieList={allMovies.slice(0,5)} />
    </div>
  )
}

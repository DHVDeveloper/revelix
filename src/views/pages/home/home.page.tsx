"use client"
import { Genre } from "@/domain/entities/genre.entity"
import { Movie } from "@/domain/entities/movie.entity"
import styles from "./home.page.module.css"
import { HomeHeader } from "./sections/header/home-header"
import { HomeGenreMovies } from "./sections/movies/genre-movies/home-genre-movies"
import { HomeSoonMovies } from "./sections/movies/soon-movies/home-soon-movies"
import { HomeUserMovies } from "./sections/movies/user-movies/home-user-movies"

interface HomePageProps {
  allMovies: Movie[]
  genreList: Genre[]
  discoverMovies: Movie[]
}
export function HomePage({ allMovies, genreList, discoverMovies }: HomePageProps) {
  return (
    <main>
      <HomeHeader movieList={discoverMovies} />
      <div className={styles.main}>
        <HomeGenreMovies genreList={genreList} />
        <HomeSoonMovies movieList={allMovies} />
        <HomeUserMovies genreList={genreList} />
      </div>
    </main>
  )
}

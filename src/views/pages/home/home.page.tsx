'use client'
import { Movie } from "@/domain/entities/movie.entity";
import { HomeHeader } from "./sections/header/home-header";
import { HomeGenreMovies } from "./sections/movies/genre-movies/home-genre-movies";
import { HomeSoonMovies } from "./sections/movies/soon-movies/home-soon-movies";
import styles from "./home.page.module.css"
import { Genre } from "@/domain/entities/genre.entity";
import { HomeUserMovies } from "./sections/movies/user-movies/home-user-movies";

interface HomePageProps {
  allMovies:Movie[]
  genreList: Genre[]
}
export function HomePage({allMovies, genreList}:HomePageProps) {

  return (
    <main>
      <HomeHeader movieList={allMovies.slice(0,5)} />
      <div className={styles.main}>
        <HomeGenreMovies genreList={genreList} />
        <HomeSoonMovies movieList={allMovies}/>
        <HomeUserMovies genreList={genreList} />
      </div>
    </main>
  )
}

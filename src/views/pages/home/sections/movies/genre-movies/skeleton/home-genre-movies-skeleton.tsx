import { MovieCategorySectionSkeleton } from "@/views/shared/components/movies/movie-category-section/movie-category-section-skeleton"
import componentStyles from "../home-genre-movies.module.css"
import styles from "./home-genre-movies-skeleton.module.css"

export function HomeGenreMoviesSkeleton() {
  return (
    <div>
      <div className={componentStyles.genreButtonContainer}>
        {[...Array(3)].map((_, i) => (
          <div key={i} className={`${styles.button} animate-pulse`}></div>
        ))}
      </div>
      <div className={componentStyles.moviesContainer}>
        {[...Array(3)].map((_, i) => (
          <MovieCategorySectionSkeleton key={i} movieDisplayType="vertical" />
        ))}
      </div>
    </div>
  )
}

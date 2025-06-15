import componentStyles from "./movie-category-section.module.css"
import styles from "./movie-category-section-skeleton.module.css"
import { MovieCardSkeleton } from "../movie-card/movie-card-skeleton"
import { MovieCardHorizontalSkeleton } from "../movie-card-horizontal/movie-card-horizontal-skeleton"
interface MovieCategorySectionSkeletonProps {
  movieDisplayType: "vertical" | "horizontal"
}

export function MovieCategorySectionSkeleton({
  movieDisplayType,
}: MovieCategorySectionSkeletonProps) {
  return (
    <div className={componentStyles.mainContainer}>
      <div className={`${styles.title} animate-pulse`}></div>
      <div className={componentStyles.sliderContainer}>
        <div
          className={componentStyles.moviesSlider}
        >
          {[...Array(6)].map((_, i) => {
            if (movieDisplayType === "vertical") {
              return <MovieCardSkeleton key={i} />
            }
            if (movieDisplayType === "horizontal") {
              return <MovieCardHorizontalSkeleton key={i} />
            }
          })}
        </div>
      </div>
    </div>
  )
}

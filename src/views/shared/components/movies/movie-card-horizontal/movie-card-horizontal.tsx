"use client"

import { Movie } from "@/domain/entities/movie.entity"
import { StarIcon } from "../../../icons/star.icon"
import styles from "./movie-card-horizontal.module.css"
import { FallbackImage } from "../../fallback-image/fallback-image"
import { useRouter } from "next/navigation"
import { TrophyIcon } from "@/views/shared/icons/trophy.icon"

interface MovieCardHorizontalProps {
  movieInfo: Movie
}

export function MovieCardHorizontal({ movieInfo }: MovieCardHorizontalProps) {
  const { slug, genre, rating, poster, title, description, highlighted } =
    movieInfo
  const router = useRouter()

  const handleRedirectMovieDetail = () => {
    router.push("movies/" + slug)
  }

  return (
    <div className={styles.card} onClick={handleRedirectMovieDetail}>
      <FallbackImage src={poster} alt={title} className={styles.thumbnail} />

      <div className={styles.overlay}>
        {highlighted && (
          <div className={styles.favoriteIcon}>
            <TrophyIcon />
          </div>
        )}

        <p className={styles.description}>{description}</p>

        <h3 className={styles.title}>{title}</h3>

        <div className={styles.info}>
          {rating ? (
            <div className={styles.rating}>
              {Array.from({ length: rating }, (_, i) => (
                <StarIcon width={20} height={20} key={i} />
              ))}
            </div>
          ) : (
            <div className={styles.rating}>{"N/A"}</div>
          )}
          <span className={styles.genre}>{genre}</span>
        </div>
      </div>
    </div>
  )
}

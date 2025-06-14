"use client";

import { MovieCardHorizontalView } from "@/domain/entities/movie.entity";
import { useRouter } from "next/router";
import { StarIcon } from "../../icons/star.icon";
import styles from './movie-card-horizontal.module.css'

interface MovieCardHorizontalProps {
  movieInfo: MovieCardHorizontalView;
}

export function MovieCardHorizontal({ movieInfo }: MovieCardHorizontalProps) {
  const { id, genre, rating, poster, title, description, highlighted } =
    movieInfo
  const router = useRouter()

  const handleRedirectMovieDetail = () => {
    router.push(id)
  };

  return (
    <div className={styles.card} onClick={handleRedirectMovieDetail}>
      <img
        src={poster}
        alt={title}
        className={styles.thumbnail}
      />

      <div className={styles.overlay}>
        {highlighted && (
          <div className={styles.favoriteIcon}>
            <StarIcon />
          </div>
        )}

        <p className={styles.description}>{description}</p>

        <h3 className={styles.title}>{title}</h3>

        <div className={styles.info}>
          <div className={styles.rating}>
            <span className={styles.starIcon}>
              <StarIcon />
            </span>
            <span>{rating.toFixed(1)}</span>
          </div>
          <span className={styles.genre}>{genre}</span>
        </div>
      </div>
    </div>
  );
}

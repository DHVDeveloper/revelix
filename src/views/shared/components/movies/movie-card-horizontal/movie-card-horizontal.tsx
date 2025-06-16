"use client";

import { Movie } from "@/domain/entities/movie.entity";
import { StarIcon } from "../../../icons/star.icon";
import styles from './movie-card-horizontal.module.css';
import { FallbackImage } from "../../fallback-image/fallback-image";
import { useRouter } from "next/navigation";

interface MovieCardHorizontalProps {
  movieInfo: Movie;
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
      <FallbackImage
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
            <span>{rating}</span>
          </div>
          <span className={styles.genre}>{genre}</span>
        </div>
      </div>
    </div>
  );
}

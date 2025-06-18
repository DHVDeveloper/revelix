'use client'
import { Movie } from '@/domain/entities/movie.entity'
import { TrophyIcon } from '@/views/shared/icons/trophy.icon'
import { useRouter } from 'next/navigation'
import { StarIcon } from '../../../icons/star.icon'
import { FallbackImage } from '../../fallback-image/fallback-image'
import styles from './movie-card.module.css'

interface MovieCardProps {
    movieInfo: Movie
}

export function MovieCard({movieInfo}: MovieCardProps) {
    const {genre,rating,thumbnail,title, highlighted, slug} = movieInfo

    const router = useRouter()

    const handleRedirectMovieDetail = () => {
        router.push("movies/" + slug)
    }

    return (
        <div className={styles.card} onClick={handleRedirectMovieDetail}>
            <FallbackImage 
                src={thumbnail} 
                alt={title}
                className={styles.thumbnail}
            />
            
            <div className={styles.overlay}>
                {highlighted && (
                    <div className={styles.favoriteIcon}><TrophyIcon/></div>
                )}
                
                <h3 className={styles.title}>{title}</h3>
                
                <div className={styles.info}>
                    {rating ? 
                        <div className={styles.rating}>
                            <StarIcon/>
                            <span>{rating}</span>
                        </div> : 
                        <div className={styles.rating}>
                            {'N/A'}
                        </div>
                    }
                    <span className={styles.genre}>{genre}</span>
                </div>
            </div>
        </div>
    )
}
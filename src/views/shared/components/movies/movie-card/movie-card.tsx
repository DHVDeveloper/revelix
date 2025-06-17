'use client'
import { Movie } from '@/domain/entities/movie.entity';
import { useRouter } from 'next/navigation';
import { StarIcon } from '../../../icons/star.icon';
import styles from './movie-card.module.css';
import { FallbackImage } from '../../fallback-image/fallback-image';
import { TrophyIcon } from '@/views/shared/icons/trophy.icon';

interface MovieCardProps {
    movieInfo: Movie
}

export function MovieCard({movieInfo}: MovieCardProps) {
    const {id,genre,rating,thumbnail,title, highlighted} = movieInfo

    const router = useRouter()

    const handleRedirectMovieDetail = () => {
        router.push('movies/' + id)
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
                    <div className={styles.rating}>
                        <span className={styles.starIcon}><StarIcon/></span>
                        <span>{rating}</span>
                    </div>
                    <span className={styles.genre}>{genre}</span>
                </div>
            </div>
        </div>
    );
}
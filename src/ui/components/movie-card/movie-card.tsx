'use client'
import Image from 'next/image';
import styles from './movie-card.module.css';
import { StarIcon } from '@/ui/icons/star.icon';
import { MovieCardView } from '@/domain/interfaces/movie';
import { useRouter } from 'next/navigation';

interface MovieCardProps {
    movieInfo: MovieCardView
}

export function MovieCard({movieInfo}: MovieCardProps) {
    const {id,genre,rating,thumbnail,title, highlighted} = movieInfo

    const router = useRouter()

    const handleRedirectMovieDetail = () => {
        router.push(id)
    }

    return (
        <div className={styles.card} onClick={handleRedirectMovieDetail}>
            <Image 
                src={thumbnail} 
                alt={title}
                width={261}
                height={386}
                className={styles.thumbnail}
            />
            
            <div className={styles.overlay}>
                {highlighted && (
                    <div className={styles.favoriteIcon}><StarIcon/></div>
                )}
                
                <h3 className={styles.title}>{title}</h3>
                
                <div className={styles.info}>
                    <div className={styles.rating}>
                        <span className={styles.starIcon}><StarIcon/></span>
                        <span>{rating.toFixed(1)}</span>
                    </div>
                    <span className={styles.genre}>{genre}</span>
                </div>
            </div>
        </div>
    );
}
import styles from "./movie-card-skeleton.module.css"
export function MovieCardSkeleton() {
    return(<div className={`${styles.card} animate-pulse`}></div>)
}
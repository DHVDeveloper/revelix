import styles from "./movie-card-horizontal-skeleton.module.css"
export function MovieCardHorizontalSkeleton() {
    return(<div className={`${styles.card} animate-pulse`}></div>)
}
import styles from "./home-header.module.css"

export function HomeHeaderEmpty() {
  return (
    <header className={styles.header}>
      <div className={styles.movieDetails}>
        <h2 className={styles.title}>No movies available</h2>
      </div>
    </header>
  )
}
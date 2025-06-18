import { BackButton } from "@/views/shared/components/backButton/back-button"
import styles from "./movie-details-no-content.module.css"
export function MovieDetailsNoContent() {
  const titleError = "Movie Not Found"
  const subtitleError = "The movie doesn't match any record in our system."

  return (
    <main className={styles.main}>
      <div className={styles.buttonBackToList}><BackButton route="/">Back to list</BackButton></div>
      <h2 className={styles.errorTitle}>{titleError}</h2>
      <h4 className={styles.errorSubtitle}>{subtitleError}</h4>
    </main>
  )
}

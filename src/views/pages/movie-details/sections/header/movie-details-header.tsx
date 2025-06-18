'use client'
import { BackButton } from "@/views/shared/components/backButton/back-button"
import utils from "@/views/shared/styles/utils.module.css"
import styles from "./movie-details-header.module.css"

interface MovieDetailsHeaderProps {
    posterImage: string
}
export function MovieDetailsHeader({posterImage}:MovieDetailsHeaderProps) {
    return(<header
      className={styles.header}
      style={{ backgroundImage: `url(${posterImage})` }}
    >
        <div className={styles.buttonBackToList}><BackButton route="/">Back to list</BackButton></div>
        <div className={styles.buttonsSection}>
            <div className={styles.buttonsContainer}>
                <button className={`${styles.button} ${utils.button} ${utils.basicButton}`}>Trailer</button>
                <button className={`${styles.button}  ${utils.button} ${utils.highlightButton}`}>Play</button>
            </div>
        </div>
    </header>)
}
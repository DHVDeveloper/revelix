'use client'
import { useRouter } from "next/navigation"
import styles from "./movie-details-header.module.css"
import utils from "@/views/shared/styles/utils.module.css"
import { ArrowIcon } from "@/views/shared/icons/arrow.icon"

interface MovieDetailsHeaderProps {
    posterImage: string
}
export function MovieDetailsHeader({posterImage}:MovieDetailsHeaderProps) {
    const router = useRouter()
    return(<header
      className={styles.header}
      style={{ backgroundImage: `url(${posterImage})` }}
    >
        <button className={`${styles.buttonBackToList}`} onClick={() => router.push('/')}><ArrowIcon/>Back to list</button>
        <div className={styles.buttonsSection}>
            <div className={styles.buttonsContainer}>
                <button className={`${styles.button} ${utils.button} ${utils.basicButton}`}>Trailer</button>
                <button className={`${styles.button}  ${utils.button} ${utils.highlightButton}`}>Play</button>
            </div>
        </div>
    </header>)
}
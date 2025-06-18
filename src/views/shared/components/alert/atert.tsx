import { AlertData } from "../../context/alert/alert.interface"
import styles from "./alert.module.css"

export function Alert({
  alert,
  visible,
  onClose,
}: {
  alert: AlertData
  visible: boolean
  onClose: () => void
}) {
  return (
    <div
      className={`${styles.container} ${
        visible ? "animate-fade-in" : "animate-fade-out"
      }`}
    >
      <div className={`${styles.alert} ${styles[alert.type]}`}>
        <span className={styles.message}>{alert.message}</span>
        <button onClick={onClose} className={styles.closeBtn}>
          X
        </button>
      </div>
    </div>
  )
}

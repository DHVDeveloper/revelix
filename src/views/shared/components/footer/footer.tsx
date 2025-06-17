import Link from "next/link";
import styles from "./footer.module.css";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <div className={styles.leftSide}>
            <Link href={"#"}>Link 1</Link>
            <Link href={"#"}>Link 2</Link>
            <Link href={"#"}>Link 3</Link>
            <Link href={"#"}>Link 4</Link>
        </div>
        <div className={styles.leftSide}>
            <Link href={"#"}>Link 5</Link>
            <Link href={"#"}>Link 6</Link>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.rightSide}>
            <Link href={"#"}>Link 7</Link>
            <Link href={"#"}>Link 8</Link>
        </div>
      </div>
    </footer>
  );
}

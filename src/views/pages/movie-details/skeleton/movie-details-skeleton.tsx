import styles from "./movie-details-skeleton.module.css";

export function MovieDetailsSkeleton() {
  return (
    <div>
      <div className={`${styles.header} animate-pulse`}></div>
      <div className={`${styles.infoDetails}`}>
        <div className={`${styles.buttonSection}`}>
          <div className={`${styles.button} animate-pulse`}></div>
          <div className={`${styles.button} animate-pulse`}></div>
        </div>
        <div className={`${styles.myListSection}`}>
          <div className={`${styles.listIcon} animate-pulse`}></div>
          <div className={`${styles.listText} animate-pulse`}></div>
        </div>
        <div className={`${styles.details}`}>
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className={`${styles.rows} animate-pulse`}></div>
          ))}
        </div>
        <div className={`${styles.title} animate-pulse`}></div>
        <div className={`${styles.description}`}>
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className={`${styles.rows} animate-pulse`}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

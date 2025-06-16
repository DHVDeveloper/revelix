import { Movie } from "@/domain/entities/movie.entity"
import styles from "./movie-category-section.module.css"
import { useState, useRef, useEffect } from "react"
import { ArrowIcon } from "../../../icons/arrow.icon"
import { MovieCardHorizontal } from "../movie-card-horizontal/movie-card-horizontal"
import { MovieCard } from "../movie-card/movie-card"

interface MovieCategorySectionProps {
  title: string
  movieList: Movie[]
  movieDisplayType: "vertical" | "horizontal"
}

export function MovieCategorySection({
  title,
  movieList,
  movieDisplayType,
}: MovieCategorySectionProps) {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    checkScrollPosition()
  }, [])

  const checkScrollPosition = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -600 : 600
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })

      setTimeout(checkScrollPosition, 300)
    }
  }

  return (
    <div className={`${styles.mainContainer} animate-fade-in`}>
      <p className={styles.title}>{title}</p>
      <div 
        className={styles.sliderContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {(showLeftArrow && isHovered) && (
          <button
            className={`${styles.arrowButton} ${styles.arrowLeft}`}
            onClick={() => scroll("left")}
          >
            <ArrowIcon/>
          </button>
        )}
        <div
          className={styles.moviesSlider}
          ref={sliderRef}
          onScroll={checkScrollPosition}
        >
          {movieList.length > 0 ? movieList.map((movie, i) => {
            if (movieDisplayType === "vertical") {
              return <MovieCard key={i} movieInfo={movie} />
            }
            if (movieDisplayType === "horizontal") {
              return <MovieCardHorizontal key={i} movieInfo={movie} />
            }
          }) : <div className={`${styles.noData} ${movieDisplayType === 'horizontal' ? styles.horizontalNoData : styles.verticalNoData}`}>No movies available</div>}
        </div>
        {(showRightArrow && isHovered) && (
          <button
            className={`${styles.arrowButton} ${styles.arrowRight}`}
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            <ArrowIcon/>
          </button>
        )}
      </div>
    </div>
  )
}
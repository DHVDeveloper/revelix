"use client"
import { Movie } from "@/domain/entities/movie.entity"
import styles from "./home-header.module.css"
import utils from "@/views/shared/styles/utils.module.css"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { HomeHeaderEmpty } from "./home-header-empty"

interface HomeHeaderProps {
  movieList: Movie[]
}

export function HomeHeader({ movieList }: HomeHeaderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === movieList.length - 1 ? 0 : prevIndex + 1
        )
        setFade(true)
      }, 500)
    }, 9000)

    return () => clearInterval(interval)
  }, [movieList.length])

  const handleSelectSlide = (selectedIndex:number) => {
    setFade(false)
    setTimeout(() => {
      setCurrentIndex(selectedIndex)
      setFade(true)
    }, 500)
  }

  const handleGoToDetails = (selectedMovieId: string) => {
    router.push(`movies/${selectedMovieId}`)
  }

  if (movieList.length === 0) return <HomeHeaderEmpty/>

  const currentMovie = movieList[currentIndex]

  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${currentMovie.poster})` }}
    >
      <div
        className={`${styles.movieDetails} ${
          fade ? styles.fadeIn : styles.fadeOut
        }`}
      >
        <h2 className={styles.title}>{currentMovie.title}</h2>
        <p className={styles.description}>{currentMovie.description}</p>
        <button className={`${utils.button} ${utils.highlightButton} ${styles.button}`} onClick={() => handleGoToDetails(currentMovie.id)}>Discover</button>
      </div>

      <div className={styles.sliderControls}>
        {movieList.map((_, index) => (
          <button
            key={index}
            className={`${styles.sliderDot} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => handleSelectSlide(index)}
          />
        ))}
      </div>
    </header>
  )
}

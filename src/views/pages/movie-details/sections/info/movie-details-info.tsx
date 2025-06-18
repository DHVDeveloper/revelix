"use client"

import { Movie } from "@/domain/entities/movie.entity"
import { StarIcon } from "@/views/shared/icons/star.icon"
import { PlusIcon } from "@/views/shared/icons/plus.icon"
import { userServices } from "@/application/service/user.service"
import { useAlertContext } from "@/views/shared/context/alert/alert.context"
import { useState } from "react"
import styles from "./movie-details-info.module.css"
import utils from "@/views/shared/styles/utils.module.css"

interface MovieDetailsInfoProps {
  movie: Movie
  isOnList: boolean
}

export function MovieDetailsInfo({ movie, isOnList }: MovieDetailsInfoProps) {
  const { showAlert } = useAlertContext()
  const [isMovieOnList, setIsMovieOnList] = useState(isOnList)

  const { id, rating, cast, genre, description, title } = movie

  const handleAddToMyList = async () => {
    const response = await userServices.addFilmFromList({ id })
    if (!response.success) {
      const errorMessage =
        response.error ?? "Error trying to add the movie from the list"
      showAlert({ type: "danger", message: errorMessage })
      return
    }

    setIsMovieOnList(!isMovieOnList)
    showAlert({ type: "success", message: "Movie added successfully" })
  }

  const handleRemoveToMyList = async () => {
    const response = await userServices.deleteFilmFromList({ id })
    if (!response.success) {
      const errorMessage =
        response.error ?? "Error trying to remove the movie from the list"
      showAlert({ type: "danger", message: errorMessage })
      return
    }

    setIsMovieOnList(!isMovieOnList)
    showAlert({ type: "success", message: "Movie removed successfully" })
  }

  const handleListAction = () => {
    if (isMovieOnList) {
      handleRemoveToMyList()
    } else {
      handleAddToMyList()
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.buttonSection}>
        <button className={`${styles.button} ${utils.button} ${utils.basicButton}`}>
          Trailer
        </button>
        <button className={`${styles.button}  ${utils.button} ${utils.highlightButton}`}>
          Play
        </button>
      </div>

      <div className={styles.myListSection}>
        <span onClick={handleListAction}>
          {isMovieOnList ? <StarIcon /> : <PlusIcon />}
        </span>
        <span>{isMovieOnList ? "Remove from my list" : "Add to my list"}</span>
      </div>

      <div className={styles.details}>
        <div>
          <span className={styles.categoryDetails}>
            Rating:
          </span>
          <span className={styles.categoryStar}>
            {rating && rating > 0 ? (
              Array.from({ length: rating }, (_, i) => (
                <StarIcon width={20} height={20} key={i} />
              ))
            ) : (
              <span className={styles.categoryDetailsData}>Not available</span>
            )}
          </span>
        </div>

        <div>
          <span className={styles.categoryDetails}>
            Cast:
          </span>
          <span className={styles.categoryDetailsData}>
            {cast?.trim() ? cast : "Not available"}
          </span>
        </div>

        <div>
          <span className={styles.categoryDetails}>
            Genre:
          </span>
          <span className={styles.categoryDetailsData}>
            {genre?.trim() ? genre : "Not available"}
          </span>
        </div>
      </div>

      <h1 className={styles.title}>
        {title?.trim() ? title : "Not available"}
      </h1>

      <p className={styles.sinopsis}>
        {description?.trim() ? description : "Not available"}
      </p>
    </div>
  )
}

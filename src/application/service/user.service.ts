import { MovieId, UserServices } from "@/domain/port/user-service.port"
import { deleteUserMovieFromList, setUserMovieFromList } from "@/infraestructure/repository/user.repository"

export  const userServices: UserServices = {
  addFilmFromList: async (movieId:MovieId) => {
    const response = await setUserMovieFromList(movieId)
    return response
  },
  
  deleteFilmFromList: async (movieId:MovieId) => {
    const response = await deleteUserMovieFromList(movieId)
    return response
  }
  
}

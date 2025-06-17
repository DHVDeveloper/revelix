import { Movie } from "@/domain/entities/movie.entity";
import { MovieDetailsHeader } from "./sections/header/movie-details-header";
import { MovieDetailsInfo } from "./sections/info/movie-details-info";
import { MovieDetailsNoContent } from "./movie-details-no-content";

interface MovieDetailsPageProps {
  movie:Movie|null
  isOnList: boolean
}
export function MovieDetailsPage({movie,isOnList}:MovieDetailsPageProps) {
  if(!movie) return <MovieDetailsNoContent/>
  return (
    <main>
      <MovieDetailsHeader posterImage={movie.poster} />
      <MovieDetailsInfo movie={movie} isOnList={isOnList} />
    </main>
  );
}

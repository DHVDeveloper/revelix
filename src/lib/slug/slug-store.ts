import { Movie } from "@/domain/entities/movie.entity"
import { generateSlugMaps } from "./slug-generator"

let idToSlugMap: Map<string, string> = new Map()
let slugToIdMap: Map<string, string> = new Map()

export const initializeSlugStore = (movies: Movie[]) => {
  const { slugToId, idToSlug } = generateSlugMaps(movies)
  slugToIdMap = slugToId
  idToSlugMap = idToSlug
}

export const getSlugById = (id: string): string | undefined => {
  return idToSlugMap.get(id)
}

export const getIdBySlug = (slug: string): string | undefined => {
  return slugToIdMap.get(slug)
}

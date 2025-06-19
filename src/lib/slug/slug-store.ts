import { generateSlugMaps } from "./slug-generator"

let idToSlugMap: Map<string, string> | null = null
let slugToIdMap: Map<string, string> | null = null

export const initializeSlugStore = async () => {
  if (idToSlugMap && slugToIdMap) return

  const result = await generateSlugMaps()
  if (!result) return

  slugToIdMap = result.slugToId
  idToSlugMap = result.idToSlug
}

export const getSlugById = (id: string): string | undefined => {
  return idToSlugMap?.get(id)
}

export const getIdBySlug = (slug: string): string | undefined => {
  return slugToIdMap?.get(slug)
}

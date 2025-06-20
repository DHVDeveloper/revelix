import { movieServices } from "@/application/service/movie.service"


const slugify = (title: string): string => {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
}

export const generateSlugMaps = async () => {
  const movies = await movieServices.moviesSlug()
  if(!movies.data) return
  const slugToId = new Map<string, string>()
  const idToSlug = new Map<string, string>()
  const slugCount: Record<string, number> = {}

  for (const movie of movies.data) {

    const baseSlug = slugify(movie.title)
    let slug = baseSlug

    while (slugToId.has(slug)) {
      slugCount[baseSlug] = (slugCount[baseSlug] || 0) + 1
      slug = `${baseSlug}-${slugCount[baseSlug]}`
    }
    slugToId.set(slug, movie.id)
    idToSlug.set(movie.id, slug)
  }

  return { slugToId, idToSlug }
}

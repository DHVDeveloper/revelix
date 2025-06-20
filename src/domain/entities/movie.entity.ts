export interface Movie {
    highlighted: false
    rating: number
    poster: string
    cast: string
    thumbnail: string
    description: string
    id: string
    genre: string
    availableDate: string
    title: string
    slug: string
}

export type MovieCardView = Pick<Movie, 'id' | 'title' | 'rating' | 'thumbnail' | 'genre' | 'highlighted'>;
export type MovieCardHorizontalView = Pick<Movie, 'id' | 'title' | 'rating' | 'poster' | 'genre' | 'highlighted' | 'description'>;

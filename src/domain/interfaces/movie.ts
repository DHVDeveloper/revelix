export interface Movie {
    highlighted: false,
    rating: number,
    poster: string,
    cast: string,
    thumbnail: string,
    description: string,
    id: string,
    genre: string,
    availableDate: string,
    title: string
}

export type MovieCardView = Pick<Movie, 'id' | 'title' | 'rating' | 'thumbnail' | 'genre' | 'highlighted'>;
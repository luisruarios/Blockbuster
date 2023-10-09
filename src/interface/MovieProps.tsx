export interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
}

export interface MovieProps {
    movie: Movie;
}

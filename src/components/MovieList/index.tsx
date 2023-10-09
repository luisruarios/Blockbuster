import Card from "../Card/index";
import { StyledMovieList } from "./styles";
import { MovieListProps } from '../../interface/MovieListProps';

const MovieList = ({ movies, onCardClick }: MovieListProps) => (
  <StyledMovieList>
    {movies?.map((movie) => (
      <Card key={movie.imdbID} movie={movie} onCardClick={onCardClick} />
    ))}
  </StyledMovieList>
);

export default MovieList;

import Card from "../Card/index";
import { StyledMovieList } from "./styles";
import { MovieListProps } from '../../interface/MovieListProps';

const MovieList = ({ movies }: MovieListProps) => (
  <StyledMovieList>
    {movies?.map((movie) => (
      <Card key={movie.imdbID} movie={movie} />
    ))}
  </StyledMovieList>
);

export default MovieList;

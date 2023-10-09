import { MovieProps } from '../../interface/MovieProps';
import {
  StyledCard,
  StyledCardImage,
  StyledCardTitle,
  StyledCardYear,
  StyledCardType,
  StyledCartButton,
} from './styles';

interface CardProps {
  movie: MovieProps['movie'];
  onCardClick: (movie: MovieProps['movie']) => void; // Function to handle card click
}

const Card = ({ movie, onCardClick }: CardProps) => {
  return (
    <StyledCard>
      <StyledCardImage src={movie.Poster === 'N/A' ? '/placeholder.png' : movie.Poster} alt={movie.Title} />
      <StyledCardTitle>{movie.Title}</StyledCardTitle>
      <StyledCardYear>Year: {movie.Year}</StyledCardYear>
      <StyledCardType>Type: {movie.Type}</StyledCardType>

      <StyledCartButton onClick={() => onCardClick(movie)}>Add to Cart</StyledCartButton>
    </StyledCard>
  );
};

export default Card;

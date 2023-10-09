import { CardProps } from '../../interface/CardProps';
import {
  StyledCard,
  StyledCardImage,
  StyledCardTitle,
  StyledCardYear,
  StyledCardType
} from './styles';



const Card = ({ movie }: CardProps) => {
  return (
    <StyledCard>
      <StyledCardImage src={movie.Poster} alt={movie.Title} />
      <StyledCardTitle>{movie.Title}</StyledCardTitle>
      <StyledCardYear>Year: {movie.Year}</StyledCardYear>
      <StyledCardType>Type: {movie.Type}</StyledCardType>
    </StyledCard>
  );
};

export default Card;

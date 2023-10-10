import React, { useState } from 'react';
import { MovieProps } from '../../interface/MovieProps';
import { useNavigate } from 'react-router-dom';
import {
  StyledModalWrapper,
  StyledModalContent,
  StyledModalCloseButton,
  StyledMovieImage,
  StyledMovieDetails,
  StyledMovieTitle,
  StyledMovieYear,
  StyledMovieType,
  StyledMoviePoster,
  StyledModalFooter,
  StyledInput,
  StyledWrapInputs,
} from './styles';

interface ModalProps {
  movie: MovieProps['movie'] | null;
  closeModal: () => void;
}

const Modal = ({ movie, closeModal }: ModalProps) => {
  const [choice, setChoice] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleChoiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChoice(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const isButtonEnabled = choice === 'rent' || choice === 'purchase';

  const handleProceedToCart = () => {
    if (isButtonEnabled) {
      // Check if quantity is greater than zero
      if (quantity <= 0 || isNaN(quantity)) {
        // Display an error message for zero, negative or null
        alert('Quantity must be greater than 1.');
        return;
      }

      // Create a movie object with selected data
      const movieData = {
        Title: movie?.Title,
        Year: movie?.Year,
        Type: movie?.Type,
        OptionSelected: choice,
        RentDate: choice === 'rent' ? date : '',
        TapeQuantity: quantity,
        Poster: movie?.Poster,
      };

      // Retrieve the existing cart or initialize an empty array
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');

      // Add the current movie to the cart
      cart.push(movieData);

      // Save the updated cart in local storage
      localStorage.setItem('cart', JSON.stringify(cart));

      // Redirect to the checkout page
      navigate('/checkout');
    }
  };

  return (
    <StyledModalWrapper>
      <StyledModalContent>
        <StyledModalCloseButton onClick={closeModal}>Close</StyledModalCloseButton>
        <StyledMovieImage>
          <StyledMoviePoster
            src={movie?.Poster === 'N/A' ? '/placeholder.png' : movie?.Poster}
            alt={movie?.Title}
          />
        </StyledMovieImage>
        <StyledMovieDetails>
          <StyledMovieTitle>{movie?.Title}</StyledMovieTitle>
          <StyledMovieYear>Year: {movie?.Year}</StyledMovieYear>
          <StyledMovieType>Type: {movie?.Type}</StyledMovieType>
        </StyledMovieDetails>
        <StyledWrapInputs>
          <p className='choose-option'>Choose an option:</p>
          <label>
            <input
              type="radio"
              name="choice"
              value="rent"
              checked={choice === 'rent'}
              onChange={handleChoiceChange}
            />{' '}
            Rent
          </label>
          <label>
            <input
              type="radio"
              name="choice"
              value="purchase"
              checked={choice === 'purchase'}
              onChange={handleChoiceChange}
            />{' '}
            Purchase
          </label>
        </StyledWrapInputs>
        {choice === 'rent' && (
          <div>
            <p>Select rent date and tape quantity:</p>
            <StyledInput
              type="date"
              value={date}
              min={new Date().toISOString().split('T')[0]}
              onChange={handleDateChange}
              placeholder="Select date"
            />
            <StyledInput
              type="number"
              value={quantity}
              placeholder="Quantity"
              min="1"
              onChange={(event) => setQuantity(parseInt(event.target.value))}
            />
          </div>
        )}
        {choice === 'purchase' && (
          <div>
            <p>Select tape quantity:</p>
            <StyledInput
              type="number"
              value={quantity}
              placeholder="Quantity"
              min="1"
              onChange={(event) => setQuantity(parseInt(event.target.value))}
            />
          </div>
        )}
        {isButtonEnabled && (
          <StyledModalFooter>
            <button onClick={handleProceedToCart}>Proceed to Cart</button>
          </StyledModalFooter>
        )}
      </StyledModalContent>
    </StyledModalWrapper>
  );
};

export default Modal;

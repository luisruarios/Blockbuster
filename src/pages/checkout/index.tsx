import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledCheckoutWrapper,
  StyledMovieCard,
  StyledMovieImage,
  StyledMovieDetails,
  StyledMovieTitle,
  StyledMovieYear,
  StyledMovieType,
  StyledRentDate,
  StyledTapeQuantity,
  StyledFinishButton,
  StyledMoviePoster,
  StyledCtaSection,
} from './styles';

const Checkout = () => {
  const navigate = useNavigate();
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const handleFinishPurchase = () => {
    localStorage.removeItem('cart');
    localStorage.removeItem('selectedMovie');
    setPurchaseSuccess(true);

    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const handleAddMoreItems = () => {
    navigate('/');
  };

  const renderMovieCard = (movie: any, index: number) => (
    <StyledMovieCard key={index}>
      <StyledMovieImage>
        <StyledMoviePoster
          src={movie.Poster === 'N/A' ? '/placeholder.png' : movie.Poster}
          alt={movie.Title}
        />
      </StyledMovieImage>
      <StyledMovieDetails>
        <StyledMovieTitle>{movie.Title}</StyledMovieTitle>
        <label>Selected: {movie.OptionSelected}</label>
        <StyledMovieYear>Year: {movie.Year}</StyledMovieYear>
        <StyledMovieType>Type: {movie.Type}</StyledMovieType>
        {movie.OptionSelected === 'rent' && (
          <StyledRentDate>Rent Date: {movie.RentDate}</StyledRentDate>
        )}
        <StyledTapeQuantity>Tape Quantity: {movie.TapeQuantity}</StyledTapeQuantity>
      </StyledMovieDetails>
    </StyledMovieCard>
  );

  return (
    <StyledCheckoutWrapper>
      {purchaseSuccess ? (
        <p className='default'>Successful Purchase!</p>
      ) : (
        <>
          {cart.length === 0 ? (
            <p className='default'>Please add items to your cart</p>
          ) : (
            <>
              {cart.map((movie, index) => renderMovieCard(movie, index))}
              <StyledCtaSection>
                <StyledFinishButton onClick={handleAddMoreItems}>
                  Add More Items
                </StyledFinishButton>
                <StyledFinishButton onClick={handleFinishPurchase}>
                  Finish Purchase
                </StyledFinishButton>
              </StyledCtaSection>
            </>
          )}
        </>
      )}
    </StyledCheckoutWrapper>
  );
};

export default Checkout;

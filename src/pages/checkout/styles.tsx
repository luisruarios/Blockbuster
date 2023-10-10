import styled from 'styled-components';

export const StyledCheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  width: 80%;
  background: black;
  border-radius: 20px;
  border: 4px solid white;
  margin: 4% auto;

  p.default {
    font-size: 24px;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    width: 85%;
    padding: 0;
    align-items: center;

    p.default {
      font-size: 16px;
      margin: 20px;
    }
  }
`;

export const StyledMovieCard = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  width: 100%;
  background: #471717b8;
  border-radius: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: inherit;
  }
`;

export const StyledMovieImage = styled.div`
  max-width: 160px;
  width: 100%;
  margin: 20px;
  display: flex;

  @media (max-width: 768px) {
    max-width: 170px;
    margin: 10px;
  }
`;

export const StyledMovieDetails = styled.div`
  flex: 1;
  margin-left: 10px;
  margin-bottom: 10px;

  label {
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    font-style: italic;
  }

  @media (max-width: 768px) {
    margin: 0 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledMovieTitle = styled.h3`
  font-size: 22px;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 0;
  }
`;

export const StyledMovieYear = styled.p`
  font-size: 16px;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledMovieType = styled.p`
  font-size: 16px;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledRentDate = styled.p`
  font-size: 16px;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledTapeQuantity = styled.p`
  font-size: 16px;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledFinishButton = styled.button`
  background-color: #860a04;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  font-size: 18px;
  outline: none;

  &:hover {
    background-color: #242424;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledMoviePoster = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
  min-height: 160px;
  max-height: 160px;
  border-radius: 10px;
  object-fit: cover;
  margin: 0 auto;
  border: 3px solid white;

  @media (max-width: 768px) {
    min-height: 100px;
    max-height: 100px;
  }
`;

export const StyledCtaSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin: 20px auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const StyledModalContent = styled.div`
  background-color: rgb(0 0 0);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  border: 4px solid #860a04;
  min-width: 450px;
  @media (max-width: 768px) {
    min-width: 80%;
  }

  &:hover {
    transform: scale(1.05);
  }
  p {
    margin: 2px 0;
    &.choose-option {
      color: red;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`;

export const StyledModalCloseButton = styled.button`
  background-color: #860a04;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  font-size: 18px;
  outline: none;
  align-self: flex-end;

  &:hover {
    background-color: #242424;
  }
`;

export const StyledMovieImage = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const StyledMoviePoster = styled.img`
  max-width: 100%;
  height: auto;
  min-height: 300px;
  max-height: 300px;
  border-radius: 10px;
  object-fit: cover;
  margin: 0 auto;
`;

export const StyledMovieDetails = styled.div`
  margin-top: 20px;
`;

export const StyledMovieTitle = styled.h3`
  font-size: 24px;
  margin: 10px 0;
`;

export const StyledMovieYear = styled.p`
  font-size: 18px;
  margin: 5px 0;
`;

export const StyledMovieType = styled.p`
  font-size: 18px;
  margin: 5px 0;
`;

export const StyledPurchaseOptions = styled.div`
  margin-top: 20px;
`;

export const StyledOptionLabel = styled.label`
  font-size: 18px;
  margin-right: 10px;
`;

export const StyledOptionSelect = styled.select`
  font-size: 18px;
  padding: 5px;
`;

export const StyledQuantityLabel = styled.label`
  font-size: 18px;
  margin-top: 10px;
  display: block;
`;

export const StyledQuantityInput = styled.input`
  font-size: 18px;
  padding: 5px;
`;


export const StyledModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6px;

  button {
  background-color: #860a04;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  font-size: 18px;
  outline: none;
  text-decoration: none;
  align-self: flex-end;
  margin-top: 10px;

  &:hover {
    background-color: #242424;
  }
  }
`;

export const StyledInput = styled.input`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  &[type="number"] {
    width: 40px;
    margin-left: 15px;
  }
`;


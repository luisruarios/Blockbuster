import styled from 'styled-components';


export const StyledCard = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledCardImage = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
  min-height: 300px;
  max-height: 300px;
  border-radius: 10px;
  object-fit: cover;
  margin: 0 auto;
`;

export const StyledCardTitle = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

export const StyledCardYear = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;

export const StyledCardType = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;


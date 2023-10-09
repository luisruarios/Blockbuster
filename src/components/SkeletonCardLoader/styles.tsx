import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const StyledSkeletonLoaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

export const StyledSkeletonLoader = styled.div`
  background: linear-gradient(90deg, #4d4d4d9c 25%, #494949b3 50%, #514f4f94 75%);
  background-size: 200px 100%;
  animation: ${loadingAnimation} 1.5s infinite;
  border-radius: 20px;
  height: 482px;
`;

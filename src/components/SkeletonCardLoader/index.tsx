import { StyledSkeletonLoader, StyledSkeletonLoaderContainer } from './styles';

interface SkeletonLoaderProps {
  count?: number; // Number of skeleton loaders to render
}

const SkeletonLoader = ({ count = 5 }: SkeletonLoaderProps) => {
  return (
    <StyledSkeletonLoaderContainer>
      {/* Show the specified number of skeleton loaders */}
      {[...Array(count)].map((_, index) => (
        <StyledSkeletonLoader key={index} />
      ))}
    </StyledSkeletonLoaderContainer>
  );
};

export default SkeletonLoader;

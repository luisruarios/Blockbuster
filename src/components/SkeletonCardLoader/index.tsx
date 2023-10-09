import { StyledSkeletonLoader, StyledSkeletonLoaderContainer } from './styles';

interface SkeletonLoaderProps {
  count?: number;
}

const SkeletonLoader = ({ count = 5 }: SkeletonLoaderProps) => {
  return (
    <StyledSkeletonLoaderContainer>
      {[...Array(count)].map((_, index) => (
        <StyledSkeletonLoader key={index} />
      ))}
    </StyledSkeletonLoaderContainer>
  );
};

export default SkeletonLoader;

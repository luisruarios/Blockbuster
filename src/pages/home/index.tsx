import React, { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/index';
import Pagination from '../../components/Pagination/index';
import { StyledHomepageWrapper } from './styles';
import { fetchMovieList } from '../../API/movieList';
import SkeletonLoader from '../../components/SkeletonCardLoader';
import Modal from '../../components/Modal';

const ITEMS_PER_PAGE = 10;

const Home = () => {
  const [movieList, setMovieList] = useState([] as any[]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState<any | null>(null);

  const fetchMovies = async (page: number) => {
    setIsLoading(true);
    try {
      const response = await fetchMovieList(page);
      setMovieList(response.Search);
      setTotalPages(Math.ceil(response.totalResults / ITEMS_PER_PAGE));
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
      alert('Error getting list. Try again');
    }
  };

  useEffect(() => {
    // Fetch data for the initial page (currentPage is 1)
    fetchMovies(currentPage);
  }, []);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);

    // Fetch data for the new page
    fetchMovies(newPage);
  };

  const openModal = (movie: any) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <StyledHomepageWrapper>
      <div className="container">
        {isLoading ? (
          <SkeletonLoader count={10} />
        ) : (
          <>
            <MovieList movies={movieList} onCardClick={openModal} />
          </>
        )}
        {selectedMovie && <Modal movie={selectedMovie} closeModal={closeModal} />}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </StyledHomepageWrapper>
  );
};

export default Home;

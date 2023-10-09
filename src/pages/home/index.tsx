import React, { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/index";
import Pagination from "../../components/Pagination/index";
import { StyledHomepageWrapper } from "./styles";
import { fetchMovieList } from "../../API/movieList";
import SkeletonLoader from "../../components/SkeletonCardLoader";

const ITEMS_PER_PAGE = 10; // Number of items per page

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // Function to fetch movie list based on the current page
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const response = await fetchMovieList(currentPage);
        setMovieList(response.Search);
        setTotalPages(Math.ceil(response.totalResults / ITEMS_PER_PAGE));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
        // Display an alert when there's an error
        alert("Error getting list. Try again");
      }
    };

    fetchMovies();
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <StyledHomepageWrapper>
      <div className="container">
        {isLoading ? (
          <SkeletonLoader count={10} />
        ) : (
          <>
            <SkeletonLoader count={10} />
          </>
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </StyledHomepageWrapper>
  );
};

export default Home;

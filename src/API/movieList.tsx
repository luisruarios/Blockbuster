import axios from "axios";

export const fetchMovieList = async (currentPage: number) => {
  try {
    const apiKey = process.env.REACT_APP_OMDB_API_KEY;

    const response = await axios.get(`https://www.omdbapi.com/?s=avengers&apikey=${apiKey}&page=${currentPage}`);

    // Check if the response's Response property is "False"
    if (response.data.Response === "False") {
      throw new Error("Error getting list. Try again");
    }

    return response.data;
  } catch (error) {
    // Throw an error if there's an issue
    throw error;
  }
};

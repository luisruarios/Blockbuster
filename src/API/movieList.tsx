import axios from "axios";

export const fetchMovieList = async (currentPage: number) => {
  try {
    const response = await axios.get(`https://www.omdbapi.com/?s=future&apikey=5eec5adc&page=${currentPage}`);

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

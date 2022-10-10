import axios from 'axios'
import { useState } from "react";

export default function useMovie() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();

  const findMovies = async (option = {}) => {
    try {
      setIsLoading(true);
      const fetchRes = await axios.get('/api/movies')
      console.log(fetchRes.data)
      // setMovies(fetchRes);
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const findMovie = async ({ movieId }, option = {}) => {
    try {
      setIsLoading(true);
      const fetchRes = await Fetch.findMovie({ movieId }, option);
      setMovie(fetchRes);
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    findMovie,
    findMovies,
    movies,
    movie,
    isLoading,
  };
}

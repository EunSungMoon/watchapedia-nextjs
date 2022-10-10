import axios from "axios";
import { useState, useEffect } from "react";

const Page = ({ initialData }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const findMovies = async () => {
    try {
      setIsLoading(true);
      const fetchRes = await axios.get(`/api/movies`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(fetchRes.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    findMovies();
  }, []);
};

export default Page;

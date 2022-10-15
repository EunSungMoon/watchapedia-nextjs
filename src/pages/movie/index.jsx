import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3030/api/movies");
  const data = res.data;
  return {
    props: {
      initialData: {
        data,
      },
    },
  };
}

const Page = ({ initialData }) => {
  let router = useRouter();

  const [movies, setMovies] = useState(initialData.data.items);
  return (
    <>
      {movies.map(movie => (
        <>
          <div key={movie.categories}>{movie.categories}</div>
          <div>
            {movie.movie_list.map((i) => (
              <div key={i.title} onClick={() => router.push(`/movie/${i.movieId}`)}>
                {i.title}/ {i.movieId}
              </div>
            ))}
          </div>
        </>
      ))}
    </>
  );
};

export default Page;

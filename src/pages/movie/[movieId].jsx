import axios from "axios";
import {useState}from 'react'
export async function getServerSideProps(context) {
  const movieId = context.params.id;
  const res = await axios.get(`http://localhost:3030/api/movies/${movieId}`);
  const data = res.data;
  console.log(data);
  return {
    props: {
      initialData: {
        data,
      },
    },
  };
}

const Page = ({ initialData }) => {
  const [movie, setMovie]=useState(initialData.data.item)
  console.log(movie)
  return <div>{movie.title}</div>;
};

export default Page;

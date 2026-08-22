import { useEffect } from "react";
import { API_OPTIONS, API_URL } from "../utils/constants";
import Header from "./Header";

const Browse = () => {
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      API_URL,
      API_OPTIONS,
    );

    const result = await data.json();
    console.log(result);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;

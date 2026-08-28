import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import { usePopularMovies } from "../hooks/usePopularMovies";
import MainContainer from "./browse_containers/MainContainer";
import SecondaryContainer from "./browse_containers/SecondaryContainer";
import Header from "./Header";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  
  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer/>
    </>
  );
};

export default Browse;

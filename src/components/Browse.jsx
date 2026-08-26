import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./browse_containers/MainContainer";
import SecondaryContainer from "./browse_containers/SecondaryContainer";
import Header from "./Header";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer/>
    </>
  );
};

export default Browse;

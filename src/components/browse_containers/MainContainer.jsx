import { useSelector } from "react-redux";
import Loading from "../Loading";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) {
    return <Loading />;
  }
  let mainMovie = movies[0];
  console.log(mainMovie);
  return (
    <>
      <VideoTitle />
      <VideoBackground/>
    </>
  )
}

export default MainContainer;
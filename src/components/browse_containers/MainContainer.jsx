import { useSelector } from "react-redux";
import Loading from "../Loading";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) {
    return <Loading />;
  }

  const mainMovie = movies[0];

  return (
    <main className="relative h-screen w-full overflow-hidden">
      <VideoBackground movieId={mainMovie.id} />

      <VideoTitle
        title={mainMovie.original_title}
        overview={mainMovie.overview}
      />
    </main>
  );
};

export default MainContainer;

import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Loading from "../Loading";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies.nowPlayingMovies) {
    return <Loading/>;
  }
  return (
    <div className="">
      <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
      <MovieList title="Now Popular" movies={movies?.nowPopularMovies} />
      <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
      <MovieList title="Now Popular" movies={movies?.nowPopularMovies} />
    </div>
  );
};

export default SecondaryContainer;

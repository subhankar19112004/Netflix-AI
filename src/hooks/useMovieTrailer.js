import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/redux/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const getMovieVideo = async (movieId) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS,
    );
    const json = await data.json();

    const filetrTrailersData = json.results.filter(
      (video) => video.type === "Trailer",
    );
    let trailer = filetrTrailersData.length
      ? filetrTrailersData[0]
      : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideo(movieId);
  }, [movieId]);

  return trailerVideo;
};

export default useMovieTrailer;

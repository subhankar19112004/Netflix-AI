import { useDispatch } from "react-redux";
import { API_OPTIONS, API_URL_POPULAR } from "../utils/constants";
import { addNowPopularMovies } from "../utils/redux/movieSlice";
import { useEffect } from "react";

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getNowPopularMovies = async () => {
    const data = await fetch(API_URL_POPULAR, API_OPTIONS);

    const json = await data.json();
    dispatch(addNowPopularMovies(json.results));
  };

  useEffect(() => {
    getNowPopularMovies();
  }, []);
};

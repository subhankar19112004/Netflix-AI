import { useDispatch } from "react-redux";
import { API_OPTIONS, API_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/redux/movieSlice";
import { useEffect } from "react";

export const useNowPlayingMovies = () => {
      const dispatch = useDispatch();
      const getNowPlayingMovies = async () => {
        const data = await fetch(API_URL, API_OPTIONS);

        const json = await data.json();
        console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
      };

      useEffect(() => {
        getNowPlayingMovies();
      }, []);
}
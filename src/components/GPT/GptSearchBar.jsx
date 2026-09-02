import { useDispatch, useSelector } from "react-redux";
import lang from "../../utils/languageConstants";
import { useRef } from "react";
import { client } from "../../utils/openAI";
import { API_OPTIONS } from "../../utils/constants";
import { addGptMovieResults, setGptLoading } from "../../utils/redux/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);
  const isLoading = useSelector((store) => store.gpt.isLoading);

  const searchText = useRef(null);

  // Fetch movie details from TMDB
  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );

    const response = await data.json();

    return response.results;
  };

  const handleGPTSearch = async () => {
    const queryText = searchText.current.value.trim();

    if (!queryText || isLoading) {
      return;
    }

    dispatch(setGptLoading(true));

    try {
      const query =
        "You are a Movie recommendation assistant. Provide movie recommendations based on the user's query.";

      const inputQuery =
        " Output only the movie names in a comma-separated list and only give 5 movie names like the Example given above. Example: The Shawshank Redemption, The Godfather, The Dark Knight, Pulp Fiction, Fight Club.";

      // Ask OpenAI for movie recommendations
      const gptResults = await client.responses.create({
        model: "gpt-3.5-turbo",
        instructions: query,
        input: queryText + inputQuery,
      });

      const responseMovies = gptResults.output_text
        .split(",")
        .map((movie) => movie.trim())
        .filter(Boolean);

      // Fetch movie details from TMDB
      const movieDetailsPromises = responseMovies.map((movie) =>
        searchMovieTMDB(movie),
      );

      const movieDetailsResults = await Promise.all(movieDetailsPromises);

      dispatch(
        addGptMovieResults({
          movieNames: responseMovies,
          movieResults: movieDetailsResults,
        }),
      );
    } catch (error) {
      console.error("GPT Search Error:", error);

      // Stop loading if something goes wrong
      dispatch(setGptLoading(false));
    }
  };

  return (
    <div className="flex w-full flex-col items-center px-4 py-6">
      {/* Search Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleGPTSearch();
        }}
        className="
          mt-10 flex w-full max-w-3xl items-center gap-2
          rounded-2xl border border-white/10
          bg-[#212121] p-2 shadow-2xl
          transition-all duration-300
          focus-within:border-white/20
          focus-within:shadow-[0_0_30px_rgba(255,255,255,0.05)]
        "
      >
        {/* Search Input */}
        <input
          ref={searchText}
          type="text"
          name="movieQuery"
          disabled={isLoading}
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="
            min-w-0 flex-1 bg-transparent px-4 py-3
            font-sans text-sm font-extralight text-white
            outline-none placeholder:text-gray-500
            disabled:cursor-not-allowed disabled:opacity-50
            sm:text-base
          "
        />

        {/* Search Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="
            flex h-11 w-20 shrink-0 items-center justify-center
            rounded-xl bg-gray-600 text-gray-300
            transition-all duration-200
            hover:scale-105 hover:bg-gray-500
            active:scale-95
            disabled:cursor-not-allowed
            disabled:scale-100
            disabled:opacity-70
          "
          aria-label={lang[langKey].searchMovies}
        >
          {isLoading ? (
            <span
              className="
                h-5 w-5 animate-spin rounded-full
                border-2 border-gray-400
                border-t-white
              "
            />
          ) : (
            lang[langKey].search
          )}
        </button>
      </form>

      {/* Usage Instructions */}
      <div
        className="
          mt-4 max-w-2xl px-4 text-center
          font-sans text-xs font-light
          leading-5 tracking-wide text-gray-500
          sm:text-sm
        "
      >
        <p className="text-amber-100">{lang[langKey].responsibleUse}</p>

        <p className="mt-1 text-gray-200">
          {lang[langKey].tryPrompts}{" "}
          <span className="text-green-300">
            {lang[langKey].thrillerExample}
          </span>
          ,{" "}
          <span className="text-green-400">{lang[langKey].comedyExample}</span>,
          or{" "}
          <span className="text-green-500">{lang[langKey].similarExample}</span>
          .
        </p>
      </div>
    </div>
  );
};

export default GptSearchBar;

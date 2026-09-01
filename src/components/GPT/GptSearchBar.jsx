import { useSelector } from "react-redux";
import lang from "../../utils/languageConstants";
import { useRef } from "react";
import { client } from "../../utils/openAI";
import Loading from "../Loading";
import { API_OPTIONS } from "../../utils/constants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // Function to handle the response movies to be fetched from TMDB API and display them in the UI. This function will be called after receiving the response from OpenAI.
  const searchMovieTMDB = async (movieName) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query= " +
      movieName +
      "&include_adult=false&language=en-US&page=1",
      API_OPTIONS);
    
    const response = await data.json();
    console.log(response);
    return response.results;
  };



  const handleGPTSearch = async () => {
    const query =
      "You are a Movie recommendation assistant. Provide movie recommendations based on the user's query.";
    const inputQuery =
      " Output only the movie names in a comma-separated list and only give 5 movie names like the Example given above. Example: The Shawshank Redemption, The Godfather, The Dark Knight, Pulp Fiction, Fight Club.";
    const gptResults = await client.responses.create({
      model: "gpt-3.5-turbo",
      instructions: query,
      input: searchText.current.value + inputQuery,
    });
    if (!gptResults) {
      return <Loading />;
    }
    const responseMovies = gptResults.output_text.split(",").map((movie) => movie.trim());
    console.log(responseMovies);
    // ['Hera Pheri', 'Andaz Apna Apna', 'Golmaal: Fun Unlimited', 'Dhamaal', 'Chupke Chupke']

    // Fetch movie details from TMDB API for each recommended movie
    const movieDetailsPromises = responseMovies.map((movie) => searchMovieTMDB(movie));
    const movieDetailsResults = await Promise.all(movieDetailsPromises);
    console.log(movieDetailsResults);
  };

  return (
    <div className="flex w-full flex-col items-center px-4 py-6">
      {/* Search Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" mt-35 flex w-full max-w-3xl items-center gap-2 rounded-2xl border border-white/10 bg-[#212121] p-2 shadow-2xl transition-all duration-300 focus-within:border-white/20 focus-within:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
      >
        {/* Search Input */}
        <input
          ref={searchText}
          type="text"
          name="movieQuery"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className=" min-w-0 flex-1 bg-transparent px-4 py-3 font-sans text-sm font-extralight text-white outline-none placeholder:text-gray-500 sm:text-base"
        />

        {/* Search Button */}
        <button
          onClick={handleGPTSearch}
          type="submit"
          className=" flex h-11 w-20 shrink-0 items-center justify-center rounded-xl bg-gray-600 text-gray-300 transition-all duration-200 hover:scale-105 hover:bg-gray-500 active:scale-95"
          aria-label={lang[langKey].searchMovies}
        >
          {lang[langKey].search}
        </button>
      </form>

      {/* Usage Instructions */}
      <div className=" mt-4 max-w-2xl px-4 text-center font-sans text-xs font-light leading-5 tracking-wide text-gray-500 sm:text-sm">
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

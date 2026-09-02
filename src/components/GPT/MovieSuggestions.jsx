import { useSelector } from "react-redux";
import { IMAGE_URL } from "../../utils/constants";
import Shimmer from "../Shimmer";


function MovieSuggestions() {
    const { movieNames, movieResults, isLoading } = useSelector(
        (state) => state.gpt
    );

    // First search → no previous results
    if (isLoading && !movieResults?.length) {
        return <Shimmer  />;
    }

    if (!movieNames?.length || !movieResults?.length) {
        return null;
    }

    return (
      <section
        className="
        relative mx-auto w-full max-w-[1600px]
        px-4 pb-16
        sm:px-6 md:px-10 lg:px-14 
      "
      >
        {/* Shimmer overlay while keeping previous results */}
        {isLoading && (
          <div className="absolute inset-0 z-50 bg-[#162e31]/70 backdrop-blur-[2px]">
            <Shimmer />
          </div>
        )}

        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            AI Movie Recommendations
          </h2>

          <p className="mt-2 text-sm font-light text-white/50 sm:text-base">
            Curated recommendations based on your search
          </p>
        </div>

        <div className="space-y-10">
          {movieNames.map((movieName, index) => {
            const movies = movieResults[index];

            if (!movies?.length) return null;

            return (
              <div key={`${movieName}-${index}`} className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-5 w-1 rounded-full bg-red-600" />

                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {movieName}
                  </h3>

                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/50">
                    {movies.length} results
                  </span>
                </div>

                <div className="flex gap-3 overflow-x-auto overflow-y-visible pb-5 scrollbar-none sm:gap-4">
                  {movies.map((movie) => {
                    if (!movie?.backdrop_path) return null;

                    return (
                      <div
                        key={movie.id}
                        className="
                        group relative w-44 shrink-0 cursor-pointer
                        overflow-hidden rounded-lg border border-white/10
                        bg-[#111111]
                        transition-all duration-300 ease-out
                        hover:z-20 hover:scale-105
                        hover:border-white/30
                        hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)]
                        sm:w-52 md:w-56 lg:w-60
                      "
                      >
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={IMAGE_URL + movie.backdrop_path}
                            alt={movie.title || movieName}
                            loading="lazy"
                            className="
                            h-full w-full object-cover
                            transition-all duration-500 ease-out
                            group-hover:scale-110
                            group-hover:brightness-50
                          "
                          />

                          <div
                            className="
                          pointer-events-none absolute inset-0
                          bg-gradient-to-t from-black via-black/10
                          to-transparent opacity-0
                          transition-opacity duration-300
                          group-hover:opacity-100
                        "
                          />

                          <div
                            className="
                          absolute left-3 top-3 flex h-8 w-8
                          items-center justify-center rounded-full
                          border border-white/60 bg-white text-black
                          opacity-0 shadow-xl transition-all duration-300
                          group-hover:scale-100 group-hover:opacity-100
                        "
                          >
                            <svg
                              viewBox="0 0 24 24"
                              className="ml-0.5 h-4 w-4 fill-current"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>

                          <div
                            className="
                          absolute inset-x-0 bottom-0 p-3
                          translate-y-3 opacity-0
                          transition-all duration-300 ease-out
                          group-hover:translate-y-0 group-hover:opacity-100
                        "
                          >
                            <h4
                              className="
                            line-clamp-2 text-sm font-bold
                            leading-tight text-white drop-shadow-lg
                          "
                            >
                              {movie.title}
                            </h4>
                          </div>
                        </div>

                        <div className="px-3 py-2.5">
                          <h4 className="truncate text-sm font-medium text-white/90">
                            {movie.title}
                          </h4>

                          <div className="mt-1 flex items-center gap-2 text-xs text-white/40">
                            {movie.release_date && (
                              <span>{movie.release_date.slice(0, 4)}</span>
                            )}

                            {movie.vote_average > 0 && (
                              <>
                                <span>•</span>
                                <span>★ {movie.vote_average.toFixed(1)}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
}

export default MovieSuggestions;
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies?.length) return null;

  return (
    <section className="relative z-20 px-4 pb-8 sm:px-8 md:px-12 lg:px-5 bg-black">
      {/* Section Header */}
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-light font-serif tracking-tight text-white sm:text-xl md:text-2xl">
          {title}
        </h2>
      </div>

      {/* Movie Row */}
      <div
        className="
          flex
          gap-2
          overflow-x-auto
          overflow-y-visible
          pb-4
          scrollbar-none
          sm:gap-3
          md:gap-4
        "
      >
        {movies.slice(1).map((movie) => (
          <MovieCard key={movie.id} original_title={movie.original_title} backdrop_path={movie.backdrop_path} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;

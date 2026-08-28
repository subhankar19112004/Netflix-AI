import { IMAGE_URL } from "../../utils/constants";

const MovieCard = ({ backdrop_path, original_title }) => {
  if (!backdrop_path && !original_title) return null;

  return (
    <div
      className="
        group
        relative
        shrink-0
        cursor-pointer
        overflow-hidden
        rounded-md
        bg-zinc-900

        w-40
        sm:w-48
        md:w-56
        lg:w-60

        transition-all
        duration-300
        ease-out

        hover:z-30
        hover:scale-110
        hover:shadow-2xl
      "
    >
      {/* Movie Image */}
      <img
        src={IMAGE_URL + backdrop_path}
        alt={original_title || "Movie"}
        loading="lazy"
        className="
          aspect-video
          h-auto
          w-full
          object-cover

          transition-all
          duration-500
          ease-out

          group-hover:scale-105
          group-hover:brightness-50
        "
      />

      {/* Cinematic Gradient */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-linear-to-t
          from-black
          via-black/20
          to-transparent

          opacity-0
          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      {/* Movie Title */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-10
          p-3

          translate-y-4
          opacity-0

          transition-all
          duration-500
          ease-out

          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        <h3
          className="
            line-clamp-2
            text-sm
            font-bold
            leading-tight
            text-white
            drop-shadow-lg

            sm:text-base
          "
        >
          {original_title}
        </h3>
      </div>

      {/* Play Button */}
      <div
        className="
          absolute
          left-3
          top-3
          z-20

          flex
          h-8
          w-8
          items-center
          justify-center

          rounded-full
          border
          border-white/80
          bg-white

          scale-75
          opacity-0

          shadow-lg

          transition-all
          duration-300
          ease-out

          group-hover:scale-100
          group-hover:opacity-100
        "
      >
        <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4 fill-black">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
};

export default MovieCard;

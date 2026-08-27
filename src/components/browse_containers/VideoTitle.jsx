import { Info, Play } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center">
      <div className="w-full max-w-2xl px-6 pb-16 pt-20 text-white sm:px-10 md:px-16 lg:px-20">
        {/* Title */}
        <h1 className="mb-4 max-w-2xl text-2xl font-serif font-bold leading-tight tracking-tight drop-shadow-2xl sm:text-4xl md:text-4xl lg:text-5xl">
          {title}
        </h1>

        {/* Overview */}
        <p className="mb-6 max-w-xl text-sm font-light leading-6 text-gray-200 drop-shadow-lg sm:text-base sm:leading-7 md:text-lg">
          {overview}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Play Button */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-bold text-black transition-all duration-200 hover:bg-gray-200 sm:px-7 sm:py-3 sm:text-base"
          >
            <Play className="h-5 w-5 fill-current" />
            Play Now
          </button>

          {/* More Info Button */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-md bg-gray-500/70 px-5 py-2.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-gray-500 sm:px-7 sm:py-3 sm:text-base"
          >
            <Info className="h-5 w-5" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;

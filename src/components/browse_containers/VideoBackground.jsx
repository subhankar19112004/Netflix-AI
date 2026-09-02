import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useMovieTrailer(movieId);

  const iframeRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!trailerVideo?.key) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsReady(false);

    const iframe = iframeRef.current;

    const handleLoad = () => {
      setIsReady(true);
    };

    iframe?.addEventListener("load", handleLoad);

    return () => {
      iframe?.removeEventListener("load", handleLoad);
    };
  }, [trailerVideo?.key]);

  const toggleMute = () => {
    if (!iframeRef.current || !isReady) return;

    iframeRef.current.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: isMuted ? "unMute" : "mute",
        args: [],
      }),
      "*",
    );

    setIsMuted((prev) => !prev);
  };

  if (!trailerVideo?.key) {
    return (
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 -z-10 h-screen w-full overflow-hidden bg-black">
      {/* YouTube Trailer */}
      <iframe
        ref={iframeRef}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[56.25vw]
          w-[177.78vh]
          min-h-full
          min-w-full
          -translate-x-1/2
          -translate-y-1/2
          scale-[1.12]
          sm:scale-[1.15]
          md:scale-[1.17]
          lg:scale-[1.2]
        "
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
        title="Movie Trailer"
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
      />

      {/* Mobile dark overlay */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-black/25
          sm:bg-black/10
        "
      />

      {/* Left-to-right cinematic gradient */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-gradient-to-r
          from-black via-black/50 to-transparent
          sm:via-black/40
        "
      />

      {/* Bottom cinematic fade */}
      <div
        className="
          pointer-events-none
          absolute inset-x-0 bottom-0
          h-[50%]
          bg-gradient-to-t
          from-black via-black/75 to-transparent
          sm:h-[45%]
        "
      />

      {/* Top fade */}
      <div
        className="
          pointer-events-none
          absolute inset-x-0 top-0
          h-28
          bg-gradient-to-b
          from-black/80 to-transparent
          sm:h-32
        "
      />

      {/* Sound Button */}
      <button
        type="button"
        onClick={toggleMute}
        disabled={!isReady}
        aria-label={isMuted ? "Unmute trailer" : "Mute trailer"}
        className="
          absolute
          bottom-20
          right-4
          z-20

          flex
          h-10
          w-10
          items-center
          justify-center

          rounded-full
          border
          border-white/30
          bg-black/50
          text-white

          shadow-lg
          shadow-black/30
          backdrop-blur-md

          transition-all
          duration-300

          hover:scale-110
          hover:border-white/60
          hover:bg-white/20

          active:scale-95

          disabled:cursor-not-allowed
          disabled:opacity-50

          sm:bottom-24
          sm:right-6
          sm:h-11
          sm:w-11

          md:right-10
          lg:right-14
          xl:right-20
        "
      >
        {isMuted ? (
          <VolumeX className="h-4 w-4 sm:h-5 sm:w-5" />
        ) : (
          <Volume2 className="h-4 w-4 sm:h-5 sm:w-5" />
        )}
      </button>
    </div>
  );
};

export default VideoBackground;

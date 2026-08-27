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
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/40 to-black" />
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
          min-h-screen
          w-[177.78vh]
          min-w-full
          -translate-x-1/2
          -translate-y-1/2
          scale-[1.15]
        "
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
        title="Movie Trailer"
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
      />

      {/* Left-to-right cinematic gradient */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent" />

      {/* Bottom cinematic fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-linear-to-t from-black via-black/70 to-transparent" />

      {/* Top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/70 to-transparent" />

      {/* Sound Button */}
      <button
        type="button"
        onClick={toggleMute}
        disabled={!isReady}
        aria-label={isMuted ? "Unmute trailer" : "Mute trailer"}
        className="
          absolute
          bottom-24
          right-6
          z-20
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-white/30
          bg-black/40
          text-white
          backdrop-blur-md
          transition-all
          duration-300
          hover:scale-110
          hover:border-white/60
          hover:bg-white/20
          disabled:cursor-not-allowed
          disabled:opacity-50
          sm:bottom-28
          sm:right-10
          md:right-14
          lg:right-20
        "
      >
        {isMuted ? (
          <VolumeX className="h-5 w-5" />
        ) : (
          <Volume2 className="h-5 w-5" />
        )}
      </button>
    </div>
  );
};

export default VideoBackground;

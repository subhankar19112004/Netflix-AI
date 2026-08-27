import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const STATUS_MESSAGES = [
  "Loading your recommendations",
  "Finding something you'll love",
  "Preparing your next watch",
  "Almost ready",
];

const Loading = () => {
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % STATUS_MESSAGES.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
      {/* Subtle background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-red-600/10
          blur-[120px]
        "
      />

      {/* Main Loader */}
      <div className="relative flex w-full max-w-md flex-col items-center px-6">
        {/* Netflix N */}
        <div>
          <img
            src={LOGO_URL}
            alt="Netflix Logo"
          />
        </div>

        {/* Loading Bar */}
        <div className="w-full max-w-[280px]">
          <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="
                h-full
                w-[35%]
                rounded-full
                bg-[#E50914]
                shadow-[0_0_12px_rgba(229,9,20,0.8)]
                animate-[loadingSlide_1.5s_ease-in-out_infinite]
              "
            />
          </div>
        </div>

        {/* Status Message */}
        <div className="mt-5 h-6 overflow-hidden text-center">
          <p
            key={statusIndex}
            className="
              text-sm
              font-medium
              tracking-wide
              text-white/60
              animate-[fadeUp_0.5s_ease]
            "
          >
            {STATUS_MESSAGES[statusIndex]}
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes loadingSlide {
          0% {
            transform: translateX(-120%);
          }

          50% {
            transform: translateX(120%);
          }

          100% {
            transform: translateX(300%);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes netflixPulse {
          0%,
          100% {
            opacity: 0.85;
            transform: scale(1);
          }

          50% {
            opacity: 1;
            transform: scale(1.04);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;

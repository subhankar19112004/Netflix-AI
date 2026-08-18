import { useNavigate } from "react-router";
import {
  AlertTriangle,
  ArrowLeft,
  Home,
  RefreshCw,
  WifiOff,
} from "lucide-react";

const Error = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleHome = () => {
    navigate("/browse");
  };

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-red-600/10 blur-[120px]" />
        <div className="absolute right-[10%] top-[35%] h-96 w-96 rounded-full bg-red-900/10 blur-[140px]" />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Content */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-5 py-24 sm:px-8">
        <div className="w-full max-w-6xl">
          {/* Error Content */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* ========================= */}
            {/* SVG VIDEO ERROR PLAYER */}
            {/* ========================= */}
            <div className="relative mx-auto w-full max-w-xl">
              {/* Glow */}
              <div className="absolute -inset-6 rounded-3xl bg-red-600/10 blur-3xl" />

              {/* Video Player */}
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-2xl shadow-black/60">
                {/* SVG */}
                <svg
                  viewBox="0 0 800 450"
                  className="h-full w-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Red Glow */}
                    <filter id="redGlow">
                      <feGaussianBlur stdDeviation="12" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    {/* Play Gradient */}
                    <linearGradient
                      id="playGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#ff1f2d" />
                      <stop offset="100%" stopColor="#b20710" />
                    </linearGradient>

                    {/* Screen Gradient */}
                    <linearGradient
                      id="screenGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#171717" />
                      <stop offset="100%" stopColor="#050505" />
                    </linearGradient>
                  </defs>

                  {/* Background */}
                  <rect width="800" height="450" fill="url(#screenGradient)" />

                  {/* Ambient Red Light */}
                  <circle
                    cx="180"
                    cy="160"
                    r="120"
                    fill="#e50914"
                    opacity="0.06"
                    filter="url(#redGlow)"
                  />

                  {/* Ambient White Light */}
                  <circle
                    cx="620"
                    cy="260"
                    r="100"
                    fill="#ffffff"
                    opacity="0.025"
                  />

                  {/* Video Frame */}
                  <rect
                    x="55"
                    y="45"
                    width="690"
                    height="335"
                    rx="18"
                    fill="#080808"
                    stroke="#292929"
                    strokeWidth="2"
                  />

                  {/* Broken Screen Lines */}

                  <path
                    d="M180 45 L220 105 L190 160 L245 215"
                    stroke="#444"
                    strokeWidth="3"
                    fill="none"
                  />

                  <path
                    d="M620 45 L580 110 L615 165 L565 225"
                    stroke="#3a3a3a"
                    strokeWidth="3"
                    fill="none"
                  />

                  <path
                    d="M55 270 L125 240 L165 290 L210 255"
                    stroke="#292929"
                    strokeWidth="2"
                    fill="none"
                  />

                  <path
                    d="M745 250 L690 220 L650 275 L610 240"
                    stroke="#292929"
                    strokeWidth="2"
                    fill="none"
                  />

                  {/* Center Broken Play Button */}

                  <g transform="translate(400 205)">
                    {/* Glow */}
                    <circle
                      r="78"
                      fill="#e50914"
                      opacity="0.08"
                      filter="url(#redGlow)"
                    />

                    {/* Left Play Half */}
                    <path
                      d="M-45 -58
                         L-8 -35
                         L-8 35
                         L-45 58
                         Z"
                      fill="url(#playGradient)"
                    />

                    {/* Right Play Half */}
                    <path
                      d="M8 -35
                         L55 0
                         L8 35
                         Z"
                      fill="#e50914"
                    />

                    {/* Crack */}
                    <path
                      d="M-8 -35 L8 -10 L-5 8 L10 35"
                      stroke="#080808"
                      strokeWidth="8"
                      fill="none"
                    />
                  </g>

                  {/* Error Badge */}

                  <g transform="translate(580 280)">
                    <circle
                      r="42"
                      fill="#e50914"
                      opacity="0.2"
                      filter="url(#redGlow)"
                    />

                    <circle r="32" fill="#e50914" />

                    <path
                      d="M0 -16 V8"
                      stroke="white"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />

                    <circle cx="0" cy="18" r="3" fill="white" />
                  </g>

                  {/* Video Controls */}

                  <line
                    x1="75"
                    y1="405"
                    x2="725"
                    y2="405"
                    stroke="#292929"
                    strokeWidth="2"
                  />

                  {/* Play */}
                  <path d="M88 394 L88 416 L108 405 Z" fill="#ffffff" />

                  {/* Progress */}
                  <line
                    x1="125"
                    y1="405"
                    x2="400"
                    y2="405"
                    stroke="#e50914"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  <line
                    x1="400"
                    y1="405"
                    x2="650"
                    y2="405"
                    stroke="#333"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  {/* Progress Dot */}
                  <circle cx="400" cy="405" r="7" fill="#e50914" />

                  {/* Volume */}
                  <path
                    d="M665 398 H675 L687 390 V420 L675 412 H665 Z"
                    fill="#777"
                  />

                  {/* Settings */}
                  <circle
                    cx="710"
                    cy="405"
                    r="10"
                    fill="none"
                    stroke="#777"
                    strokeWidth="2"
                  />

                  <circle cx="710" cy="405" r="3" fill="#777" />
                </svg>

                {/* Player Reflection */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Reflection */}
              <div className="mx-auto mt-3 h-2 w-3/4 rounded-full bg-red-600/20 blur-xl" />
            </div>

            {/* ========================= */}
            {/* ERROR INFORMATION */}
            {/* ========================= */}
            <div className="text-center lg:text-left">
              {/* Small Label */}
              <div className="mb-4 flex items-center justify-center gap-3 lg:justify-start">
                <span className="h-px w-8 bg-red-600" />

                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
                  Playback Error
                </span>

                <span className="h-px w-8 bg-red-600 lg:hidden" />
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl xl:text-6xl">
                Something went
                <span className="block text-[#e50914]">wrong.</span>
              </h1>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-gray-400 sm:text-lg lg:mx-0">
                We couldn't play this page right now. It might be a temporary
                connection problem or something went wrong on our side.
              </p>

              <p className="mt-3 text-sm text-gray-600">
                Don't worry — your watchlist is still safe.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                {/* Go Home */}
                <button
                  onClick={handleHome}
                  className="group flex items-center justify-center gap-2 rounded-md bg-[#e50914] px-6 py-3.5 font-semibold text-white shadow-lg shadow-red-600/20 transition-all duration-200 hover:bg-[#f40612] hover:shadow-red-600/40 active:scale-95"
                >
                  <Home
                    size={18}
                    className="transition-transform group-hover:scale-110"
                  />
                  Go to Home
                </button>

                {/* Try Again */}
                <button
                  onClick={handleRetry}
                  className="group flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-white/10 active:scale-95"
                >
                  <RefreshCw
                    size={18}
                    className="transition-transform duration-500 group-hover:rotate-180"
                  />
                  Try Again
                </button>

                {/* Go Back */}
                <button
                  onClick={handleGoBack}
                  className="group flex items-center justify-center gap-2 rounded-md px-5 py-3.5 font-medium text-gray-400 transition-colors hover:text-white"
                >
                  <ArrowLeft
                    size={18}
                    className="transition-transform group-hover:-translate-x-1"
                  />
                  Go Back
                </button>
              </div>

              {/* Troubleshooting Cards */}
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.03] p-4 text-left transition-colors hover:bg-white/[0.06]">
                  <div className="rounded-md bg-white/5 p-2">
                    <WifiOff size={18} className="text-gray-400" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-300">
                      Check connection
                    </p>

                    <p className="mt-1 text-xs text-gray-600">
                      Make sure you're online
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.03] p-4 text-left transition-colors hover:bg-white/[0.06]">
                  <div className="rounded-md bg-white/5 p-2">
                    <AlertTriangle size={18} className="text-gray-400" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-300">
                      Try again later
                    </p>

                    <p className="mt-1 text-xs text-gray-600">
                      The issue may be temporary
                    </p>
                  </div>
                </div>
              </div>

              {/* Error Code */}
              <div className="mt-10 flex items-center gap-4 text-xs text-gray-600">
                <span className="h-px w-10 bg-white/10" />

                <span>
                  Error Code: <span className="text-gray-400">NSEZ-500</span>
                </span>

                <span className="h-px w-10 bg-white/10" />
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-16 text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.5em] text-gray-700">
              Entertainment never stops
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Error;

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const COLORS = {
  bg: "#050506",
  panel: "#101012",
  border: "#1f1f23",
  red: "#E50914",
  redSoft: "rgba(229,9,20,0.7)",
  violet: "#8B5CF6",
  violetSoft: "rgba(139,92,246,0.6)",
  textMuted: "#9aa0a6",
};

const STATUS_MESSAGES = [
  "Scanning your watch history",
  "Matching scenes to your mood",
  "Ranking tonight's picks",
  "Polishing the recommendations",
];

const FilmStrip = ({ flip = false }) => (
  <div
    style={{
      position: "absolute",
      left: 0,
      right: 0,
      height: 16,
      overflow: "hidden",
      top: flip ? "auto" : 0,
      bottom: flip ? 0 : "auto",
      opacity: 0.35,
    }}
  >
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "200%",
        alignItems: "center",
        gap: 14,
        animation: "cs-marquee 16s linear infinite",
        animationDirection: flip ? "reverse" : "normal",
      }}
    >
      {Array.from({ length: 80 }).map((_, i) => (
        <span
          key={i}
          style={{
            width: 8,
            height: 8,
            borderRadius: 2,
            background: COLORS.redSoft,
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  </div>
);

const ScannerBadge = () => (
  <svg
    viewBox="0 0 200 200"
    width={176}
    height={176}
    style={{ overflow: "visible" }}
  >
    <defs>
      <linearGradient id="csScan" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={COLORS.violet} stopOpacity="0" />
        <stop offset="50%" stopColor={COLORS.violet} stopOpacity="0.95" />
        <stop offset="100%" stopColor={COLORS.violet} stopOpacity="0" />
      </linearGradient>
      <radialGradient id="csGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={COLORS.red} stopOpacity="0.35" />
        <stop offset="100%" stopColor={COLORS.red} stopOpacity="0" />
      </radialGradient>
      <clipPath id="csClip">
        <circle cx="100" cy="100" r="62" />
      </clipPath>
    </defs>

    <circle cx="100" cy="100" r="98" fill="url(#csGlow)" />

    {/* outer sprocket ring - film reel homage */}
    <circle
      cx="100"
      cy="100"
      r="86"
      fill="none"
      stroke={COLORS.red}
      strokeWidth="2.5"
      strokeDasharray="4 10"
      strokeLinecap="round"
      opacity="0.75"
      style={{
        transformOrigin: "100px 100px",
        animation: "cs-spin 10s linear infinite",
      }}
    />
    {/* inner ring, counter-rotating */}
    <circle
      cx="100"
      cy="100"
      r="72"
      fill="none"
      stroke={COLORS.violet}
      strokeWidth="1.5"
      strokeDasharray="2 9"
      opacity="0.55"
      style={{
        transformOrigin: "100px 100px",
        animation: "cs-spin-rev 14s linear infinite",
      }}
    />

    {/* inner disc */}
    <circle
      cx="100"
      cy="100"
      r="62"
      fill={COLORS.panel}
      stroke={COLORS.border}
      strokeWidth="1"
    />

    {/* AI scan beam */}
    <g clipPath="url(#csClip)">
      <rect
        x="38"
        y="60"
        width="124"
        height="22"
        fill="url(#csScan)"
        style={{ animation: "cs-scan 2.4s ease-in-out infinite" }}
      />
    </g>

    {/* play triangle */}
    <path
      d="M88 78 L124 100 L88 122 Z"
      fill="#f5f5f5"
      style={{
        transformOrigin: "100px 100px",
        animation: "cs-pulse 2.4s ease-in-out infinite",
      }}
    />
  </svg>
);

const Loading = () => {
  const [statusIndex, setStatusIndex] = useState(0);
  const [progress, setProgress] = useState(8);

  useEffect(() => {
    const statusTimer = setInterval(() => {
      setStatusIndex((i) => (i + 1) % STATUS_MESSAGES.length);
    }, 1900);
    const progressTimer = setInterval(() => {
      setProgress((p) => (p >= 96 ? 96 : p + Math.random() * 9));
    }, 450);
    return () => {
      clearInterval(statusTimer);
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <div
      style={{ background: COLORS.bg }}
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden"
    >
      <style>{`
        @keyframes cs-spin { to { transform: rotate(360deg); } }
        @keyframes cs-spin-rev { to { transform: rotate(-360deg); } }
        @keyframes cs-scan {
          0%, 100% { transform: translateY(-36px); opacity: .15; }
          50% { transform: translateY(36px); opacity: 1; }
        }
        @keyframes cs-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.12); opacity: .75; }
        }
        @keyframes cs-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes cs-fadeup {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cs-shimmer {
          0% { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
        .cs-shimmer-bg {
          background-image: linear-gradient(
            90deg,
            rgba(255,255,255,0.02) 0%,
            rgba(255,255,255,0.09) 20%,
            rgba(255,255,255,0.02) 40%
          );
          background-size: 800px 100%;
          animation: cs-shimmer 1.6s infinite linear;
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <FilmStrip />
      <FilmStrip flip />

      {/* ambient glow */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: 520,
            height: 520,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background: COLORS.red,
            opacity: 0.14,
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: 320,
            height: 320,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background: COLORS.violet,
            opacity: 0.12,
            filter: "blur(100px)",
          }}
        />
      </div>

      <ScannerBadge />

      <div
        className="relative flex flex-col items-center gap-3 text-center"
        style={{ marginTop: 28 }}
      >
        <div className="flex items-center gap-2">
          <Sparkles size={15} color={COLORS.violet} />
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.35em",
              color: COLORS.violet,
            }}
          >
            CINEMIND AI
          </span>
        </div>

        <h1
          className="font-black"
          style={{
            fontSize: 26,
            color: "#f5f5f5",
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          Curating what you'll love next
        </h1>

        <p
          key={statusIndex}
          style={{
            fontSize: 14,
            color: COLORS.textMuted,
            animation: "cs-fadeup .5s ease",
            margin: 0,
          }}
        >
          {STATUS_MESSAGES[statusIndex]}
        </p>
      </div>

      <div className="relative" style={{ marginTop: 30, width: 280 }}>
        <div
          style={{
            height: 4,
            width: "100%",
            borderRadius: 999,
            background: "rgba(255,255,255,0.08)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              borderRadius: 999,
              width: `${progress}%`,
              background: `linear-gradient(90deg, ${COLORS.red}, ${COLORS.violet})`,
              transition: "width 0.5s ease-out",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 8,
            fontSize: 10,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#6b7280",
          }}
        >
          <span>Analyzing</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>

      <div
        className="relative flex"
        style={{ marginTop: 36, gap: 10, padding: "0 24px" }}
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="cs-shimmer-bg flex-shrink-0"
            style={{
              width: 56,
              height: 82,
              borderRadius: 6,
              background: COLORS.panel,
              border: `1px solid ${COLORS.border}`,
              opacity: 1 - i * 0.08,
              animationDelay: `${i * 0.12}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;

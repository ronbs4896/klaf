type Variant = "scroll" | "letters" | "doorway" | "hands" | "abstract";

type Props = {
  label: string;
  variant?: Variant;
  className?: string;
  ratio?: "square" | "portrait" | "landscape" | "wide" | "tall";
};

const ratioClass = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/10]",
  tall: "aspect-[4/5]",
} as const;

function Scroll() {
  return (
    <svg
      viewBox="0 0 400 500"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="parch" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#efe1c0" />
          <stop offset="55%" stopColor="#e3cf9c" />
          <stop offset="100%" stopColor="#c8ad6c" />
        </linearGradient>
        <linearGradient id="parchEdge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#parch)" />
      {Array.from({ length: 22 }).map((_, i) => (
        <line
          key={i}
          x1="40"
          x2="360"
          y1={70 + i * 17}
          y2={70 + i * 17}
          stroke="#3a2a14"
          strokeOpacity="0.18"
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: 14 }).map((_, row) =>
        Array.from({ length: 14 }).map((_, col) => {
          const x = 50 + col * 22;
          const y = 78 + row * 17;
          const skip = (row * 7 + col * 3) % 11 === 0;
          if (skip) return null;
          return (
            <rect
              key={`${row}-${col}`}
              x={x}
              y={y - 8}
              width="14"
              height="10"
              rx="1.5"
              fill="#1f1408"
              opacity={0.78 + ((row + col) % 3) * 0.05}
            />
          );
        })
      )}
      <rect x="0" y="0" width="400" height="40" fill="url(#parchEdge)" />
      <rect
        x="0"
        y="460"
        width="400"
        height="40"
        fill="url(#parchEdge)"
        transform="translate(0,500) scale(1,-1)"
      />
    </svg>
  );
}

function Letters() {
  return (
    <svg
      viewBox="0 0 400 500"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <radialGradient id="letBg" cx="50%" cy="40%" r="80%">
          <stop offset="0%" stopColor="#f4e7c8" />
          <stop offset="100%" stopColor="#b48a44" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill="url(#letBg)" />
      <g fill="#1c1106" opacity="0.92">
        <rect x="60" y="160" width="80" height="14" />
        <rect x="60" y="160" width="14" height="80" />
        <rect x="170" y="200" width="14" height="60" />
        <rect x="170" y="200" width="50" height="14" />
        <rect x="245" y="170" width="14" height="90" />
        <rect x="245" y="170" width="70" height="14" />
        <rect x="290" y="230" width="25" height="14" />
        <rect x="60" y="290" width="100" height="14" />
        <rect x="60" y="290" width="14" height="55" />
        <rect x="190" y="290" width="14" height="55" />
        <rect x="245" y="290" width="70" height="14" />
        <rect x="245" y="290" width="14" height="55" />
      </g>
    </svg>
  );
}

function Doorway() {
  return (
    <svg
      viewBox="0 0 400 500"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e9e2d2" />
          <stop offset="100%" stopColor="#cdc1a4" />
        </linearGradient>
        <linearGradient id="frame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7a5c34" />
          <stop offset="100%" stopColor="#4a3719" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#wall)" />
      <rect x="90" y="60" width="220" height="440" fill="#1d1407" />
      <rect x="76" y="46" width="248" height="14" fill="url(#frame)" />
      <rect x="76" y="46" width="14" height="454" fill="url(#frame)" />
      <rect x="310" y="46" width="14" height="454" fill="url(#frame)" />
      <g transform="translate(305 110) rotate(20)">
        <rect width="18" height="80" rx="3" fill="#c9a04a" />
        <rect x="4" y="6" width="10" height="68" rx="2" fill="#7a5e1f" />
        <text
          x="9"
          y="48"
          textAnchor="middle"
          fill="#f3dca1"
          fontFamily="serif"
          fontWeight="700"
          fontSize="18"
        >
          ש
        </text>
      </g>
    </svg>
  );
}

function Hands() {
  return (
    <svg
      viewBox="0 0 400 500"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="tableBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a2a16" />
          <stop offset="100%" stopColor="#1c130a" />
        </linearGradient>
        <linearGradient id="paperA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f1e2bf" />
          <stop offset="100%" stopColor="#caa55c" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#tableBg)" />
      <g transform="translate(60 130) rotate(-6)">
        <rect width="280" height="240" rx="6" fill="url(#paperA)" />
        {Array.from({ length: 10 }).map((_, i) => (
          <line
            key={i}
            x1="20"
            x2="260"
            y1={28 + i * 20}
            y2={28 + i * 20}
            stroke="#3a2a14"
            strokeOpacity="0.25"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <rect
            key={i}
            x={24 + (i * 31) % 240}
            y={20 + ((i * 41) % 8) * 20}
            width="16"
            height="9"
            fill="#1a1006"
            opacity="0.85"
          />
        ))}
      </g>
      <ellipse cx="120" cy="430" rx="160" ry="22" fill="#000" opacity="0.35" />
    </svg>
  );
}

function Abstract() {
  return (
    <svg
      viewBox="0 0 400 500"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="abs" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#efe6d2" />
          <stop offset="100%" stopColor="#b48a44" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#abs)" />
      <circle cx="80" cy="100" r="120" fill="#fff" opacity="0.08" />
      <circle cx="320" cy="420" r="180" fill="#1c1106" opacity="0.08" />
    </svg>
  );
}

const variantMap: Record<Variant, () => React.ReactElement> = {
  scroll: Scroll,
  letters: Letters,
  doorway: Doorway,
  hands: Hands,
  abstract: Abstract,
};

export default function ScrollArt({
  label,
  variant = "scroll",
  className = "",
  ratio = "landscape",
}: Props) {
  const Art = variantMap[variant];
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-line/70 ${ratioClass[ratio]} ${className}`}
      aria-label={label}
    >
      <Art />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
        <span className="rounded-full bg-black/45 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-white/90 backdrop-blur-sm">
          {label}
        </span>
      </div>
    </div>
  );
}

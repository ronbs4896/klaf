type PlaceholderProps = {
  label: string;
  className?: string;
  ratio?: "square" | "portrait" | "landscape" | "wide" | "tall";
  tone?: "warm" | "cool" | "neutral";
};

const ratioClass: Record<NonNullable<PlaceholderProps["ratio"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/10]",
  tall: "aspect-[4/5]",
};

const toneClass: Record<NonNullable<PlaceholderProps["tone"]>, string> = {
  warm: "bg-gradient-to-br from-[#efe6d2] via-[#e7d9b8] to-[#d6c193]",
  cool: "bg-gradient-to-br from-[#dfe3df] via-[#cfd7cf] to-[#b8c4b8]",
  neutral: "bg-gradient-to-br from-[#ecebe5] via-[#dbd8cc] to-[#c4bfae]",
};

export default function Placeholder({
  label,
  className = "",
  ratio = "landscape",
  tone = "warm",
}: PlaceholderProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-line ${ratioClass[ratio]} ${toneClass[tone]} ${className}`}
      aria-label={label}
    >
      <div className="absolute inset-0 flex items-end p-5">
        <div className="rounded-full bg-black/35 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wide text-white backdrop-blur-sm">
          {label}
        </div>
      </div>
    </div>
  );
}

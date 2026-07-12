import { useMemo } from "react";

/**
 * SVG-based gradient placeholder with a label so the user can identify
 * exactly which image to swap in. Deterministic gradient from label.
 */
export default function PlaceholderImage({
  label = "image",
  aspect = "1/1",
  className = "",
  variant = "auto",
  round = false,
  showIcon = true,
}) {
  const [g1, g2] = useMemo(() => {
    const palettes = [
      ["#22d3ee", "#3b82f6"],
      ["#3b82f6", "#8b5cf6"],
      ["#8b5cf6", "#ec4899"],
      ["#22d3ee", "#8b5cf6"],
      ["#0ea5e9", "#6366f1"],
      ["#06b6d4", "#7c3aed"],
    ];
    let h = 0;
    for (let i = 0; i < label.length; i++) h = (h * 31 + label.charCodeAt(i)) >>> 0;
    return palettes[h % palettes.length];
  }, [label]);

  const displayLabel = label.replace(/\.jpg|\.png/gi, "");

  return (
    <div
      data-testid={`placeholder-${label}`}
      data-placeholder-name={label}
      role="img"
      aria-label={label}
      className={`relative overflow-hidden ${round ? "rounded-full" : "rounded-2xl"} ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${g1}, ${g2})` }}
      />
      {/* grid overlay */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* noise / glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.35), transparent 55%)",
        }}
      />
      {showIcon && variant !== "silent" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white/90 px-3 text-center">
          <div className="w-9 h-9 mb-2 rounded-md flex items-center justify-center backdrop-blur-md bg-white/10 border border-white/20">
            <span className="font-mono text-[10px] font-bold">IMG</span>
          </div>
          <div className="font-mono text-[10px] tracking-widest uppercase opacity-90 leading-tight break-all">
            {displayLabel}
          </div>
        </div>
      )}
    </div>
  );
}

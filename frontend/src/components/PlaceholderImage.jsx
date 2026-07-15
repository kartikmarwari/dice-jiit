import { useMemo } from "react";

/**
 * Renders either a real image (if `src` is provided) OR a gradient placeholder
 * with a label. This makes swapping placeholders → real photos trivial:
 *   pass `src="/images/foo.jpg"` and the placeholder auto-hides.
 */
export default function PlaceholderImage({
  src = null,
  label = "image",
  aspect = "1/1",
  className = "",
  round = false,
  showIcon = true,
  alt,
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
  const radius = round ? "rounded-full" : "rounded-2xl";

  // Real image branch
  if (src) {
    return (
      <div
        data-testid={`image-${label}`}
        className={`relative overflow-hidden ${radius} ${className}`}
        style={{ aspectRatio: aspect }}
      >
        <img
          src={src}
          alt={alt || label}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    );
  }

  // Placeholder branch
  return (
    <div
      data-testid={`placeholder-${label}`}
      data-placeholder-name={label}
      role="img"
      aria-label={alt || label}
      className={`relative overflow-hidden ${radius} ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${g1}, ${g2})` }}
      />
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.35), transparent 55%)",
        }}
      />
      {showIcon && (
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

import { memo } from "react";

const variantConfig = {
  green: {
    glow:
      "shadow-sm hover:shadow-md before:from-brand-400/20 before:via-brand-300/10 before:to-transparent",
    gradient:
      "bg-white",
    border: "border border-slate-200",
  },
  emerald: {
    glow:
      "shadow-sm hover:shadow-md before:from-brand-400/20 before:via-brand-300/10 before:to-transparent",
    gradient:
      "bg-white",
    border: "border border-slate-200",
  },
  teal: {
    glow:
      "shadow-sm hover:shadow-md before:from-brand-400/20 before:via-brand-300/10 before:to-transparent",
    gradient:
      "bg-white",
    border: "border border-slate-200",
  },
  lime: {
    glow:
      "shadow-sm hover:shadow-md before:from-brand-400/20 before:via-brand-300/10 before:to-transparent",
    gradient:
      "bg-white",
    border: "border border-slate-200",
  },
};

function GlowCardComponent({
  className = "",
  children,
  variant,
}) {
  const variantStyles = variantConfig[variant];

  return (
    <div className="relative">
      <div
        className={`relative overflow-hidden rounded-[26px] ${variantStyles.gradient} ${variantStyles.border} ${variantStyles.glow} ${className}`}
      >
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}

export const GlowCard = memo(GlowCardComponent);


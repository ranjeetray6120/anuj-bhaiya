import React from "react";

export interface SectionHeaderProps {
  badge?: string;
  eyebrow?: string;
  badgeVariant?: string;
  title: string;
  highlight?: string;
  description?: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  eyebrow,
  badgeVariant,
  title,
  highlight,
  description,
  subtitle,
  align = "center",
  className = "",
}) => {
  const isCenter = align === "center";
  const displayBadge = badge || eyebrow;
  const displayDesc = description || subtitle;

  return (
    <div
      className={`flex flex-col gap-2.5 mb-10 sm:mb-14 ${
        isCenter ? "text-center items-center" : "text-left items-start"
      } ${className}`}
    >
      {displayBadge && (
        <p className="text-xs font-bold uppercase tracking-widest text-[#046BD2]">
          {displayBadge}
        </p>
      )}

      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-3xl">
        {highlight && title.includes(highlight) ? (
          <>
            {title.split(highlight)[0]}
            <span className="text-[#046BD2]">
              {highlight}
            </span>
            {title.split(highlight)[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {displayDesc && (
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
          {displayDesc}
        </p>
      )}
    </div>
  );
};

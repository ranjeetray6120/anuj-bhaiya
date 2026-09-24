import React from "react";

export type BadgeVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "success"
  | "warning"
  | "info"
  | "accent";

export type BadgeSize = "sm" | "md";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  icon?: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: "bg-blue-50 dark:bg-blue-950/70 text-[#046BD2] dark:text-[#38BDF8] border-blue-200/70 dark:border-blue-900/70 font-semibold",
  secondary: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 font-medium",
  outline: "bg-transparent text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 font-medium",
  success: "bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900 font-semibold",
  warning: "bg-amber-50 dark:bg-amber-950/70 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-900 font-semibold",
  info: "bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-400 border-sky-200 dark:border-sky-900 font-semibold",
  accent: "bg-rose-50 dark:bg-rose-950/70 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-900 font-semibold",
};

const dotColors: Record<BadgeVariant, string> = {
  primary: "bg-[#046BD2]",
  secondary: "bg-slate-400",
  outline: "bg-slate-400",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  info: "bg-sky-500",
  accent: "bg-rose-500",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "text-[11px] px-2.5 py-0.5 rounded-md gap-1 tracking-tight",
  md: "text-xs px-3 py-1 rounded-full gap-1.5 tracking-normal",
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  size = "md",
  dot = false,
  icon,
  className = "",
  ...props
}) => {
  return (
    <span
      className={`inline-flex items-center border transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColors[variant]}`}
          aria-hidden="true"
        />
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

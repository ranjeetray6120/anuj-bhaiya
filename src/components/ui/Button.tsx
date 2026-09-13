import React, { forwardRef } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "accent"
  | "danger";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#046BD2] hover:bg-[#0356A8] text-white shadow-sm hover:shadow-md hover:shadow-[#046BD2]/20 border border-transparent active:scale-[0.99]",
  secondary:
    "bg-[#0A1628] hover:bg-[#0F1E36] text-white shadow-sm hover:shadow-md border border-slate-800 active:scale-[0.99]",
  outline:
    "bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-xs active:scale-[0.99]",
  ghost:
    "bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-transparent",
  accent:
    "bg-[#E11D48] hover:bg-[#BE123C] text-white shadow-sm hover:shadow-md hover:shadow-rose-600/20 border border-transparent active:scale-[0.99]",
  danger:
    "bg-red-600 hover:bg-red-700 text-white shadow-sm border border-transparent",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs px-3.5 py-1.5 rounded-lg gap-1.5 font-medium",
  md: "text-sm px-4.5 py-2.5 rounded-xl gap-2 font-semibold",
  lg: "text-base px-6 py-3.5 rounded-xl gap-2.5 font-semibold",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      href,
      leftIcon,
      rightIcon,
      isLoading = false,
      disabled,
      fullWidth = false,
      external = false,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center transition-all duration-150 select-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-[#046BD2] focus-visible:outline-offset-2";
    const widthClass = fullWidth ? "w-full" : "";
    const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${widthClass} ${className}`;

    const content = (
      <>
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin shrink-0" />
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </>
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClasses}
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

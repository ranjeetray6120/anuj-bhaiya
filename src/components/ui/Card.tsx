import React, { forwardRef } from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  surface?: "white" | "muted" | "dark";
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, interactive = false, surface = "white", className = "", ...props }, ref) => {
    const surfaceClasses = {
      white: "bg-white border-slate-200 text-slate-900",
      muted: "bg-slate-50 border-slate-200 text-slate-900",
      dark: "bg-[#0A1628] border-slate-800 text-white",
    }[surface];

    const interactiveClasses = interactive
      ? "transition-colors duration-150 hover:border-[#046BD2]"
      : "";

    return (
      <div
        ref={ref}
        className={`rounded-xl border flex flex-col ${surfaceClasses} ${interactiveClasses} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <div className={`p-6 pb-2 flex flex-col gap-1 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <h3
    className={`text-lg sm:text-xl font-bold text-slate-900 tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <p className={`text-sm text-slate-600 leading-relaxed ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <div className={`px-6 py-2 flex-1 ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <div
    className={`p-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3 ${className}`}
    {...props}
  >
    {children}
  </div>
);

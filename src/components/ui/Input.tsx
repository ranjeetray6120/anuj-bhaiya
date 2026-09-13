import React, { forwardRef } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      id,
      className = "",
      required,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-bold uppercase tracking-wider text-slate-700"
          >
            {label} {required && <span className="text-rose-500">*</span>}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3.5 pointer-events-none text-slate-400 shrink-0">
              {leftIcon}
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            required={required}
            disabled={disabled}
            className={`w-full bg-slate-50/70 border text-slate-900 text-sm rounded-xl py-2.5 px-4 outline-none transition-all placeholder:text-slate-400 focus:bg-white disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed ${
              leftIcon ? "pl-10" : ""
            } ${rightIcon ? "pr-10" : ""} ${
              error
                ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/15"
                : "border-slate-200 focus:border-[#046BD2] focus:ring-2 focus:ring-[#046BD2]/15"
            } ${className}`}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3.5 pointer-events-none text-slate-400 shrink-0">
              {rightIcon}
            </div>
          )}
        </div>
        {error ? (
          <p className="text-xs text-rose-600 font-medium">{error}</p>
        ) : helperText ? (
          <p className="text-xs text-slate-500">{helperText}</p>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

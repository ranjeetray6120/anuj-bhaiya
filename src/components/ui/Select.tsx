import React, { forwardRef } from "react";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
  helperText?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
      placeholder,
      error,
      helperText,
      id,
      className = "",
      required,
      disabled,
      ...props
    },
    ref
  ) => {
    const selectId =
      id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-xs font-bold uppercase tracking-wider text-slate-700"
          >
            {label} {required && <span className="text-rose-500">*</span>}
          </label>
        )}
        <div className="relative flex items-center">
          <select
            id={selectId}
            ref={ref}
            required={required}
            disabled={disabled}
            className={`w-full appearance-none bg-slate-50/70 border text-slate-900 text-sm rounded-xl py-2.5 px-4 pr-10 outline-none transition-all focus:bg-white disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed cursor-pointer ${
              error
                ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/15"
                : "border-slate-200 focus:border-[#046BD2] focus:ring-2 focus:ring-[#046BD2]/15"
            } ${className}`}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3.5 pointer-events-none text-slate-400">
            <ChevronDown className="w-4 h-4" />
          </div>
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
Select.displayName = "Select";

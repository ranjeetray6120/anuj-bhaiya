import React, { forwardRef } from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { label, error, helperText, id, className = "", required, disabled, rows = 4, ...props },
    ref
  ) => {
    const textareaId =
      id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-xs font-bold uppercase tracking-wider text-slate-700"
          >
            {label} {required && <span className="text-rose-500">*</span>}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          rows={rows}
          required={required}
          disabled={disabled}
          className={`w-full bg-slate-50/70 border text-slate-900 text-sm rounded-xl p-4 outline-none transition-all placeholder:text-slate-400 focus:bg-white resize-y disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed ${
            error
              ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/15"
              : "border-slate-200 focus:border-[#046BD2] focus:ring-2 focus:ring-[#046BD2]/15"
          } ${className}`}
          {...props}
        />
        {error ? (
          <p className="text-xs text-rose-600 font-medium">{error}</p>
        ) : helperText ? (
          <p className="text-xs text-slate-500">{helperText}</p>
        ) : null}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

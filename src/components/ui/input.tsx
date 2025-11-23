"use client";

import type { ChangeEvent } from "react";

interface InputProps {
  label?: string;
  type?: string; // "text", "email", "password", etc.
  placeholder?: string;
  value?: string;
  onChange?: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  name?: string;
  required?: boolean;
  className?: string;
  textarea?: boolean; // 👈 new prop to toggle textarea mode
  rows?: number; // optional rows for textarea
}

const Input = ({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  required = false,
  className = "",
  textarea = false,
  rows = 4,
}: InputProps) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <label htmlFor={name} className="font-medium text-sm text-white">
          {label}
        </label>
      )}

      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value || ""}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={`p-2 sm:p-3 text-sm sm:text-base outline-none rounded-lg border border-purple-light/50 focus:border-purple-light focus:ring-0 transition-all resize-none bg-transparent text-white placeholder:text-gray-500 ${className}`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value || ""}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`h-9 sm:h-10 px-2 sm:px-3 text-sm sm:text-base outline-none rounded-lg border border-purple-light/50 focus:border-purple-light focus:ring-0 transition-all bg-transparent text-white placeholder:text-gray-500 ${className}`}
        />
      )}
    </div>
  );
};

export default Input;

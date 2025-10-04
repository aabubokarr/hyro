"use client";

import React from "react";

interface InputProps {
  label?: string;
  type?: string; // "text", "email", "password", etc.
  placeholder?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  name?: string;
  required?: boolean;
  className?: string;
  textarea?: boolean; // 👈 new prop to toggle textarea mode
  rows?: number; // optional rows for textarea
}

const Input: React.FC<InputProps> = ({
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
}) => {
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
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={`p-3 outline-none rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-0 transition-all resize-none ${className}`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`h-10 px-3 outline-none rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-0 transition-all ${className}`}
        />
      )}
    </div>
  );
};

export default Input;

"use client";

import React, { useState, useRef, useEffect } from "react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  id?: string;
  name?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
}

export default function CustomSelect({
  id,
  name,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
  required = false,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {/* Hidden native select for form submission and native validation if needed */}
      <select
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="hidden"
        required={required}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Custom UI Trigger */}
      <div
        className={`w-full bg-transparent border-0 border-b border-secondary/20 py-2 px-0 text-on-surface font-body-md flex justify-between items-center cursor-pointer group transition-all duration-300 ${
          isOpen ? "border-primary" : "hover:border-secondary/50"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        <span
          className={`${
            !selectedOption ? "text-on-surface-variant/30" : "text-on-surface"
          } truncate`}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span
          className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${
            isOpen ? "rotate-180 text-primary" : "group-hover:text-on-surface"
          }`}
        >
          arrow_drop_down
        </span>
      </div>

      {/* Custom Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-1 bg-surface border border-secondary/10 shadow-xl z-50 animate-in fade-in slide-in-from-top-1 duration-200">
          <ul className="max-h-60 overflow-y-auto py-1">
            {options.map((opt) => (
              <li
                key={opt.value}
                className={`px-4 py-3 cursor-pointer transition-colors font-body-md ${
                  value === opt.value
                    ? "bg-primary/5 text-primary"
                    : "text-on-surface hover:bg-surface-variant/50"
                }`}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

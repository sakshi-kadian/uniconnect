"use client";
import { GraduationCap, Globe, Search } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

interface SearchBarProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  mode: "country" | "name";
  onModeChange: Dispatch<SetStateAction<"country" | "name">>;
  sortOrder: "asc" | "desc";
  setSortOrder: Dispatch<SetStateAction<"asc" | "desc">>;
  onSearch?: () => void;
}

export default function SearchBar({
  value,
  onChange,
  mode,
  onModeChange,
  sortOrder,
  setSortOrder,
  onSearch,
}: SearchBarProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    { value: "asc", label: "Higher Ranked First", color: "bg-green-300" }, 
    { value: "desc", label: "Lower Ranked First", color: "bg-blue-300" }, 
  ];

  const selected = options.find((o) => o.value === sortOrder)!;

  // Close dropdown on outside click or escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="w-full bg-white shadow-md rounded-2xl border border-gray-200 p-4 sm:p-6 transition-all duration-300 hover:shadow-xl">
      {/* Heading */}
      <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
        Search Parameters
      </h2>
      <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
        Configure your university discovery preferences.
      </p>

      {/* Toggle Switch */}
      <div className="flex items-center justify-center mb-4 sm:mb-6">
        <div className="relative inline-flex bg-gray-100 rounded-2xl p-1 shadow-inner w-full max-w-md">
          {/* Sliding Highlight */}
          <div
            className={`absolute top-1 bottom-1 w-1/2 rounded-xl shadow-lg transition-all duration-300 ease-in-out`}
            style={{
              left: mode === "name" ? "0.25rem" : "auto",
              right: mode === "country" ? "0.25rem" : "auto",
              background: "linear-gradient(135deg, #f0f9ff, #ecfdf5)",
              boxShadow:
                "0 3px 8px rgba(0,0,0,0.06), 0 0 6px rgba(56,189,248,0.25)",
            }}
          />

          {/* University Button */}
          <button
            onClick={() => onModeChange("name")}
            className={`relative flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-lg transition-all duration-300 ${
              mode === "name"
                ? "text-emerald-700 bg-gradient-to-r from-blue-50 via-teal-50 to-green-50"
                : "text-slate-500 hover:text-emerald-700"
            }`}
          >
            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
            University
          </button>

          {/* Country Button */}
          <button
            onClick={() => onModeChange("country")}
            className={`relative flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-lg transition-all duration-300 ${
              mode === "country"
                ? "text-emerald-700 bg-gradient-to-r from-blue-50 via-teal-50 to-green-50"
                : "text-slate-500 hover:text-emerald-700"
            }`}
          >
            <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
            Country
          </button>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative mb-8 sm:mb-10">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
        <input
          type="text"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter" && onSearch) onSearch();
          }}
          placeholder={
            mode === "name"
              ? "Search by University name..."
              : "Search by Country name..."
          }
          className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-3 rounded-xl border border-gray-300 text-black font-medium shadow-sm transition-all duration-300 focus:outline-none"
          style={{
            boxShadow: "inset 0 0 0 1.5px rgba(0,0,0,0.08)",
          }}
          onFocus={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 0 2px rgba(56,189,248,0.25), 0 0 10px rgba(34,197,94,0.25)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.boxShadow =
              "inset 0 0 0 1.5px rgba(0,0,0,0.08)";
          }}
        />
      </div>

      {/* Ranking Dropdown */}
      <div className="mb-6 sm:mb-8" ref={dropdownRef}>
        <label className="block text-sm font-medium text-black mb-2">
          Global Ranking Order
        </label>

        <div className="relative w-full">
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex items-center justify-between px-4 sm:px-5 py-2 sm:py-3 border border-gray-300 rounded-2xl shadow-sm focus:outline-none transition-all duration-300 hover:shadow-md"
            style={{
              boxShadow: "inset 0 0 0 1.5px rgba(0,0,0,0.08)",
            }}
            onFocus={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 0 2px rgba(56,189,248,0.25), 0 0 10px rgba(34,197,94,0.25)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.boxShadow =
                "inset 0 0 0 1.5px rgba(0,0,0,0.08)";
            }}
          >
            <div className="flex items-center gap-2 text-black">
              <span className={`w-2 h-2 rounded-full ${selected.color}`}></span>
              <span>{selected.label}</span>
            </div>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform ${
                open ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {open && (
            <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-2xl shadow-lg">
              {options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setSortOrder(opt.value as "asc" | "desc");
                    setOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2 sm:py-3 hover:bg-gray-100 text-left rounded-xl transition-colors text-black"
                >
                  <span className={`w-2 h-2 rounded-full ${opt.color}`}></span>
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <p className="text-xs sm:text-sm text-gray-600 mt-6 sm:mt-8 flex flex-col sm:flex-row gap-2 sm:gap-6">
        <span>
          Search Mode:{" "}
          <span className="font-semibold text-black">
            {mode === "name" ? "University" : "Country"}
          </span>
        </span>
        <span>
          Ranking:{" "}
          <span className="font-semibold text-black">
            {sortOrder === "asc" ? "Lower First" : "Higher First"}
          </span>
        </span>
      </p>
    </div>
  );
}

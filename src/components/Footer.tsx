import React from "react";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-gradient-to-r from-blue-50 to-emerald-50 shadow-md border-t border-gray-200 mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-14 sm:h-16 justify-center">
          <p className="text-gray-800 text-sm">
            &copy; {new Date().getFullYear()} UniVerse. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

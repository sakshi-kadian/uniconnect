"use client";

import { Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header
      role="banner"
      className="bg-gradient-to-r from-blue-50 to-emerald-50 shadow-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-14 sm:h-16">
          {/* Logo + Name */}
          <a
            href="/"
            aria-label="UniConnect-AI Home"
            className="flex items-center space-x-3 group"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-600 p-2 rounded-xl shadow-sm"
            >
              <Globe className="h-8 w-8 text-white" />
              <span className="sr-only">UniAtlas</span>
            </motion.div>

            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
              UniVerse
            </h1>
          </a>
        </div>
      </div>
    </header>
  );
}

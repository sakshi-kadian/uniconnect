"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-16 md:py-20 max-w-5xl mx-auto px-4 sm:px-6 bg-gradient-to-b from-white via-gray-50 to-gray-100 rounded-2xl shadow-sm border border-gray-200">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug bg-gradient-to-r from-blue-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
          Discover Your Perfect University
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto px-2"
      >
        Explore The World. Follow Your Curiosity. Let Data Guide Your Dreams.
      </motion.p>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-4 italic text-gray-500 max-w-xl mx-auto text-sm sm:text-base md:text-lg px-2"
      >
        From Data to Direction — Your Journey Starts Here.
      </motion.p>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base md:text-lg font-medium text-gray-700"
      >
        <span className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
          <span>2000+ Universities</span>
        </span>
        <span className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
          <span>50+ Countries</span>
        </span>
        <span className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
          <span>Real-Time Data</span>
        </span>
      </motion.div>
    </section>
  );
}

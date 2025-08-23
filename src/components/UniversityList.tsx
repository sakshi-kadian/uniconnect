"use client";

import React from "react";
import UniversityCard from "./UniversityCard";

export type University = {
  rank: number;
  university: string;
  country: string;
  student_population: number;
  students_to_staff_ratio: number;
  international_students: string;
  overall_score: number;
  year: number;
};

type Props = {
  universities: University[];
};

export default function UniversityList({ universities }: Props) {
  if (!universities.length) {
    return (
      <p className="text-center mt-10 text-gray-500">
        No universities found.
      </p>
    );
  }

  return (
    <section className="mt-10 max-w-6xl mx-auto">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {universities.map((uni) => (
          <UniversityCard
            key={`${uni.rank}-${uni.university}`}
            university={uni}
          />
        ))}
      </div>
    </section>
  );
}

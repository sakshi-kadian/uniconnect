import React from "react";

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

type Props = { university: University };

function UniversityCardComponent({ university }: Props) {
  const {
    rank,
    university: universityName,
    country,
    overall_score,
    student_population,
    students_to_staff_ratio,
    international_students,
    year,
  } = university;

  return (
    <article
      className="relative bg-white rounded-2xl shadow-sm p-6 
                 flex flex-col justify-between h-full w-full max-w-lg mx-auto
                 transition-transform duration-300 
                 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01]"
    >
      {/* Rank Badge */}
      <div
        className="absolute -top-3.5 right-3.5 w-10 h-10 rounded-full 
                   bg-gradient-to-br from-blue-600 via-teal-500 to-green-500
                   flex items-center justify-center 
                   text-white font-bold text-sm shadow-md
                   transition-transform duration-500"
      >
        {rank}
      </div>

      {/* Header */}
      <div className="mb-4">
        <h2
          className="text-xl md:text-[1.45rem] font-extrabold 
                     text-blue-800 tracking-tight leading-snug
                     transition-colors duration-300 hover:text-blue-600"
        >
          {universityName}
        </h2>
        <p
          className="text-base md:text-lg text-emerald-600 
                     italic font-semibold mt-1 tracking-wide
                     transition-colors duration-300 hover:text-emerald-800"
        >
          {country}
        </p>
      </div>

      {/* Score Pill */}
      <div className="mb-5">
        <span
          className="w-fit px-3 py-1 rounded-full 
                     bg-gray-100 text-gray-800 
                     font-semibold text-sm block shadow-sm
                     transition-transform duration-300 hover:scale-105"
        >
          Overall Score:{" "}
          {isNaN(overall_score) ? "N/A" : overall_score.toFixed(2)}
        </span>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-6 mb-4 text-center">
        <div className="transition-transform duration-300 hover:scale-105">
          <span className="block text-lg font-bold text-gray-900">
            {student_population.toLocaleString()}
          </span>
          <span className="uppercase tracking-wide text-gray-500 text-xs font-semibold">
            Students
          </span>
        </div>
        <div className="transition-transform duration-300 hover:scale-105">
          <span className="block text-lg font-bold text-gray-900">
            {Number.isFinite(students_to_staff_ratio)
              ? students_to_staff_ratio.toFixed(1)
              : "N/A"}
            :1
          </span>
          <span className="uppercase tracking-wide text-gray-500 text-xs font-semibold">
            Student:Staff
          </span>
        </div>
        <div className="transition-transform duration-300 hover:scale-105">
          <span className="block text-lg font-bold text-gray-900">
            {international_students}
          </span>
          <span className="uppercase tracking-wide text-gray-500 text-xs font-semibold">
            International
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end">
        <span
          className="px-3 py-1 rounded-full bg-gradient-to-r 
                     from-blue-50 to-teal-50 text-[12px] 
                     text-teal-700 font-semibold italic shadow-sm
                     transition-colors duration-300 hover:from-blue-100 hover:to-teal-100"
        >
          Year: {year}
        </span>
      </div>
    </article>
  );
}

export default UniversityCardComponent;

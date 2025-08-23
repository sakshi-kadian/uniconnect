import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import Papa from "papaparse";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public/data/universities.csv");
    const file = fs.readFileSync(filePath, "utf8");

    const parsed = Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
    });

    const universities = parsed.data
      .filter((row: any) => row.Rank && row.University)
      .map((row: any) => ({
        rank: Number(row.Rank),
        name: String(row.University),
        country: String(row.Country),
        studentPopulation: Number(row.StudentPopulation),
        studentsToStaffRatio: Number(row.StudentsToStaffRatio),
        internationalStudents: String(row.InternationalStudents),
        overallScore: Number(row.OverallScore),
        teaching: Number(row.Teaching),
        researchQuality: Number(row.ResearchQuality),
        industryImpact: Number(row.IndustryImpact),
        internationalOutlook: Number(row.InternationalOutlook),
        year: Number(row.Year),
      }));

    return NextResponse.json(universities);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

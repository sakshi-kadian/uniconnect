"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header"
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import UniversityList, { University } from "@/components/UniversityList";
import { supabase } from "@/lib/supabaseClient";
import Footer from "@/components/Footer";

export default function Home() {
  const [universities, setUniversities] = useState<University[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [mode, setMode] = useState<"country" | "name">("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch universities
  useEffect(() => {
    async function fetchUniversities() {
      try {
        setLoading(true);
        setError(null);

        // Case 1: no search shows top 12 by rank
        if (!searchTerm) {
          const { data, error } = await supabase
            .from("universities")
            .select("*")
            .order("rank", { ascending: true })
            .limit(12);

          if (error) throw error;
          setUniversities(data || []);
          return;
        }

        // Case 2: too short search will ignore
        if (searchTerm.length < 2) {
          setUniversities([]);
          return;
        }

        // Case 3: with search
        const column = mode === "name" ? "university" : "country";
        const pattern =
          mode === "name"
            ? `${searchTerm}%` 
            : `%${searchTerm}%`; 

        const { data, error } = await supabase
          .from("universities")
          .select("*")
          .ilike(column, pattern)
          .order("rank", { ascending: sortOrder === "asc" });

        if (error) throw error;
        setUniversities(data || []);
      } catch (err: any) {
        console.error("Failed to load universities:", err);
        setError(
          `Failed to load university data: ${err.message || "Unknown error"}`
        );
      } finally {
        setLoading(false);
      }
    }

    fetchUniversities();
  }, [searchTerm, mode, sortOrder]);


  return (
    <main className="bg-gray-50 min-h-screen flex flex-col">
      <Header />


      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
      </section>


      <section className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          mode={mode}
          onModeChange={setMode}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        {loading && (
          <p className="text-center text-gray-500 mt-10">Loading data...</p>
        )}
        {error && <p className="text-center text-red-500 mt-10">{error}</p>}

        {!loading && !error && (
          <>
            {!searchTerm && (
              <div className="text-center mt-10 mb-8">
                <h2 className="text-2xl font-bold text-gray-800">
                  Discover Best Universities Worldwide
                </h2>
                <p className="text-black-600 mt-2">
                  Search Universities by{" "}
                  <span className="font-semibold">Country</span> /{" "}
                  <span className="font-semibold">University</span> to explore
                  your options.
                </p>
              </div>
            )}

            {searchTerm && universities.length === 0 && (
              <p className="text-center text-gray-500 mt-10">
                No universities found. Try a different search!
              </p>
            )}

            {universities.length > 0 && (
              <UniversityList universities={universities} />
            )}
          </>
        )}
      </section>


      <Footer />
    </main>
  );
}

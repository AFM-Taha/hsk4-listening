import { Geist, Geist_Mono } from "next/font/google";
import data from "@/data/data";
import { useState } from "react";
import FastPart from "@/component/FastPart";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [currentLesson, setCurrentLesson] = useState(1);
  const totalLessons = data.length;

  const handlePrevious = () => {
    setCurrentLesson((prev) => (prev > 1 ? prev - 1 : totalLessons));
  };

  const handleNext = () => {
    setCurrentLesson((prev) => (prev < totalLessons ? prev + 1 : 1));
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-8 gap-16 sm:p-2 font-[family-name:var(--font-geist-sans)]`}
    >
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <h1 className="text-xl font-semibold">
              Lesson {currentLesson > 9 ? currentLesson : "0" + currentLesson}
            </h1>
            <button
              onClick={handleNext}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-7xl mx-auto md:px-4 mt-16">
        {/* Fast_Part */}
        {data
          .filter((item) => item.lesson === currentLesson)
          .map((item) => {
            const { lesson, fastPart } = item;
            return (
              <section key={lesson} className="w-full">
                <div>
                  {fastPart.map((list) => (
                    <FastPart key={list.no} list={list} />
                  ))}
                </div>
              </section>
            );
          })}
      </main>
    </div>
  );
}

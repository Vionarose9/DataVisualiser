"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";

export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Research",
    },
    {
      text: "in",
    },
    {
      text: "PES",
    },
    {
      text: "University",
    },
    {
      text: "Ecity",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        DataVisualiser
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Explore!
        </button>
        
        <Link href="/login">
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            LogIn
          </button>
        </Link>
      </div>
    </div>
  );
}

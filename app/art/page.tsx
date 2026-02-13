"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

const ART_FOLDER = "/website photos";
const ART_IMAGES = [
  "DSC03708.jpg",
  "DSC09619.jpg",
  "DSC03487.jpg",
  "DSC01289.jpg",
  "DSC00168.jpg",
  "DSC00432.jpg",
  "DSC00219.jpg",
  "DSC01304.jpg",
  "DSC00391.jpg",
  "DSC01514.jpg",
  "DSC00650.jpg",
  "DSC00255.jpg",
  "DSC09649.jpg",
  "DSC01363.jpg",
  "DSC09855.jpg",
  "DSC03376.jpg",
];

// Fisher-Yates shuffle function
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function ArtPage() {
  const shuffledImages = useMemo(() => shuffleArray(ART_IMAGES), []);

  return (
    <main className="mx-auto max-w-7xl px-6 py-12 pb-16 sm:px-8 lg:px-12">
      <h2 className="mb-12 border-b border-border pb-2 font-sans text-2xl font-semibold lowercase tracking-tight sm:text-3xl">
        art
      </h2>
      <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
        {shuffledImages.map((filename) => (
          <div key={filename} className="mb-8 break-inside-avoid">
            <div className="group relative w-full overflow-hidden transition-transform hover:scale-[1.01]">
              <Image
                src={`${ART_FOLDER}/${encodeURIComponent(filename)}`}
                alt=""
                width={1200}
                height={1800}
                className="h-auto w-full object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-16 text-center text-sm text-muted-foreground">
        <Link href="/" className="underline-offset-4 hover:underline">
          ← Back home
        </Link>
      </p>
    </main>
  );
}

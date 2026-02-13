"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/experiences", label: "EXPERIENCE" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/art", label: "ART" },
  { href: "/thoughts", label: "THOUGHTS" },
  { href: "/more-about-me", label: "MORE ABOUT ME" },
] as const;

export function Nav() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-3 sm:px-6">
        <Link
          href="/"
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-transparent transition-opacity hover:opacity-80 sm:h-9 sm:w-9"
          aria-label="Home"
        >
          <span className="flex h-8 w-8 flex-shrink-0 overflow-hidden rounded-full sm:h-9 sm:w-9">
            <Image
              src="/home-icon.png"
              alt=""
              width={36}
              height={36}
              className="h-full w-full scale-150 object-cover object-center"
            />
          </span>
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-center overflow-x-auto py-1">
          <div className="flex items-center gap-x-3 sm:gap-x-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "whitespace-nowrap px-1 py-0.5 font-lacquer text-xs lowercase tracking-wide transition-colors hover:text-white sm:text-sm sm:tracking-wide md:text-base",
                  href === "/more-about-me"
                    ? "hover:bg-[#ff0000]"
                    : "hover:bg-[#1200FF]",
                  pathname === href ? "text-neutral-900" : "text-neutral-600"
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-8 flex-shrink-0 sm:w-9" aria-hidden />
      </nav>
    </header>
  );
}

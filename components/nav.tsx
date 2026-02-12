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
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-transparent transition-opacity hover:opacity-80"
          aria-label="Home"
        >
          <span className="animate-home-icon flex h-9 w-9 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              src="/home-icon.png"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 scale-150 object-cover object-center"
            />
          </span>
        </Link>

        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-x-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "whitespace-nowrap px-1 py-0.5 font-lacquer text-sm lowercase tracking-wide transition-colors hover:text-white sm:text-base",
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

        <div className="w-9 flex-shrink-0" aria-hidden />
      </nav>
    </header>
  );
}

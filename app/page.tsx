import Link from "next/link";

const linkClass =
  "font-lacquer text-lg lowercase text-neutral-900 no-underline transition-colors hover:bg-[#1200FF] hover:text-white";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <h1 className="mb-8 font-sans text-4xl font-semibold leading-tight tracking-tight text-neutral-900 lowercase sm:text-5xl md:text-6xl lg:text-7xl">
          Abhinav Volety
        </h1>
        <div className="space-y-6 font-sans text-base leading-relaxed text-neutral-900 lowercase sm:text-lg">
          <p>
            Hi, I&apos;m Abhinav. I&apos;m a freshman studying cs + economics at UIUC. I work in the startup space.
          </p>
          <p>
            Documenting it all on{" "}
            <a
              href="https://instagram.com/zerotoabhinav"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:no-underline"
            >
              @zerotoabhinav
            </a>{" "}
            on all platforms.
          </p>
        </div>
        <div className="mt-12 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-6">
          <Link href="/experiences" className={linkClass}>
            experience
          </Link>
          <Link href="/projects" className={linkClass}>
            projects
          </Link>
          <Link href="/art" className={linkClass}>
            art
          </Link>
          <Link href="/thoughts" className={linkClass}>
            thoughts
          </Link>
          <Link
            href="/more-about-me"
            className="font-lacquer text-lg lowercase text-neutral-900 no-underline transition-colors hover:bg-[#ff0000] hover:text-white"
          >
            more about me
          </Link>
        </div>
      </div>
    </main>
  );
}

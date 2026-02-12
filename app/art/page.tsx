import Link from "next/link";

export default function ArtPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 pb-16">
      <h2 className="mb-8 border-b border-border pb-2 font-sans text-2xl font-semibold lowercase tracking-tight sm:text-3xl">
        art
      </h2>
      <p className="text-muted-foreground">
        Art will go here.
      </p>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        <Link href="/" className="underline-offset-4 hover:underline">
          ← Back home
        </Link>
      </p>
    </main>
  );
}

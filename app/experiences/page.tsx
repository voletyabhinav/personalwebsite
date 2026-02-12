import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Experience = {
  title: string;
  company: string;
  meta: string;
  description: React.ReactNode;
  skills: string[];
};

const experiences: Experience[] = [
  {
    title: "Student Business Analyst · Marketing Team",
    company: "Hemut (YC X25)",
    meta: "Aug 2025 – Present · 7 mos · Rockford, IL · Hybrid",
    description:
      "Launched 2 websites and executed a full rebrand of the company. Social media strategy, running the main account on all platforms, and designing merchandise.",
    skills: [
      "Adobe Premiere Pro",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Email Newsletter Design",
      "Figma",
    ],
  },
  {
    title: "Freelance Photographer / Videographer",
    company: "Freelance",
    meta: "Aug 2024 – Present · 1 yr 7 mos · United States",
    description: (
      <>
        <strong>200k+ views/interactions.</strong> Brands: Pusha T, DJ Diesel
        (Dr. Shaquille O&apos;Neal), Unfinished Legacy, Smiley&apos;s Vintage,
        Exquisite LX, Ennui. Portfolio: @abhinav.mp4_
      </>
    ),
    skills: [
      "Photography",
      "Video Production & Editing",
      "Adobe Premiere Pro",
      "Creative Direction",
      "Adobe Creative Suite",
      "Social Media Marketing",
    ],
  },
  {
    title: "Marketing Chair",
    company: "Illini Run Club",
    meta: "Sep 2025 – Present · 6 mos",
    description: "Graphic design and marketing for Illini Run Club.",
    skills: ["Adobe Illustrator"],
  },
  {
    title: "Operations Intern",
    company: "State Representative Dave Vella",
    meta: "May 2025 – Present · 10 mos · Rockford, IL · On-site",
    description:
      "Immigration support, grant writing and applications, and constituent services. Organized Rockford Vintage Fest: 2,000+ people in attendance, total revenue of $20,000.",
    skills: ["Constituent Services", "Immigration Support", "Grant Writing"],
  },
  {
    title: "Summer Science Internship",
    company: "University of Illinois College of Medicine at Rockford",
    meta: "Jun 2024 – Aug 2024 · 3 mos · Rockford, IL",
    description:
      "Developed and tested a Reusable Assay Device in Dr. Mohammad Fazle Alam's 3D bioprinting lab. Presented poster and presentation at Summer Science Forum 2024 and UICOM Research Forum 2024–2025.",
    skills: [
      "Scientific Research",
      "Scientific Presentation & Writing",
      "Product Testing & Development",
    ],
  },
];

export default function ExperiencesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 pb-16">
      <h2 className="mb-8 border-b border-border pb-2 font-sans text-2xl font-semibold lowercase tracking-tight sm:text-3xl">
        Experience
      </h2>
      <div className="space-y-5">
        {experiences.map((exp) => (
          <Card key={exp.company + exp.title}>
            <CardHeader className="pb-2">
              <CardTitle className="font-bold">{exp.title}</CardTitle>
              <CardDescription className="flex flex-col gap-0.5">
                <span className="text-[#1200FF]">{exp.company}</span>
                <span className="text-xs text-muted-foreground/90">
                  {exp.meta}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm leading-relaxed">{exp.description}</p>
              <ul className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        <Link href="/" className="underline-offset-4 hover:underline">
          ← Back home
        </Link>
      </p>
    </main>
  );
}

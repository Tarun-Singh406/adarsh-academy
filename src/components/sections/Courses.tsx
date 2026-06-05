import { ArrowRight, Atom, Beaker, Brain, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Class 11 Science",
    icon: Atom,
    duration: "1 Year Programme",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    features: ["NCERT + Reference based teaching", "Weekly cumulative tests", "Doubt-clearing sessions", "Personal mentor assigned"],
    highlight: "Foundation for JEE & NEET",
  },
  {
    title: "Class 12 Science",
    icon: Beaker,
    duration: "1 Year Programme",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    features: ["Board + competitive integration", "Full-length mock exams", "Revision masterclasses", "Last-mile result strategy"],
    highlight: "Board + JEE/NEET ready",
  },
  {
    title: "JEE Preparation",
    icon: Brain,
    duration: "1 / 2 Year Programme",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    features: ["IITian senior faculty", "Advanced problem workshops", "All India Test Series", "Concept clarity bootcamps"],
    highlight: "JEE Main + Advanced",
  },
  {
    title: "NEET Preparation",
    icon: Stethoscope,
    duration: "1 / 2 Year Programme",
    subjects: ["Physics", "Chemistry", "Biology"],
    features: ["MBBS doctor mentors", "AIIMS-pattern question bank", "Daily MCQ practice", "Memory & retention techniques"],
    highlight: "NEET UG focused",
  },
];

export function Courses() {
  return (
    <section className="py-24" id="courses">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our Programmes</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Designed for <span className="text-gradient-gold">serious aspirants</span>
          </h2>
          <p className="mt-4 text-foreground/75">
            Choose a programme built around your exam, your class and your mentor. Small batches, no shortcuts.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {courses.map((c) => (
            <article
              key={c.title}
              className="group relative grid gap-8 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-[color:var(--surface-2)] p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[var(--shadow-elite)] md:grid-cols-[auto_1fr_auto] md:items-center md:p-10"
            >
              <div className="flex items-start gap-5">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/30">
                  <c.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="md:hidden">
                  <h3 className="font-display text-2xl font-bold">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.duration} · {c.highlight}</p>
                </div>
              </div>

              <div>
                <div className="hidden md:block">
                  <h3 className="font-display text-2xl font-bold">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.duration} · <span className="text-accent">{c.highlight}</span></p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {c.subjects.map((s) => (
                    <span key={s} className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground/85">{s}</span>
                  ))}
                </div>

                <ul className="mt-5 grid gap-2 text-sm text-foreground/80 sm:grid-cols-2">
                  {c.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:pl-6">
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 md:w-auto">
                  <a href="#contact">
                    Enquire <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

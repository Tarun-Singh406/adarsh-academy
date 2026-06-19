import { Quote, Star } from "lucide-react";

const reviews = [
  { name: "Mrs. Sunita Rao", relation: "Parent of NEET 2025 student", initials: "SR", quote: "We compared 6 institutes before choosing Amrawati Tutorials. The mentor called us every two weeks with honest updates — that transparency is rare. My daughter cleared NEET in her first attempt." },
  { name: "Mr. Aniruddh Mehta", relation: "Parent of JEE 2024 topper", initials: "AM", quote: "What I value most is discipline. Attendance, tests, doubts — everything was tracked. My son secured AIR 89 in JEE Advanced. Worth every rupee." },
  { name: "Aarav Sharma", relation: "AIR 12, JEE Advanced 2025", initials: "AS", quote: "The faculty doesn't just teach — they make you think like a problem-solver. The test series is brutally close to the real paper. That's what made the difference." },
  { name: "Mrs. Kavita Iyer", relation: "Parent of Class 12 student", initials: "KI", quote: "The classrooms are calm, the batches are small, and the teachers actually know my child by name. As a parent, that peace of mind is everything." },
  { name: "Priya Mehta", relation: "AIR 47, NEET UG 2025", initials: "PM", quote: "I came in average. I left with a rank I never imagined. The mentorship at Amrawati Tutorials genuinely changes lives — not a marketing line, a fact." },
  { name: "Mr. Rajesh Khanna", relation: "Parent of two enrolled siblings", initials: "RK", quote: "Both my children study here. The institute treats parents as partners, not customers. We always know where our kids stand." },
];

export function ParentTrust() {
  return (
    <section className="bg-[color:var(--surface-2)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Parent & Student Voices</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Trusted by families who <span className="text-gradient-gold">measure us by results</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="group relative rounded-2xl border border-border bg-gradient-to-br from-card to-background p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/15" />
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-accent to-accent/50 text-sm font-bold text-accent-foreground">
                  {r.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.relation}</div>
                </div>
              </div>
              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">"{r.quote}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

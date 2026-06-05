import { GraduationCap } from "lucide-react";

const faculty = [
  { name: "Dr. Rakesh Khanna", subject: "Physics", experience: "22 Years", bio: "Ex-IIT Delhi. Mentored 80+ AIRs under 500.", initials: "RK" },
  { name: "Prof. Anjali Verma", subject: "Chemistry", experience: "18 Years", bio: "MSc IIT Bombay. Author, NCERT-aligned Chemistry series.", initials: "AV" },
  { name: "Dr. Sameer Joshi", subject: "Biology", experience: "20 Years", bio: "MBBS, AIIMS. NEET pedagogy specialist.", initials: "SJ" },
  { name: "Prof. Vivek Nair", subject: "Mathematics", experience: "16 Years", bio: "B.Tech IIT Madras. JEE Advanced strategist.", initials: "VN" },
  { name: "Dr. Priya Kapoor", subject: "Organic Chemistry", experience: "14 Years", bio: "PhD IISc. Specialises in reaction mechanism mastery.", initials: "PK" },
  { name: "Prof. Arjun Singh", subject: "Physical Chemistry", experience: "12 Years", bio: "IITian. Concept-first teaching for JEE Main.", initials: "AS" },
];

export function Faculty() {
  return (
    <section className="py-24" id="faculty">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our Faculty</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Learn from <span className="text-gradient-gold">India's finest mentors</span>
          </h2>
          <p className="mt-4 text-foreground/75">
            Not a single subject is taught by a junior teacher. Every mentor is hand-picked, vetted and accountable.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {faculty.map((f) => (
            <article
              key={f.name}
              className="group rounded-2xl border border-border bg-gradient-to-br from-card to-[color:var(--surface-2)] p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-primary to-primary/50 font-display text-xl font-bold text-primary-foreground shadow-[var(--shadow-gold)]">
                  {f.initials}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{f.name}</h3>
                  <p className="text-sm text-primary">{f.subject}</p>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-widest text-accent">
                <GraduationCap className="h-3.5 w-3.5" />
                {f.experience} of teaching
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">{f.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

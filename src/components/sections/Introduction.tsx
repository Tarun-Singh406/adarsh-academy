import { Award, GraduationCap, Target, TrendingUp } from "lucide-react";
import introBg from "@/assets/intro-bg.jpg";

const stats = [
  { icon: Award, value: "25+", label: "Years of Excellence" },
  { icon: GraduationCap, value: "10,000+", label: "Students Mentored" },
  { icon: TrendingUp, value: "95%", label: "Success Rate" },
  { icon: Target, value: "500+", label: "Top 1000 Rankers" },
];

export function Introduction() {
  return (
    <section className="relative overflow-hidden py-24" id="about">
      <div className="absolute inset-0">
        <img src={introBg} alt="" className="h-full w-full object-cover opacity-20" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">About Elite Scholars</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              An institute built on <span className="text-gradient-gold">results</span>, not promises.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/80">
              For over 25 years, Elite Scholars has been India's quiet powerhouse for JEE and NEET preparation.
              We measure ourselves by one number — the All India Ranks our students earn each year. Every batch
              is small, every mentor is senior, every test is designed to build exam temperament.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">Our Mission</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                  To make world-class coaching accessible to every sincere student through disciplined teaching,
                  rigorous testing and unwavering personal mentorship.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">Our Vision</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                  To remain India's most trusted institute for medical and engineering aspirants — known for
                  integrity, results, and student-first values.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-[color:var(--surface-2)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-gold)] sm:p-8"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/20" />
                <s.icon className="relative h-7 w-7 text-primary" />
                <div className="relative mt-5 font-display text-4xl font-bold text-foreground sm:text-5xl">{s.value}</div>
                <div className="relative mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { ClipboardCheck, GraduationCap, Trophy, UserCheck } from "lucide-react";

const items = [
  { icon: GraduationCap, title: "Experienced Faculty", desc: "Senior IITians and MBBS doctors with 10–25 years of teaching record at India's top institutes." },
  { icon: UserCheck, title: "Personal Mentorship", desc: "Every student is assigned a dedicated mentor who tracks progress, attendance and emotional well-being." },
  { icon: ClipboardCheck, title: "Regular Test Series", desc: "Weekly chapter tests, fortnightly cumulative exams and All India mocks — calibrated to the real paper." },
  { icon: Trophy, title: "Proven Results", desc: "500+ Top 1000 ranks in JEE and NEET over the past five years — a legacy parents recognise and trust." },
];

export function WhyChooseUs() {
  return (
    <section className="bg-[color:var(--surface-2)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Why Amrawati Tutorials</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Four pillars of our <span className="text-gradient-gold">success</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-gold)]"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition group-hover:bg-primary/15" />
              <div className="relative grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-primary/25 to-primary/5 ring-1 ring-primary/30">
                <it.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="relative mt-6 font-display text-xl font-semibold">{it.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-foreground/75">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

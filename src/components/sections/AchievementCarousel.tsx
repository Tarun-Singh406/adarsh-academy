import { useEffect, useRef, useState } from "react";
import { Award, ChevronLeft, ChevronRight, Medal, Star, Trophy } from "lucide-react";

const items = [
  { name: "Aarav Sharma", rank: "AIR 12", exam: "JEE Advanced 2025", icon: Trophy, tone: "primary" },
  { name: "Priya Mehta", rank: "AIR 47", exam: "NEET UG 2025", icon: Medal, tone: "accent" },
  { name: "Rohan Verma", rank: "AIR 89", exam: "JEE Main 2025", icon: Star, tone: "primary" },
  { name: "Ananya Iyer", rank: "AIR 23", exam: "NEET UG 2025", icon: Trophy, tone: "accent" },
  { name: "Karan Singh", rank: "AIR 156", exam: "JEE Advanced 2025", icon: Award, tone: "primary" },
  { name: "Sneha Reddy", rank: "AIR 64", exam: "NEET UG 2025", icon: Medal, tone: "accent" },
  { name: "Vihaan Gupta", rank: "AIR 201", exam: "JEE Main 2025", icon: Star, tone: "primary" },
  { name: "Ishita Kapoor", rank: "AIR 108", exam: "NEET UG 2025", icon: Trophy, tone: "accent" },
];

export function AchievementCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      const el = ref.current;
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const next = el.scrollLeft + 320 >= maxScroll ? 0 : el.scrollLeft + 320;
      el.scrollTo({ left: next, behavior: "smooth" });
    }, 3000);
    return () => clearInterval(id);
  }, [paused]);

  const scrollBy = (dx: number) => ref.current?.scrollBy({ left: dx, behavior: "smooth" });

  return (
    <section className="bg-[color:var(--surface-2)] py-24" id="results">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our Toppers</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              A legacy of <span className="text-gradient-gold">All India Ranks</span>
            </h2>
            <p className="mt-3 max-w-xl text-foreground/75">
              Every name on this wall is a parent's pride. Every rank is the outcome of small batches, senior
              mentors and relentless practice.
            </p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => scrollBy(-340)} aria-label="Previous" className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background/60 transition hover:border-primary hover:text-primary">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => scrollBy(340)} aria-label="Next" className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background/60 transition hover:border-primary hover:text-primary">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={ref}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((it) => {
            const tone = it.tone === "primary" ? "text-primary border-primary/30" : "text-accent border-accent/30";
            return (
              <article
                key={it.name + it.rank}
                className="group relative w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-background p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-card)]"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border bg-background/60 ${tone}`}>
                  <it.icon className="h-6 w-6" />
                </div>
                <div className="mt-12">
                  <div className="font-display text-3xl font-bold text-gradient-gold">{it.rank}</div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{it.exam}</div>
                  <div className="mt-4 border-t border-border pt-4 text-base font-semibold text-foreground">{it.name}</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { Check, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import classroom from "@/assets/hero-classroom.jpg";
import toppers from "@/assets/hero-toppers.jpg";
import environment from "@/assets/hero-environment.jpg";

const slides = [
  {
    img: classroom,
    eyebrow: "Admissions Open 2026",
    title: "Building Future Doctors & Engineers",
    desc: "India's most trusted coaching institute for JEE, NEET and Board excellence — guided by IITian & Doctor mentors.",
  },
  {
    img: toppers,
    eyebrow: "500+ Top Rankers Produced",
    title: "Where Toppers Are Forged, Not Found",
    desc: "Personalised mentorship, weekly tests and a proven framework that turns sincere students into national rankers.",
  },
  {
    img: environment,
    eyebrow: "Premium Learning Environment",
    title: "An Institute Parents Trust. A Place Students Thrive.",
    desc: "World-class infrastructure, disciplined batches and a culture built on results — for 25 years and counting.",
  },
];

const badges = ["Experienced Faculty", "Regular Test Series", "Proven Results", "Personal Mentorship"];

export function HeroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[60vh] min-h-[520px] w-full overflow-hidden">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}
        >
          <img src={s.img} alt={s.title} className="h-full w-full object-cover" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-background/40" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            {slides[i].eyebrow}
          </div>
          <h1 key={i} className="animate-fade-up mt-6 font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            {slides[i].title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="text-gradient-gold">{slides[i].title.split(" ").slice(-2).join(" ")}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">{slides[i].desc}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground shadow-[var(--shadow-gold)] hover:bg-primary/90">
              <a href="#contact">Enroll Now</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-foreground/30 bg-transparent text-foreground hover:bg-foreground/10">
              <a href="tel:+919876543210"><Phone className="mr-2 h-4 w-4" /> Call Now</a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {badges.map((b) => (
              <div key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-accent/20 text-accent">
                  <Check className="h-3 w-3" />
                </span>
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={() => setI((p) => (p - 1 + slides.length) % slides.length)}
        aria-label="Previous"
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-border bg-background/60 backdrop-blur transition hover:border-primary hover:text-primary md:grid"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => setI((p) => (p + 1) % slides.length)}
        aria-label="Next"
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-border bg-background/60 backdrop-blur transition hover:border-primary hover:text-primary md:grid"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-10 bg-primary" : "w-5 bg-foreground/30"}`}
          />
        ))}
      </div>
    </section>
  );
}

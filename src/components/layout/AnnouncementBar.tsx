import { Sparkles } from "lucide-react";

const items = [
  "Admissions Open 2026",
  "Limited Seats Available",
  "Scholarship Test Registration Open",
  "New Batch Starting Soon",
  "Free Counselling with Senior Faculty",
];

export function AnnouncementBar() {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-b border-primary/20 bg-gradient-to-r from-[color:var(--surface-2)] via-background to-[color:var(--surface-2)] py-2 text-xs sm:text-sm">
      <div className="flex animate-marquee whitespace-nowrap">
        {loop.map((t, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-2 text-foreground/85">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="font-medium tracking-wide">{t}</span>
            <span className="ml-8 text-primary/40">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mail, Menu, Phone, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/#courses" },
  { label: "Results", to: "/#results" },
  { label: "Faculty", to: "/#faculty" },
  { label: "FAQ", to: "/#faq" },
  { label: "Contact", to: "/#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-primary/15 bg-background/85 backdrop-blur-xl shadow-[0_4px_30px_-10px_rgba(0,0,0,0.5)]"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm"
      }`}
    >
      {/* Utility row */}
      <div className="hidden border-b border-border/40 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-muted-foreground">
          <span className="tracking-wide">Trusted by 10,000+ Students & Parents Across India</span>
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 transition hover:text-primary">
              <Phone className="h-3.5 w-3.5" /> +91 98765 43210
            </a>
            <a href="mailto:admissions@elitescholars.in" className="flex items-center gap-2 transition hover:text-primary">
              <Mail className="h-3.5 w-3.5" /> admissions@elitescholars.in
            </a>
          </div>
        </div>
      </div>

      {/* Main row */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-md bg-gradient-to-br from-primary to-primary/60 shadow-[var(--shadow-gold)]">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-foreground">Amrawati Tutorials</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-primary">Coaching Institute</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a
              key={n.to}
              href={n.to}
              className="relative text-sm font-medium text-foreground/80 transition hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild className="hidden bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-gold)] sm:inline-flex">
            <a href="#contact">Enroll Now</a>
          </Button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {nav.map((n) => (
              <a
                key={n.to}
                href={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/85 hover:bg-card hover:text-primary"
              >
                {n.label}
              </a>
            ))}
            <Button asChild className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#contact" onClick={() => setOpen(false)}>Enroll Now</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

import { Facebook, GraduationCap, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-primary/15 bg-[color:var(--surface-2)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-md bg-gradient-to-br from-primary to-primary/60">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-bold">Amrawati Tutorials</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-primary">Coaching Institute</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Building India's future doctors and engineers since 1999. Premium coaching, proven results,
            personal mentorship.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid h-9 w-9 place-items-center rounded-md border border-border text-foreground/70 transition hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-primary">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm text-foreground/80">
            {["Home", "Courses", "Results", "Faculty", "FAQ", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="transition hover:text-primary">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-primary">Programmes</h4>
          <ul className="mt-5 space-y-3 text-sm text-foreground/80">
            <li>Class 11 Science</li>
            <li>Class 12 Science</li>
            <li>JEE Main + Advanced</li>
            <li>NEET UG</li>
            <li>Foundation (9 & 10)</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-primary">Contact</h4>
          <ul className="mt-5 space-y-4 text-sm text-foreground/80">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> 12, Knowledge Park, Sector 18, New Delhi 110001</li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> +91 98765 43210</li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> admissions@elitescholars.in</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Amrawati Tutorials Coaching Institute. All rights reserved.</p>
          <p>Privacy Policy · Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}

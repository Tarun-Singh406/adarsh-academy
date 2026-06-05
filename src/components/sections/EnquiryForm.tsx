import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, MapPin, Phone, Mail, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Enter student's name").max(80),
  phone: z.string().trim().regex(/^[+\d][\d\s-]{8,15}$/, "Enter a valid phone number"),
  classLevel: z.string().min(1, "Select class"),
  course: z.string().min(1, "Select course"),
  message: z.string().trim().max(500).optional(),
});

const classOptions = ["Class 9", "Class 10", "Class 11", "Class 12", "Dropper"];
const courseOptions = ["JEE Main + Advanced", "NEET UG", "Foundation", "Board + Competitive"];

export function EnquiryForm() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      classLevel: String(fd.get("classLevel") ?? ""),
      course: String(fd.get("course") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    (e.target as HTMLFormElement).reset();
    toast.success("Enquiry received — our counsellor will call you within 24 hours.");
  };

  return (
    <section className="py-24" id="contact">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Admission Enquiry</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Reserve your seat for <span className="text-gradient-gold">Batch 2026</span>
            </h2>
            <p className="mt-5 text-foreground/75">
              Fill the form and our senior counsellor will reach out within 24 hours with a personalised batch
              recommendation, fee plan and scholarship eligibility.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Phone, label: "+91 98765 43210", href: "tel:+919876543210" },
                { icon: Mail, label: "admissions@elitescholars.in", href: "mailto:admissions@elitescholars.in" },
                { icon: MapPin, label: "12, Knowledge Park, Sector 18, New Delhi 110001" },
              ].map((c, i) => (
                <a key={i} href={c.href} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition hover:border-primary/40">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary">
                    <c.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm">{c.label}</span>
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {["100% confidential", "No spam calls", "Free counselling"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> {t}
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-[color:var(--surface-2)] p-8 shadow-[var(--shadow-elite)] sm:p-10"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">Student Name</Label>
                <Input id="name" name="name" placeholder="e.g. Aarav Sharma" className="mt-2 h-12 border-border bg-background/60" required />
              </div>
              <div>
                <Label htmlFor="phone" className="text-xs uppercase tracking-widest text-muted-foreground">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+91 9XXXX XXXXX" className="mt-2 h-12 border-border bg-background/60" required />
              </div>
              <div>
                <Label htmlFor="classLevel" className="text-xs uppercase tracking-widest text-muted-foreground">Class</Label>
                <select id="classLevel" name="classLevel" required className="mt-2 h-12 w-full rounded-md border border-border bg-background/60 px-3 text-sm text-foreground">
                  <option value="">Select class</option>
                  {classOptions.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="course" className="text-xs uppercase tracking-widest text-muted-foreground">Course Interested In</Label>
                <select id="course" name="course" required className="mt-2 h-12 w-full rounded-md border border-border bg-background/60 px-3 text-sm text-foreground">
                  <option value="">Select course</option>
                  {courseOptions.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">Message (optional)</Label>
                <Textarea id="message" name="message" rows={4} placeholder="Tell us about your goals…" className="mt-2 border-border bg-background/60" />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="sm:col-span-2 h-12 bg-primary text-primary-foreground shadow-[var(--shadow-gold)] hover:bg-primary/90"
              >
                {submitting ? "Submitting…" : (<>Submit Enquiry <Send className="ml-2 h-4 w-4" /></>)}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

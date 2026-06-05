import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is the admission process?", a: "Admissions are based on a scholarship-cum-aptitude test followed by a counselling session with our senior mentor. Direct admission is also available for students with strong academic records — submit the enquiry form and our team will guide you within 24 hours." },
  { q: "What are the batch timings?", a: "Weekday batches run from 4:00 PM to 8:00 PM after school hours. Weekend intensive batches run from 9:00 AM to 5:00 PM. Class 12 and dropper batches have full-day schedules with structured breaks." },
  { q: "What is the fee structure?", a: "Fees vary by programme — Class 11/12 from ₹85,000/year, JEE/NEET integrated programmes from ₹1,25,000/year. We offer scholarships up to 100% on the basis of the entrance test, plus easy installment options. Detailed fee structure shared during counselling." },
  { q: "How does the test series work?", a: "Every student writes a chapter test weekly, a cumulative test fortnightly and an All India mock monthly. Detailed performance analytics, rank predictors and personalised improvement plans are shared with both student and parent." },
  { q: "Tell me about the scholarship exam.", a: "Our Elite Scholarship Test is held quarterly. Top scorers receive scholarships ranging from 25% to 100% on tuition fees. Registration is free and the test is conducted both online and at our centre." },
  { q: "Are doubt-clearing classes included?", a: "Yes. Daily doubt sessions are conducted after regular classes by subject faculty. In addition, every student has 24x7 access to our doubt portal where queries are resolved within 12 hours by senior mentors." },
];

export function FAQ() {
  return (
    <section className="py-24" id="faq">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Frequently Asked</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Questions parents ask <span className="text-gradient-gold">most often</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="overflow-hidden rounded-xl border border-border bg-card px-5 transition hover:border-primary/40">
              <AccordionTrigger className="py-5 text-left font-display text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-foreground/80">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

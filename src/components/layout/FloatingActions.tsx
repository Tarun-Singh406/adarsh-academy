import { MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  return (
    <>
      <a
        href="tel:+919876543210"
        aria-label="Call now"
        className="animate-soft-pulse fixed right-5 top-1/2 z-40 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-gold)] transition hover:scale-105"
      >
        <Phone className="h-6 w-6" />
      </a>
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="animate-soft-pulse-teal fixed bottom-6 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-[0_10px_30px_-10px_rgba(0,178,159,0.6)] transition hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}

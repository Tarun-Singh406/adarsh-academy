import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { HeroSlider } from "@/components/sections/HeroSlider";
import { Introduction } from "@/components/sections/Introduction";
import { AchievementCarousel } from "@/components/sections/AchievementCarousel";
import { Courses } from "@/components/sections/Courses";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Faculty } from "@/components/sections/Faculty";
import { ParentTrust } from "@/components/sections/ParentTrust";
import { FAQ } from "@/components/sections/FAQ";
import { EnquiryForm } from "@/components/sections/EnquiryForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amrawati Tutorials — Premium Coaching for JEE, NEET & Boards" },
      { name: "description", content: "Premium coaching institute for JEE, NEET, Class 11 & 12. 25+ years of trust, 500+ All India Ranks, senior IITian & doctor mentors. Admissions Open 2026." },
      { property: "og:title", content: "Amrawati Tutorials — Building Future Doctors & Engineers" },
      { property: "og:description", content: "Premium coaching for JEE, NEET and Boards. Small batches, senior mentors, proven results." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSlider />
        <Introduction />
        <AchievementCarousel />
        <Courses />
        <WhyChooseUs />
        <Faculty />
        <ParentTrust />
        <FAQ />
        <EnquiryForm />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

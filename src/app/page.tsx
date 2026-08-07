import Hero from "@/components/home/Hero";
import SubjectOverview from "@/components/home/SubjectOverview";
import FeaturedResources from "@/components/home/FeaturedResources";
import AboutPreview from "@/components/home/AboutPreview";
import UnboxedSection from "@/components/home/UnboxedSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SubjectOverview />
      <FeaturedResources />
      <AboutPreview />
      <UnboxedSection />
    </>
  );
}

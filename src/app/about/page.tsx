import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import WhyThisExists from "@/components/about/WhyThisExists";
import BackgroundExperience from "@/components/about/BackgroundExperience";
import FunFacts from "@/components/about/FunFacts";
import InlineCTA from "@/components/ui/InlineCTA";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Me",
  description: `Who made these Secondary E-Math and A-Math resources — ${site.teacherName}.`,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <WhyThisExists />
      <BackgroundExperience />
      <FunFacts />

      <InlineCTA
        title="Want to see what I've put together?"
        buttonLabel="Explore Resources"
        href="/resources"
        secondaryLabel="Visit Unboxed"
        secondaryHref={site.unboxedUrl}
      />
    </>
  );
}

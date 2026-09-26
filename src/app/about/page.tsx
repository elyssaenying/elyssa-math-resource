import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import WhyThisExists from "@/components/about/WhyThisExists";
import FunFacts from "@/components/about/FunFacts";
import InlineCTA from "@/components/ui/InlineCTA";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Me",
  description: `Meet ${site.teacherName}, the person behind these Secondary E-Math and A-Math resources.`,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <WhyThisExists />
      <FunFacts />

      <InlineCTA
        title="Want to see what I've put together?"
        buttonLabel="Explore Resources"
        href="/resources"
      />
    </>
  );
}

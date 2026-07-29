import { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: "Priya Kumari — Full-stack Engineer" },
  description:
    "Full-stack engineer building payment infrastructure, rate limiters, and systems that fail loudly instead of silently.",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  url: "https://priyakumari.dev",
  sameAs: [
    siteConfig.links.github,
    siteConfig.links.linkedin,
    siteConfig.links.twitter,
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
    </>
  );
}
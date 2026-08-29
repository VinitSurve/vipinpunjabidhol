import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Photography & Event Gallery",
  description:
    "Browse our gallery of Punjabi Dhol performances, Bhangra groups, LED Dhol shows, Baraat processions, and Ganpati celebrations. Real performances captured at Mumbai & Navi Mumbai events.",
  alternates: {
    canonical: `${SITE_URL}/gallery`,
  },
  openGraph: {
    title: "Photography & Event Gallery | Vipin Punjabi Dhol & Events",
    description:
      "Real event photography from Punjabi Dhol performances, Bhangra, LED Dhol, and Ganpati celebrations across Mumbai & Navi Mumbai.",
    url: `${SITE_URL}/gallery`,
    images: [
      {
        url: "/images/gallery-baraat-1.webp",
        width: 1200,
        height: 630,
        alt: "Baraat procession with Punjabi Dhol players — Vipin Punjabi Dhol & Events",
      },
    ],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

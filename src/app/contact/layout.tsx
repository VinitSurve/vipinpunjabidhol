import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Book Your Event — Enquire & Contact",
  description:
    "Contact Vipin Punjabi Dhol & Events to book authentic Punjabi Dhol, Bhangra groups, LED Dhol, and live entertainment for your wedding, Baraat, Ganpati, or corporate event in Mumbai & Navi Mumbai.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Book Your Event — Enquire & Contact | Vipin Punjabi Dhol & Events",
    description:
      "Book Punjabi Dhol, Bhangra, LED Dhol or live entertainment for your event. Serving Mumbai & Navi Mumbai. Call +91 7206110529 or enquire online.",
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

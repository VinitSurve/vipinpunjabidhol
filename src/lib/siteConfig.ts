/**
 * Central site configuration.
 * The production URL is driven by NEXT_PUBLIC_SITE_URL.
 * To change the canonical domain, update that single environment variable and redeploy.
 * Never hardcode the production URL anywhere else in the codebase.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

export const SITE_NAME = "Vipin Punjabi Dhol & Events";

export const SITE_DESCRIPTION =
  "Premium Punjabi Dhol players, Bhangra groups, LED Dhol & live entertainment for weddings, Baraat, Ganpati and corporate events in Mumbai & Navi Mumbai.";

export const BUSINESS_INFO = {
  name: "Vipin Punjabi Dhol & Events",
  phone: "+91 7206110529",
  whatsapp: "https://wa.me/917206110529",
  instagram: "https://www.instagram.com/vipin_dhol_events_",
  address: {
    streetAddress: "Kharghar",
    addressLocality: "Navi Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "410210",
    addressCountry: "IN",
  },
  geo: {
    latitude: "19.0406",
    longitude: "73.0695",
  },
  serviceArea: ["Mumbai", "Navi Mumbai", "Thane", "Pune"],
  services: [
    "Punjabi Dhol Players",
    "LED Dhol Performance",
    "Bhangra Group",
    "Dhol & Singer",
    "DJ & Event Sound",
  ],
};

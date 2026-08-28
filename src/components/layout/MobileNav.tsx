"use client";

import Link from "next/link";
import WhatsAppIcon from "../ui/WhatsAppIcon";

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-[100] flex justify-around items-center h-16 bg-surface-container-highest/90 backdrop-blur-lg border-t border-primary/30 shadow-lg md:hidden">
      <a
        className="flex flex-col items-center justify-center text-on-surface-variant active:bg-secondary-container w-full h-full transition-colors rounded-lg p-2 active:scale-110 transform duration-200"
        href="tel:7206110529"
      >
        <span className="material-symbols-outlined mb-1">call</span>
        <span className="font-label-caps text-label-caps" style={{ fontSize: "10px" }}>
          Call
        </span>
      </a>
      <a
        className="flex flex-col items-center justify-center text-on-surface-variant active:bg-secondary-container w-full h-full transition-colors rounded-lg p-2 active:scale-110 transform duration-200 border-x border-surface/20"
        href="https://wa.me/917206110529"
      >
        <WhatsAppIcon className="w-6 h-6 mb-1" />
        <span className="font-label-caps text-label-caps" style={{ fontSize: "10px" }}>
          WhatsApp
        </span>
      </a>
      <Link
        className="flex flex-col items-center justify-center text-primary active:bg-secondary-container w-full h-full transition-colors bg-primary/5 rounded-lg p-2 active:scale-110 transform duration-200 relative"
        href="/contact"
      >
        <span className="material-symbols-outlined mb-1 text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
          event_available
        </span>
        <span className="font-label-caps text-[10px] tracking-wider uppercase font-bold relative z-10">
          Book Now
        </span>
      </Link>
    </nav>
  );
}

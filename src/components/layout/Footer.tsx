"use client";

import BrandLogo from "../ui/BrandLogo";
import Link from "next/link";
interface FooterProps {
  variant: "home" | "simple";
}

export default function Footer({ variant }: FooterProps) {
  if (variant === "simple") {
    // Return the simple variant based on services.html
    return (
      <footer className="w-full px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col md:grid md:grid-cols-4 gap-gutter bg-background border-t border-secondary/10 pb-24 md:pb-section-gap relative overflow-hidden">
        <div className="absolute inset-0 texture-pattern opacity-10 pointer-events-none"></div>
        <div className="md:col-span-1 flex flex-col gap-4 relative z-10">
          <div className="font-display-lg text-headline-xl text-primary mb-unit">VIPIN PUNJABI DHOL</div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
            Elevating cultural entertainment through luxury execution in Mumbai and beyond.
          </p>
        </div>
        <div className="flex flex-col gap-4 relative z-10">
          <p className="font-label-caps text-label-caps text-primary mb-2">Location</p>
          <p className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
            Kharghar, Navi Mumbai
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
            Mumbai • Navi Mumbai • Kharghar
          </p>
        </div>
        <div className="flex flex-col gap-4 relative z-10">
          <p className="font-label-caps text-label-caps text-primary mb-2">Contact</p>
          <p className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
            7206110529
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
            @vipinpuhal
          </p>
        </div>
        <div className="md:col-span-4 mt-12 pt-8 border-t border-secondary/10 text-center relative z-10">
          <p className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">
            © 2024 VIPIN PUNJABI DHOL & EVENTS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    );
  }

  // Home Footer Variant
  return (
    <footer className="w-full bg-background border-t border-secondary/10 pt-16 md:pt-24 pb-8 px-margin-mobile md:px-margin-desktop relative z-10">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12 md:gap-16">
        
        {/* Top Area: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
          
          {/* Left: Branding */}
          <div className="flex flex-col gap-4 max-w-xs">
            <BrandLogo variant="footer" className="opacity-80 hover:opacity-100 transition-opacity" />
            <p className="font-body-sm text-body-sm text-on-surface-variant uppercase tracking-widest mt-2">
              AUTHENTIC PUNJABI ENTERTAINMENT FOR UNFORGETTABLE CELEBRATIONS.
            </p>
          </div>

          {/* Center: Navigation */}
          <div className="flex flex-col gap-4 md:items-center">
            <div className="flex flex-col gap-3">
              <Link href="/" className="font-label-caps text-[11px] tracking-[0.15em] text-on-surface hover:text-primary transition-colors">HOME</Link>
              <Link href="/ganpati-2026" className="font-label-caps text-[11px] tracking-[0.15em] text-on-surface hover:text-primary transition-colors">GANPATI 2026</Link>
              <Link href="/services" className="font-label-caps text-[11px] tracking-[0.15em] text-on-surface hover:text-primary transition-colors">SERVICES</Link>
              <Link href="/gallery" className="font-label-caps text-[11px] tracking-[0.15em] text-on-surface hover:text-primary transition-colors">GALLERY</Link>
              <Link href="/contact" className="font-label-caps text-[11px] tracking-[0.15em] text-on-surface hover:text-primary transition-colors">CONTACT</Link>
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="flex flex-col gap-3 md:items-end text-left md:text-right">
            <a href="tel:7206110529" className="font-label-caps text-[11px] tracking-[0.15em] text-on-surface hover:text-primary transition-colors">7206110529</a>
            <a href="https://instagram.com/vipinpuhal" target="_blank" rel="noopener noreferrer" className="font-label-caps text-[11px] tracking-[0.15em] text-on-surface hover:text-primary transition-colors">@VIPINPUHAL</a>
            <p className="font-label-caps text-[11px] tracking-[0.15em] text-on-surface-variant">KHARGHAR, NAVI MUMBAI</p>
          </div>
        </div>

        {/* Middle: Closing Statement */}
        <div className="flex justify-center text-center py-6">
          <h3 className="font-headline-md text-headline-md md:text-[40px] text-primary italic font-light tracking-wide">
            LET THE DHOL SPEAK.
          </h3>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-on-surface/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="font-label-caps text-[9px] md:text-[10px] tracking-[0.2em] text-on-surface-variant uppercase">
            © 2026 VIPIN PUNJABI DHOL & EVENTS
          </p>
          <p className="font-label-caps text-[9px] md:text-[10px] tracking-[0.2em] text-on-surface-variant uppercase">
            MUMBAI • NAVI MUMBAI • KHARGHAR
          </p>
        </div>

      </div>
    </footer>
  );
}

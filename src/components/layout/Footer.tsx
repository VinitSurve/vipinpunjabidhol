"use client";

import BrandLogo from "../ui/BrandLogo";
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
    <footer className="w-full bg-background border-t border-secondary/10 px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col md:grid md:grid-cols-4 gap-gutter pb-24 md:pb-section-gap pattern-overlay relative z-10">
      <div className="absolute inset-0 bg-background/95"></div>
      <div className="relative z-10 col-span-1 md:col-span-4 mb-12 flex justify-center">
        <BrandLogo variant="footer" className="opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
      </div>
      <div className="relative z-10 flex flex-col items-center md:items-start mb-8 md:mb-0">
        <span className="material-symbols-outlined text-primary mb-4 text-3xl">
          location_on
        </span>
        <a
          className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors text-center md:text-left"
          href="https://maps.google.com/?q=Kharghar,Navi+Mumbai"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kharghar, Navi Mumbai
        </a>
      </div>
      <div className="relative z-10 flex flex-col items-center md:items-start mb-8 md:mb-0">
        <span className="material-symbols-outlined text-primary mb-4 text-3xl">
          call
        </span>
        <a
          className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
          href="tel:7206110529"
        >
          7206110529
        </a>
      </div>
      <div className="relative z-10 flex flex-col items-center md:items-start mb-8 md:mb-0">
        <span className="material-symbols-outlined text-primary mb-4 text-3xl">
          alternate_email
        </span>
        <a
          className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
          href="https://instagram.com/vipinpuhal"
          target="_blank"
          rel="noopener noreferrer"
        >
          @vipinpuhal
        </a>
      </div>
      <div className="relative z-10 flex flex-col items-center md:items-start">
        <span className="material-symbols-outlined text-primary mb-4 text-3xl">
          map
        </span>
        <a
          className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors text-center md:text-left"
          href="https://maps.google.com/?q=Mumbai,Navi+Mumbai,Kharghar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mumbai • Navi Mumbai • Kharghar
        </a>
      </div>
      <div className="relative z-10 col-span-1 md:col-span-4 mt-16 pt-8 border-t border-surface-container-high text-center">
        <p className="font-label-caps text-[10px] text-on-surface-variant opacity-50 uppercase tracking-widest">
          © 2024 VIPIN PUNJABI DHOL & EVENTS. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}

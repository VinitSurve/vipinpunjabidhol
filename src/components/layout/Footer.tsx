"use client";

import BrandLogo from "../ui/BrandLogo";
import Link from "next/link";
import InstagramIcon from "../ui/InstagramIcon";
import TelephoneIcon from "../ui/TelephoneIcon";
import LocationIcon from "../ui/LocationIcon";
export default function Footer() {
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
            <a href="tel:7206110529" className="flex items-center gap-2 font-label-caps text-[11px] tracking-[0.15em] text-on-surface hover:text-primary transition-colors">
              <TelephoneIcon className="w-4 h-4" />
              7206110529
            </a>
            <a href="https://www.instagram.com/vipin_dhol_events_?igsi=aTJrdWIxYnBxcW05" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-label-caps text-[11px] tracking-[0.15em] text-on-surface hover:text-primary transition-colors">
              <InstagramIcon className="w-4 h-4" />
              @VIPIN_DHOL_EVENTS_
            </a>
            <p className="flex items-center gap-2 font-label-caps text-[11px] tracking-[0.15em] text-on-surface-variant">
              <LocationIcon className="w-4 h-4" />
              KHARGHAR, NAVI MUMBAI
            </p>
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
          <div className="flex flex-col gap-2">
            <p className="font-label-caps text-[9px] md:text-[10px] tracking-[0.2em] text-on-surface-variant uppercase">
              © 2026 VIPIN PUNJABI DHOL & EVENTS
            </p>
            <p className="font-label-caps text-[8px] tracking-[0.1em] text-on-surface/40 hover:text-on-surface-variant transition-colors flex flex-col gap-1">
              <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons" target="_blank" rel="noopener noreferrer">Instagram icons created by Magnific - Flaticon</a>
              <a href="https://www.flaticon.com/free-icons/telephone" title="telephone icons" target="_blank" rel="noopener noreferrer">Telephone icons created by Ricardo Ruiz - Flaticon</a>
              <a href="https://www.flaticon.com/free-icons/locations" title="locations icons" target="_blank" rel="noopener noreferrer">Locations icons created by Magnific - Flaticon</a>
            </p>
          </div>
          <p className="font-label-caps text-[9px] md:text-[10px] tracking-[0.2em] text-on-surface-variant uppercase">
            MUMBAI • NAVI MUMBAI • KHARGHAR
          </p>
        </div>

      </div>
    </footer>
  );
}

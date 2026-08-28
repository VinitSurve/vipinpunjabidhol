"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "../ui/BrandLogo";
import WhatsAppIcon from "../ui/WhatsAppIcon";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Ganpati 2026", href: "/ganpati-2026" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Desktop TopNavBar Shared Component */}
      <header className="fixed top-0 left-0 w-full z-[100] justify-between items-center px-margin-mobile md:px-margin-desktop py-4 bg-surface/70 backdrop-blur-xl border-b border-secondary/20 hidden md:flex transition-all duration-300">
        <Link href="/" className="flex items-center gap-4 group">
          <BrandLogo variant="navbar" className="group-hover:scale-105 transition-transform duration-300" />
          <span className="font-display-lg text-headline-lg font-bold text-primary tracking-tight hidden lg:block">
            VIPIN PUNJABI DHOL
          </span>
        </Link>
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-label-caps text-label-caps uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? "text-primary border-b-2 border-primary pb-1 active:scale-95 duration-200"
                    : "text-on-surface hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            className="font-cta text-cta bg-on-background text-background px-6 py-3 border-b-2 border-primary transition-opacity hover:opacity-90 uppercase tracking-widest"
            href="/contact"
          >
            Book Now
          </Link>
          <a
            className="font-cta text-cta flex items-center gap-2 bg-surface-container text-on-background border border-on-background px-6 py-3 transition-colors hover:bg-surface-variant uppercase tracking-widest hidden xl:flex"
            href="https://wa.me/917206110529"
          >
            <WhatsAppIcon className="w-5 h-5" />
            WhatsApp
          </a>
        </div>
      </header>
      
      {/* Mobile Top Bar */}
      <header className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-margin-mobile py-4 bg-surface/90 backdrop-blur-xl border-b border-secondary/20 md:hidden">
        <Link href="/" className="flex items-center gap-2">
          <BrandLogo variant="navbar" />
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 text-primary focus:outline-none flex items-center justify-center"
          aria-label="Open menu"
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#171513] text-[#FFFDF8] flex flex-col md:hidden overflow-y-auto">
          {/* Header inside menu */}
          <div className="flex justify-between items-center px-margin-mobile py-4 border-b border-[#B58A3A]/20">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
              <BrandLogo variant="navbar" />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-[#B58A3A] focus:outline-none flex items-center justify-center"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
          </div>
          
          {/* Menu Links */}
          <nav className="flex flex-col items-start px-margin-mobile py-12 gap-8 flex-grow">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-label-caps text-lg uppercase tracking-[0.2em] flex items-center gap-4 w-full transition-colors ${
                    isActive ? "text-[#B58A3A]" : "text-[#FFFDF8] hover:text-[#B58A3A]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <div className="w-full border-t border-[#B58A3A]/20 mt-4 pt-8 flex flex-col gap-6">
              <a href="https://wa.me/917206110529" className="font-label-caps text-sm uppercase tracking-widest text-[#FFFDF8] hover:text-[#B58A3A] flex items-center gap-3 transition-colors">
                <WhatsAppIcon className="w-6 h-6" />
                WhatsApp Us
              </a>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#B58A3A] text-[#171513] hover:bg-[#FFFDF8] font-label-caps text-sm uppercase tracking-widest text-center py-4 w-full transition-colors">
                Book Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Lightbox, { GalleryImage } from "@/components/ui/Lightbox";
import Image from "next/image";

const galleryImages: GalleryImage[] = [
  // 0: Original Large Portrait
  {
    id: "baraat-1",
    src: "/images/gallery-baraat-1.webp",
    alt: "Baraat Entrance",
    category: "Baraat",
    title: "The Royal Entrance",
    subtitle: "Baraat",
    heightClass: "h-auto"
  },
  // 1: Original Landscape
  {
    id: "wedding-1",
    src: "/images/gallery-wedding-1.webp",
    alt: "Wedding Celebration",
    category: "Weddings",
    subtitle: "Weddings",
    heightClass: "h-auto"
  },
  // 2: Owner Photo 1 (Detail/Portrait insert)
  {
    id: "owner-1",
    src: "/images/2.webp",
    alt: "Vipin - Behind the Beat",
    category: "All",
    title: "Behind the Beat",
    subtitle: "Vipin Punjabi Dhol",
    heightClass: "h-[500px]"
  },
  // 3: Original Square Detail
  {
    id: "detail-1",
    src: "/images/gallery-detail-1.webp",
    alt: "Dhol Detail",
    category: "Dhol",
    heightClass: "h-auto aspect-square"
  },
  // 4: Owner Photo 2
  {
    id: "owner-2",
    src: "/images/8.webp",
    alt: "The Man Behind the Dhol",
    category: "Baraat",
    title: "The Man Behind the Dhol",
    heightClass: "h-[450px]"
  },
  // 5: Original Tall Portrait
  {
    id: "bhangra-1",
    src: "/images/gallery-bhangra-1.webp",
    alt: "Bhangra Stage Performance",
    category: "Bhangra",
    title: "Stage Energy",
    subtitle: "Bhangra",
    heightClass: "h-[600px]"
  },
  // 6: Original Landscape Procession
  {
    id: "ganpati-1",
    src: "/images/gallery-ganpati-1.webp",
    alt: "Ganpati Visarjan",
    category: "Ganpati",
    heightClass: "h-auto"
  },
  // 7: Owner Photo 3
  {
    id: "owner-3",
    src: "/images/7.webp",
    alt: "Built Around Rhythm",
    category: "Baraat",
    title: "Built Around Rhythm",
    heightClass: "h-[450px]"
  },
  // 8: Original Medium Portrait
  {
    id: "wedding-2",
    src: "/images/gallery-wedding-2.webp",
    alt: "Wedding Entrance",
    category: "Weddings",
    subtitle: "Weddings",
    heightClass: "h-[450px]"
  },
  // 9: Owner Photo 4
  {
    id: "owner-4",
    src: "/images/9.webp",
    alt: "Behind the Celebration",
    category: "All",
    title: "Behind the Celebration",
    heightClass: "h-auto"
  },
];

const CATEGORIES = ["ALL", "WEDDINGS", "BARAAT", "DHOL", "BHANGRA", "GANPATI"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = galleryImages.filter(img => {
    if (activeFilter === "ALL") return true;
    if (img.category.toUpperCase() === "ALL") return true; // Keep "All" category owner photos visible across filters
    return img.category.toUpperCase() === activeFilter;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  return (
    <>
      <main className="pt-24 pb-section-gap md:pt-32">
        {/* Hero Section */}
        <section className="w-full px-margin-mobile md:px-margin-desktop py-16 flex flex-col items-center justify-center text-center relative overflow-hidden">
          {/* Dramatic ambient glow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background relative z-10 max-w-4xl tracking-tighter">
            MOMENTS. <span className="text-primary italic">MUSIC.</span> MEMORIES.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 max-w-2xl relative z-10">
            A visual journey through the high-octane energy and cultural elegance of our performances. From intimate ceremonies to grand celebrations.
          </p>
        </section>

        {/* Gallery Controls */}
        <section className="w-full px-margin-mobile md:px-margin-desktop mb-12 flex justify-center sticky top-[80px] z-40 py-4 bg-background/90 backdrop-blur-md">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`font-label-caps text-label-caps px-6 py-2 rounded-full transition-all border ${
                  activeFilter === category
                    ? "text-background bg-primary border-primary"
                    : "text-on-surface border-outline/30 hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Editorial Masonry Grid */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop min-h-[60vh]">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-gutter space-y-gutter">
            
            {filteredImages.map((image, idx) => (
              <div
                key={image.id}
                onClick={() => openLightbox(idx)}
                className="relative group overflow-hidden break-inside-avoid rounded-DEFAULT border border-primary/20 hover:border-primary/50 transition-colors cursor-pointer"
              >
                <img
                  className={`w-full object-cover transform transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-110 ${image.heightClass}`}
                  src={image.src}
                  alt={image.alt}
                />

                {/* Subtle VIEW overlay */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20">
                  <span className="font-label-caps text-[10px] text-white tracking-[0.2em] uppercase bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-md">VIEW ↗</span>
                </div>

                {/* Original Caption Overlay styling */}
                {(image.title || image.subtitle) && (
                  <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/60 to-transparent pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-90">
                    {image.subtitle && (
                      <span className="font-label-caps text-[11px] text-primary mb-2 block tracking-widest uppercase shadow-black drop-shadow-md">
                        {image.subtitle}
                      </span>
                    )}
                    {image.title && (
                      <h3 className="font-headline-lg text-[22px] md:text-[26px] text-white leading-tight drop-shadow-md">
                        {image.title}
                      </h3>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-20 text-on-surface-variant font-label-caps tracking-widest">
              No images found for this category.
            </div>
          )}
        </section>

        {/* Final CTA Section */}
        <section className="w-full px-margin-mobile md:px-margin-desktop py-section-gap relative overflow-hidden mt-12 border-t border-secondary/10 pattern-dhol">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10 bg-background/80 backdrop-blur-sm p-12 rounded-xl border border-primary/20">
            <h2 className="font-headline-xl text-headline-xl text-on-background mb-8">
              Ready to make your own memories?
            </h2>
            <Link
              className="inline-flex items-center justify-center font-cta text-cta bg-primary text-background px-10 py-4 rounded-none uppercase tracking-widest hover:bg-secondary-fixed-dim transition-colors relative group overflow-hidden"
              href="/contact"
            >
              <span className="relative z-10">BOOK NOW</span>
              {/* Luminous accent on hover */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              {/* Subtle glow */}
              <div className="absolute -inset-1 bg-primary blur-sm opacity-0 group-hover:opacity-15 transition-opacity z-0"></div>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />

      <Lightbox
        images={filteredImages}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}

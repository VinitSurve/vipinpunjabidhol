"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title?: string;
  subtitle?: string;
  heightClass?: string;
}

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
      }
      if (e.key === "ArrowRight") {
        onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
      }
    },
    [currentIndex, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, handleKeyDown]);

  if (currentIndex === null) return null;

  const currentImage = images[currentIndex];
  if (!currentImage) return null;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10">
        <div className="text-white/70 font-label-caps text-[12px] tracking-[0.2em]">
          {currentIndex + 1} / {images.length}
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-primary transition-colors flex items-center gap-2 font-label-caps text-[12px] tracking-[0.2em]"
        >
          CLOSE <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
      </div>

      {/* Navigation Areas */}
      <div
        className="absolute left-0 top-0 w-1/4 h-full cursor-[w-resize] z-10 flex items-center px-8 opacity-0 hover:opacity-100 transition-opacity hidden md:flex"
        onClick={handlePrev}
      >
        <button className="text-white hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[40px] font-light">arrow_back_ios</span>
        </button>
      </div>
      
      <div
        className="absolute right-0 top-0 w-1/4 h-full cursor-[e-resize] z-10 flex items-center justify-end px-8 opacity-0 hover:opacity-100 transition-opacity hidden md:flex"
        onClick={handleNext}
      >
        <button className="text-white hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[40px] font-light">arrow_forward_ios</span>
        </button>
      </div>

      {/* Mobile Controls */}
      <div className="absolute bottom-6 left-0 w-full flex justify-between px-6 z-10 md:hidden pointer-events-none">
        <button onClick={handlePrev} className="text-white bg-black/50 rounded-full p-3 pointer-events-auto">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <button onClick={handleNext} className="text-white bg-black/50 rounded-full p-3 pointer-events-auto">
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>

      {/* Main Image Container */}
      <div 
        className="relative w-full max-w-[90vw] h-full max-h-[85vh] flex items-center justify-center p-4 md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Caption Bottom */}
      {currentImage.title && (
        <div className="absolute bottom-0 left-0 w-full p-8 text-center bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
          <h3 className="font-serif text-2xl text-white mb-1">{currentImage.title}</h3>
          {currentImage.subtitle && (
            <p className="font-label-caps text-[11px] text-primary tracking-[0.2em] uppercase">{currentImage.subtitle}</p>
          )}
        </div>
      )}
    </div>
  );
}

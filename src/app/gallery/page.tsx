import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - VIPIN PUNJABI DHOL & EVENTS",
};

export default function GalleryPage() {
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
          <button className="font-label-caps text-label-caps text-background bg-primary border border-primary px-6 py-2 rounded-full transition-all">
            ALL
          </button>
          <button className="font-label-caps text-label-caps text-on-surface border border-outline/30 px-6 py-2 rounded-full hover:border-primary hover:text-primary transition-all">
            WEDDINGS
          </button>
          <button className="font-label-caps text-label-caps text-on-surface border border-outline/30 px-6 py-2 rounded-full hover:border-primary hover:text-primary transition-all">
            BARAAT
          </button>
          <button className="font-label-caps text-label-caps text-on-surface border border-outline/30 px-6 py-2 rounded-full hover:border-primary hover:text-primary transition-all">
            DHOL
          </button>
          <button className="font-label-caps text-label-caps text-on-surface border border-outline/30 px-6 py-2 rounded-full hover:border-primary hover:text-primary transition-all">
            BHANGRA
          </button>
          <button className="font-label-caps text-label-caps text-on-surface border border-outline/30 px-6 py-2 rounded-full hover:border-primary hover:text-primary transition-all">
            GANPATI
          </button>
        </div>
      </section>

      {/* Editorial Masonry Grid */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-gutter space-y-gutter">
          {/* Item 1: Large Portrait */}
          <div className="relative group overflow-hidden break-inside-avoid rounded-DEFAULT border border-primary/20 hover:border-primary/50 transition-colors cursor-pointer">
            <img
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
              data-alt="A cinematic, high-contrast portrait of a dhol player in traditional vibrant attire, mid-beat, dust illuminated by dramatic spotlights in a dark environment. High-net-worth event aesthetic. Gold and black tones dominate the composition."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe9aHYh_Hz7k1Af1ORvPS9H0yaPqkiaZsme6OTrLj4xLTy07UDKVlRXTjzhkSGYXT_gLVqja-ZPbynqvUV8zyfxR5VvDOT5F5U7n-tNl-tsQMGCYQVMyI0CXJu67KNYLB_onsEbzBnLnFI1d3a6lWPT2IJV-vHziZeEcET_fbIYYtfjP9FY11xwnvb7an8dDTc0lAXLFyjXkUrFYDvAypK2MWJ-jucDnmncRzXMdbTJIW8QNnZSfyJ"
              alt="Baraat Entrance"
            />

            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="font-label-caps text-label-caps text-primary mb-2 block">
                Baraat
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-background">
                The Royal Entrance
              </h3>
            </div>
          </div>
          {/* Item 2: Landscape */}
          <div className="relative group overflow-hidden break-inside-avoid rounded-DEFAULT border border-secondary/20 hover:border-primary/40 transition-colors cursor-pointer">
            <img
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
              data-alt="Wide cinematic shot of an energetic crowd at a luxury Indian wedding reception. Guests dancing enthusiastically, blurred motion. Elegant venue with chandelier lighting, dark moody atmosphere with champagne gold light highlights."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXPgwydRhCLZHRAXsZZ6abvahGe8n80KizP49Oph028lnKdm4qsRsMUy4UAalFhBge7BeizartfmpraDzVrlS-gA9GUPVWkvUiFbqGro4O-b1OWMl4x31GF2eS9vz9JMrxtDlKP2H7e-1fHyR7EUBEHEhTyKse9Iu7-wkucmkPCA8LGyeuAYTtkOsouWc00n3vOF73DFuIG-V3ZdGxot5oFpqJlMhtmwKVMqNPVDbq6w_SnxBw6v55"
              alt="Wedding Celebration"
            />

            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="font-label-caps text-label-caps text-secondary mb-2 block">
                Weddings
              </span>
            </div>
          </div>
          {/* Item 3: Square Detail */}
          <div className="relative group overflow-hidden break-inside-avoid rounded-DEFAULT border border-secondary/20 hover:border-primary/40 transition-colors cursor-pointer">
            <img
              className="w-full h-auto object-cover aspect-square transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
              data-alt="Close up macro photography of a beautifully carved wooden Dhol instrument. Focus on the intricate traditional carvings and taut skin. Dramatic rim lighting highlighting the metallic gold accents against a pure obsidian black background."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwh2rSnzTpSmHXciBldfYwCIwQaVnGR_rLYPO_5Kme5Ti1DV4KHqu7nKtxegTsesZx5wEG4syctB10fDTaMM9eezrHGvvFz4G5Tiq4I0BOdz0a_qDXm0yliHIzLNckje89n-wa5GaWtRg9CLMPEtl823QUReCxh5Ptd15FoaqXkkmCUrsKt6DidFAoKUbcjJl8HkpKX_vqE8M0LICZPzpiE7TfLXO-1HPZgHzMHipRKT2lO4-9-GMb"
              alt="Dhol Detail"
            />
          </div>
          {/* Item 4: Tall Portrait */}
          <div className="relative group overflow-hidden break-inside-avoid rounded-DEFAULT border border-primary/30 hover:border-primary/60 transition-colors cursor-pointer">
            <img
              className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
              data-alt="Full length dynamic shot of a Bhangra dance troupe performing live on stage. Performers in ornate traditional costumes mid-jump. Spectacular stage lighting, lasers, dark club-like atmosphere but high-end luxury execution. Cinematic high contrast."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwKo1IGxASGEGVFfpmb7X6phCDaEsYdFu2ovIY7aSREcV5Fd3-UcctUf2re1g7zfYrFcCE-AVtsi_oX6dQf6XIXe60N_UN2BvPnClgRAAcI9Rpj-_HTkUfl9pVX5WfzJrgl7-M3-btgTU_SdRLXask5ghySvBB9XXd1kDx4-bOu_0QGWUrefPXKgs2KCU14Q920KpFBVjUAvuhYONXBKh5WTC-aTJsvGXZo5wMDo5zrBaAqVlSDKxK"
              alt="Bhangra Stage Performance"
            />

            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="font-label-caps text-label-caps text-primary mb-2 block">
                Bhangra
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-background">
                Stage Energy
              </h3>
            </div>
          </div>
          {/* Item 5: Landscape Procession */}
          <div className="relative group overflow-hidden break-inside-avoid rounded-DEFAULT border border-secondary/20 hover:border-primary/40 transition-colors cursor-pointer">
            <img
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
              data-alt="Grand Ganpati Visarjan procession at night. A massive crowd surrounding an idol illuminated by spotlights and fire sparks. High-energy, chaotic but beautifully composed cinematic shot. Deep blacks contrasting with fiery oranges and bright golds."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfIJZSEN1j37qqwj_AsosJMGEaMu082AqP3KTe5jl7jToRY7fe_hOJfymSW3s0muxjKs4Y0NfdpUF1IXvxttdB4scMjQzLAzUJ5KGJ1TAyoLhnJsgy6qq_bmu1jhEnGXs6VvWezWKNjnYa8lMi9pqtmtPBi1kuCCO8J1uVcVjCCckgW0mYFdhCYzzDYAii4l9nLAv037EnE3KMjrVOSizgTBbNUtwFT8KlYJyV8BOaJdbnil4UFFea"
              alt="Ganpati Visarjan"
            />

          </div>
          {/* Item 6: Medium Portrait */}
          <div className="relative group overflow-hidden break-inside-avoid rounded-DEFAULT border border-secondary/20 hover:border-primary/40 transition-colors cursor-pointer">
            <img
              className="w-full h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
              data-alt="Elegant bride and groom surrounded by Dhol players entering the wedding venue. High-end fashion editorial style lighting. Luxury decor in the background. The mood is celebratory, grand, and affluent. Cinematic dark aesthetic."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLINWyiqjOJFiYt0eqcUolveUI0TVWdLrKgkwuC-gEGc1AECs0C6mN93pyZsvdaAHbF7kqo8oCgSFZQWXBqKTV2uMFVgdNnjGa7MbzlCESxYDTHDL0-zFF1KH9s3DpCV5q6v3PcRPekdu8QzsAX93-gn1gDGa3gV8ti8zuTYKNhnAciR0X-8b-p3tUX4DfsVknRbJze0O6wGSdjPK8RGm7AhM-3oi2jXZlZhkBjnJAYaX9ZXM1NLGS"
              alt="Wedding Entrance"
            />

            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="font-label-caps text-label-caps text-secondary mb-2 block">
                Weddings
              </span>
            </div>
          </div>
        </div>
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
      <Footer variant="simple" />
    </>
  );
}

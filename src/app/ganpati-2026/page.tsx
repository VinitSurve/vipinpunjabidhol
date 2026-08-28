import Link from "next/link";
import { Metadata } from "next";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Ganpati 2026 - VIPIN PUNJABI DHOL",
};

export default function GanpatiPage() {
  return (
    <>
      <main className="min-h-screen pt-24 bg-background">
        
        {/* 1. Ganpati Hero */}
        <section className="py-12 md:py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* Hero Left Content */}
          <div className="flex flex-col items-start gap-6 order-2 md:order-1">
            <div className="bg-surface-container-low px-4 py-2 font-label-caps text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">
              ADVANCE BOOKING OPEN
            </div>
            
            <h1 className="font-headline-xl text-[56px] md:text-[72px] lg:text-[96px] text-on-surface leading-[1.05] tracking-tight">
              GANPATI<br />
              2026<br />
              <span className="text-primary italic font-light">Bring the Beat.</span>
            </h1>
            
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-4">
              Experience the raw energy of authentic Punjabi Dhol infused with modern flair. Bring a powerful rhythm to your Ganpati celebration with a performance crafted to make the moment unforgettable.
            </p>
            
            <Link className="btn-primary mt-2" href="#enquiry">
              CHECK YOUR DATE
            </Link>
          </div>

          {/* Hero Right Image */}
          <div className="order-1 md:order-2 relative aspect-square lg:aspect-[4/5] w-full overflow-hidden">
            <img 
              src="/images/ganpati-fusion.png" 
              alt="Ganpati 2026 Celebration" 
              className="absolute inset-0 w-full h-full object-cover object-center" 
            />
          </div>
        </section>

        {/* 2. Signature Experiences */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background text-center">
          <div className="max-w-[1440px] mx-auto">
            <span className="font-label-caps text-label-caps text-primary tracking-[0.2em] uppercase block mb-6">
              SIGNATURE EXPERIENCES
            </span>
            <h2 className="font-headline-xl text-[48px] md:text-[64px] text-on-surface leading-[1.1] mb-16 md:mb-24">
              Rhythms Crafted for the<br />Divine
            </h2>
            
            {/* Asymmetric Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
              
              {/* Row 1, Col 1: Text Card (Authentic Punjabi Dhol) */}
              <div className="bg-surface px-8 py-12 border border-secondary/10 flex flex-col items-start gap-6 h-full min-h-[320px] shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
                <span className="material-symbols-outlined text-primary text-2xl">music_note</span>
                <h3 className="font-headline-lg text-headline-lg text-on-surface">Authentic Punjabi Dhol</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  The timeless, thunderous beats that define celebration. Executed by master percussionists draped in heritage attire.
                </p>
              </div>

              {/* Row 1, Col 2: Image (Dhol B&W) */}
              <div className="relative aspect-square md:aspect-auto w-full h-full overflow-hidden">
                <img 
                  src="/images/ganpati-dhol.png" 
                  alt="Traditional Punjabi Dhol" 
                  className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer" 
                />
              </div>

              {/* Row 1, Col 3: Text Card (LED Dhol) */}
              <div className="bg-surface px-8 py-12 border border-secondary/10 flex flex-col items-start gap-6 h-full min-h-[320px] shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
                <span className="material-symbols-outlined text-primary text-2xl">lightbulb</span>
                <h3 className="font-headline-lg text-headline-lg text-on-surface">LED Dhol</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  A modern spectacle. Illuminated performances designed for night immersions.
                </p>
                <div className="mt-auto">
                  <Link className="font-cta text-[10px] text-on-surface border-b border-on-surface/30 pb-0.5 hover:border-on-surface transition-colors flex items-center uppercase tracking-widest" href="#enquiry">
                    EXPLORE
                  </Link>
                </div>
              </div>

              {/* Row 2, Col 1: Text Card (Bhangra Troupe) */}
              <div className="bg-surface px-8 py-12 border border-secondary/10 flex flex-col items-start gap-6 h-full min-h-[320px] shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
                <span className="material-symbols-outlined text-primary text-2xl">celebration</span>
                <h3 className="font-headline-lg text-headline-lg text-on-surface">Bhangra Troupe</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  Elevate the energy with synchronized, high-octane Bhangra dancers accompanying the rhythm.
                </p>
                <div className="mt-auto">
                  <Link className="font-cta text-[10px] text-on-surface border-b border-on-surface/30 pb-0.5 hover:border-on-surface transition-colors flex items-center uppercase tracking-widest" href="#enquiry">
                    EXPLORE
                  </Link>
                </div>
              </div>

              {/* Row 2, Col 2: Image (Fusion/DJ) */}
              <div className="relative aspect-square md:aspect-auto w-full h-full overflow-hidden">
                <img 
                  src="/images/ganpati-hero.png" 
                  alt="DJ Mix Dhol Fusion" 
                  className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer" 
                />
              </div>

              {/* Row 2, Col 3: Text Card (DJ Mix Dhol Fusion) */}
              <div className="bg-surface px-8 py-12 border border-secondary/10 flex flex-col items-start gap-6 h-full min-h-[320px] shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
                <span className="material-symbols-outlined text-primary text-2xl">headphones</span>
                <h3 className="font-headline-lg text-headline-lg text-on-surface">DJ Mix Dhol Fusion</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  The ultimate crossover. Live dhol rhythms seamlessly blended with contemporary electronic beats for a truly modern Ganpati vibe.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Secure Your Date */}
        <section id="enquiry" className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest flex items-center justify-center">
          <div className="w-full max-w-4xl bg-surface border border-secondary/10 px-8 py-16 md:px-16 md:py-24 text-center shadow-[0_10px_50px_rgba(0,0,0,0.02)]">
            <h2 className="font-headline-xl text-[48px] md:text-[64px] text-on-surface leading-[1.05] mb-4">
              Secure Your Date
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-16">
              Planning your Ganpati celebration? Share your date and preferred experience, and we'll get back to you with availability.
            </p>
            
            <form className="max-w-2xl mx-auto text-left flex flex-col gap-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex flex-col gap-3">
                  <label className="font-label-caps text-[11px] tracking-[0.15em] uppercase text-on-surface-variant">
                    Full Name
                  </label>
                  <input 
                    type="text"
                    className="w-full bg-transparent border-0 border-b border-secondary/20 py-2 px-0 text-on-surface font-body-md focus:border-on-surface focus:ring-0 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-label-caps text-[11px] tracking-[0.15em] uppercase text-on-surface-variant">
                    Phone Number
                  </label>
                  <input 
                    type="tel"
                    className="w-full bg-transparent border-0 border-b border-secondary/20 py-2 px-0 text-on-surface font-body-md focus:border-on-surface focus:ring-0 transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-label-caps text-[11px] tracking-[0.15em] uppercase text-on-surface-variant">
                  Select Experience
                </label>
                <div className="relative">
                  <select defaultValue="" className="w-full bg-transparent border-0 border-b border-secondary/20 py-2 px-0 text-on-surface font-body-md focus:border-on-surface focus:ring-0 transition-colors appearance-none cursor-pointer">
                    <option value="" disabled></option>
                    <option value="authentic">Authentic Punjabi Dhol</option>
                    <option value="led">LED Dhol</option>
                    <option value="bhangra">Bhangra Troupe</option>
                    <option value="fusion">DJ Mix Dhol Fusion</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                    keyboard_arrow_down
                  </span>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <button type="submit" className="bg-on-surface text-background font-label-caps text-[11px] tracking-[0.2em] uppercase px-12 py-5 hover:bg-primary hover:text-on-primary transition-colors">
                  SUBMIT ENQUIRY
                </button>
              </div>
            </form>
          </div>
        </section>
        
      </main>
      <Footer variant="simple" />
    </>
  );
}

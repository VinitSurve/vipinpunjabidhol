import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services - VIPIN PUNJABI DHOL & EVENTS",
};

export default function ServicesPage() {
  return (
    <>
      <main className="flex-grow pt-24 bg-background">
        
        {/* 1. HERO SECTION */}
        <section className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center px-6 border-b border-secondary/20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/home-hero-dhol.webp')",
            }}
          ></div>
          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center gap-6 mt-16">
            <p className="font-label-caps text-[11px] md:text-[13px] text-primary tracking-[0.3em] uppercase">
              The Pinnacle of Cultural Performance
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-tight">
              PREMIUM<br/>ENTERTAINMENT<br/>SERVICES
            </h1>
            <div className="w-16 h-[1px] bg-primary my-4"></div>
            <p className="text-[16px] md:text-[18px] text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              Authentic Punjabi performances crafted<br className="hidden md:block" />
              for unforgettable celebrations.
            </p>
          </div>
        </section>

        {/* 2. SERVICES INTRO */}
        <section className="py-24 md:py-32 px-6 text-center max-w-4xl mx-auto">
          <p className="font-label-caps text-[11px] text-primary tracking-[0.2em] uppercase mb-6">
            OUR SERVICES
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-on-background mb-8 leading-tight">
            CRAFTED FOR THE MOMENT
          </h2>
          <p className="text-[16px] md:text-[18px] text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed">
            From the first beat to the final celebration, our performances bring together authentic Punjabi tradition, contemporary production and unforgettable energy.
          </p>
        </section>

        {/* 3. SERVICE CATEGORY CARDS */}
        <section className="px-6 md:px-12 max-w-[1400px] mx-auto pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1 */}
            <div className="bg-surface border border-primary/20 p-8 lg:p-10 flex flex-col items-start transition-all duration-500 hover:border-primary/50 group">
              <span className="material-symbols-outlined text-primary text-3xl mb-6 font-light">music_note</span>
              <h3 className="font-serif text-2xl text-on-background mb-6">
                DHOL &<br/>LIVE MUSIC
              </h3>
              <ul className="space-y-3 font-light text-[15px] text-on-surface-variant flex-grow mb-10">
                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-primary rounded-full"></div> Punjabi Dhol Players</li>
                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-primary rounded-full"></div> Dhol & Singer</li>
                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-primary rounded-full"></div> LED Dhol</li>
                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-primary rounded-full"></div> DJ Mix Dhol</li>
              </ul>
              <Link href="#dhol-live-music" className="font-label-caps text-[11px] text-primary tracking-[0.2em] uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                EXPLORE <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-surface border border-primary/20 p-8 lg:p-10 flex flex-col items-start transition-all duration-500 hover:border-primary/50 group">
              <span className="material-symbols-outlined text-primary text-3xl mb-6 font-light">groups</span>
              <h3 className="font-serif text-2xl text-on-background mb-6">
                PERFORMANCE
              </h3>
              <ul className="space-y-3 font-light text-[15px] text-on-surface-variant flex-grow mb-10">
                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-primary rounded-full"></div> Punjabi Bhangra Group</li>
                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-primary rounded-full"></div> Punjabi Boliya / Tappa</li>
              </ul>
              <Link href="#performance" className="font-label-caps text-[11px] text-primary tracking-[0.2em] uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                EXPLORE <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-surface border border-primary/20 p-8 lg:p-10 flex flex-col items-start transition-all duration-500 hover:border-primary/50 group">
              <span className="material-symbols-outlined text-primary text-3xl mb-6 font-light">nightlife</span>
              <h3 className="font-serif text-2xl text-on-background mb-6">
                EVENT<br/>ENTERTAINMENT
              </h3>
              <ul className="space-y-3 font-light text-[15px] text-on-surface-variant flex-grow mb-10">
                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-primary rounded-full"></div> DJ Setup</li>
                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-primary rounded-full"></div> Jaggo on Rent</li>
              </ul>
              <Link href="#event-entertainment" className="font-label-caps text-[11px] text-primary tracking-[0.2em] uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                EXPLORE <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>

          </div>
        </section>

        {/* 4. MAIN SERVICE SHOWCASE (Alternating) */}
        <section className="px-6 md:px-12 max-w-[1600px] mx-auto py-16 space-y-32 md:space-y-48">
          
          {/* SERVICE 01 */}
          <div id="dhol-live-music" className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center">
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-secondary/10">
              <Image 
                src="/images/dhol-players-service.webp" 
                alt="Punjabi Dhol Players" 
                fill 
                className="object-cover object-top" 
              />
            </div>
            <div className="flex flex-col items-start justify-center pr-4 xl:pr-12">
              <p className="font-label-caps text-[11px] text-primary tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                <span className="text-on-surface-variant">01</span> SIGNATURE SERVICE
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-on-background mb-6 leading-tight">
                PUNJABI DHOL PLAYERS
              </h2>
              <p className="text-[15px] text-on-surface-variant font-light leading-relaxed mb-10">
                Experience the raw, unadulterated energy of authentic Punjabi Dhol. Our master percussionists deliver thunderous rhythms that elevate the atmosphere of any grand celebration, rooted deeply in cultural heritage yet presented with modern luxury flair.
              </p>
              
              <div className="border-t border-b border-primary/20 py-5 w-full mb-10">
                <p className="text-[12px] font-bold tracking-[0.1em] text-on-surface mb-1">Ideal For:</p>
                <p className="text-[14px] text-on-surface-variant font-light">Baraat Entry, Sangeet, Corporate Galas, Grand Openings.</p>
              </div>

              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-[#171513] text-white px-8 py-4 font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-[#B58A3A] transition-colors group"
              >
                ENQUIRE NOW <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* SERVICE 02 */}
          <div id="led-dhol" className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-center">
            <div className="flex flex-col items-start justify-center pl-4 xl:pl-12 order-2 lg:order-1">
              <p className="font-label-caps text-[11px] text-primary tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                <span className="text-on-surface-variant">02</span> MODERN SPECTACLE
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-on-background mb-6 leading-tight">
                LED DHOL &<br/>DJ FUSION
              </h2>
              <p className="text-[15px] text-on-surface-variant font-light leading-relaxed mb-10">
                A visually stunning collision of tradition and technology. Our LED Dhol performances synchronize pulsating rhythms with dynamic light displays, seamlessly integrated with high-end DJ setups to create an immersive, nightclub-style experience for your elite guest list.
              </p>
              
              <div className="border-t border-b border-primary/20 py-5 w-full mb-10">
                <p className="text-[12px] font-bold tracking-[0.1em] text-on-surface mb-1">Ideal For:</p>
                <p className="text-[14px] text-on-surface-variant font-light">Reception After-Parties, Cocktails, High-Profile Club Events.</p>
              </div>

              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-[#171513] text-white px-8 py-4 font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-[#B58A3A] transition-colors group"
              >
                ENQUIRE NOW <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-secondary/10 order-1 lg:order-2">
              <Image 
                src="/images/led-dhol-service.webp" 
                alt="LED Dhol & DJ Fusion" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>

          {/* SERVICE 03 */}
          <div id="bhangra-group" className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center">
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-secondary/10">
              <Image 
                src="/images/bhangra-group-service.webp" 
                alt="Punjabi Bhangra Group" 
                fill 
                className="object-cover object-top" 
              />
            </div>
            <div className="flex flex-col items-start justify-center pr-4 xl:pr-12">
              <p className="font-label-caps text-[11px] text-primary tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                <span className="text-on-surface-variant">03</span> PREMIUM GROUP
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-on-background mb-6 leading-tight">
                PUNJABI BHANGRA GROUP
              </h2>
              <p className="text-[15px] text-on-surface-variant font-light leading-relaxed mb-10">
                Elevate your event with choreographed brilliance. Our professional Bhangra troupes bring authentic Punjabi vigor, resplendent costumes, and synchronized perfection to the stage, ensuring a captivating visual and rhythmic spectacle.
              </p>
              
              <div className="border-t border-b border-primary/20 py-5 w-full mb-10 flex flex-col sm:flex-row gap-6 sm:gap-12">
                <div>
                  <p className="text-[12px] font-bold tracking-[0.1em] text-on-surface mb-1">Ideal For:</p>
                  <p className="text-[14px] text-on-surface-variant font-light">Main Stage Entertainment, Sangeet Choreography.</p>
                </div>
                <div>
                  <p className="text-[12px] font-bold tracking-[0.1em] text-on-surface mb-1">Ensemble Options:</p>
                  <p className="text-[14px] text-on-surface-variant font-light">4 to 12 Dancers available.</p>
                </div>
              </div>

              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-[#171513] text-white px-8 py-4 font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-[#B58A3A] transition-colors group"
              >
                ENQUIRE NOW <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* SERVICE 04 */}
          <div id="dhol-singer" className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-center">
            <div className="flex flex-col items-start justify-center pl-4 xl:pl-12 order-2 lg:order-1">
              <p className="font-label-caps text-[11px] text-primary tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                <span className="text-on-surface-variant">04</span> LIVE PERFORMANCE
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-on-background mb-6 leading-tight">
                DHOL & SINGER
              </h2>
              <p className="text-[15px] text-on-surface-variant font-light leading-relaxed mb-10">
                A dynamic live combination of powerful Punjabi percussion and live vocals, designed to keep guests engaged from the first beat to the final celebration.
              </p>
              
              <div className="border-t border-b border-primary/20 py-5 w-full mb-10">
                <p className="text-[12px] font-bold tracking-[0.1em] text-on-surface mb-1">Ideal For:</p>
                <p className="text-[14px] text-on-surface-variant font-light">Wedding Entries, Sangeet, Receptions, Private Celebrations.</p>
              </div>

              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-[#171513] text-white px-8 py-4 font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-[#B58A3A] transition-colors group"
              >
                ENQUIRE NOW <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-secondary/10 order-1 lg:order-2">
              <Image 
                src="/images/dhol-singer-service.webp" 
                alt="Dhol & Singer" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>

          {/* SERVICE 05 */}
          <div id="event-entertainment" className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center">
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-secondary/10">
              <Image 
                src="/images/final-collage-2.webp" 
                alt="DJ & Event Sound" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="flex flex-col items-start justify-center pr-4 xl:pr-12">
              <p className="font-label-caps text-[11px] text-primary tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                <span className="text-on-surface-variant">05</span> COMPLETE EXPERIENCE
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-on-background mb-6 leading-tight">
                DJ & EVENT SOUND
              </h2>
              <p className="text-[15px] text-on-surface-variant font-light leading-relaxed mb-10">
                Complete your celebration with professional DJ entertainment and a carefully coordinated sound experience designed to complement live Dhol performances and keep the energy moving throughout the event.
              </p>
              
              <div className="border-t border-b border-primary/20 py-5 w-full mb-10">
                <p className="text-[12px] font-bold tracking-[0.1em] text-on-surface mb-1">Ideal For:</p>
                <p className="text-[14px] text-on-surface-variant font-light">Receptions, After-Parties, Corporate Events, Private Celebrations.</p>
              </div>

              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-[#171513] text-white px-8 py-4 font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-[#B58A3A] transition-colors group"
              >
                ENQUIRE NOW <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>

        </section>

        {/* 5. THE VIPIN STANDARD */}
        <section className="bg-surface border-t border-b border-secondary/10 py-24 md:py-32 px-6">
          <div className="max-w-[1400px] mx-auto text-center">
            <p className="font-label-caps text-[11px] text-primary tracking-[0.2em] uppercase mb-4">
              THE VIPIN STANDARD
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-on-background mb-16 md:mb-24">
              TRADITION. ENERGY. EXCELLENCE.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-[40px] mb-6 font-light">verified</span>
                <h4 className="font-bold text-[13px] tracking-[0.1em] uppercase text-on-surface mb-3">AUTHENTIC CULTURE</h4>
                <p className="text-[14px] text-on-surface-variant font-light leading-relaxed">
                  Rooted in genuine Punjabi musical tradition.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-[40px] mb-6 font-light">groups</span>
                <h4 className="font-bold text-[13px] tracking-[0.1em] uppercase text-on-surface mb-3">PROFESSIONAL PERFORMANCE</h4>
                <p className="text-[14px] text-on-surface-variant font-light leading-relaxed">
                  Experienced performers who understand timing, energy and stage presence.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-[40px] mb-6 font-light">star</span>
                <h4 className="font-bold text-[13px] tracking-[0.1em] uppercase text-on-surface mb-3">PREMIUM PRESENTATION</h4>
                <p className="text-[14px] text-on-surface-variant font-light leading-relaxed">
                  Every performance is designed to feel worthy of the occasion.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-primary text-[40px] mb-6 font-light">handshake</span>
                <h4 className="font-bold text-[13px] tracking-[0.1em] uppercase text-on-surface mb-3">SEAMLESS EXPERIENCE</h4>
                <p className="text-[14px] text-on-surface-variant font-light leading-relaxed">
                  From enquiry to performance, every detail is handled professionally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FINAL CTA */}
        <section className="relative w-full bg-surface-container py-32 px-6 overflow-hidden">
          <div
            className="absolute left-0 bottom-0 w-full md:w-1/2 h-[600px] bg-cover bg-left-bottom opacity-10 md:opacity-100 mix-blend-multiply"
            style={{
              backgroundImage: "url('/images/final-collage-3.webp')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat"
            }}
          ></div>
          
          <div className="relative z-10 max-w-2xl mx-auto md:ml-auto md:mr-[10%] text-center flex flex-col items-center">
            <p className="font-label-caps text-[11px] text-primary tracking-[0.2em] uppercase mb-4">
              READY TO MAKE AN ENTRANCE?
            </p>
            <h2 className="font-serif text-5xl md:text-7xl text-on-background mb-6 leading-none">
              LET THE DHOL SPEAK.
            </h2>
            <p className="text-[16px] md:text-[18px] text-on-surface-variant font-light leading-relaxed mb-12">
              Tell us about your celebration and let's create an experience your guests will remember.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md">
              <Link
                href="/contact"
                className="bg-[#B58A3A] text-white px-8 py-4 font-bold text-[12px] tracking-[0.15em] uppercase hover:bg-[#8F6A27] transition-all duration-300 flex-1 text-center"
              >
                BOOK YOUR DATE <span className="material-symbols-outlined align-middle text-[14px] ml-2">arrow_forward</span>
              </Link>
              <a
                href="https://wa.me/917206110529"
                className="bg-transparent border border-[#B58A3A] text-[#B58A3A] px-8 py-4 font-bold text-[12px] tracking-[0.15em] uppercase hover:bg-[#B58A3A]/10 transition-all duration-300 flex-1 text-center flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span> WHATSAPP US
              </a>
            </div>

            <div className="mt-16 pt-12 border-t border-secondary/20 flex flex-col md:flex-row items-center justify-center gap-8 text-[13px] font-bold text-on-surface tracking-[0.1em] uppercase">
              <a href="tel:7206110529" className="flex items-center gap-3 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-primary text-[18px]">call</span> 7206110529
              </a>
              <a href="https://www.instagram.com/vipin_dhol_events_?igsi=aTJrdWIxYnBxcW05" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-primary text-[18px]">photo_camera</span> @VIPIN_DHOL_EVENTS_
              </a>
              <span className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[18px]">location_on</span> KHARGHAR, NAVI MUMBAI
              </span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

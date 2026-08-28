import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - VIPIN PUNJABI DHOL & EVENTS",
};

export default function ServicesPage() {
  return (
    <>
      <main className="flex-grow pt-24">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center px-margin-mobile md:px-margin-desktop border-b border-secondary/20 overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-1000 group-hover:scale-105"
          data-alt="Cinematic wide shot of a lavish Indian wedding setup at night, illuminated by golden string lights and warm spotlights. High-contrast lighting highlights the metallic gold accents of the decor against the dark, obsidian night sky. The mood is opulent, festive, and highly premium, capturing the essence of luxury event entertainment in Mumbai."
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhXJQFi8zUwdVETQANLLxbvEB1J02vo3oddKlMg875ZwezjbdEdIgVuBbc9bb-0qEqAcN87shQgRtDvcHPAD26IcWe38U2fqmJ20EeslRfdL5dQjNWC28cqLyEeZ_H01Zm3xVEATBCVlsnFIMmrFOA5nd-ctMOXclIb2_tG78uXhTIpBHq-C_OgvstEg2UDAhrL7fMHOZ_NTsSEQ1QEGPgUoOhZ1hcSsgWDSFdPmKselY1UQkYhcSe')",
          }}
        ></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center gap-6">
          <p className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
            The Pinnacle of Cultural Performance
          </p>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
            PREMIUM ENTERTAINMENT SERVICES
          </h1>
          <div className="w-24 h-1 bg-primary-container mt-4"></div>
        </div>
      </section>

      {/* Grouped Catalog Menu */}
      <section className="px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto texture-pattern">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Category 1 */}
          <div className="border border-secondary/20 p-8 bg-surface-container-low hover:border-primary-container transition-colors duration-500 group">
            <h3 className="font-headline-lg text-headline-lg text-primary mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined">music_note</span>
              DHOL & LIVE MUSIC
            </h3>
            <ul className="space-y-4 font-body-lg text-body-lg text-on-surface-variant">
              <li className="flex items-center gap-2 group-hover:text-on-surface transition-colors">
                <div className="w-1.5 h-1.5 bg-primary-container rounded-full"></div> Punjabi Dhol Players
              </li>
              <li className="flex items-center gap-2 group-hover:text-on-surface transition-colors">
                <div className="w-1.5 h-1.5 bg-primary-container rounded-full"></div> Dhol & Singer
              </li>
              <li className="flex items-center gap-2 group-hover:text-on-surface transition-colors">
                <div className="w-1.5 h-1.5 bg-primary-container rounded-full"></div> LED Dhol
              </li>
              <li className="flex items-center gap-2 group-hover:text-on-surface transition-colors">
                <div className="w-1.5 h-1.5 bg-primary-container rounded-full"></div> DJ Mix Dhol
              </li>
            </ul>
          </div>
          {/* Category 2 */}
          <div className="border border-secondary/20 p-8 bg-surface-container-low hover:border-primary-container transition-colors duration-500 group">
            <h3 className="font-headline-lg text-headline-lg text-primary mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined">celebration</span>
              PERFORMANCE
            </h3>
            <ul className="space-y-4 font-body-lg text-body-lg text-on-surface-variant">
              <li className="flex items-center gap-2 group-hover:text-on-surface transition-colors">
                <div className="w-1.5 h-1.5 bg-primary-container rounded-full"></div> Punjabi Bhangra Group
              </li>
              <li className="flex items-center gap-2 group-hover:text-on-surface transition-colors">
                <div className="w-1.5 h-1.5 bg-primary-container rounded-full"></div> Punjabi Boliya / Tappa
              </li>
            </ul>
          </div>
          {/* Category 3 */}
          <div className="border border-secondary/20 p-8 bg-surface-container-low hover:border-primary-container transition-colors duration-500 group">
            <h3 className="font-headline-lg text-headline-lg text-primary mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined">nightlife</span>
              EVENT ENTERTAINMENT
            </h3>
            <ul className="space-y-4 font-body-lg text-body-lg text-on-surface-variant">
              <li className="flex items-center gap-2 group-hover:text-on-surface transition-colors">
                <div className="w-1.5 h-1.5 bg-primary-container rounded-full"></div> DJ Setup
              </li>
              <li className="flex items-center gap-2 group-hover:text-on-surface transition-colors">
                <div className="w-1.5 h-1.5 bg-primary-container rounded-full"></div> Jaggo on Rent
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Detailed Services (Bento Grid Style for Premium Feel) */}
      <section className="px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto space-y-32">
        {/* Service: Punjabi Dhol Players (Feature Left) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-7 h-[600px] relative overflow-hidden group border border-secondary/20 p-2 bg-surface">
            <div
              className="w-full h-full bg-cover bg-center filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              data-alt="Close up action shot of a professional Punjabi Dhol player in traditional vibrant attire, striking the drum with intensity. The lighting is cinematic, capturing the sweat and motion blur of the sticks, set against an obsidian black background with faint metallic gold light flares. High-end editorial photography style."
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCo0Ml8zIQASygXpSFKNA90W6nDMIxHWr7O1MOROiglAj198JRcqFbUVW9jGL7XjdTS3f2jDMIaKYiR1ZB7N6LbBsd6OwMnSn4BGl5LVpIf0I4nkzHqKClD3-LRdDAehfcnjZk3uddMbjmE67uLmh6w1OLJo-fjIUgSxQVzkZkHYHa__thewYFTRMqDQ2QA0temn-vYb2xibDiPZAOOCuWSAfT0hmsKBdNWYZ-d-LuEbDRMcuC7OuCs')",
              }}
            ></div>

          </div>
          <div className="lg:col-span-5 flex flex-col gap-8 lg:pl-12">
            <div className="space-y-4">
              <p className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
                Signature Service
              </p>
              <h2 className="font-headline-xl text-headline-xl text-on-surface">
                PUNJABI DHOL PLAYERS
              </h2>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Experience the raw, unadulterated energy of authentic Punjabi Dhol. Our master percussionists deliver thunderous rhythms that elevate the atmosphere of any grand celebration, rooted deeply in cultural heritage yet presented with modern luxury flair.
            </p>
            <div className="space-y-2 border-l-2 border-primary-container pl-6 py-2">
              <p className="font-label-caps text-label-caps text-on-surface opacity-60">
                Ideal For:
              </p>
              <p className="font-body-md text-body-md text-on-surface">
                Baraat Entry, Sangeet, Corporate Galas, Grand Openings.
              </p>
            </div>
            <Link
              className="inline-flex items-center justify-center font-cta text-cta px-8 py-4 bg-primary-container text-on-primary-container hover:bg-secondary-fixed transition-colors duration-300 w-max uppercase shadow-[0_0_15px_rgba(212,175,55,0.15)]"
              href="/contact"
            >
              Enquire Now
            </Link>
          </div>
        </div>

        {/* Service: LED Dhol (Feature Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5 flex flex-col gap-8 lg:pr-12 order-2 lg:order-1">
            <div className="space-y-4">
              <p className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
                Modern Spectacle
              </p>
              <h2 className="font-headline-xl text-headline-xl text-on-surface">
                LED DHOL & DJ FUSION
              </h2>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              A visually stunning collision of tradition and technology. Our LED Dhol performances synchronize pulsating rhythms with dynamic light displays, seamlessly integrated with high-end DJ setups to create an immersive, nightclub-style experience for your elite guest list.
            </p>
            <div className="space-y-2 border-l-2 border-primary-container pl-6 py-2">
              <p className="font-label-caps text-label-caps text-on-surface opacity-60">
                Ideal For:
              </p>
              <p className="font-body-md text-body-md text-on-surface">
                Reception After-Parties, Cocktails, High-Profile Club Events.
              </p>
            </div>
            <Link
              className="inline-flex items-center justify-center font-cta text-cta px-8 py-4 bg-transparent border border-primary-container text-primary hover:bg-primary-container hover:text-on-primary-container transition-colors duration-300 w-max uppercase"
              href="/contact"
            >
              Enquire Now
            </Link>
          </div>
          <div className="lg:col-span-7 h-[600px] relative overflow-hidden group border border-secondary/20 p-2 bg-surface order-1 lg:order-2">
            <div
              className="w-full h-full bg-cover bg-center transition-all duration-700 group-hover:scale-105"
              data-alt="Dynamic shot of an LED illuminated Dhol being played at a modern luxury event. The glowing neon lights of the drum contrast sharply with the dark, upscale club atmosphere. A DJ silhouette is faintly visible in the background against a sophisticated laser lighting rig. The aesthetic is high-contrast, modern luxury nightlife."
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKzhMDP0hq7Qmh5zK0spczbcRzqn45a4hdLjxSe81mKM1JupFehmTDzCIkHXx0dfEPz3SulEkPAn6KkEB77RQlzwMB0EK-1QKKAs0XbWvTdLp0FPgM5N-bF5HEMDccnZA8SU3KH2KuLgOFMsBx5D0wf6be_NqDO-tVwI_0h4hIZwTX1nizqy4iXMGGlLkBWA3ekqo-WTZVc7sQo1IHc1FznCxcpJzrN_Su1fy2cazYzKSa39fLUTRL')",
              }}
            ></div>

          </div>
        </div>

        {/* Service: Bhangra Group (Feature Left Asymmetric) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <div className="lg:col-span-8 h-[700px] relative overflow-hidden group border border-primary-container p-2 bg-surface">
            <div className="absolute top-4 left-4 z-20 bg-background/80 backdrop-blur-md px-4 py-2 border border-primary/30">
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
                Premium Group
              </span>
            </div>
            <div
              className="w-full h-full bg-cover bg-center filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              data-alt="A highly stylized, editorial photograph of a professional Punjabi Bhangra dance troupe mid-performance. They are wearing exquisite, heavily embroidered traditional costumes in deep jewel tones and metallic gold. The setting is a lavish stage with minimal, dramatic spotlighting against a black void. Elegant, energetic, and culturally rich."
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4RoAq2yf4GzurqenI7PZRkqbuf6smRyfq8OIMEqxXJAabe_dgg-jX3nYde9P8iUiFJHXIagkgnELttM_IB4CI4eGl3jnSYwapB_pQ0utwn8B-w6B7c3Rv5LLtUPiN-K6wVRzrw1Jx0SwKEQ56bR1t2YovbJ6GridSOTTy4WPNWuJUCs_xrg8Kf4IgvpfLKsjqVu-YGGyNHrE9eNDpiUl662CJqlQUdZsWml9Mlr5jM8ZmbMevJmV0')",
              }}
            ></div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-12 lg:pt-24 lg:pl-8">
            <div className="space-y-6">
              <h2 className="font-headline-xl text-headline-xl text-on-surface">
                PUNJABI BHANGRA GROUP
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Elevate your event with choreographed brilliance. Our professional Bhangra troupes bring authentic Punjabi vigor, resplendent costumes, and synchronized perfection to the stage, ensuring a captivating visual and rhythmic spectacle.
              </p>
            </div>
            <div className="space-y-6 bg-surface-container-low p-8 border border-secondary/10">
              <div className="space-y-2">
                <p className="font-label-caps text-label-caps text-on-surface opacity-60">
                  Ideal For:
                </p>
                <p className="font-body-md text-body-md text-on-surface">
                  Main Stage Entertainment, Sangeet Choreography.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-label-caps text-label-caps text-on-surface opacity-60">
                  Ensemble Options:
                </p>
                <p className="font-body-md text-body-md text-on-surface">
                  4 to 12 Dancers available.
                </p>
              </div>
            </div>
            <Link
              className="inline-flex items-center justify-center font-cta text-cta px-8 py-4 bg-primary-container text-on-primary-container hover:bg-secondary-fixed transition-colors duration-300 w-full uppercase shadow-[0_0_15px_rgba(212,175,55,0.15)]"
              href="/contact"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 px-margin-mobile md:px-margin-desktop overflow-hidden border-t border-secondary/20 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 texture-pattern opacity-50"></div>
        <div className="relative z-10 max-w-3xl flex flex-col items-center gap-8">
          <span
            className="material-symbols-outlined text-primary text-6xl"
            style={{ fontVariationSettings: "'wght' 300" }}
          >
            diamond
          </span>
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
            LET'S CRAFT YOUR CELEBRATION
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Partner with VIPIN PUNJABI DHOL to architect an unforgettable auditory and visual experience for your next premier event.
          </p>
          <div className="flex gap-4 mt-8">
            <Link
              className="inline-flex items-center justify-center font-cta text-cta px-8 py-4 bg-primary-container text-on-primary-container hover:bg-secondary-fixed transition-colors duration-300 uppercase shadow-[0_0_20px_rgba(212,175,55,0.2)]"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}

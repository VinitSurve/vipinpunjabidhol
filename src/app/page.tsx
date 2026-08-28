import Link from "next/link";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <main className="flex-grow flex flex-col pt-0">
      {/* 1. Editorial Hero */}
      <section className="min-h-[80vh] px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-gutter items-center">
        <div className="flex flex-col items-start gap-6 max-w-xl z-10 py-12 md:py-0">
          <span className="font-label-caps text-label-caps text-on-surface-variant tracking-[0.2em] uppercase">
            PUNJABI DHOL • BHANGRA • DJ • EVENTS
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary leading-tight">
            BRING THE PUNJABI <span className="italic font-light">BEAT</span> TO YOUR CELEBRATION
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Elevate your special moments with authentic, powerful, and unforgettable Punjabi entertainment in Mumbai & Navi Mumbai.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 w-full md:w-auto">
            <Link className="font-cta text-cta bg-on-background text-background px-8 py-4 border-b-2 border-primary hover:opacity-90 transition-opacity w-full sm:w-auto text-center tracking-widest uppercase" href="/contact">
              BOOK YOUR EVENT
            </Link>
            <a
              className="font-cta text-cta bg-surface-container text-primary border border-primary px-8 py-4 hover:bg-surface-variant transition-colors w-full sm:w-auto text-center tracking-widest uppercase"
              href="https://wa.me/917206110529"
            >
              WHATSAPP US
            </a>
          </div>
        </div>
        <div className="relative h-[60vh] md:h-[80vh] w-full">
          <div
            className="bg-cover bg-center w-full h-full"
            data-alt="A high quality image of a Punjabi Dhol player"
            style={{
              backgroundImage:
                "url('/images/home-hero-dhol.png')",
            }}
          ></div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="w-full border-y border-primary/30 py-6 bg-surface-container overflow-hidden">
        <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap px-margin-mobile md:px-margin-desktop font-label-caps text-label-caps text-on-surface-variant whitespace-nowrap uppercase">
          <span>WEDDINGS</span>
          <span className="text-secondary/50">|</span>
          <span>BARAAT</span>
          <span className="text-secondary/50">|</span>
          <span>BHANGRA</span>
          <span className="text-secondary/50">|</span>
          <span>GANPATI</span>
          <span className="text-secondary/50">|</span>
          <span>MUMBAI & NAVI MUMBAI</span>
        </div>
      </section>

      {/* 3. Editorial Intro */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="order-2 md:order-1 relative aspect-[4/5] w-full max-w-md mx-auto md:max-w-none">
          <div className="bg-cover bg-center w-full h-full absolute inset-0 -translate-x-4 md:-translate-x-8 translate-y-4 md:translate-y-8 z-0 opacity-80" data-alt="Close-up editorial portrait of an ornate traditional Punjabi Dhol drum resting in an elegant ivory setting. The drum features intricate carvings and warm wood tones, contrasting beautifully with crisp white surroundings. Subtle natural light casts gentle shadows, emphasizing a light luxury aesthetic. High resolution, shallow depth of field, sophisticated and serene mood." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDzQCnFrUmX1_FFTN0-EfezM4Ir-J6Zn-4TmkgPmErmNJJdUVrEAX8Qw3kU_FNc-2revZ_gE7LO6kCLYBUPXQjDMJZ510ClQbEIucCZ93RRXjy3KsTfdj2swd9K30AshB6S2wJLrp2_C-pJiFsqzsijB5xmzViGXu9iK7_NABFBhDo4m2RB8nDCqkeKcrD09FJ_mpyW8yklN_71CiNA91IrZ0OoWOmFV1wf5m_SkddJ78J13RfyVFzS')"}}></div>
          <div className="bg-cover bg-center w-full h-full relative z-10 border border-outline-variant" data-alt="Elegant documentary style photo of a joyous Baraat procession in a bright courtyard. A skilled Dhol player energetically leads the crowd. The scene is captured in high-key daylight, highlighting the vibrant colors of the traditional garments against warm cream architecture. Premium, energetic, and culturally rich atmosphere." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAkUSRxix16ZNAK2l28_IYWz82he_RJYl5BjQ-7P-Xm7yckun-woWGbrXcXf1Gg7MizcgHCUG97SpeZ_yHMBWibbQMTHDjgUnUGdZnifWhkGSejXVxBS8xtZxUV6nQ3lrXiLrp1jbAoJEige6uRCn6fsAWacc7AOoaF3IA60KpAGJXR90TTYxCJlk2Dml2EMoMSZbQ1Sc59JoQCRxES0REWf5oXDvb2892X5sFyXcyoBB2nsdAzK6dt')"}}></div>
        </div>
        <div className="order-1 md:order-2 flex flex-col gap-6 items-start">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">THE SOUND OF CELEBRATION</span>
          <h2 className="font-headline-xl text-headline-xl text-primary leading-tight">MAKE YOUR EVENT <span className="italic font-light">UNFORGETTABLE</span></h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">We bring the authentic energy of Punjab to the heart of Maharashtra. With years of experience performing at prestigious weddings and grand events, our team of expert dhol players and entertainers guarantee a celebration that resonates.</p>
          <Link className="font-cta text-cta text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors mt-4 flex items-center gap-2 group uppercase tracking-widest" href="/services">
            DISCOVER OUR STORY
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* 4. Services Grid */}
      <section className="w-full py-section-gap bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="font-label-caps text-label-caps text-primary mb-4 tracking-[0.15em] uppercase block">
                PREMIUM OFFERINGS
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase leading-tight">
                ENTERTAINMENT THAT SETS THE CELEBRATION IN MOTION
              </h2>
            </div>
            <Link className="btn-ghost group whitespace-nowrap hidden md:inline-flex" href="/services">
              VIEW ALL SERVICES <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <Link className="group relative aspect-[3/4] overflow-hidden champagne-border-1px block" href="/contact">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="Close up editorial portrait of a traditional Punjabi Dhol player. High contrast, dark cinematic lighting focusing on the intricate carvings of the wooden dhol drum and the performer's intense expression. Metallic gold accents on the attire shine against the obsidian background. Luxury minimalist style."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAXiUVGgzHNoi6eAvmCZy1xeZILC_zPOL72j4J4leUnyrvCGSyrsexewBAzP3yQ2u4s_-hQFNecnIUHoaeQD2ne-VglxY4r_k8z-b6QlyOlP78CcKeUZJRK1dQhhp7qYYfS_LVQ-2HD2hBc4VrvArWtYF-13n8q3MM1VsvduHY1K7B0eNyS8O0KNOOzaywMzFAi-LdVg0frV_Kpmqhocl-jnvwXfqriPmZC4OmCc5L83xwyDW0j1RR"
                alt="Punjabi Dhol"
              />
              <div className="absolute inset-0 card-scrim"></div>
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 transition-colors duration-300 z-10 m-2"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end">
                <h3 className="font-headline-lg text-[24px] text-[#FFFDF8] mb-2 font-display-lg tracking-wide group-hover:text-primary transition-colors">
                  Punjabi Dhol
                </h3>
                <p className="font-body-md text-body-md text-[#EFE9DD] mb-4 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  The heartbeat of traditional celebrations.
                </p>
                <div className="font-cta text-cta text-primary flex items-center uppercase tracking-widest text-[10px]">
                  ENQUIRE <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </Link>
            {/* Service Card 2 */}
            <Link className="group relative aspect-[3/4] overflow-hidden champagne-border-1px block" href="/contact">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="Dynamic shot of a Punjabi Bhangra dance group performing at a high-end luxury event. Men in vibrant, embroidered traditional attire caught mid-air in a coordinated jump. The background is dark and moody, punctuated by sharp, bright spotlights. Premium, energetic, cinematic look."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGIOKWxBZEeHoi0BEb9p60Xt4ynEab7SPK_nJHAUBpPChWLbDv2XemKvYFy5TztGg9O3h__GzMngxb6SsGwC0QWiBlHi2jphm0f3Bf_qD5GZR_ES6m0GQko0rK6--0y8ZSq-2C6XL9bu6P4jta-o8ywmHS9kPCA8aMCFXjeG_UT1HounMqyUcIaGY0spQsecPgs6ZbrJzihZQjGpIH0AuLG2eICYnAEVj_V-STqHRYc88nqwV8aaGT"
                alt="Bhangra Group"
              />
              <div className="absolute inset-0 card-scrim"></div>
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 transition-colors duration-300 z-10 m-2"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end">
                <h3 className="font-headline-lg text-[24px] text-[#FFFDF8] mb-2 font-display-lg tracking-wide group-hover:text-primary transition-colors">
                  Bhangra Group
                </h3>
                <p className="font-body-md text-body-md text-[#EFE9DD] mb-4 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  High-octane choreographed performances.
                </p>
                <div className="font-cta text-cta text-primary flex items-center uppercase tracking-widest text-[10px]">
                  ENQUIRE <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </Link>
            {/* Service Card 3 */}
            <Link className="group relative aspect-[3/4] overflow-hidden gold-border-1px block" href="/contact">
              {/* Premium Indicator */}
              <div className="absolute top-4 right-4 z-30 bg-primary text-background font-label-caps text-[10px] px-2 py-1 uppercase tracking-widest">
                Premium
              </div>
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="An elegant nighttime performance scene featuring a charismatic Punjabi singer alongside a Dhol player. Sophisticated concert lighting with golden hues illuminating smoke or mist. The subjects exude professionalism and cultural richness. Cinematic, high-contrast imagery fitting a luxury event brochure."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqFClQK269JyPSEIt2AuAC5M8_GsnXc1QLwh_fSWwLnPGmFmAjVmG9qXyzc7eHOdkVYTwpPISrfx49DJXzpbGwS5YjwiHjnpstf_Xk37slMFHLnFKw8ZT_yLrxHvKBcoeyByV_nubXsjO0GazUo9KlzNhApT2gyw-f1GyviMPH4w2PheXwWcKdMMUSMZmsUHrgTN6jnBMOqpVZuEQWRy1-6Wb0mMm1EjKGnn5PM_FNH3c6q5Ba7Orw"
                alt="Dhol & Singer"
              />
              <div className="absolute inset-0 card-scrim"></div>
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 transition-colors duration-300 z-10 m-2"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end">
                <h3 className="font-headline-lg text-[24px] text-[#FFFDF8] mb-2 font-display-lg tracking-wide group-hover:text-primary transition-colors">
                  Dhol & Singer
                </h3>
                <p className="font-body-md text-body-md text-[#EFE9DD] mb-4 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Live vocalists paired with percussion.
                </p>
                <div className="font-cta text-cta text-primary flex items-center uppercase tracking-widest text-[10px]">
                  ENQUIRE <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </Link>
            {/* Service Card 4 */}
            <Link className="group relative aspect-[3/4] overflow-hidden champagne-border-1px block" href="/contact">
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="Modern event scene with performers playing LED illuminated dhol drums. The drums glow vibrantly against a pitch-black background, creating striking geometric light trails. A fusion of modern technology and traditional culture. High-end, futuristic nightclub aesthetic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDmDRyebMKmYRgaXFomCS-okckYZlSo0N5bYJH_vpcTOQvEJCjfy79XJO3d4jppa21860VhtLIrbISLN7KN9OkGFclWnHGtJ9vLVFywECvh_bzgFvVdZgXjpOtw-uEOOOSVLrSILrJRX-RYJIgbDLW6MUwn__xJuJ5bcV3BHnFlbVhY_JXggub4N8cAwkG15pfgrkW-yTE2eSskhRpK6NVyeF-cUMWbwG6oyKNeF635_yH_mNyOTwH"
                alt="Punjabi LED Dhol"
              />
              <div className="absolute inset-0 card-scrim"></div>
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 transition-colors duration-300 z-10 m-2"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end">
                <h3 className="font-headline-lg text-[24px] text-[#FFFDF8] mb-2 font-display-lg tracking-wide group-hover:text-primary transition-colors">
                  Punjabi LED Dhol
                </h3>
                <p className="font-body-md text-body-md text-[#EFE9DD] mb-4 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Modern visual spectacle for night events.
                </p>
                <div className="font-cta text-cta text-primary flex items-center uppercase tracking-widest text-[10px]">
                  ENQUIRE <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="mt-8 flex justify-center md:hidden">
            <Link className="btn-ghost group" href="/services">
              VIEW ALL SERVICES <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="w-full relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center w-full h-full transform scale-105 motion-safe:animate-[pulse_10s_ease-in-out_infinite_alternate]"
          data-alt="A wide, sweeping cinematic shot of a massive, euphoric crowd dancing at an ultra-luxury wedding Sangeet. The atmosphere is electric, bathed in warm golden and deep obsidian tones. Confetti falling, lights flashing. The visual conveys ultimate celebration and high-end exclusivity."
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBj_svPXxq5wQ6UtHGValDN1fx45FjTUni9I0QaZafL0C4sO3XJVTB5lUPM4frQrnMWZ5wKHVsj3hEKS60v6EPdyD63Ec4lok7WksX-UTJKLkmr1MOIs4W2KdCdNsnOLU8cpfiwWBhYzVQqbue-_IKNC3UOKEkpA4rUwZuQ95DIqQyKY2ZxSN7OgBKhsxWGuRu8fIuqZAzqbv4TC6a46AH6w7wj72YxN1YRV15B7p1S-QweidG3PqjG')",
          }}
        ></div>
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="relative z-10 w-full max-w-4xl mx-auto px-margin-mobile text-center">
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-[#FFFDF8] mb-10 leading-tight">
            YOUR CELEBRATION DESERVES A <span className="text-primary italic">BIGGER BEAT.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link className="btn-primary w-full sm:w-auto" href="/contact">
              BOOK YOUR EVENT
            </Link>
            <a
              className="btn-secondary w-full sm:w-auto group !border-[#FFFDF8] !text-[#FFFDF8] hover:!bg-[#FFFDF8] hover:!text-[#171513]"
              href="https://wa.me/917206110529"
            >
              <span className="material-symbols-outlined mr-2 group-hover:text-background transition-colors">
                chat
              </span>
              WHATSAPP US
            </a>
          </div>
        </div>
      </section>
      </main>
      <Footer variant="home" />
    </>
  );
}

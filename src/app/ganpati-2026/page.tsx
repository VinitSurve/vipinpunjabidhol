import Link from "next/link";
import { Metadata } from "next";
import BrandLogo from "@/components/ui/BrandLogo";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Ganpati 2026 - VIPIN PUNJABI DHOL",
};

export default function GanpatiPage() {
  return (
    <>
      {/* Campaign Hero */}
      <header className="relative min-h-screen flex items-center justify-center pt-24 px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="bg-cover bg-center w-full h-full opacity-40"
            data-alt="A grand, cinematic scene of a vibrant Ganpati festival in Mumbai, illuminated by warm, golden street lights and firecrackers. A group of highly energetic Punjabi Dhol players in traditional gold and black premium attire are performing passionately in the foreground. High contrast, luxury editorial style, deep obsidian shadows with radiant metallic gold highlights."
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDaiYNtXRC0m_RjF7p5pPBfcxVBf5fNCtjXZyCyoyTP__0KoBl4lsil6FJ7FGErdYgZYwz_7DwWBlIhvUuPeVtOtzt_-vrnpasVzGJ24rWfqACBQKEZEXtL6Uqmn3pncj1VTzV3FsvFQr1286eNFZ4Fe1ZP_9qE5S_ZhmyoDiA6WerH67-9rX-63LoHM0I6-NDYXSZ5TJjRFmQhBBzwId95obmDt7KXdLBrHIuR2Te-PANqMlCSMGn1')",
            }}
          ></div>

        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          <BrandLogo variant="hero" className="mb-8 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
            GANPATI 2026<br />
            <span className="text-on-surface">BRING THE BEAT</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl">
            Elevate your Ganpati celebrations with the most powerful, high-energy Punjabi Dhol performances in Mumbai. A premium cultural experience.
          </p>
          <button className="font-cta text-cta bg-primary-container text-on-primary-container px-8 py-4 hover:bg-secondary-fixed transition-colors shadow-[0_0_20px_rgba(212,175,55,0.15)] uppercase">
            Secure Your Date
          </button>
        </div>
      </header>

      {/* Service Highlight */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop texture-bg relative">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-xl text-headline-xl text-primary mb-4">
              Premium Services
            </h2>
            <div className="w-24 h-1 bg-primary/20 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Service 1 */}
            <div className="relative aspect-[3/4] group overflow-hidden border border-primary-container/30 bg-surface-container-low hover:border-primary-container transition-colors duration-500">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60"
                data-alt="A close-up, high-end editorial shot of a beautifully carved traditional Punjabi Dhol instrument. The wood has intricate details, and the tension cords are tight. Warm, spotlight illumination against a pitch-black background, highlighting the metallic gold accents and textured wood grain. Minimalist luxury aesthetic."
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNIcGOp7VLC_A-XR5-rfleuIfVvF9ZJ55fcJn91emwOOBV1AoHMf4eAzMYJRlGcnn9yDH7wU-5ewIPEvD6M5Vda0Mx1eMesvfVQ4K3u9G-rPOHhroBwoFiRyM6dT9N3vMKGDwz9KQ2M5hLK12gxjnFmpx1hnErVo2eSzE5cDnLmUU4gNmmPRH7bVyVzLXUs3fh_4Ah2alKyveXfrfYYnt7ips9wnkkmE-BFdCrf4PbnKKNIPWVhilh')",
                }}
              ></div>

              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="font-headline-lg text-headline-lg text-primary mb-2">
                  Punjabi Dhol
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                  Authentic, heart-pounding traditional rhythms.
                </p>
              </div>
            </div>
            {/* Service 2 */}
            <div className="relative aspect-[3/4] group overflow-hidden border border-outline/20 bg-surface-container-low hover:border-primary-container transition-colors duration-500">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60"
                data-alt="A dynamic, long-exposure photograph of LED Dhols being played at night. Bright, luminous streaks of gold and warm white light trace the drummers' energetic movements against a deep, dark obsidian background. High-contrast cinematic style, feeling modern and electrifying."
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVdXprMto7zG6aCirDgfvgTWExoiPP-NBCt_HWqGY4J033QZdTPYeL3owLeiHffxvxWQ8so_mtclF5Bn7dsgc76MYL4BE7UNPAgoxF0aU8BfN7g3pZK0DnEbSNYtE983VXJ29NVziPW2oHfldKjp2-OOvyEKZw9s9HriQIlagGJHcwj8SfPIkI3Wf3IjCJ4bFN_ysh0uKcqi9VXjQ_1gyqIbo1z5HEV9cVkkrooiADeQ2VIqhzToTu')",
                }}
              ></div>

              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="font-headline-lg text-headline-lg text-primary mb-2">
                  LED Dhol
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                  A visual spectacle for high-end night processions.
                </p>
              </div>
            </div>
            {/* Service 3 */}
            <div className="relative aspect-[3/4] group overflow-hidden border border-outline/20 bg-surface-container-low hover:border-primary-container transition-colors duration-500">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60"
                data-alt="A highly stylized, slow-motion capture of a Bhangra dancer mid-air, wearing exquisite, premium traditional attire with subtle gold embroidery. The lighting is dramatic, casting deep shadows that emphasize the movement and cultural richness. The overall tone is luxurious and powerful, set against a dark studio background."
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAsMsju0LUex1e9nzHIh7FjddKGpRLMVWVEQ40Z0u1qbSc22ago_euNrCwmhMou8syV5iLXhrYSLJnwzqq9poFvnbD605S6ztMxWnHsr8x9R1-dJMAGOHNI8C7TFuzT2p6_VL1tYjlLcAg1zFuISPAmMBufUncQdeu8_V6G0_dM6CuCFyFCcE2vTXGp7cjAGyqXNqWCcQVCn9ZHvdQcsqYAOy0j8tcCFXVQkqkLxeR4Qua1mBV-JxSy')",
                }}
              ></div>

              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="font-headline-lg text-headline-lg text-primary mb-2">
                  Bhangra
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                  Professional dancers bringing the ultimate energy.
                </p>
              </div>
            </div>
            {/* Service 4 */}
            <div className="relative aspect-[3/4] group overflow-hidden border border-outline/20 bg-surface-container-low hover:border-primary-container transition-colors duration-500">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60"
                data-alt="A sleek, modern DJ setup integrated seamlessly with traditional acoustic Dhol drums. The scene is lit with sophisticated club lighting in warm gold tones, creating a luxury fusion atmosphere. The image captures the modern, high-energy vibe of a contemporary premium event."
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqJoH_qCDtS_HrQuSJG1zPYYzcbj_pzU6ST-58HoZjUPsrcWjvSfVZD9pyAYL0OnejQXCwMVVTIy8LjN7ivYLnNpGIjLvwM6sp7AgeThzyCkB2IMmxZ2HQKJoMUeymY-Kpto4m2qX6byGl_naTvoDpnIV4EC2CLB9qbzkdkyY_UvvzCGIAzzDMDQOAhp__bu1YdO8Qnem6lOtbdYj1hbBUhgMvXRPSrHtyQ4NrLfOa7WgUFikr0fQq')",
                }}
              ></div>

              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="font-headline-lg text-headline-lg text-primary mb-2">
                  DJ Mix Dhol
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                  The perfect fusion of electronic beats and live percussion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Energy Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square border border-primary-container/20 p-4">
              <div
                className="w-full h-full bg-cover bg-center filter grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
                data-alt="A massive, beautifully adorned Ganpati idol during a lavish Mumbai street procession. In the immediate foreground, out of focus, is the powerful silhouette of a Dhol player raising his sticks. The scene is bathed in an ethereal, golden, dusty light, conveying a sense of divine energy and grand scale, shot in a high-contrast cinematic style."
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsDaf-1qosYARK1ZtgQnThdxqOoAKbJBn7NDPsvujfS00rIecIfn5XSg-ZNygD1sJppOu443OyuivOKQrHKBYg17vsFV-hVQsRpSGxRbsdzr_fOmbFqfnSORJ4Tvh5j1TuIpJ8DSQsY51da4mQhYywPXr89C4yaxH9ypE2JKR_q-h8BaWgWIuhco1Sz7A9CBcegoSfdI2ToZvWSRSWj4HWAb7IxXLfE6OqI7t8SiNsc5M11BR3Gm82')",
                }}
              ></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-container flex items-center justify-center rounded-full z-10 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                <span className="font-display-lg text-headline-lg text-on-primary-container text-center leading-tight">
                  10+<br />
                  <span className="text-xs font-label-caps">Years</span>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <h2 className="font-display-lg-mobile md:font-display-lg text-headline-xl md:text-display-lg-mobile text-on-surface mb-6 leading-tight">
              Make your Ganpati unforgettable with the ultimate Punjabi celebration energy.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              We don't just play music; we curate an atmosphere of unmatched excitement and luxury. Our highly trained professionals ensure your procession stands out with rhythmic precision and visual grandeur.
            </p>
            <div className="flex items-center gap-4">
              <span
                className="material-symbols-outlined text-primary text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span className="font-label-caps text-label-caps text-on-surface">
                Trusted by Premium Mumbai Event Planners
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Strong Booking Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop relative">
        <div className="absolute inset-0 texture-bg opacity-50 z-0"></div>
        <div className="max-w-3xl mx-auto relative z-10 bg-surface-container-low border border-primary-container/30 p-8 md:p-16 text-center">
          <h2 className="font-display-lg-mobile md:font-display-lg text-headline-xl text-primary mb-4">
            CHECK YOUR DATE
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-12">
            Ganpati 2026 slots are filling fast for premium dates. Secure the best Dhol team in Mumbai today.
          </p>
          <form className="space-y-8 text-left max-w-md mx-auto">
            <div>
              <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2">
                Event Date
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline text-on-surface py-2 focus:ring-0 focus:border-primary-container transition-colors font-body-md text-body-md"
                type="date"
              />
            </div>
            <div>
              <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2">
                Location
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline text-on-surface py-2 focus:ring-0 focus:border-primary-container transition-colors font-body-md text-body-md"
                placeholder="e.g., Kharghar, Navi Mumbai"
                type="text"
              />
            </div>
            <div className="pt-6">
              <button
                className="w-full font-cta text-cta bg-primary-container text-on-primary-container py-4 uppercase hover:bg-secondary-fixed transition-colors shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                type="button"
              >
                Inquire Availability
              </button>
            </div>
            <div className="flex justify-center gap-6 mt-8">
              <a className="flex flex-col items-center gap-2 group" href="tel:7206110529">
                <span
                  className="material-symbols-outlined text-outline group-hover:text-primary transition-colors"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  call
                </span>
                <span className="font-label-caps text-label-caps text-on-surface-variant group-hover:text-primary transition-colors text-[10px]">
                  Call
                </span>
              </a>
              <a className="flex flex-col items-center gap-2 group" href="https://wa.me/917206110529">
                <span
                  className="material-symbols-outlined text-outline group-hover:text-primary transition-colors"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  chat
                </span>
                <span className="font-label-caps text-label-caps text-on-surface-variant group-hover:text-primary transition-colors text-[10px]">
                  WhatsApp
                </span>
              </a>
            </div>
          </form>
        </div>
      </section>
      <Footer variant="simple" />
    </>
  );
}

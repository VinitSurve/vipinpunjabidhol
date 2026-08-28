"use client";

import Footer from "@/components/layout/Footer";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import InstagramIcon from "@/components/ui/InstagramIcon";

export default function ContactPage() {
  return (
    <>
      <div className="fixed inset-0 pattern-overlay z-0"></div>
      <main className="relative z-10 pt-[120px] pb-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <section className="text-center mb-section-gap relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent blur-3xl -z-10 rounded-full w-[80%] mx-auto aspect-square"></div>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-unit">
            LET'S PLAN YOUR <span className="text-primary italic font-serif">CELEBRATION</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Secure the ultimate Punjabi dhol experience for your premium event in Mumbai and surrounding areas.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <div className="lg:col-span-4 flex flex-col gap-gutter">
            <div className="bg-surface-container p-8 border border-outline/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-primary !text-6xl">
                  call
                </span>
              </div>
              <h3 className="font-label-caps text-label-caps text-primary mb-4 tracking-widest">
                DIRECT LINE
              </h3>
              <p className="font-headline-lg text-headline-lg text-on-surface mb-2">
                7206110529
              </p>
              <a
                className="inline-block mt-4 font-cta text-cta bg-primary-container text-on-primary-container px-6 py-3 border border-primary-container hover:bg-transparent hover:text-primary-container transition-all duration-300 w-full text-center"
                href="tel:7206110529"
              >
                CALL NOW
              </a>
            </div>

            <div className="bg-surface-container p-8 border border-outline/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-primary !text-6xl">
                  chat
                </span>
              </div>
              <h3 className="font-label-caps text-label-caps text-primary mb-4 tracking-widest">
                WHATSAPP
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface mb-2">
                Instant replies for bookings.
              </p>
              <a
                className="mt-4 font-cta text-cta bg-transparent text-primary border border-primary px-6 py-3 hover:bg-primary/10 transition-all duration-300 w-full flex flex-nowrap items-center justify-center gap-2 whitespace-nowrap"
                href="https://wa.me/917206110529"
              >
                <WhatsAppIcon className="w-6 h-6" /> WHATSAPP US
              </a>
            </div>

            <div className="bg-surface-container p-8 border border-outline/20">
              <h3 className="font-label-caps text-label-caps text-primary mb-4 tracking-widest">
                LOCATION & SOCIAL
              </h3>
              <div className="flex items-start gap-4 mb-6">
                <span className="material-symbols-outlined text-primary mt-1">
                  location_on
                </span>
                <div>
                  <p className="font-body-md text-body-md text-on-surface">
                    Kharghar, Navi Mumbai
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">
                    Serving Mumbai, Navi Mumbai, Kharghar and surrounding areas.
                  </p>
                </div>
              </div>
              <a href="https://www.instagram.com/vipin_dhol_events_?igsi=aTJrdWIxYnBxcW05" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <InstagramIcon className="w-6 h-6" />
                <p className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">
                  @vipin_dhol_events_
                </p>
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 bg-surface border border-secondary/15 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.08)] ring-1 ring-inset ring-white/50 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-8">
              Booking Request
            </h2>
            <form className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-[10px] tracking-[0.15em] uppercase text-on-surface-variant" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full bg-transparent border-0 border-b border-secondary/20 py-2 px-0 text-on-surface font-body-md focus:outline-none focus:ring-0 focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-[10px] tracking-[0.15em] uppercase text-on-surface-variant" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    className="w-full bg-transparent border-0 border-b border-secondary/20 py-2 px-0 text-on-surface font-body-md focus:outline-none focus:ring-0 focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="flex flex-col gap-2 relative">
                  <label className="font-label-caps text-[10px] tracking-[0.15em] uppercase text-on-surface-variant" htmlFor="event_type">
                    Event Type
                  </label>
                  <select
                    id="event_type"
                    defaultValue=""
                    className="w-full bg-transparent border-0 border-b border-secondary/20 py-2 px-0 text-on-surface font-body-md focus:outline-none focus:ring-0 focus:border-primary transition-colors appearance-none cursor-pointer"
                  >
                    <option className="bg-surface text-on-surface-variant" disabled value="">
                      Select Event Type
                    </option>
                    <option className="bg-surface" value="wedding">
                      Wedding / Baraat
                    </option>
                    <option className="bg-surface" value="corporate">
                      Corporate Event
                    </option>
                    <option className="bg-surface" value="festival">
                      Festival / Cultural Event
                    </option>
                    <option className="bg-surface" value="other">
                      Other
                    </option>
                  </select>
                  <span className="material-symbols-outlined absolute right-0 bottom-2 text-on-surface-variant pointer-events-none">
                    arrow_drop_down
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-[10px] tracking-[0.15em] uppercase text-on-surface-variant" htmlFor="date">
                    Event Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    required
                    className="w-full bg-transparent border-0 border-b border-secondary/20 py-2 px-0 text-on-surface font-body-md focus:outline-none focus:ring-0 focus:border-primary transition-colors cursor-pointer [color-scheme:dark]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-[10px] tracking-[0.15em] uppercase text-on-surface-variant" htmlFor="location">
                    Event Location / Venue
                  </label>
                  <input
                    id="location"
                    type="text"
                    required
                    placeholder="City or Venue"
                    className="w-full bg-transparent border-0 border-b border-secondary/20 py-2 px-0 text-on-surface font-body-md focus:outline-none focus:ring-0 focus:border-primary transition-colors placeholder:text-on-surface-variant/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-[10px] tracking-[0.15em] uppercase text-on-surface-variant" htmlFor="guests">
                    Estimated Guests
                  </label>
                  <input
                    id="guests"
                    type="number"
                    required
                    placeholder="Number of guests"
                    className="w-full bg-transparent border-0 border-b border-secondary/20 py-2 px-0 text-on-surface font-body-md focus:outline-none focus:ring-0 focus:border-primary transition-colors placeholder:text-on-surface-variant/30"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-[10px] tracking-[0.15em] uppercase text-on-surface-variant" htmlFor="requirements">
                  Special Requirements & Details
                </label>
                <textarea
                  id="requirements"
                  required
                  rows={3}
                  placeholder="Tell us about your event..."
                  className="w-full bg-transparent border-0 border-b border-secondary/20 py-2 px-0 text-on-surface font-body-md focus:outline-none focus:ring-0 focus:border-primary transition-colors resize-none placeholder:text-on-surface-variant/30"
                ></textarea>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  className="font-cta text-cta bg-[#171513] text-[#FFFDF8] hover:bg-[#B58A3A] transition-colors px-12 py-4 relative group inline-flex items-center gap-3 uppercase tracking-widest"
                  type="submit"
                >
                  <span className="relative z-10">SUBMIT REQUEST</span>
                  <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

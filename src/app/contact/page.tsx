"use client";

import Footer from "@/components/layout/Footer";

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
                className="inline-block mt-4 font-cta text-cta bg-transparent text-primary border border-primary px-6 py-3 hover:bg-primary/10 transition-all duration-300 w-full text-center flex items-center justify-center gap-2"
                href="https://wa.me/917206110529"
              >
                <span className="material-symbols-outlined">chat</span> WHATSAPP US
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
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">
                  alternate_email
                </span>
                <p className="font-body-md text-body-md text-on-surface">
                  @vipinpuhal
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-surface-container-low p-margin-mobile md:p-12 border border-primary/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-8">
              Booking Request
            </h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div className="relative">
                  <input
                    className="block w-full bg-transparent border-0 border-b border-outline text-on-surface focus:ring-0 focus:border-primary peer pt-4 pb-2 font-body-md placeholder-transparent transition-colors"
                    id="name"
                    placeholder="Name"
                    type="text"
                    required
                  />
                  <label
                    className="absolute left-0 top-0 text-sm font-label-caps text-on-surface-variant peer-focus:text-primary peer-focus:-top-4 peer-focus:text-xs peer-valid:-top-4 peer-valid:text-xs transition-all pointer-events-none tracking-widest"
                    htmlFor="name"
                  >
                    FULL NAME
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="block w-full bg-transparent border-0 border-b border-outline text-on-surface focus:ring-0 focus:border-primary peer pt-4 pb-2 font-body-md placeholder-transparent transition-colors"
                    id="phone"
                    placeholder="Phone"
                    type="tel"
                    required
                  />
                  <label
                    className="absolute left-0 top-0 text-sm font-label-caps text-on-surface-variant peer-focus:text-primary peer-focus:-top-4 peer-focus:text-xs peer-valid:-top-4 peer-valid:text-xs transition-all pointer-events-none tracking-widest"
                    htmlFor="phone"
                  >
                    PHONE NUMBER
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div className="relative">
                  <select
                    className="block w-full bg-transparent border-0 border-b border-outline text-on-surface focus:ring-0 focus:border-primary peer pt-4 pb-2 font-body-md transition-colors appearance-none cursor-pointer"
                    id="event_type"
                    defaultValue=""
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
                  <label
                    className="absolute left-0 -top-4 text-xs font-label-caps text-on-surface-variant tracking-widest pointer-events-none"
                    htmlFor="event_type"
                  >
                    EVENT TYPE
                  </label>
                  <span className="material-symbols-outlined absolute right-0 top-4 text-on-surface-variant pointer-events-none">
                    arrow_drop_down
                  </span>
                </div>
                <div className="relative">
                  <input
                    className="block w-full bg-transparent border-0 border-b border-outline text-on-surface focus:ring-0 focus:border-primary peer pt-4 pb-2 font-body-md transition-colors [color-scheme:dark]"
                    id="date"
                    type="date"
                    required
                  />
                  <label
                    className="absolute left-0 -top-4 text-xs font-label-caps text-on-surface-variant tracking-widest pointer-events-none"
                    htmlFor="date"
                  >
                    EVENT DATE
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div className="relative">
                  <input
                    className="block w-full bg-transparent border-0 border-b border-outline text-on-surface focus:ring-0 focus:border-primary peer pt-4 pb-2 font-body-md placeholder-transparent transition-colors"
                    id="location"
                    placeholder="Location"
                    type="text"
                    required
                  />
                  <label
                    className="absolute left-0 top-0 text-sm font-label-caps text-on-surface-variant peer-focus:text-primary peer-focus:-top-4 peer-focus:text-xs peer-valid:-top-4 peer-valid:text-xs transition-all pointer-events-none tracking-widest"
                    htmlFor="location"
                  >
                    EVENT LOCATION / VENUE
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="block w-full bg-transparent border-0 border-b border-outline text-on-surface focus:ring-0 focus:border-primary peer pt-4 pb-2 font-body-md placeholder-transparent transition-colors"
                    id="guests"
                    placeholder="Guests"
                    type="number"
                    required
                  />
                  <label
                    className="absolute left-0 top-0 text-sm font-label-caps text-on-surface-variant peer-focus:text-primary peer-focus:-top-4 peer-focus:text-xs peer-valid:-top-4 peer-valid:text-xs transition-all pointer-events-none tracking-widest"
                    htmlFor="guests"
                  >
                    ESTIMATED GUESTS
                  </label>
                </div>
              </div>

              <div className="relative">
                <textarea
                  className="block w-full bg-transparent border-0 border-b border-outline text-on-surface focus:ring-0 focus:border-primary peer pt-4 pb-2 font-body-md placeholder-transparent transition-colors resize-none"
                  id="requirements"
                  placeholder="Requirements"
                  rows={3}
                  required
                ></textarea>
                <label
                  className="absolute left-0 top-0 text-sm font-label-caps text-on-surface-variant peer-focus:text-primary peer-focus:-top-4 peer-focus:text-xs peer-valid:-top-4 peer-valid:text-xs transition-all pointer-events-none tracking-widest"
                  htmlFor="requirements"
                >
                  SPECIAL REQUIREMENTS & DETAILS
                </label>
              </div>

              <div className="pt-4 text-right">
                <button
                  className="font-cta text-cta bg-primary-container text-on-primary-container px-12 py-4 border border-primary-container hover:bg-transparent hover:text-primary-container transition-all duration-300 relative overflow-hidden group inline-flex items-center gap-3"
                  type="submit"
                >
                  <span className="relative z-10">SUBMIT REQUEST</span>
                  <span className="material-symbols-outlined relative z-10 text-xl">
                    arrow_forward
                  </span>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer variant="simple" />
    </>
  );
}

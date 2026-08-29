"use client";

import React, { useState } from "react";
import Footer from "@/components/layout/Footer";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import InstagramIcon from "@/components/ui/InstagramIcon";
import TelephoneIcon from "@/components/ui/TelephoneIcon";
import LocationIcon from "@/components/ui/LocationIcon";
import CustomSelect from "@/components/ui/CustomSelect";

export default function ContactPage() {
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    date: "",
    type: "",
    location: "",
    guests: "",
    experience: "",
    details: "",
  });

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting General Enquiry:", enquiryForm);
    alert("Enquiry form submitted. We will connect this to Google Sheets shortly.");
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting Booking Request:", bookingForm);
    alert("Booking request submitted. We will connect this to Google Sheets shortly.");
  };

  return (
    <>
      <div className="fixed inset-0 pattern-overlay opacity-20 z-0 pointer-events-none"></div>
      
      <main className="relative z-10 pt-[120px] md:pt-[140px] pb-32 w-full max-w-[1300px] mx-auto px-6 md:px-8">
        
        {/* Hero Section */}
        <section className="text-center mb-[70px] relative">
          <h1 className="font-serif text-[42px] md:text-[56px] lg:text-[72px] text-on-background mb-4 leading-none tracking-tight">
            LET'S PLAN YOUR <span className="text-primary italic font-serif">CELEBRATION.</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-on-surface-variant max-w-3xl mx-auto font-light leading-relaxed">
            Whether you have a question or you're ready to request a date,<br className="hidden md:block" />
            tell us what you're looking for and we'll get back to you.
          </p>
        </section>

        {/* 3-Column Layout: Contact Info (260px) | Enquiry (390px) | Booking (500px) */}
        {/* Using items-start to allow natural height for each card */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(300px,390px)_minmax(350px,500px)] xl:grid-cols-[260px_390px_500px] gap-8 lg:gap-10 xl:gap-10 justify-center items-start">
          
          {/* LEFT COLUMN: Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-surface-container p-7 lg:p-8 border border-outline/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <TelephoneIcon className="w-16 h-16" />
              </div>
              <h3 className="text-[11px] font-bold text-primary mb-4 tracking-[0.2em] uppercase">
                DIRECT LINE
              </h3>
              <p className="font-serif text-[26px] text-on-surface mb-2">
                7206110529
              </p>
              <a
                className="inline-block mt-4 text-[12px] font-bold bg-[#B58A3A] text-white px-6 py-4 hover:bg-[#8F6A27] transition-all duration-300 w-full text-center tracking-[0.15em] uppercase"
                href="tel:7206110529"
              >
                CALL NOW
              </a>
            </div>

            <div className="bg-surface-container p-7 lg:p-8 border border-outline/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-30 group-hover:opacity-60 transition-opacity">
                <span className="material-symbols-outlined text-primary !text-6xl">
                  chat
                </span>
              </div>
              <h3 className="text-[11px] font-bold text-primary mb-4 tracking-[0.2em] uppercase">
                WHATSAPP
              </h3>
              <p className="text-[14px] text-on-surface mb-2 leading-relaxed">
                Instant replies for bookings<br/>and enquiries.
              </p>
              <a
                className="mt-4 text-[12px] font-bold bg-transparent text-[#B58A3A] border border-[#B58A3A] px-4 py-4 hover:bg-[#B58A3A]/10 transition-all duration-300 w-full flex flex-nowrap items-center justify-center gap-2 whitespace-nowrap tracking-[0.15em] uppercase"
                href="https://wa.me/917206110529"
              >
                <WhatsAppIcon className="w-5 h-5" /> WHATSAPP US
              </a>
            </div>

            <div className="bg-surface-container p-7 lg:p-8 border border-outline/20">
              <h3 className="text-[11px] font-bold text-primary mb-4 tracking-[0.2em] uppercase">
                LOCATION & SOCIAL
              </h3>
              <div className="flex items-start gap-4 mb-6">
                <LocationIcon className="w-5 h-5 mt-1" />
                <div>
                  <p className="text-[14px] font-medium text-on-surface">
                    Kharghar, Navi Mumbai
                  </p>
                  <p className="text-[13px] text-on-surface-variant mt-2 leading-relaxed">
                    Serving Mumbai, Navi Mumbai, Kharghar and surrounding areas.
                  </p>
                </div>
              </div>
              <a href="https://www.instagram.com/vipin_dhol_events_?igsi=aTJrdWIxYnBxcW05" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <InstagramIcon className="w-5 h-5" />
                <p className="text-[14px] font-medium text-on-surface group-hover:text-primary transition-colors">
                  @vipin_dhol_events_
                </p>
              </a>
            </div>
          </div>

          {/* MIDDLE COLUMN: General Enquiry */}
          <div className="bg-surface border border-secondary/15 p-8 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)] relative flex flex-col">
            <div className="mb-10">
              <h3 className="text-[11px] font-bold text-primary tracking-[0.2em] uppercase mb-4">GENERAL ENQUIRY</h3>
              <h2 className="font-serif text-[32px] md:text-[34px] text-on-surface mb-3 leading-tight">Have a Question?</h2>
              <p className="text-[14px] text-on-surface-variant leading-relaxed">
                Looking for information, exploring our services, or simply want to talk? Send us a message and we'll get back to you.
              </p>
            </div>

            <form onSubmit={handleEnquirySubmit} className="flex flex-col gap-8">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-on-surface-variant">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={enquiryForm.name}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-secondary/20 py-2 px-0 text-on-surface text-[14px] focus:outline-none focus:ring-0 focus:border-primary transition-colors placeholder:text-on-surface-variant/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-on-surface-variant">WhatsApp / Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="Your WhatsApp number"
                    value={enquiryForm.phone}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-secondary/20 py-2 px-0 text-on-surface text-[14px] focus:outline-none focus:ring-0 focus:border-primary transition-colors placeholder:text-on-surface-variant/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-on-surface-variant">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={enquiryForm.email}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-secondary/20 py-2 px-0 text-on-surface text-[14px] focus:outline-none focus:ring-0 focus:border-primary transition-colors placeholder:text-on-surface-variant/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-on-surface-variant">Subject</label>
                  <CustomSelect
                    options={[
                      { value: "general", label: "General Information" },
                      { value: "services", label: "Services & Pricing" },
                      { value: "other", label: "Other" },
                    ]}
                    value={enquiryForm.subject}
                    onChange={(val) => setEnquiryForm({ ...enquiryForm, subject: val })}
                    placeholder="Select a subject"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-2">
                <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-on-surface-variant">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we help?"
                  value={enquiryForm.message}
                  onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                  className="w-full bg-transparent border-0 border-b border-secondary/20 py-2 px-0 text-on-surface text-[14px] focus:outline-none focus:ring-0 focus:border-primary transition-colors resize-none placeholder:text-on-surface-variant/30"
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#171513] text-[#FFFDF8] hover:bg-[#B58A3A] transition-colors py-4 text-[12px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-3 group mb-4"
                >
                  SEND ENQUIRY
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <div className="flex items-center justify-center gap-2 text-on-surface-variant/70">
                  <span className="material-symbols-outlined text-[14px]">shield_person</span>
                  <span className="text-[12px] font-medium">We'll get back to you as soon as possible.</span>
                </div>
              </div>
            </form>
          </div>

          {/* RIGHT COLUMN: Booking Request */}
          <div className="bg-surface border border-secondary/15 p-8 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)] relative flex flex-col">
            <div className="mb-10">
              <h3 className="text-[11px] font-bold text-primary tracking-[0.2em] uppercase mb-4">BOOKING REQUEST</h3>
              <h2 className="font-serif text-[32px] md:text-[34px] text-on-surface mb-3 leading-tight">Request Your Date</h2>
              <p className="text-[14px] text-on-surface-variant leading-relaxed">
                Ready to plan your event? Share your details and preferred experience. We'll check availability and contact you personally.
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="flex flex-col gap-8">
              
              {/* SECTION: YOUR DETAILS */}
              <div className="border-b border-secondary/20 pb-2 mb-1">
                <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">YOUR DETAILS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-on-surface-variant">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-secondary/20 py-2 px-0 text-on-surface text-[14px] focus:outline-none focus:ring-0 focus:border-primary transition-colors placeholder:text-on-surface-variant/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-on-surface-variant">WhatsApp / Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="Your WhatsApp number"
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-secondary/20 py-2 px-0 text-on-surface text-[14px] focus:outline-none focus:ring-0 focus:border-primary transition-colors placeholder:text-on-surface-variant/30"
                  />
                </div>
              </div>

              {/* SECTION: YOUR EVENT */}
              <div className="border-b border-secondary/20 pb-2 mt-2 mb-1">
                <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">YOUR EVENT</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-on-surface-variant">Event Date</label>
                  <input
                    type="date"
                    required
                    value={bookingForm.date}
                    onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-secondary/20 py-2 px-0 text-on-surface text-[14px] focus:outline-none focus:ring-0 focus:border-primary transition-colors cursor-pointer [color-scheme:light]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-on-surface-variant">Event Type</label>
                  <CustomSelect
                    options={[
                      { value: "wedding", label: "Wedding / Baraat" },
                      { value: "corporate", label: "Corporate Event" },
                      { value: "festival", label: "Festival" },
                      { value: "other", label: "Other" },
                    ]}
                    value={bookingForm.type}
                    onChange={(val) => setBookingForm({ ...bookingForm, type: val })}
                    placeholder="Select event type"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-on-surface-variant">Event Location / Venue</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter location or venue"
                    value={bookingForm.location}
                    onChange={(e) => setBookingForm({ ...bookingForm, location: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-secondary/20 py-2 px-0 text-on-surface text-[14px] focus:outline-none focus:ring-0 focus:border-primary transition-colors placeholder:text-on-surface-variant/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-on-surface-variant">Estimated Guests</label>
                  <input
                    type="text"
                    required
                    placeholder="Number of guests"
                    value={bookingForm.guests}
                    onChange={(e) => setBookingForm({ ...bookingForm, guests: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-secondary/20 py-2 px-0 text-on-surface text-[14px] focus:outline-none focus:ring-0 focus:border-primary transition-colors placeholder:text-on-surface-variant/30"
                  />
                </div>
              </div>

              {/* SECTION: YOUR EXPERIENCE */}
              <div className="border-b border-secondary/20 pb-2 mt-2 mb-1">
                <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">YOUR EXPERIENCE</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: "auth_dhol", label: "Authentic Punjabi Dhol", icon: "music_note" },
                  { id: "led_dhol", label: "LED Dhol", icon: "lightbulb" },
                  { id: "bhangra", label: "Bhangra Troupe", icon: "groups" },
                  { id: "dj_dhol", label: "DJ Mix Dhol Fusion", icon: "headphones" },
                ].map((exp) => (
                  <label
                    key={exp.id}
                    className={`relative flex items-center gap-3 p-4 border cursor-pointer transition-all duration-200 group ${
                      bookingForm.experience === exp.id
                        ? "border-primary bg-primary/5"
                        : "border-secondary/20 bg-transparent hover:border-primary/40"
                    }`}
                  >
                    <input
                      type="radio"
                      name="experience"
                      value={exp.id}
                      checked={bookingForm.experience === exp.id}
                      onChange={(e) => setBookingForm({ ...bookingForm, experience: e.target.value })}
                      className="hidden"
                    />
                    <span className={`material-symbols-outlined text-[20px] ${bookingForm.experience === exp.id ? "text-primary" : "text-on-surface-variant group-hover:text-primary"}`}>
                      {exp.icon}
                    </span>
                    <span className={`text-[13px] font-medium ${bookingForm.experience === exp.id ? "text-primary" : "text-on-surface"}`}>
                      {exp.label}
                    </span>
                    {bookingForm.experience === exp.id && (
                      <span className="material-symbols-outlined text-primary absolute right-3 text-[18px]">
                        check
                      </span>
                    )}
                  </label>
                ))}
              </div>

              {/* SECTION: ADDITIONAL DETAILS */}
              <div className="border-b border-secondary/20 pb-2 mt-2 mb-1">
                <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">ADDITIONAL DETAILS</span>
              </div>

              <div className="flex flex-col gap-2">
                <textarea
                  rows={3}
                  placeholder="Share any special requirements, timings, or other details"
                  value={bookingForm.details}
                  onChange={(e) => setBookingForm({ ...bookingForm, details: e.target.value })}
                  className="w-full bg-transparent border-0 border-b border-secondary/20 py-2 px-0 text-on-surface text-[14px] focus:outline-none focus:ring-0 focus:border-primary transition-colors resize-none placeholder:text-on-surface-variant/30"
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#171513] text-[#FFFDF8] hover:bg-[#B58A3A] transition-colors py-4 text-[12px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-3 group mb-4"
                >
                  SUBMIT BOOKING REQUEST
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                
                <div className="flex flex-col items-center gap-1 text-center">
                  <p className="text-[12px] font-bold text-on-surface">
                    This is a booking request, not a confirmed booking.
                  </p>
                  <p className="text-[12px] text-on-surface-variant font-medium">
                    We'll contact you to check availability and discuss the details.
                  </p>
                </div>
              </div>

            </form>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

"use client";

import React, { useState } from "react";

export default function GanpatiForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    experience: "",
    _honeypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "ganpati", ...form }),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request");
      }
      
      setStatus({ type: "success", message: "Request received! We'll contact you shortly." });
      setForm({ name: "", phone: "", date: "", experience: "", _honeypot: "" });
    } catch (error: any) {
      setStatus({ type: "error", message: error.message || "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-surface border border-secondary/15 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.08)] ring-1 ring-inset ring-white/50 p-8 md:p-12 relative">
      <form onSubmit={handleSubmit} className="flex flex-col gap-12">
        <input type="text" name="_honeypot" style={{ display: "none" }} value={form._honeypot} onChange={(e) => setForm({ ...form, _honeypot: e.target.value })} tabIndex={-1} autoComplete="off" />
        
        {/* Section 1: Your Details & Event Date */}
        <div className="flex flex-col gap-8">
          
          {/* Name and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-xs tracking-[0.15em] uppercase text-on-surface-variant">
                Full Name
              </label>
              <input 
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-0 border-b border-secondary/20 py-2 px-0 text-on-surface font-body-md focus:outline-none focus:ring-0 focus:border-primary transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-xs tracking-[0.15em] uppercase text-on-surface-variant">
                WhatsApp / Phone
              </label>
              <input 
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-transparent border-0 border-b border-secondary/20 py-2 px-0 text-on-surface font-body-md focus:outline-none focus:ring-0 focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Event Date (Event Location removed to match the spreadsheet schema exactly) */}
          <div className="grid grid-cols-1 gap-8 mt-2">
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-xs tracking-[0.15em] uppercase text-on-surface-variant">
                Event Date
              </label>
              <input 
                type="date"
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full bg-transparent border-0 border-b border-secondary/20 py-2 px-0 text-on-surface font-body-md focus:outline-none focus:ring-0 focus:border-primary transition-colors cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Choose Your Experience */}
        <div className="flex flex-col gap-6">
          <h3 className="font-label-caps text-[11px] tracking-[0.2em] text-on-surface-variant uppercase border-b border-secondary/10 pb-2">
            CHOOSE YOUR EXPERIENCE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            
            {/* Option 1 */}
            <label className="cursor-pointer relative">
              <input 
                type="radio" 
                name="experience" 
                value="Authentic Punjabi Dhol" 
                checked={form.experience === "Authentic Punjabi Dhol"}
                onChange={(e) => setForm({ ...form, experience: e.target.value })}
                required
                className="peer sr-only" 
              />
              <div className="w-full border border-secondary/20 py-4 text-center text-on-surface font-body-sm hover:border-on-surface/50 peer-checked:border-primary peer-checked:bg-primary-container/10 peer-checked:text-primary transition-all">
                Authentic Punjabi Dhol
              </div>
            </label>

            {/* Option 2 */}
            <label className="cursor-pointer relative">
              <input 
                type="radio" 
                name="experience" 
                value="LED Dhol" 
                checked={form.experience === "LED Dhol"}
                onChange={(e) => setForm({ ...form, experience: e.target.value })}
                className="peer sr-only" 
              />
              <div className="w-full border border-secondary/20 py-4 text-center text-on-surface font-body-sm hover:border-on-surface/50 peer-checked:border-primary peer-checked:bg-primary-container/10 peer-checked:text-primary transition-all">
                LED Dhol
              </div>
            </label>

            {/* Option 3 */}
            <label className="cursor-pointer relative">
              <input 
                type="radio" 
                name="experience" 
                value="Bhangra Troupe" 
                checked={form.experience === "Bhangra Troupe"}
                onChange={(e) => setForm({ ...form, experience: e.target.value })}
                className="peer sr-only" 
              />
              <div className="w-full border border-secondary/20 py-4 text-center text-on-surface font-body-sm hover:border-on-surface/50 peer-checked:border-primary peer-checked:bg-primary-container/10 peer-checked:text-primary transition-all">
                Bhangra Troupe
              </div>
            </label>

            {/* Option 4 */}
            <label className="cursor-pointer relative">
              <input 
                type="radio" 
                name="experience" 
                value="DJ Mix Dhol Fusion" 
                checked={form.experience === "DJ Mix Dhol Fusion"}
                onChange={(e) => setForm({ ...form, experience: e.target.value })}
                className="peer sr-only" 
              />
              <div className="w-full border border-secondary/20 py-4 text-center text-on-surface font-body-sm hover:border-on-surface/50 peer-checked:border-primary peer-checked:bg-primary-container/10 peer-checked:text-primary transition-all">
                DJ Mix Dhol Fusion
              </div>
            </label>
            
          </div>
        </div>
        
        <div className="mt-4 flex flex-col items-center md:items-end gap-4">
          {status && (
            <div className={`p-4 w-full text-[13px] font-medium border ${status.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-700' : 'bg-red-500/10 border-red-500/20 text-red-700'}`}>
              {status.message}
            </div>
          )}
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full md:w-auto bg-on-surface text-background font-label-caps text-[11px] tracking-[0.2em] uppercase px-12 py-5 hover:bg-primary hover:text-on-primary disabled:opacity-50 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,0,0,0.1)]"
          >
            {isSubmitting ? "SENDING..." : "SUBMIT ENQUIRY"} 
            {!isSubmitting && <span className="font-body-md leading-none">→</span>}
          </button>
        </div>
      </form>
    </div>
  );
}

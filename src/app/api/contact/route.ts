import { NextResponse } from "next/server";
import { getVercelOidcToken } from "@vercel/oidc";
import { ExternalAccountClient } from "google-auth-library";
import { google } from "googleapis";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const OWNER_EMAIL = process.env.OWNER_EMAIL;

function escapeHtml(unsafe: string) {
  return (unsafe || "").toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatWhatsAppNumber(phone: string): string {
  let cleanNumber = (phone || "").replace(/[^\d+]/g, '');
  if (cleanNumber.startsWith('+')) {
    cleanNumber = cleanNumber.substring(1);
  }
  if (cleanNumber.startsWith('0')) {
    cleanNumber = cleanNumber.replace(/^0+/, '');
  }
  if (cleanNumber.length === 10) {
    return `91${cleanNumber}`;
  }
  return cleanNumber;
}

// Best-effort in-memory rate limiting (clears on function cold start)
// Not a production-grade distributed rate limiter, but serves as a basic shield
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5; // 5 requests per IP per minute

const SHEETS = {
  ganpati: "Ganpati Enquiries ",
  general: "General Enquiries ",
  booking: "Booking Requests",
};

export async function POST(req: Request) {
  try {
    // 0. Environment Validation
    const requiredEnv = [
      "GCP_PROJECT_NUMBER",
      "GCP_WORKLOAD_IDENTITY_POOL_ID",
      "GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID",
      "GCP_SERVICE_ACCOUNT_EMAIL",
      "GOOGLE_SHEET_ID",
    ];

    for (const key of requiredEnv) {
      if (!process.env[key]) {
        console.error(`Missing required environment variable: ${key}`);
        return NextResponse.json({ error: "Configuration error. Unable to submit your enquiry right now." }, { status: 500 });
      }
    }

    // 1. Rate Limiting
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const now = Date.now();
    const rateData = rateLimitMap.get(ip);
    
    if (rateData) {
      if (now - rateData.timestamp < RATE_LIMIT_WINDOW_MS) {
        if (rateData.count >= MAX_REQUESTS_PER_WINDOW) {
          console.warn(`Rate limit exceeded for IP: ${ip}`);
          return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
        }
        rateData.count++;
      } else {
        rateLimitMap.set(ip, { count: 1, timestamp: now });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, timestamp: now });
    }

    const body = await req.json();
    const {
      formType,
      name,
      phone,
      email,
      subject,
      message,
      date,
      type,
      location,
      guests,
      experience,
      details,
      _honeypot,
    } = body;

    // 2. Anti-spam Honeypot Check
    if (_honeypot) {
      console.warn("Honeypot field filled. Rejecting spam submission.");
      // Return success to fool the bot without doing anything
      return NextResponse.json({ success: true, message: "Form submitted successfully" });
    }

    // 3. Validation & Payload Mapping
    let range = "";
    let values: any[] = [];
    const timestamp = new Date().toISOString();
    const status = "NEW";

    if (!formType || !["ganpati", "general", "booking"].includes(formType)) {
      return NextResponse.json({ error: "Invalid form type" }, { status: 400 });
    }

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone number are required" }, { status: 400 });
    }

    if (formType === "ganpati") {
      if (!date || !experience) {
        return NextResponse.json({ error: "Date and experience are required for Ganpati bookings" }, { status: 400 });
      }
      range = `'${SHEETS.ganpati}'!A:F`;
      values = [
        [
          timestamp,
          name,
          phone,
          date,
          experience,
          status,
        ],
      ];
    } else if (formType === "general") {
      if (!subject) {
        return NextResponse.json({ error: "Subject is required for general enquiries" }, { status: 400 });
      }
      range = `'${SHEETS.general}'!A:G`;
      values = [
        [
          timestamp,
          name,
          phone,
          email || "",
          subject,
          message || "",
          status,
        ],
      ];
    } else if (formType === "booking") {
      if (!date || !type || !location || !guests || !experience) {
        return NextResponse.json({ error: "Please fill all required booking fields" }, { status: 400 });
      }
      range = `'${SHEETS.booking}'!A:J`;
      values = [
        [
          timestamp,
          name,
          phone,
          date,
          type,
          location,
          guests,
          experience,
          details || "",
          status,
        ],
      ];
    }

    // 4. Authentication (Vercel OIDC -> Google Workload Identity Federation)
const auth = ExternalAccountClient.fromJSON({
  type: "external_account",

  audience: `//iam.googleapis.com/projects/${process.env.GCP_PROJECT_NUMBER}/locations/global/workloadIdentityPools/${process.env.GCP_WORKLOAD_IDENTITY_POOL_ID}/providers/${process.env.GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID}`,

  subject_token_type: "urn:ietf:params:oauth:token-type:jwt",

  token_url: "https://sts.googleapis.com/v1/token",

  service_account_impersonation_url: `https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/${process.env.GCP_SERVICE_ACCOUNT_EMAIL}:generateAccessToken`,

  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
  ],

  subject_token_supplier: {
    getSubjectToken: getVercelOidcToken,
  },
});

const sheets = google.sheets({
  version: "v4",
  auth: auth as any,
});

const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // 5. Google Sheets API Call
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });

    // 6. Send Email Notification (Best Effort)
    if (resend && OWNER_EMAIL) {
      try {
        let subjectStr = "";
        let htmlBody = "";
        let waMessage = "";

        const safeName = escapeHtml(name);
        const safePhone = escapeHtml(phone);

        if (formType === "ganpati") {
          subjectStr = `New Ganpati Enquiry — ${name}`;
          htmlBody = `
            <h2>New Ganpati Enquiry</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Phone:</strong> ${safePhone}</p>
            <p><strong>Date:</strong> ${escapeHtml(date)}</p>
            <p><strong>Experience:</strong> ${escapeHtml(experience)}</p>
            <p><strong>Status:</strong> NEW</p>
            <p><strong>Timestamp:</strong> ${timestamp}</p>
          `;
          waMessage = `Hi ${name}, this is Vipin Punjabi Dhol. We received your Ganpati enquiry and wanted to follow up with you! (Date: ${date} | Experience: ${experience})`;
        } else if (formType === "general") {
          subjectStr = `New General Enquiry — ${name}`;
          htmlBody = `
            <h2>New General Enquiry</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Phone:</strong> ${safePhone}</p>
            <p><strong>Email:</strong> ${email ? escapeHtml(email) : "Not provided"}</p>
            <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
            <p><strong>Message:</strong> ${message ? escapeHtml(message) : "Not provided"}</p>
            <p><strong>Status:</strong> NEW</p>
            <p><strong>Timestamp:</strong> ${timestamp}</p>
          `;
          waMessage = `Hi ${name}, this is Vipin Punjabi Dhol. We received your enquiry regarding ${subject} and wanted to follow up with you! (Message: ${message || "Not provided"})`;
        } else if (formType === "booking") {
          subjectStr = `New Booking Request — ${name}`;
          htmlBody = `
            <h2>New Booking Request</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Phone:</strong> ${safePhone}</p>
            <p><strong>Date:</strong> ${escapeHtml(date)}</p>
            <p><strong>Event Type:</strong> ${escapeHtml(type)}</p>
            <p><strong>Location:</strong> ${escapeHtml(location)}</p>
            <p><strong>Guests:</strong> ${escapeHtml(guests)}</p>
            <p><strong>Experience:</strong> ${escapeHtml(experience)}</p>
            <p><strong>Additional Details:</strong> ${details ? escapeHtml(details) : "Not provided"}</p>
            <p><strong>Status:</strong> NEW</p>
            <p><strong>Timestamp:</strong> ${timestamp}</p>
          `;
          waMessage = `Hi ${name}, this is Vipin Punjabi Dhol. We received your booking request and wanted to follow up with you! (Event: ${type} | Date: ${date} | Location: ${location} | Guests: ${guests} | Experience: ${experience} | Details: ${details || "None"})`;
        }

        const customerWaNumber = formatWhatsAppNumber(phone);
        const waUrl = `https://wa.me/${customerWaNumber}?text=${encodeURIComponent(waMessage)}`;
        
        htmlBody += `
          <div style="margin-top: 30px;">
            <a href="${waUrl}" style="background-color: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; font-family: sans-serif;">Reply on WhatsApp</a>
          </div>
        `;

        const { error: resendError } = await resend.emails.send({
          from: "Vipin Punjabi Dhol <onboarding@resend.dev>",
          to: [OWNER_EMAIL],
          subject: subjectStr,
          html: htmlBody,
        });

        if (resendError) {
          console.error("Resend API failed to send email:", resendError);
        } else {
          console.log(`Email notification sent successfully for ${formType}`);
        }
      } catch (emailErr) {
        console.error("Error generating or sending email notification:", emailErr);
      }
    } else {
      console.warn("RESEND_API_KEY or OWNER_EMAIL is missing. Email notification skipped.");
    }

    return NextResponse.json({ success: true, message: "Form submitted successfully" });
  } catch (error: any) {
    console.error("Google Sheets submission failed:", error);
    return NextResponse.json(
      { error: "Unable to submit your enquiry right now." },
      { status: 500 }
    );
  }
}

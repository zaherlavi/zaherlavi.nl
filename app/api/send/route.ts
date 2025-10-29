import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactFormSchema } from "@/lib/validations/contact";
import { ratelimit } from "@/lib/redis";

// Initialize Resend with fallback for build time
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable");
      throw new Error("Email service not configured - missing API key");
    }
    
    if (!process.env.CONTACT_EMAIL) {
      console.error("Missing CONTACT_EMAIL environment variable");
      throw new Error("Email service not configured - missing contact email");
    }

    // Get IP address for rate limiting
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";

    // Check rate limit using Upstash Ratelimit SDK
    if (ratelimit) {
      try {
        const { success, limit, reset, remaining } = await ratelimit.limit(ip);
        
        console.log(`Rate limit check for IP ${ip}: success=${success}, remaining=${remaining}/${limit}`);
        
        if (!success) {
          const resetDate = new Date(reset);
          console.warn(`Rate limit exceeded for IP: ${ip}. Resets at ${resetDate}`);
          return NextResponse.json(
            {
              success: false,
              error: `Rate limit exceeded. Please try again after ${resetDate.toLocaleTimeString()}.`,
            },
            { status: 429 }
          );
        }
      } catch (redisError) {
        console.error("Redis rate limiting error:", redisError);
        // In production, fail if Redis is configured but unavailable
        if (process.env.NODE_ENV === "production" && process.env.UPSTASH_REDIS_REST_URL) {
          throw new Error("Rate limiting service unavailable");
        }
        console.warn("Redis unavailable, skipping rate limit");
      }
    } else {
      console.warn("Redis not configured, skipping rate limiting");
    }

    const body = await req.json();
    const result = ContactFormSchema.safeParse(body);

    if (!result.success) {
      console.error("Form validation failed:", result.error);
      return NextResponse.json(
        { success: false, error: "Invalid form data" },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;

    if (!resend) {
      throw new Error("Resend instance not initialized");
    }

    // Send email in background without waiting
    console.log("Queuing email to:", process.env.CONTACT_EMAIL);
    resend.emails.send({
      from: "Portfolio Website Form <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
      replyTo: email,
    }).then((data) => {
      console.log("Email sent successfully:", data);
    }).catch((error) => {
      console.error("Email sending failed:", error);
    });

    // Return success immediately without waiting for email
    return NextResponse.json({
      success: true,
      message: "Message received. We'll get back to you soon.",
    });
  } catch (error: any) {
    console.error("API Error:", error);
    const errorMessage = error?.message || "Failed to send message";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

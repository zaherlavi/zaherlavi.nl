import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactFormSchema } from "@/lib/validations/contact";
import { redis } from "@/lib/redis";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Get IP address for rate limiting
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
    const rateLimitKey = `ratelimit:${ip}`;

    // Check rate limit (5 emails per hour)
    const requests = await redis.incr(rateLimitKey);
    if (requests === 1) {
      await redis.expire(rateLimitKey, 3600); // 1 hour
    }
    if (requests > 5) {
      return NextResponse.json(
        {
          success: false,
          error: "Rate limit exceeded. Please try again later.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const result = ContactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: "Invalid form data" },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;

    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
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
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error: any) {
    const errorMessage = error?.message || "Failed to send message";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

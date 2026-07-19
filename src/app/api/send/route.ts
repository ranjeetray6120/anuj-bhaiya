import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with the environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, details, recaptchaToken } = await req.json();

    // 1. Verify Google reCAPTCHA Token server-side
    if (!recaptchaToken) {
      return NextResponse.json({ error: "Please complete the reCAPTCHA verification." }, { status: 400 });
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

    const verifyResponse = await fetch(verificationUrl, {
      method: "POST",
    });
    const verifyResult = await verifyResponse.json();

    if (!verifyResult.success) {
      return NextResponse.json({ error: "reCAPTCHA verification failed. Please try again." }, { status: 400 });
    }

    // 2. Get receiving email from environment variables (important for Resend sandbox mode tests)
    const toEmail = process.env.RESEND_TO_EMAIL || "growth@adforge.agency";

    // 3. Send email using Resend
    const data = await resend.emails.send({
      from: "ADFORGE Leads <onboarding@resend.dev>",
      to: [toEmail], 
      subject: `New Lead Captured: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #0f172a; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #ff6a00; border-bottom: 2px solid #ff6a00; padding-bottom: 10px; margin-top: 0;">New Lead Captured</h2>
          <p style="margin: 15px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 15px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #1e6ecc; text-decoration: none;">${email}</a></p>
          <p style="margin: 15px 0;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #1e6ecc; text-decoration: none;">${phone}</a></p>
          <div style="margin: 20px 0; padding: 15px; bg-color: #f8f9fa; border-left: 4px solid #ff6a00; background-color: #f8f9fa; border-radius: 4px;">
            <p style="margin: 0; font-weight: bold; padding-bottom: 5px;">Requirements / Message:</p>
            <p style="margin: 0; font-style: italic; color: #475569;">${details || "No custom details provided."}</p>
          </div>
          <p style="font-size: 11px; color: #94a3b8; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 10px;">Submitted from ADFORGE Strategy Capture form.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

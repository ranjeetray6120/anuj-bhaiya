import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      website = "N/A",
      service = "General Inquiry",
      monthlyBudget = "N/A",
      message = "No message provided",
      source = "Website Lead Form",
      recaptchaToken,
    } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and Email are required fields." },
        { status: 400 }
      );
    }

    // Verify Google reCAPTCHA v2 if secret key & token are available
    if (recaptchaToken && process.env.RECAPTCHA_SECRET_KEY) {
      try {
        const verifyRes = await fetch(
          "https://www.google.com/recaptcha/api/siteverify",
          {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
          }
        );
        const verifyData = await verifyRes.json();
        if (!verifyData.success) {
          console.warn("reCAPTCHA verification failed:", verifyData["error-codes"]);
        }
      } catch (captchaErr) {
        console.error("reCAPTCHA verification error:", captchaErr);
      }
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.RESEND_TO_EMAIL || "adfordge.marketing@gmail.com";

    // If API key is available and configured
    if (apiKey && apiKey !== "re_replace_this_with_your_actual_resend_api_key") {
      const resend = new Resend(apiKey);

      const htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 24px; }
              .card { background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; padding: 32px; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
              .header { border-bottom: 2px solid #046BD2; padding-bottom: 16px; margin-bottom: 24px; }
              .badge { background: #046BD2; color: #ffffff; font-size: 11px; font-weight: bold; text-transform: uppercase; padding: 4px 10px; border-radius: 9999px; display: inline-block; }
              .title { font-size: 22px; font-weight: 800; color: #0f172a; margin: 12px 0 4px 0; }
              .table { width: 100%; border-collapse: collapse; margin-top: 16px; }
              .table td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
              .label { font-weight: 700; color: #64748b; width: 35%; }
              .value { font-weight: 600; color: #0f172a; }
              .btn { display: inline-block; background: #D82C5E; color: #ffffff !important; font-weight: bold; font-size: 13px; text-decoration: none; padding: 12px 24px; border-radius: 8px; margin-top: 24px; }
              .footer { font-size: 12px; color: #94a3b8; text-align: center; margin-top: 24px; }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="header">
                <span class="badge">${source}</span>
                <h1 class="title">🔥 New Lead Submitted</h1>
                <p style="margin:0;font-size:13px;color:#64748b;">Submitted via AdForge Website</p>
              </div>

              <table class="table">
                <tr>
                  <td class="label">Full Name:</td>
                  <td class="value">${name}</td>
                </tr>
                <tr>
                  <td class="label">Email Address:</td>
                  <td class="value"><a href="mailto:${email}" style="color:#046BD2;">${email}</a></td>
                </tr>
                <tr>
                  <td class="label">Phone / WhatsApp:</td>
                  <td class="value"><a href="tel:${phone}" style="color:#046BD2;">${phone || "N/A"}</a></td>
                </tr>
                <tr>
                  <td class="label">Service Required:</td>
                  <td class="value">${service}</td>
                </tr>
                <tr>
                  <td class="label">Monthly Budget:</td>
                  <td class="value">${monthlyBudget}</td>
                </tr>
                <tr>
                  <td class="label">Website / Goals:</td>
                  <td class="value">${website}</td>
                </tr>
                <tr>
                  <td class="label">Message / Details:</td>
                  <td class="value">${message}</td>
                </tr>
              </table>

              <div style="text-align: center;">
                <a href="mailto:${email}?subject=Regarding%20your%20AdForge%20inquiry" class="btn">
                  REPLY TO LEAD DIRECTLY →
                </a>
              </div>

              <div class="footer">
                © 2026 AdForge Agency • Lead Notification Engine
              </div>
            </div>
          </body>
        </html>
      `;

      // Resend sender email (use onboarding@resend.dev for test/sandbox mode or verified domain)
      const data = await resend.emails.send({
        from: "AdForge Leads <onboarding@resend.dev>",
        to: [recipientEmail],
        replyTo: email,
        subject: `🔥 New AdForge Lead: ${name} (${service})`,
        html: htmlContent,
      });

      return NextResponse.json({ success: true, data });
    } else {
      // Graceful fallback for local development if Resend API key is pending
      console.log("Mock Email Sent (Resend Key not configured yet):", {
        name,
        email,
        phone,
        service,
        message,
      });
      return NextResponse.json({
        success: true,
        message: "Lead recorded (Resend simulation mode).",
      });
    }
  } catch (error: any) {
    console.error("Resend Email Error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send email via Resend" },
      { status: 500 }
    );
  }
}

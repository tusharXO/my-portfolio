import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { PERSONAL_INFO } from "@/data/portfolioData";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, honeypot } = body;

    // 1. Anti-spam honeypot verification
    if (honeypot) {
      return NextResponse.json(
        { success: true, message: "Message processed." },
        { status: 200 }
      );
    }

    // 2. Validate input fields
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "Please enter a message of at least 5 characters." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER || PERSONAL_INFO.email;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailAppPassword) {
      console.warn(
        "GMAIL_APP_PASSWORD is not configured in .env.local. Please add your 16-character Google App Password."
      );
      return NextResponse.json(
        {
          error:
            "Email service is not yet configured. Please set GMAIL_APP_PASSWORD in .env.local",
        },
        { status: 503 }
      );
    }

    // 3. Create Nodemailer Gmail Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword.replace(/\s+/g, ""),
      },
    });

    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim();
    const sanitizedMessage = message.trim();
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    // 4. Email 1: Clean Letter Notification to Tushar
    const adminMailOptions = {
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: gmailUser,
      replyTo: sanitizedEmail,
      subject: `New message from ${sanitizedName}`,
      text: `New Portfolio Message\n\nFrom: ${sanitizedName} (${sanitizedEmail})\nDate: ${timestamp} (IST)\n\nMessage:\n${sanitizedMessage}\n\n---\nReply directly to this email to respond to ${sanitizedName}.`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 15px; line-height: 1.6; color: #1a1a1a; max-width: 580px; margin: 0 auto; padding: 24px;">
          <h2 style="font-size: 18px; font-weight: 600; color: #111111; margin: 0 0 16px 0;">New Message from Portfolio</h2>
          
          <p style="margin: 0 0 8px 0; color: #555555; font-size: 14px;">
            <strong>From:</strong> ${sanitizedName} &lt;<a href="mailto:${sanitizedEmail}" style="color: #2563eb; text-decoration: none;">${sanitizedEmail}</a>&gt;<br/>
            <strong>Date:</strong> ${timestamp} (IST)
          </p>

          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;" />

          <p style="font-size: 13px; font-weight: 600; color: #666666; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">Message:</p>
          <div style="font-size: 15px; line-height: 1.6; color: #111111; background-color: #f9f9f8; border-left: 3px solid #111111; padding: 14px 18px; margin: 0 0 24px 0; border-radius: 4px; white-space: pre-wrap;">${sanitizedMessage}</div>

          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;" />
          
          <p style="font-size: 13px; color: #777777; margin: 0;">
            💡 You can reply directly to this email to respond to <strong>${sanitizedName}</strong>.
          </p>
        </div>
      `,
    };

    // 5. Email 2: Clean Letter Confirmation to Visitor
    const visitorMailOptions = {
      from: `"Tushar Kumar" <${gmailUser}>`,
      to: sanitizedEmail,
      subject: `Thank you for reaching out, ${sanitizedName}`,
      text: `Hi ${sanitizedName},\n\nThank you for getting in touch through my website. I have received your message and will review it and get back to you shortly.\n\nSummary of your message:\n"${sanitizedMessage}"\n\nIf you need to reach me urgently, feel free to connect via WhatsApp at (+91) 7011106209 or reply directly to this email.\n\nBest regards,\nTushar Kumar\nSoftware Developer | Backend & Distributed Systems\nGitHub: https://github.com/tusharXO\nLinkedIn: https://www.linkedin.com/in/tusharkumarx/`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 15px; line-height: 1.6; color: #1a1a1a; max-width: 580px; margin: 0 auto; padding: 24px;">
          <p style="margin: 0 0 16px 0; font-size: 16px;">Hi ${sanitizedName},</p>
          
          <p style="margin: 0 0 16px 0;">
            Thank you for getting in touch through my website. I have received your message and will review it and get back to you shortly.
          </p>

          <p style="margin: 0 0 8px 0; color: #666666; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
            Summary of your message:
          </p>
          <div style="font-size: 14px; line-height: 1.6; color: #333333; background-color: #f9f9f8; border-left: 3px solid #2563eb; padding: 12px 16px; margin: 0 0 20px 0; border-radius: 4px; white-space: pre-wrap;">${sanitizedMessage}</div>

          <p style="margin: 0 0 24px 0;">
            If your request is time-sensitive, feel free to connect via <a href="https://wa.me/917011106209" style="color: #2563eb; text-decoration: none; font-weight: 500;">WhatsApp (+91 7011106209)</a> or reply directly to this email.
          </p>

          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />

          <p style="margin: 0 0 4px 0; font-weight: 600; color: #111111;">Best regards,</p>
          <p style="margin: 0 0 4px 0; color: #111111; font-weight: 600;">Tushar Kumar</p>
          <p style="margin: 0 0 12px 0; font-size: 13px; color: #666666;">Software Developer | Backend & Distributed Systems</p>
          
          <p style="margin: 0; font-size: 13px; color: #888888;">
            <a href="${PERSONAL_INFO.github}" style="color: #2563eb; text-decoration: none;">GitHub</a> &nbsp;·&nbsp;
            <a href="${PERSONAL_INFO.linkedin}" style="color: #2563eb; text-decoration: none;">LinkedIn</a>
          </p>
        </div>
      `,
    };

    // Send both in parallel
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(visitorMailOptions),
    ]);

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error: any) {
    console.error("Nodemailer /api/contact error:", error);
    return NextResponse.json(
      {
        error:
          error?.message ||
          "Failed to send email. Please check your Gmail configuration.",
      },
      { status: 500 }
    );
  }
}

import { headers } from "next/headers";
import postmark from "postmark";
import { z } from "zod";

const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY!);

// --- Rate limiting (in-memory) ---
const RATE_LIMIT_MAX = 3; // max requests per window
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.firstRequest > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// Clean up stale entries every 10 minutes to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now - entry.firstRequest > RATE_LIMIT_WINDOW_MS) {
      rateLimitMap.delete(ip);
    }
  }
}, 10 * 60 * 1000);

// --- Schema ---
const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full name must be at least 3 characters")
    .max(40, "Full name must be at most 40 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().optional(),
  message: z
    .string()
    .min(1, "Message is required")
    .max(500, "Message must be at most 500 characters"),
  website: z.string().optional(), // honeypot field
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phoneNumber, message, website } =
      contactFormSchema.parse(body);

    // Honeypot check: if a bot filled in the hidden field, silently reject
    if (website) {
      // Return success to not alert the bot that it was caught
      return Response.json({ success: true });
    }

    // Rate limiting by IP
    const headersList = await headers();
    const ip =
      headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      headersList.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return Response.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const response = await client.sendEmail({
      From: process.env.EMAIL_FROM!,
      To: process.env.EMAIL_TO!,
      ReplyTo: email,
      Subject: `New contact form message from ${fullName}`,
      HtmlBody: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phoneNumber ? `<p><strong>Phone:</strong> ${phoneNumber}</p>` : ""}
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
      TextBody: `New Contact Form Submission\n\nName: ${fullName}\nEmail: ${email}${phoneNumber ? `\nPhone: ${phoneNumber}` : ""}\n\nMessage:\n${message}`,
      MessageStream: "outbound",
    });

    return Response.json({ success: true, messageId: response.MessageID });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return Response.json(
        { error: "Invalid form data", details: err.issues },
        { status: 400 }
      );
    }

    return Response.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}

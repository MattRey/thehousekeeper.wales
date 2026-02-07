import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

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
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phoneNumber, message } = contactFormSchema.parse(body);

    const { data, error } = await resend.emails.send({
      from: "The Housekeeper Wales <adam@thehousekeeper.wales>",
      to: ["adam@thehousekeeper.wales"],
      replyTo: email,
      subject: `New contact form message from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phoneNumber ? `<p><strong>Phone:</strong> ${phoneNumber}</p>` : ""}
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true, data });
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

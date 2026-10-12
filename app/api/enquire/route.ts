import { NextResponse } from "next/server";
import { z } from "zod";
import { getEmailProvider } from "@/lib/email/provider";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  program: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a little more — at least 10 characters.").max(2000),
  // Honeypot field — real users never fill this in.
  company: z.string().max(0).optional().or(z.literal("")),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again.", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { company, ...payload } = parsed.data;
  if (company) {
    // Honeypot tripped — pretend success, do nothing.
    return NextResponse.json({ ok: true });
  }

  try {
    const provider = getEmailProvider();
    await provider.send(payload);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[enquiry] failed to send", error);
    const toEmail = process.env.ENQUIRY_TO_EMAIL;
    return NextResponse.json(
      {
        error: `Sorry, your enquiry could not be sent. Please try again in a moment${
          toEmail ? `, or email ${toEmail} directly` : ""
        }.`,
      },
      { status: 502 },
    );
  }
}

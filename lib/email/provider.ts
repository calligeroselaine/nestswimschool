export type EnquiryPayload = {
  name: string;
  email: string;
  phone?: string;
  program?: string;
  message: string;
};

export interface EmailProvider {
  send(payload: EnquiryPayload): Promise<void>;
}

class ConsoleProvider implements EmailProvider {
  async send(payload: EnquiryPayload): Promise<void> {
    // No RESEND_API_KEY configured yet — log the enquiry so it isn't silently lost.
    // Once RESEND_API_KEY is set in the Vercel project, getEmailProvider() switches
    // to ResendProvider automatically and this stops being used.
    console.log("[enquiry] RESEND_API_KEY not set — logging submission instead of emailing:", {
      ...payload,
      receivedAt: new Date().toISOString(),
    });
  }
}

class ResendProvider implements EmailProvider {
  constructor(
    private apiKey: string,
    private toAddress: string,
  ) {}

  async send(payload: EnquiryPayload): Promise<void> {
    const { Resend } = await import("resend");
    const resend = new Resend(this.apiKey);

    const lines = [
      `New enquiry from ${payload.name}`,
      `Email: ${payload.email}`,
      payload.phone ? `Phone: ${payload.phone}` : null,
      payload.program ? `Program: ${payload.program}` : null,
      "",
      payload.message,
    ].filter(Boolean);

    const { error } = await resend.emails.send({
      from: "SwimNest Website <enquiries@swimnest.com.au>",
      to: this.toAddress,
      replyTo: payload.email,
      subject: `New SwimNest enquiry from ${payload.name}`,
      text: lines.join("\n"),
    });

    if (error) {
      throw new Error(`Resend failed to send enquiry email: ${error.message}`);
    }
  }
}

export function getEmailProvider(): EmailProvider {
  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.ENQUIRY_TO_EMAIL;

  if (apiKey && toAddress) {
    return new ResendProvider(apiKey, toAddress);
  }

  return new ConsoleProvider();
}

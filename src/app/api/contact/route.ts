import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const schema = z.object({
  name: z.string().trim().min(2, "Please give your name").max(120),
  phone: z
    .string()
    .trim()
    .min(7, "Give a phone number the college can reach you on")
    .max(30)
    .regex(/^[0-9+\-\s()]+$/, "The phone number has characters it should not have"),
  email: z.string().trim().email("That email address does not look right").max(160),
  topic: z.enum(["Programmes", "Admissions", "Fees", "Partnerships", "Other"]),
  message: z.string().trim().min(10, "Tell the college a little more").max(2000),
  // Honeypot: bots fill this hidden field; humans never see it
  website: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      const first = parsed.error.issues[0];
      return NextResponse.json(
        { ok: false, error: first?.message || "Please check the form and try again" },
        { status: 400 }
      );
    }

    // Honeypot tripped: pretend success, store nothing
    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    const { name, phone, email, topic, message } = parsed.data;
    await db.contactMessage.create({ data: { name, phone, email, topic, message } });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "The message could not be sent. Please phone the college instead." },
      { status: 500 }
    );
  }
}

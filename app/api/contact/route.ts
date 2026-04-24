import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, company, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "onboarding@resend.dev", // TEMP (funkar direkt)
      to: "info@axaconsult.se",
      replyTo: email,
      subject: `Ny förfrågan från ${name}`,
      text: `
Namn: ${name}
Företag: ${company || "-"}
E-post: ${email}

Meddelande:
${message}
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, company, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
  from: "AXA Consult <kontakt@contact.axaconsult.se>",
  to: ["info@axaconsult.se"],
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

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (err) {
    console.error("API error:", err);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
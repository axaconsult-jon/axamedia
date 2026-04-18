import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, company, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Fyll i obligatoriska fält." },
        { status: 400 }
      );
    }

    console.log("Ny bokningsförfrågan:", {
      name,
      company,
      email,
      message,
      to: "info@axaconsult.se",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Något gick fel." },
      { status: 500 }
    );
  }
}
import { NextResponse } from "next/server";

export function GET() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918048773212";
  const cleaned = number.replace(/\D/g, "");

  const url = `https://wa.me/${cleaned}?text=Hello`;

  return NextResponse.redirect(url);
}

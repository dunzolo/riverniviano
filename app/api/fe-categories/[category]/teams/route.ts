import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params;
  
  if (!category) {
    return NextResponse.json({ error: "Parametro 'category' mancante" }, { status: 400 });
  }
    
  const res = await fetch(`${BASE_URL}/fe-categories/${category}/teams`);

  if (!res.ok) {
    return NextResponse.json({ error: "Errore categoria" }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
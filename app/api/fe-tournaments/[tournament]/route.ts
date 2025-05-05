import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ tournament: string }> }
) {
  const { tournament } = await params;
  
  if (!tournament) {
    return NextResponse.json({ error: "Parametro 'tournament' mancante" }, { status: 400 });
  }
    
  const res = await fetch(`${BASE_URL}/fe-tournaments/${tournament}`);

  if (!res.ok) {
    return NextResponse.json({ error: "Errore torneo" }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
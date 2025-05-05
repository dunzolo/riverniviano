import { NextRequest, NextResponse } from "next/server";
import { cache } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

// Funzione per costruire la query string con i filtri
function buildQueryString(filters: Record<string, string | number> = {}) {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
      params.append(`filter[${key}]`, String(value));
  });

  return params.toString();
}

// Funzione per recuperare i gironi con cache
const fetchMatches = cache(async (tournament: string, filters: Record<string, string | number>) => {
  const queryString = buildQueryString(filters);
  const fullUrl = `${BASE_URL}/fe-tournaments/${tournament}/matches?${queryString}`;

  console.log("📡 Fetching from Laravel:");
  console.log("▶️ Full URL:", fullUrl);
  console.log("🔍 Filters:", filters);

  const res = await fetch(fullUrl, {
    next: { tags: ["matches"] }, // Cache per 1 ora
  });

  if (!res.ok) {
    console.error("❌ Errore nella fetch Laravel:", res.status, res.statusText);
    throw new Error("Errore nel recupero delle partite");
  }

  return res.json();
});

export async function GET(
  req: NextRequest, 
  { params }: { params: Promise<{ tournament: string }> }
) {
  try {
    const { tournament } = await params;

    console.log("🟢 API Route /api/matches called");
    console.log("🎯 Tournament ID:", tournament);

    if (!tournament) {
      console.warn("⚠️ Parametro 'tournament' mancante");
      return NextResponse.json({ error: "Parametro 'tournament' mancante" }, { status: 400 });
    }

    const { searchParams } = new URL(req.url);

    const filters: Record<string, string | number> = {};
    searchParams.forEach((value, key) => {
      if (key === "page" || key === "per_page") return;

      const match = key.match(/^filter\[(.+)\]$/);
      if (match) {
        filters[match[1]] = value;
      }
    });

    console.log("🧪 Parsed filters from URL:", filters);

    const data = await fetchMatches(tournament, filters);
    console.log("✅ Data ricevuti:", data?.data?.length || 0, "elementi");

    return NextResponse.json(data);
  } catch (error) {
    console.error("🔥 Errore nella route /api/matches:", error);
    return NextResponse.json({ error: "Errore nel recupero delle partite" }, { status: 500 });
  }
}
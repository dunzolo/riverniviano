import { NextRequest, NextResponse } from "next/server";
import { cache } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

// 🔧 Costruisce query string compatibile con Spatie Query Builder
function buildQueryString(filters: Record<string, string | number> = {}) {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    params.append(`filter[${key}]`, String(value));
  });
  return params.toString();
}

// 🔁 Funzione con cache (revalidabile se vuoi)
const fetchTournaments = cache(async (filters: Record<string, string | number>) => {
  const queryString = buildQueryString(filters);
  console.log("📡 Chiamata Laravel con:", queryString);

  const res = await fetch(`${BASE_URL}/fe-tournaments?${queryString}`, {
    next: { tags: ["fe-tournaments"] },
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("❌ Errore fetch:", res.status, errorText);
    throw new Error("Errore nel recupero dei tornei");
  }

  return res.json();
});

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const filters: Record<string, string | number> = {};

    // ✅ Estrai solo i filtri tipo filter[year]
    searchParams.forEach((value, key) => {
      const match = key.match(/^filter\[(.+?)\]$/);
      if (match) {
        filters[match[1]] = value;
      }
    });

    const data = await fetchTournaments(filters);
    return NextResponse.json(data);
  } catch (error) {
    console.error("❌ Errore API Route:", error);
    return NextResponse.json({ error: "Errore nel recupero dei tornei" }, { status: 500 });
  }
}
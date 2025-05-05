import { NextRequest, NextResponse } from "next/server";
import { cache } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

// Funzione per costruire la query string con i filtri
function buildQueryString(filters: Record<string, string | number> = {}) {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    params.append(`filter[${key}]`, String(value)); // Spatie usa questa sintassi
  });

  return params.toString() ? `${params.toString()}` : "";
}

// Funzione per recuperare i gironi con cache
const fetchGroups = cache(async (tournament: string, filters: Record<string, string | number>) => {
  const queryString = buildQueryString(filters);
  console.log(`Fetching groups for tournament: ${tournament} with filters:`, filters);

  const res = await fetch(`${BASE_URL}/fe-tournaments/${tournament}/groups?${queryString}`, {
    next: { tags: ["fe-groups"] }, // Cache per 1 ora
  });

  if (!res.ok) {
    throw new Error("Errore nel recupero dei gironi");
  }

  return res.json();
});

export async function GET(
  req: NextRequest, 
  { params }: { params: Promise<{ tournament: string }> }
) {
  try {
    const { tournament } = await params; // Ottiene il torneo dalla route dinamica
    
    if (!tournament) {
      return NextResponse.json({ error: "Parametro 'tournament' mancante" }, { status: 400 });
    }

    // Recupera i filtri dalla query string
    const { searchParams } = new URL(req.url);
    const filters: Record<string, string | number> = {};

    searchParams.forEach((value, key) => {
      const match = key.match(/^filter\[(.+)\]$/);
      if (match) {
        filters[match[1]] = value;
      }
    });

    const data = await fetchGroups(tournament, filters);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Errore nel recupero dei gironi" }, { status: 500 });
  }
}

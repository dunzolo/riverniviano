export async function getTournamentCategories(slug: string) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/fe-tournaments/${slug}/categories`,
      { cache: "no-store" }
    );
  
    if (!res.ok) {
      throw new Error("Errore nel recupero del torneo");
    }
  
    return res.json();
  }
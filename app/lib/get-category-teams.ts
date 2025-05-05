export async function getCategoryTeams(category: string) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/fe-categories/${category}/teams`,
      { cache: "no-store" }
    );
  
    if (!res.ok) {
      throw new Error("Errore nel recupero dei teams");
    }
  
    return res.json();
  }
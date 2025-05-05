export async function getCategory(category: string) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/fe-categories/${category}`,
      { cache: "no-store" }
    );
  
    if (!res.ok) {
      throw new Error("Errore nel recupero del torneo");
    }
  
    return res.json();
  }
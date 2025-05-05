import { getTournamentBySlug } from "../lib/get-tournament-by-slug";
import { getTournamentCategories } from "../lib/get-tournament-categories";
import TournamentDetail from "./_components/tournament-detail";

export default async function Page({
  params,
}: {
  params: Promise<{ tournament: string }>;
}) {
  const { tournament } = await params; // Recupera lo slug del torneo dall'URL

  const tournamentData = await getTournamentBySlug(tournament);
  const categories = await getTournamentCategories(tournament);

  return (
    <TournamentDetail
      initialTournament={tournamentData.data}
      initialCategories={categories.data}
    />
  );
}

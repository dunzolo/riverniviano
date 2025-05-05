import { getCategoryTeams } from "@/app/lib/get-category-teams";
import { getCategory } from "../../../lib/get-category";
import { getTournamentBySlug } from "../../../lib/get-tournament-by-slug";
import TournamentTabs from "./_components/tournament-tabs";

export default async function Page({
  params,
}: {
  params: Promise<{ tournament: string; category: string }>;
}) {
  const { tournament, category } = await params; // Recupera lo slug del torneo dall'URL

  const tournamentData = await getTournamentBySlug(tournament);
  const categoryData = await getCategory(category);
  const teamsData = await getCategoryTeams(category);

  return (
    <div className="container flex-1 space-y-4 p-4 md:p-8">
      <h1 className="text-center text-2xl font-bold">
        {tournamentData.data?.name}
      </h1>
      <h3 className="text-center !mt-0">
        Categoria {categoryData.data?.name.toLowerCase()}
      </h3>

      <TournamentTabs
        initialTournament={tournament}
        initialCategory={category}
        initialTeams={teamsData.data}
      />
    </div>
  );
}

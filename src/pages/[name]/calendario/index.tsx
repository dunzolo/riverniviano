import {
  getAllCategories,
  getAllDistinctSquads,
  getAllMatch,
  getAllMatchFinalPhaseGroupByDay,
  getAllMatchGroupByDay,
  getAllSquads,
  getTournament,
} from "@/api/supabase";
import RootLayout from "@/components/layouts/RootLayout";
import RowMatch from "@/components/row-match/row-match";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Match, MatchDatum } from "@/models/Match";
import { Squad } from "@/models/Squad";
import { Tournament } from "@/models/Tournament";
import { dateFormatItalian } from "@/utils/utils";
import { TabsContent } from "@radix-ui/react-tabs";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useState } from "react";

type Props = {
  matches: { [key: string]: MatchDatum[] };
  matches_final_phase: { [key: string]: MatchDatum[] };
  categories: string[];
  tournament: Tournament[];
  squads: string[];
};

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const slug = context.params?.name?.toString();

  try {
    return {
      props: {
        matches: await getAllMatchGroupByDay(slug as string),
        matches_final_phase: await getAllMatchFinalPhaseGroupByDay(
          slug as string,
          undefined,
          true
        ),
        categories: await getAllCategories(slug as string),
        squads: await getAllDistinctSquads(slug as string),
        tournament: await getTournament(slug as string),
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

Home.getLayout = (page: any) => {
  return <RootLayout>{page}</RootLayout>;
};

export default function Home({
  categories,
  matches,
  matches_final_phase,
  tournament,
  squads,
}: Props) {
  const [filterSquad, setFilterSquad] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  console.debug(matches_final_phase);

  const handleFilterChangeSquad = (event: any) => {
    if (event === "all") {
      event = "";
    }
    setFilterSquad(event);
  };

  const handleFilterChangeCategory = (event: any) => {
    if (event === "all") {
      event = "";
    }

    setFilterCategory(event);
  };

  //Filtra i dati in base al campo "name" e "category"
  const filterData = Object.entries(matches).map(([date, matchesForDate]) =>
    matchesForDate.filter(
      (match) =>
        (match.squad_home.name
          .toLowerCase()
          .includes(filterSquad.toLowerCase()) ||
          match.squad_away.name
            .toLowerCase()
            .includes(filterSquad.toLowerCase())) &&
        match.squad_home.category
          .toLowerCase()
          .includes(filterCategory.toLowerCase())
    )
  );

  //Filtra i dati in base al campo "name" e "category"
  const filterDataFinalPhase = Object.entries(matches_final_phase).map(
    ([date, matchesForDate]) =>
      matchesForDate.filter(
        (match) =>
          match.squad_home.name
            .toLowerCase()
            .includes(filterSquad.toLowerCase()) ||
          match.squad_away.name
            .toLowerCase()
            .includes(filterSquad.toLowerCase())
      )
  );

  return (
    <div className="container flex-1 space-y-4 p-4 md:p-8">
      <Tabs defaultValue="fase-iniziale">
        <div className="bg-[#E4E8EA] sticky top-[125px] py-2 z-[3]">
          <TabsList className="w-full">
            <TabsTrigger className="w-1/2" value="fase-iniziale">
              Fase iniziale
            </TabsTrigger>
            <TabsTrigger className="w-1/2" value="fase-finale">
              Fase finale
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="fase-iniziale">
          <div className="grid grid-cols-2 w-full items-center gap-1.5 sticky top-[170px] bg-[#E4E8EA] z-[2] py-2">
            <div className="text-center [&_button]:bg-white">
              <Label>Nome squadra</Label>
              <Select onValueChange={handleFilterChangeSquad}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleziona la squadra" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">Tutte</SelectItem>
                    {squads.map((squad) => {
                      return (
                        <SelectItem key={squad} value={squad}>
                          {squad}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="text-center [&_button]:bg-white">
              <Label>Categoria</Label>
              <Select onValueChange={handleFilterChangeCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleziona la categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">Tutte</SelectItem>
                    {categories.map((category) => {
                      return (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          {filterData.map((matchesForDate, index) => (
            <div key={index} className="!mt-0">
              {matchesForDate[0]?.day ? (
                <div className="sticky top-[235px] bg-[#E4E8EA] py-2 z-[1]">
                  <h2 className="text-center text-sm font-bold">
                    {dateFormatItalian(matchesForDate[0]?.day, options)}
                  </h2>
                  <Separator className="h-[2px]" />
                </div>
              ) : null}
              <div className="grid gap-2 md:grid-cols-2 place-items-center">
                {matchesForDate.map((match) => (
                  <RowMatch key={match.id} matchProps={match} />
                ))}
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="fase-finale">
          <>
            <h3 className="font-bold text-center">FASE FINALE</h3>
            {filterDataFinalPhase.map((matchesForDate, index) => (
              <div key={index}>
                {matchesForDate[0]?.day ? (
                  <div className="sticky top-[175px] bg-[#E4E8EA] z-[2]">
                    <h2 className="text-center text-sm font-bold mb-2">
                      {dateFormatItalian(matchesForDate[0]?.day, options)}
                    </h2>
                    <Separator className="h-[2px] mb-2" />
                  </div>
                ) : null}
                <div className="grid gap-2 md:grid-cols-2 place-items-center">
                  {matchesForDate.map((match) => (
                    <RowMatch key={match.id} matchProps={match} />
                  ))}
                </div>
              </div>
            ))}
          </>
        </TabsContent>
      </Tabs>
    </div>
  );
}

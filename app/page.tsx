"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useReactQuery } from "./hooks/use-react-query";
import { Tournament } from "./types/database";

export default function Page() {
  const currentYear = new Date().getFullYear();

  const { data, isLoading, error } = useReactQuery<Tournament[]>(
    "fe-tournaments",
    {
      filters: { year: 2025 },
    }
  );

  if (error) {
    return <p className="text-red-500">Errore nel caricamento dei tornei.</p>;
  }

  return (
    <div className="container flex-1 space-y-4 p-4 md:p-8">
      <h1 className="text-4xl font-bold text-cyan-900 mb-4">Eventi</h1>

      <Tabs defaultValue="in-corso" className="w-full">
        <TabsList className="w-full flex justify-start gap-4 mb-6 border-b border-gray-200">
          <TabsTrigger
            value="in-corso"
            className="text-cyan-800 border-b-2 border-cyan-600 pb-2"
          >
            IN CORSO
          </TabsTrigger>
          <TabsTrigger
            value="in-programma"
            className="text-gray-400 pb-2"
            disabled={true}
          >
            IN PROGRAMMA
          </TabsTrigger>
          <TabsTrigger
            value="conclusi"
            className="text-gray-400 pb-2"
            disabled={true}
          >
            CONCLUSI
          </TabsTrigger>
        </TabsList>

        <TabsContent value="in-corso">
          <div className="mb-2 text-lg font-semibold text-cyan-800">
            {currentYear}
          </div>

          {isLoading &&
            [...Array(3)].map((_, i) => (
              <Card key={i} className="mb-3 h-28 w-full">
                <Skeleton className="h-full w-full" />
              </Card>
            ))}

          {!isLoading &&
            data?.data?.length !== 0 &&
            data?.data?.map((tournament: Tournament) => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface TournamentCardProps {
  tournament: Tournament;
}

const TournamentCard = ({ tournament }: TournamentCardProps) => {
  return (
    <Link href={tournament.slug}>
      <Card
        className="mb-3 px-3 text-white gap-0 relative"
        style={{
          backgroundImage: "url(" + tournament.background_image + ")",
          backgroundSize: "cover",
          backgroundPosition: "right",
          maxHeight: "160px",
        }}
      >
        <CardHeader className="absolute w-full flex flex-row items-center justify-between space-y-0 px-0">
          <CardTitle className="text-xl font-bold">{tournament.name}</CardTitle>
        </CardHeader>
        <div className="flex flex-row items-center justify-between pt-8">
          <div className="w-2/3">
            <CardContent className="flex justify-between px-0">
              <div className="text-sm font-medium">
                <div>
                  {`🗓 Dal ${dayjs(tournament.start_date).format(
                    "D MMMM"
                  )} al ${dayjs(tournament.end_date).format("D MMMM YYYY")}`}
                </div>
                <div>{`⚽️ ${tournament.categories_count} categorie - ${tournament.teams_count} squadre`}</div>
              </div>
            </CardContent>
          </div>
          <div className="w-24 h-24">
            <Image
              src={tournament.logo ?? "/default-logo.png"}
              alt="logo"
              width={512}
              height={512}
              className="h-full"
            />
          </div>
        </div>
      </Card>
    </Link>
  );
};

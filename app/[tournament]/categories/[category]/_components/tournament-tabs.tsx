"use client";

import { useReactQuery } from "@/app/hooks/use-react-query";
import { Group, Match, Team } from "@/app/types/database";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dayjs from "@/lib/dayjs-config";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { GroupTable } from "./group-table";
import RowMatch from "./row-match";

interface TournamentTabsProps {
  initialTournament: string;
  initialCategory: string;
  initialTeams: Team[];
}

export default function TournamentTabs({
  initialTournament,
  initialCategory,
  initialTeams,
}: TournamentTabsProps) {
  const [selectedTeam, setSelectedTeam] = useState("all");
  const [activeTab, setActiveTab] = useState("matches");

  const { data: matchData, updateFilters } = useReactQuery(
    `fe-tournaments/${initialTournament}/matches`,
    {
      filters: {
        category_id: initialCategory,
      },
    },
    activeTab === "matches"
  );

  const { data: groupQualificationData } = useReactQuery(
    `fe-tournaments/${initialTournament}/groups`,
    {
      filters: {
        category_id: initialCategory,
        round_type: "qualification",
      },
    },
    activeTab === "qualification"
  );

  const { data: groupFinalRoundData } = useReactQuery(
    `fe-tournaments/${initialTournament}/groups`,
    {
      filters: {
        category_id: initialCategory,
        round_type: "final",
      },
    },
    activeTab === "final"
  );

  const { data: miniGamesData } = useReactQuery(
    `fe-tournaments/${initialTournament}/mini-games`,
    {
      filters: {
        category_id: initialCategory,
      },
    },
    activeTab === "mini-games"
  );

  const { data: rules } = useReactQuery(
    `fe-categories/${initialCategory}/rules`,
    {
      filters: {},
    },
    activeTab === "info"
  );

  const matches = matchData?.data || [];

  const handleFilterChangeSquad = (teamName: string) => {
    setSelectedTeam(teamName);
    updateFilters({
      category_id: initialCategory,
      team: teamName,
    });
  };

  const triggerBaseClasses =
    "pb-2 border-b-2 border-transparent data-[state=active]:border-cyan-600 data-[state=active]:text-cyan-800";

  return (
    <Tabs defaultValue="matches" onValueChange={setActiveTab}>
      <div className="bg-white sticky top-[56px] py-2 z-[3]">
        <TabsList className="w-full">
          <TabsTrigger value="matches" className={triggerBaseClasses}>
            Partite
          </TabsTrigger>
          <TabsTrigger value="qualification" className={triggerBaseClasses}>
            Gironi
          </TabsTrigger>
          {initialCategory != "7" && (
            <TabsTrigger value="final" className={triggerBaseClasses}>
              Fase finale
            </TabsTrigger>
          )}
          {(initialCategory == "5" ||
            initialCategory == "6" ||
            initialCategory == "7") && (
            <TabsTrigger value="mini-games" className={triggerBaseClasses}>
              Sfide
            </TabsTrigger>
          )}
          <TabsTrigger value="info" className={triggerBaseClasses}>
            Info
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="matches" className="!mt-0 space-y-4">
        <div className="grid grid-cols-1 w-full items-center gap-1.5 sticky top-[100px] bg-white z-[3] py-2">
          <div className="text-center">
            <label>Nome squadra</label>
            <Select
              onValueChange={handleFilterChangeSquad}
              value={selectedTeam}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleziona la squadra" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">Tutte</SelectItem>
                  {initialTeams.map((squad: Team) => (
                    <SelectItem key={squad.id} value={squad.id.toString()}>
                      {squad.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {matches.map(
          (matchesData: { day: string; matches: Match[] }, index: number) => {
            return (
              <div key={index}>
                <div className="sticky !top-[175px] bg-white z-[2] py-2">
                  <h2 className="text-center text-sm font-bold mb-2">
                    {`🗓 ${dayjs(matchesData.day).format("D MMMM YYYY")}`}
                  </h2>
                  <Separator className="h-[2px] mb-2" />
                </div>
                <div className="grid gap-2 md:grid-cols-2 place-items-center">
                  {matchesData.matches.map((match: Match) => (
                    <RowMatch key={match.id} matchGame={match} />
                  ))}
                </div>
              </div>
            );
          }
        )}
      </TabsContent>

      <TabsContent value="qualification" className="space-y-4">
        {groupQualificationData?.data.map((item: Group) => {
          return (
            <Card key={item.id} className="p-0 gap-0">
              <CardHeader
                className={
                  "flex flex-row items-center justify-center space-y-0 p-2 rounded-t-xl opacity-90 bg-[#2E3C81] text-white"
                }
              >
                <CardTitle className="text-sm font-medium">
                  {item.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-2">
                <GroupTable data={item.group_teams} />
              </CardContent>
              <div className="flex-1 text-sm text-muted-foreground text-center space-x-2 py-2">
                Classifica aggiornata
              </div>
            </Card>
          );
        })}
      </TabsContent>

      <TabsContent value="final" className="space-y-4">
        {groupFinalRoundData?.data.map((item: Group) => {
          return (
            <Card key={item.id} className="p-0 gap-0">
              <CardHeader
                className={
                  "flex flex-row items-center justify-center space-y-0 p-2 rounded-t-xl opacity-90 bg-[#2E3C81] text-white"
                }
              >
                <CardTitle className="text-sm font-medium">
                  {item.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-2">
                <GroupTable data={item.group_teams} />
              </CardContent>
              <div className="flex-1 text-sm text-muted-foreground text-center space-x-2 py-2">
                Classifica aggiornata
              </div>
            </Card>
          );
        })}
      </TabsContent>

      <TabsContent value="mini-games" className="space-y-4">
        {/* {miniGamesData?.data.map((item: Match[]) => { */}
        {miniGamesData?.data.map(
          (item: { match_type: string; matches: Match[] }) => {
            const isShotOut = item.match_type === "shot-out";

            return (
              <div key={item.match_type}>
                <div className="text-center mb-4">
                  {isShotOut ? (
                    <>
                      <h3 className="text-xl font-bold">GIOCO 1</h3>
                      <p className="font-semibold">Shoot-out di squadra</p>
                      <p>
                        Ogni giocatore, partendo da 15m, ha 7 secondi per
                        segnare al portiere avversario.
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-center">
                        <Image
                          src="/images/tiro_al_bersaglio.png"
                          alt="tiro_al_bersaglio"
                          width={512}
                          height={512}
                          className="h-52 w-52 scale-150"
                        />
                      </div>
                      <h3 className="text-xl font-bold">GIOCO 2</h3>
                      <p className="font-semibold">
                        Tiro al bersaglio individuale
                      </p>
                      <p>
                        Ogni giocatore ha 3 tiri da 7 metri (5m per scuola
                        calcio) per fare il miglior punteggio.
                      </p>
                    </>
                  )}
                </div>

                <div
                  className={clsx(
                    "grid gap-2 place-items-center md:grid-cols-2"
                  )}
                >
                  {item.matches.map((match: Match) => {
                    if (isShotOut) {
                      return <RowMatch key={match.id} matchGame={match} />;
                    } else {
                      return <RowMatch key={match.id} matchGame={match} />;
                    }
                  })}
                </div>
              </div>
            );
          }
        )}
      </TabsContent>

      <TabsContent value="info" className="space-y-4">
        <div dangerouslySetInnerHTML={{ __html: rules?.data[0].rules }} />
      </TabsContent>
    </Tabs>
  );
}

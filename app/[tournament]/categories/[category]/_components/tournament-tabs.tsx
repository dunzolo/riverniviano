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

  return (
    <Tabs defaultValue="matches" onValueChange={setActiveTab}>
      <div className="bg-white sticky top-[56px] py-2 z-[3]">
        <TabsList className="w-full">
          <TabsTrigger value="matches">Partite</TabsTrigger>
          <TabsTrigger value="qualification">Gironi</TabsTrigger>
          <TabsTrigger value="final">Fase finale</TabsTrigger>
          <TabsTrigger value="info">Info</TabsTrigger>
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

      <TabsContent value="info" className="space-y-4">
        <div dangerouslySetInnerHTML={{ __html: rules?.data[0].rules }} />
      </TabsContent>
    </Tabs>
  );
}

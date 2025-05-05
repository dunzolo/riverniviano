import { Match } from "@/app/types/database";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
// import { MatchDatum } from "@/models/Match";
// import { timeFormatHoursMinutes } from "@/utils/utils";
import { clsx } from "clsx";
import Image from "next/image";

interface RowMatchProps {
  matchGame: Match;
  showBgColor?: boolean;
  showCardHeader?: boolean;
}

export default function RowMatch({ matchGame }: RowMatchProps) {
  const {
    home_team,
    home_team_placeholder,
    away_team,
    away_team_placeholder,
    field,
    group,
    result,
    time,
    time_placeholder,
    result_placeholder,
  } = matchGame;

  return (
    <Card
      className={clsx(
        "p-0 gap-0 rounded-xl w-[99%] mb-2 relative bg-opacity-90"
      )}
    >
      <CardHeader className="gap-0 rounded-t-xl px-4 py-2 opacity-90 bg-[#2E3C81] text-white">
        <CardTitle className="text-sm font-medium flex justify-between">
          {field && <span>{`🏟️​ ${field}`}</span>}
          {time_placeholder ? (
            time_placeholder
          ) : (
            <span>{`🕛​ ${time?.split(":").slice(0, 2).join(":")}`}</span>
          )}
          {group?.name && <span>{group?.name}</span>}
        </CardTitle>
      </CardHeader>
      <div className="min-h-16 w-full flex items-center justify-between text-xs font-bold">
        <div className="w-1/3 flex items-center">
          {home_team?.logo && (
            <Image
              src={home_team.logo}
              alt={home_team.name.toLowerCase()}
              width={50}
              height={50}
            />
          )}
          {home_team?.name ?? home_team_placeholder}
        </div>
        <div className="rounded min-w-[55px] max-w-[85px] bg-white bg-opacity-50 text-center p-1">
          <div>
            <span className="text-center">{result}</span>
          </div>
          <div>
            {result_placeholder && (
              <span className="text-center">{result_placeholder}</span>
            )}
          </div>
        </div>
        <div className="w-1/3 flex items-center justify-end">
          <span className="text-end">
            {away_team?.name ?? away_team_placeholder}
          </span>
          {away_team?.logo && (
            <Image
              src={away_team.logo}
              alt={away_team.name.toLowerCase()}
              width={50}
              height={50}
            />
          )}
        </div>
      </div>
    </Card>
  );
}

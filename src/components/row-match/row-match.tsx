import { MatchDatum } from "@/models/Match";
import {
  dateFormatItalian,
  getBackgroundColorCard,
  timeFormatHoursMinutes,
} from "@/utils/utils";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { clsx } from "clsx";
import Image from "next/image";

interface MatchClientProps {
  matchProps: MatchDatum;
  showBgColor?: boolean;
  showCardHeader?: boolean;
}

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default function RowMatch({ matchProps }: MatchClientProps) {
  const { squad_home, squad_away, hour, field, outcome, day } = matchProps;

  return (
    <Card className={clsx("rounded-xl w-[99%] mb-2 relative bg-opacity-90")}>
      <CardHeader
        className={clsx(
          "rounded-t-xl bg-muted px-4 py-2 opacity-90 text-white",
          getBackgroundColorCard(squad_home.category)
        )}
      >
        <CardTitle className="text-sm font-medium flex justify-between">
          <div className="flex gap-2">
            <span>⚽️</span>
            <span>{squad_home.category}</span>
          </div>
          <span>
            {squad_home.show_label_group ? "GIRONE " + squad_home.group : ""}
          </span>
        </CardTitle>
      </CardHeader>
      <div className="min-h-16 w-full flex items-center justify-between text-xs font-bold">
        <div className="w-1/3 flex items-center">
          {squad_home.logo && (
            <Image
              src={squad_home.logo}
              alt={squad_home.name.toLowerCase()}
              width={50}
              height={50}
            />
          )}
          {squad_home.name}
        </div>
        <div className="rounded min-w-[55px] max-w-[85px] bg-white bg-opacity-50 text-center p-1">
          <span className="text-center">
            {outcome ? outcome : timeFormatHoursMinutes(hour)}
            {/* {outcome ? outcome : "Spes Borgotrebbia d.c.r."} */}
          </span>
        </div>
        <div className="w-1/3 flex items-center justify-end">
          <span className="text-end">{squad_away.name}</span>
          {squad_away.logo && (
            <Image
              src={squad_away.logo}
              alt={squad_away.name.toLowerCase()}
              width={50}
              height={50}
            />
          )}
        </div>
      </div>
    </Card>
  );
}

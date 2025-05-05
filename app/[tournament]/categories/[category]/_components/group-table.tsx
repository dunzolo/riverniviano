import { GroupTeam } from "@/app/types/database";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

interface GroupTableProps {
  data: GroupTeam[];
}

export function GroupTable({ data }: GroupTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Logo</TableHead>
            <TableHead className="min-w-[150px]">Nome</TableHead>
            <TableHead className="w-[60px] text-center">PT</TableHead>
            <TableHead className="w-[60px] text-center">GF</TableHead>
            <TableHead className="w-[60px] text-center">GS</TableHead>
            <TableHead className="w-[60px] text-center">+/-</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item: GroupTeam) => (
            <TableRow key={item.id}>
              <TableCell>
                {item.team?.logo && (
                  <Image
                    src={item.team?.logo}
                    alt={item.team?.name.toLowerCase()}
                    width={50}
                    height={50}
                  />
                )}
              </TableCell>
              <TableCell>{item.team?.name ?? item.team_placeholder}</TableCell>
              <TableCell className="text-center">{item.points}</TableCell>
              <TableCell className="text-center">{item.goal_scored}</TableCell>
              <TableCell className="text-center">
                {item.goal_conceded}
              </TableCell>
              <TableCell className="text-center">
                {item.goal_difference}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

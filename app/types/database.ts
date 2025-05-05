import { Tables } from "./database.types";

export type Tournament = Tables<"tournaments"> & {
    categories_count: number;
    teams_count: number;
};
export type Category = Tables<"categories">;

export type Group = Tables<"groups"> & {
    category: Category;
    tournament: Tournament;
    group_teams: GroupTeam[];
};

export type GroupTeam = Tables<"group_teams"> & {
    group: Group;
    team: Team;
}

export type Match = Tables<"matches"> & {
    category: Category;
    tournament: Tournament;
    group: Group;
    home_team: Team;
    away_team: Team;
    result: string;
};

export type Team = Tables<"teams"> & {
    category: Category;
};
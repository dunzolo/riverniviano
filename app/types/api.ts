import { Database } from "./database.types.js";

// Tipizzazione della risposta delle API
export type TournamentsResponse = {
  data: Database["public"]["Tables"]["tournaments"]["Row"][];
};

export type GroupsResponse = {
  data: Database["public"]["Tables"]["groups"]["Row"][];
};

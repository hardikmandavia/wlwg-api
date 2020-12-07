import { getUrl, fetch } from ".";
import LeagueEntry from "../schemas/LeagueEntry";

const endpoint = `league/v4`;

export const getLeaguesBySummoner = (region: string, id: string) => {
  const method = "entries/by-summoner";
  const url = `${getUrl(region, endpoint, method)}/${id}`;
  return fetch<LeagueEntry[]>(`${url}`);
};

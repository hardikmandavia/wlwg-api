import { getUrl, fetch } from ".";

import Match from "src/schemas/Match";
import MatchList from "../schemas/MatchList";

const endpoint = "match/v4";

export const getMatchListByAccount = (region: string, accountId: string) => {
  const method = "matchlists/by-account";
  const url = `${getUrl(region, endpoint, method)}/${accountId}`;
  return fetch<MatchList>(`${url}`);
};

export const getMatchByGameId = (region: string, gameId: number) => {
  const method = "matches";
  const url = `${getUrl(region, endpoint, method)}/${gameId}`;
  return fetch<Match>(`${url}`);
};

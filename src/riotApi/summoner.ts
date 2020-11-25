import { getUrl, fetch } from ".";
import Summoner from "../schemas/Summoner";

const endpoint = "summoner/v4";

export const getSummonerByName = (region: string, name: string) => {
  const method = "summoners/by-name";
  const url = `${getUrl(region, endpoint, method)}/${name}`;
  return fetch<Summoner>(`${url}`);
};

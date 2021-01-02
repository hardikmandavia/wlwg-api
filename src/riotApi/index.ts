import axios from "axios";

import { env } from "../environment";
const { riot } = env;

export const API_VER = "v4";

export const getUrl = (
  region: string,
  endpoint: string,
  method: string
): string => {
  return `https://${region}.api.riotgames.com/lol/${endpoint}/${method}`;
};

const headers = {
  Origin: "https://developer.riotgames.com",
  "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
  "X-Riot-Token": riot.key,
  "Accept-Language": "en,en-US;q=0.9,en-GB;q=0.8",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36",
};

export const fetch = async <T>(url: string) => {
  const res = await axios.get<T>(url, { headers });
  return res.data;
};

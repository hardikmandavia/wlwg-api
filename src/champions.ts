import axios from "axios";
import fs from "fs";

interface ChampionInfo {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

interface ChampionImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface ChampionStats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
}

export interface Champion {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: ChampionInfo;
  image: ChampionImage;
  tags: string[];
  partype: string;
  stats: ChampionStats;
}

interface ChampionResponse {
  type: string;
  format: string;
  version: string;
  data: { [key: string]: Champion };
}

let url =
  "http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion.json";

axios(url)
  .then((res: any) => {
    const response: ChampionResponse = res.data;
    const { data } = response;
    const values = Object.values(data);
    const formatted: { [key: string]: Champion } = {};

    values.forEach((c: Champion) => {
      const key: string = c.key;
      formatted[key] = c;
    });

    fs.writeFileSync("src/champion-data.json", JSON.stringify(formatted));
  })
  .catch((err) => {
    throw err;
  });

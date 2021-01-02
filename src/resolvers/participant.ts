import { Resolver, FieldResolver, Root } from "type-graphql";

import Participant from "../schemas/Participant";
import Champion from "../schemas/Champion";

import * as champions from "../champion-data.json";
import { Champion as ChampionType } from "../champions";

@Resolver(() => Participant)
export default class {
  @FieldResolver()
  champion(@Root() participant: Participant): Champion {
    const { id, key, name } = (champions as { [key: string]: ChampionType })[
      participant.championId.toString()
    ];

    return {
      id,
      key,
      name,
    };
  }
}

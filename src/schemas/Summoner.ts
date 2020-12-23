import { Field, ObjectType } from "type-graphql";

import LeagueEntry from "./LeagueEntry";

@ObjectType()
export default class Summoner {
  @Field()
  id: string;

  @Field()
  accountId: string;

  @Field()
  puuid: string;

  @Field()
  name: string;

  @Field()
  profileIconId: number;

  @Field()
  revisionDate: number;

  @Field()
  summonerLevel: number;

  @Field()
  region: string;

  @Field(() => [LeagueEntry])
  ranked: LeagueEntry[];
}

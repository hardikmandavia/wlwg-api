import { Field, ObjectType } from "type-graphql";

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

  // @Field(type => [LeagueEntry])
  // ranked: LeagueEntry[];

  // @Field(type => MatchList)
  // matchList: MatchList;
}

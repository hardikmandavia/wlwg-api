import { Field, ObjectType } from "type-graphql";

import TeamBans from "./TeamBans";

@ObjectType()
export default class TeamStats {
  @Field()
  towerKills: number;

  @Field()
  riftHeraldKills: number;

  @Field()
  firstBlood: boolean;

  @Field()
  inhibitorKills: number;

  @Field(() => [TeamBans])
  bans: TeamBans[]; // If match queueId has a draft, contains banned champion data, otherwise empty.

  @Field()
  firstBaron: boolean;

  @Field()
  firstDragon: boolean;

  @Field()
  dragonKills: number;

  @Field()
  baronKills: number;

  @Field()
  firstInhibitor: boolean;

  @Field()
  firstTower: boolean;

  @Field()
  firstRiftHerald: boolean;

  @Field()
  teamId: number; // 100 for blue side. 200 for red side.

  @Field()
  win: string; // String indicating whether or not the team won. There are only two values visibile in public match history. (Legal values: Fail, Win)
}

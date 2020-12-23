import { Field, ObjectType } from "type-graphql";

import ParticipantStats from "./ParticipantStats";
import ParticipantTimeline from "./ParticipantTimeline";

@ObjectType()
export default class Participant {
  @Field()
  participantId: number;

  @Field()
  championId: number;

  @Field()
  stats: ParticipantStats;

  @Field()
  teamId: number; // 100 for blue side. 200 for red side.

  @Field()
  timeline: ParticipantTimeline;

  @Field()
  spell1Id: number;

  @Field()
  spell2Id: number;

  @Field()
  highestAchievedSeasonTier: string; // (Legal values: CHALLENGER, MASTER, DIAMOND, PLATINUM, GOLD, SILVER, BRONZE, UNRANKED)
}

import { Field, ObjectType } from "type-graphql";

import ParticipantIdentity from "./ParticipantIdentity";
import TeamStats from "./TeamStats";
import Participant from "./Participant";

@ObjectType()
export default class Match {
  @Field()
  gameId: number;

  @Field(() => [ParticipantIdentity])
  participantIdentities: ParticipantIdentity[];

  @Field()
  queueId: number;

  @Field()
  gameType: string;

  @Field()
  gameDuration: number; // Match duration in seconds

  @Field(() => [TeamStats])
  teams: TeamStats[];

  @Field()
  platformId: string;

  @Field()
  gameCreation: number; // Designates the timestamp when champion select ended and the loading screen appeared, NOT when the game timer was at 0:00.

  @Field()
  seasonId: number;

  @Field()
  gameVersion: string;

  @Field()
  mapId: number;

  @Field()
  gameMode: string;

  @Field(() => [Participant])
  participants: Participant[];
}

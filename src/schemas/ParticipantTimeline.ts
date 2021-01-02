import { Field, ObjectType } from "type-graphql";

import TimelineDelta from "./TimelineDelta";

@ObjectType()
export default class ParticipantTimeline {
  @Field()
  participantId: number;

  @Field()
  csDiffPerMin: TimelineDelta; //	Creep score difference versus the calculated lane opponent(s) for a specified period.
  csDiffPerMinDeltas: { [key: string]: number };

  @Field()
  damageTakenPerMin: TimelineDelta; // Damage taken for a specified period.
  damageTakenPerMinDeltas: { [key: string]: number };

  @Field()
  role: string; //	Participant's calculated role. (Legal values: DUO, NONE, SOLO, DUO_CARRY, DUO_SUPPORT)

  @Field()
  damageTakenDiffPerMin: TimelineDelta; // Damage taken difference versus the calculated lane opponent(s) for a specified period.
  damageTakenDiffPerMinDeltas: { [key: string]: number };

  @Field()
  xpPerMin: TimelineDelta; //	Experience change for a specified period.
  xpPerMinDeltas: { [key: string]: number };

  @Field()
  xpDiffPerMin: TimelineDelta; //	Experience difference versus the calculated lane opponent(s) for a specified period.
  xpDiffPerMinDeltas: { [key: string]: number };

  @Field()
  lane: string; //	Participant's calculated lane. MID and BOT are legacy values. (Legal values: MID, MIDDLE, TOP, JUNGLE, BOT, BOTTOM)

  @Field()
  creepsPerMin: TimelineDelta; //	Creeps for a specified period.
  creepsPerMinDeltas: { [key: string]: number };

  @Field()
  goldPerMin: TimelineDelta; //	Gold for a specified period.
  goldPerMinDeltas: { [key: string]: number };
}

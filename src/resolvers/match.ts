import { Arg, Query, Resolver } from "type-graphql";

import Match from "../schemas/Match";
import ParticipantTimeline from "../schemas/ParticipantTimeline";

import { getMatchByGameId } from "../riotApi/matches";

@Resolver(() => Match)
export default class {
  @Query(() => Match)
  match(
    @Arg("region") region: string,
    @Arg("gameId") gameId: number
  ): Promise<Match> {
    return getMatchByGameId(region, gameId).then((data: Match) => {
      const formatted = { ...data };
      formatted.participants = formatted.participants.map((p) => ({
        ...p,
        timeline: formatTimeline(p.timeline),
      }));

      return formatted;
    });
  }
}

const formatTimeline = (timeline: ParticipantTimeline) => {
  const {
    creepsPerMinDeltas,
    damageTakenDiffPerMinDeltas,
    damageTakenPerMinDeltas,
    xpDiffPerMinDeltas,
    xpPerMinDeltas,
    goldPerMinDeltas,
  } = timeline;

  timeline.creepsPerMin = formatDeltas(creepsPerMinDeltas);
  timeline.damageTakenDiffPerMin = formatDeltas(damageTakenDiffPerMinDeltas);
  timeline.damageTakenPerMin = formatDeltas(damageTakenPerMinDeltas);
  timeline.xpDiffPerMin = formatDeltas(xpDiffPerMinDeltas);
  timeline.xpPerMin = formatDeltas(xpPerMinDeltas);
  timeline.goldPerMin = formatDeltas(goldPerMinDeltas);

  return timeline;
};

const formatDeltas = (deltas: { [key: string]: number }) => {
  return {
    p0: deltas["0-10"] || 0,
    p1: deltas["10-20"] || 0,
    p2: deltas["20-30"] || 0,
    p3: deltas["30-end"] || 0,
  };
};

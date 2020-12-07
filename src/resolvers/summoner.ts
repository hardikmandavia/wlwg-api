import { Arg, Query, Resolver, FieldResolver, Root } from "type-graphql";

import LeagueEntry from "../schemas/LeagueEntry";
import Summoner from "../schemas/Summoner";

import { getSummonerByName } from "../riotApi/summoner";
import { getLeaguesBySummoner } from "../riotApi/league";  

@Resolver(() => Summoner)
export default class {
  @Query(() => Summoner)
  async summoner(
    @Arg("region") region: string,
    @Arg("name") name: string
  ): Promise<Summoner> {
    return getSummonerByName(region, name)
    .then((data: Summoner) => ({
      ...data,
      region,
    }));
  }

  @FieldResolver()
  ranked(@Root() summoner: Summoner): Promise<LeagueEntry[]> {
    return getLeaguesBySummoner(summoner.region, summoner.id);
  }
}

import { Arg, FieldResolver, Query, Resolver } from "type-graphql";

import Summoner from "../schemas/Summoner";

import { getSummonerByName } from "../riotApi/summoner";

@Resolver()
export default class SummonerResolver {
  @Query(() => Summoner)
  fetchSummoner(
    @Arg("region") region: string,
    @Arg("name") name: string
  ): Promise<Summoner> {
    return getSummonerByName(region, name);
  }
}

import { Arg, Query, Resolver } from "type-graphql";

import MatchList from "../schemas/MatchList";

import { getMatchListByAccount } from "../riotApi/matches";

@Resolver(() => MatchList)
export default class {
  @Query(() => MatchList)
  matchList(
    @Arg("region") region: string,
    @Arg("accountId") accountId: string
  ): Promise<MatchList> {
    return getMatchListByAccount(region, accountId);
  }
}

import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class Player {
  @Field()
  profileIcon: number;

  @Field()
  accountId: string;

  @Field()
  matchHistoryUri: string;

  @Field()
  currentAccountId: string; // Player's current accountId when the match was played.

  @Field()
  currentPlatformId: string; // Player's current platformId when the match was played.

  @Field()
  summonerName: string;

  @Field()
  summonerId: string; // Player's summonerId (Encrypted)

  @Field()
  platformId: string; // Player's original platformId.
}

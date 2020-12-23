import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class MatchReference {
  @Field()
  gameId: number;

  @Field()
  role: string;

  @Field()
  season: number;

  @Field()
  platformId: string;

  @Field()
  champion: number;

  @Field()
  queue: number;

  @Field()
  lane: string;

  @Field()
  timestamp: number;
}

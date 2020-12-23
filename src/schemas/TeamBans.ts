import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class TeamBans {
  @Field()
  championId: number;
  pickTurn: number;
}

import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class TimelineDelta {
  @Field()
  p0: number;

  @Field()
  p1: number;

  @Field()
  p2: number;

  @Field()
  p3: number;
}

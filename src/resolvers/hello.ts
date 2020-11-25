import { Resolver, Query, Ctx } from "type-graphql";

@Resolver()
export default class HelloResolver {
  @Query(() => String)
  hello(@Ctx() ctx: any) {
    console.log("----REQ: ", ctx.req);
    return "Hello";
  }
}

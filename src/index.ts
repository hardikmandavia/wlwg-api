import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { env } from "./environment";
import * as resolvers from "./resolvers";

const main = async () => {
  const schema = await buildSchema({
    resolvers: Object.values(resolvers) as any,
    emitSchemaFile: true,
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }) => ({ params: req.body }),
  });

  console.log(env);

  apolloServer
    .listen(env.port)
    .then(({ url }) => console.log(`Server ready at ${url}`));;;
};

main().catch((err) => {
  console.log(err);
});

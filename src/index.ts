import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { HelloResolver, SummonerResolver } from "./resolvers";

import { env } from "./environment";

const main = async () => {
  const app = express();

  const schema = await buildSchema({
    resolvers: [HelloResolver, SummonerResolver],
    emitSchemaFile: true,
    validate: false,
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }) => ({ params: req.body }),
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  console.log(env);

  app.listen(env.port, () => {
    console.log(`server started on port ${env.port}`);
  });
};

main().catch((err) => {
  console.log(err);
});

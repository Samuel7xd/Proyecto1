import { startApolloServer } from "./app.js";
import {typeDefs} from "./graphql/typeDefs.js";
import unifiedResolvers from "./graphql/resolvers.js";
// index.js (or app.js)
import { conectarPreso, conectarPoderJudicial } from "./db.js";

(async () => {
  await conectarPreso();
  await conectarPoderJudicial();

  // Start Apollo Server
  await startApolloServer(typeDefs, unifiedResolvers);
})();

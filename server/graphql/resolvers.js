import presoResolvers from "./resolvers/preso.js";
import poderjudicialResolvers from "./resolvers/poderjudicial.js";

const unifiedResolvers = {
  Query: {
    ...presoResolvers.Query,
    ...poderjudicialResolvers.Query,
  },
  Mutation: {
    ...presoResolvers.Mutation,
    ...poderjudicialResolvers.Mutation,
  },
  Preso: {
    ...presoResolvers.Curso,
  },
  PoderJudicial: {
    ...poderjudicialResolvers.Pago,
  },
};

export default unifiedResolvers;

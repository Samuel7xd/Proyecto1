import PoderJudicial from "../../models/poder.judicial.js";

const poderJudicialResolvers = {
  Query: {
    getPoderJudicials: async () => {
      return await PoderJudicial.find();
    },
    getPoderJudicialById: async (_, { id }) => {
      return await PoderJudicial.findById(id);
    },
  },
  Mutation: {
    createPoderJudicial: async (_, { input }) => {
      const poderJudicial = new PoderJudicial(input);
      return await poderJudicial.save();
    },
    updatePoderJudicial: async (_, { id, input }) => {
      return await PoderJudicial.findByIdAndUpdate(id, input, { new: true });
    },
    deletePoderJudicial: async (_, { id }) => {
      return await PoderJudicial.findByIdAndDelete(id);
    },
  },
  Preso: {
    // Add any specific Preso resolvers here
  },
  PoderJudicial: {
    // Add any specific PoderJudicial resolvers here
  },
};

export default poderJudicialResolvers;

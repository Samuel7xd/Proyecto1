import Preso from "../../models/preso.js";

const presoResolvers = {
  Query: {
    getPresos: async () => {
      return await Preso.find();
    },
    getPresoById: async (_, { id }) => {
      return await Preso.findById(id);
    },
    getPresosByPoderJudicial: async (_, { idPoderJudicial }) => {
      return await Preso.find({IdPoderJudicial: idPoderJudicial});
    },
  },
  Mutation: {
    createPreso: async (_, { input }) => {
      const preso = new Preso(input);
      return await preso.save();
    },
    updatePreso: async (_, { id, input }) => {
      return await Preso.findByIdAndUpdate(id, input, { new: true });
    },
    deletePreso: async (_, { id }) => {
      return await Preso.findByIdAndDelete(id);
    },
  },
  Preso: {
    // Add any specific Preso resolvers here
  },
  PoderJudicial: {
    // Add any specific PoderJudicial resolvers here
  },
};

export default presoResolvers;

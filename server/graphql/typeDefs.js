import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Query {
    getPresos: [Preso]
    getPresoById(id: String!): Preso
    getPresosByPoderJudicial(idPoderJudicial: String!): [Preso]
    getPoderJudicials: [PoderJudicial]
    getPoderJudicialById(id: String!): PoderJudicial
  }

  type Mutation {
    createPreso(input: PresoInput): Preso
    updatePreso(id: String!, input: PresoInput): Preso
    deletePreso(id: String!): Preso
    createPoderJudicial(input: PoderJudicialInput): PoderJudicial
    updatePoderJudicial(id: String!, input: PoderJudicialInput): PoderJudicial
    deletePoderJudicial(id: String!): PoderJudicial
  }

  input PresoInput {
    nombre: String!
    dni: String!
    fecha_entrada: String!
    IdPoderJudicial: String!
  }

  input PoderJudicialInput {
    condena: String!
    periodo: String!
  }

  type Preso {
    _id: ID!
    nombre: String!
    dni: String!
    fecha_entrada: String!
    IdPoderJudicial: String!
  }

  type PoderJudicial {
    _id: ID!
    condena: String!
    periodo: String!
  }
`;
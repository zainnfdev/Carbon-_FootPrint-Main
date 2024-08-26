const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Home {
    _id: ID
    waterEmissions: Int
    electricityEmissions: Int
    heatEmissions: Int
  }

  type Travel {
    _id: ID
    vehicleEmissions: Int
    publicTransitEmissions: Int
    planeEmissions: Int
  }

  type Pledge {
    _id: ID
    action: String
    description: String
    icon: String
    link: String
  }

  type User {
    _id: ID
    username: String
    email: String
    homeData: [Home]
    travelData: [Travel]
    pledgeData: [Pledge]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    pledges: [Pledge]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addTravel(
      vehicleEmissions: Int!
      publicTransitEmissions: Int!
      planeEmissions: Int!
    ): User
    addHome(
      waterEmissions: Int!
      electricityEmissions: Int!
      heatEmissions: Int!
    ): User
    addPledge(pledgeData: [ID]): User
    removePledge(pledgeData: ID): User
  }
`;

module.exports = typeDefs;

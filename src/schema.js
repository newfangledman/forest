const { gql } = require("apollo-server-lambda")

module.exports.typeDefs = gql`
  type Plant {
    id: String!
    commonName: String!
    wiki: String!
    latinName: String!
    imageUrl: String!
    shade: String!
    sun: String!
    water: String!
    hardinessZone: String!
    headZone: String!
  }
  type Query {
    getPlants: [Plant]
    getPlantsBy: [Plant]
  }
`

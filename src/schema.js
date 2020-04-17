const { gql } = require("apollo-server-lambda")

module.exports.typeDefs = gql`
  enum Shade {
    PERMANENT
    PARTIAL
    LIGHT
    NONE
  }

  enum Sun {
    FULL
    PARTIAL
    NONE
  }

  enum Water {
    AQUATIC
    HIGH
    MODERATE
    LOW
  }

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
    heatZone: String!
  }
  type Query {
    getPlants: [Plant]
    getPlantsBy(
      shade: Shade
      sun: Sun
      water: Water
      hardinessZone: String
      heatZone: String
    ): [Plant]
  }
`

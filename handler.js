const { ApolloServer } = require("apollo-server-lambda")
const { resolvers } = require("./src/resolvers")
const { typeDefs } = require("./src/schema")
const { PlantsAPI } = require("./src/dataSources")

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      plantsAPI: new PlantsAPI(),
    }
  },
})

module.exports.graphqlHandler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
})

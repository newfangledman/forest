const { ApolloServer } = require("apollo-server-lambda")
const { resolvers } = require("./src/resolvers")
const { typeDefs } = require("./src/schema")

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

module.exports.graphqlHandler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
})

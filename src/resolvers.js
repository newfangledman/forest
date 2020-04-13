module.exports.resolvers = {
  Query: {
    getPlants: async (_, __, { dataSources }) => {
      const result = await dataSources.plantsAPI.getPlants()
      return result.data
    },
    getPlantsBy: async (_, args) => {
      console.log(args)
      return []
    },
  },
}

function includesAllOf(filters, toTest) {
  return (
    [...new Set(toTest)].filter((value) =>
      typeof value === "string"
        ? new Set(filters).has(value.toLowerCase())
        : false
    ).length === filters.length
  )
}

module.exports.resolvers = {
  Query: {
    getPlants: async (_, __, { dataSources }) => {
      const { data } = await dataSources.plantsAPI.getPlants()
      return data
    },
    getPlantsBy: async (_, args, { dataSources }) => {
      const { data } = await dataSources.plantsAPI.getPlants()
      const filters = {}
      for (const value in args) {
        filters[value] = args[value].toLowerCase()
      }
      const result = data.filter((plant) =>
        includesAllOf(Object.values(filters), Object.values(plant))
      )
      return result
    },
  },
}

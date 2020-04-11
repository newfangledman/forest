const { RESTDataSource } = require("apollo-datasource-rest")

class PlantsAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL =
      "https://raw.githubusercontent.com/newfangledman/forest/master/"
  }

  async getPlants() {
    const data = await this.get("db.json")
    return JSON.parse(data)
  }
}

module.exports = {
  PlantsAPI,
}

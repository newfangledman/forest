var fs = require("fs")
var data = JSON.parse(fs.readFileSync("./data.json", "utf8"))

const cleanData = []

for (const plant in data) {
  cleanData.push(createObj(data[plant]))
}

function createObj(plant) {
  console.log(plant)
  const base = {}
}

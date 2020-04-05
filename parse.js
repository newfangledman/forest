var fs = require("fs")
var obj = JSON.parse(fs.readFileSync("./data.json", "utf8"))

const data = []

for (const key in obj) {
  data.push(createObj(obj))
}

function createObj(obj) {
  const base = {}
}

const fs = require("fs")
const input = JSON.parse(fs.readFileSync("./input.json", "utf8"))
const uid = require("uid")

const data = []

for (const plant in input) {
  data.push(createObj(plant, input[plant]))
}

function getAttributeValue(data) {
  return function (key, attribute = false) {
    const base = data[`Has ${key}`][0]
    const value = base ? (attribute ? base[attribute] : base) : ""
    return value
  }
}

function split(text) {
  return text ? text.split(" ")[0] : ""
}

function createObj(plant, { printouts }) {
  const attributeGetter = getAttributeValue(printouts)
  return {
    id: uid(),
    commonName: attributeGetter("common name", "fulltext"),
    wiki: attributeGetter("common name", "fullurl"),
    latinName: plant,
    imageUrl: attributeGetter("image", "fullurl"),
    shade: split(attributeGetter("shade tolerance", "fulltext")),
    sun: split(attributeGetter("sun preference", "fulltext")),
    water: attributeGetter("water requirements"),
    hardinessZone: attributeGetter("hardiness zone", "fulltext"),
    heatZone: attributeGetter("heat zone"),
  }
}
fs.writeFile("db.json", JSON.stringify({ data: [...data] }), (e) => {
  if (e) {
    throw e
  }
})

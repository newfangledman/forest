const fs = require('fs')
const input = JSON.parse(fs.readFileSync('./input.json', 'utf8'))
const uid = require('uid')
// query:
// http --timeout=300 https://practicalplants.org/w/api.php\?format\=json\&action\=ask\&query\=%5B%5BCategory%3APlant%5D%5D%7C%3FHas%20image%7C%3FHas%20common%20name%7C%3FHas%20shade%20tolerance%7C%3FHas%20sun%20preference%7C%3FHas%20water%20requirements%7C%3FHas%20hardiness%20zone%7C%3FHas%20heat%20zone\|limit%3D8000 | jq ".query.results"
const data = []

for (const plant in input) {
  data.push(createObj(plant, input[plant]))
}

function getAttributeValue(data) {
  return function(key, attribute = false) {
    const base = data[`Has ${key}`][0]
    const value = base ? (attribute ? base[attribute] : base) : ''
    return value
  }
}

function split(text) {
  return text ? text.split(' ')[0] : ''
}

function createObj(plant, { printouts }) {
  const attributeGetter = getAttributeValue(printouts)
  const base = {
    id: uid(),
    commonName: attributeGetter('common name', 'fulltext'),
    wiki: attributeGetter('common name', 'fullurl'),
    latinName: plant,
    imageUrl: attributeGetter('image', 'fullurl'),
    shade: split(attributeGetter('shade tolerance', 'fulltext')),
    sun:
      split(attributeGetter('shade tolerance', 'fulltext')) === 'permanent'
        ? 'Light'
        : split(attributeGetter('sun preference', 'fulltext')),
    water: attributeGetter('water requirements'),
    hardinessZone: attributeGetter('hardiness zone', 'fulltext'),
    heatZone: attributeGetter('heat zone'),
  }

  const result = {}
  for (const [key, value] of Object.entries(base)) {
    result[key.toLowerCase()] =
      typeof value === 'string' ? value.toLowerCase() : value
  }
  return result
}
fs.writeFile('db.json', JSON.stringify({ data: [...data] }), e => {
  if (e) {
    throw e
  }
})

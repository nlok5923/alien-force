const path = require('path')
const fs = require('fs')

var bigchill = fs.readFileSync(path.join(__dirname, 'arts', 'bigchill.txt')).toString()

console.log(bigchill)
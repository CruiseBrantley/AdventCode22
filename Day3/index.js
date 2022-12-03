const fs = require('fs')
const data = fs.readFileSync('Day3/data', 'utf8')
const lines = data.split(/\n/)

let start = performance.now()
const elapsedPerf = started => 'Elapsed: ' + ((performance.now() - started) * 1000).toFixed(3) + 'µs'
const leftRucksacks = [], rightRucksacks = []

const split = string => [string.slice(0, string.length / 2), string.slice(string.length / 2)]
for(let i = 0; i < lines.length; i++) [leftRucksacks[i], rightRucksacks[i]] = split(lines[i])

const convertString = string => {
  let value = 0
  for(let i = 0; i < string.length; i++) value += string[i].toUpperCase() === string[i] ? string.charCodeAt(i) - 38 : string.charCodeAt(i) - 96
  return value
}

const findDupe = (str1, str2) => {
  for(let i = 0; i < str1.length; i++) if(str1.includes(str2[i])) return str2[i]
}

const findAllDupes = (str1, str2) => {
  let dupeStr = ''
  for(let i = 0; i < str1.length; i++) dupeStr += findDupe(str1[i], str2[i])
  return dupeStr
}

const solvePart1 = () => convertString(findAllDupes(leftRucksacks, rightRucksacks))

console.log('Part 1: ', solvePart1(), elapsedPerf(start) )

start = performance.now()
const firstRucksacks = [], secondRucksacks = [], thirdRucksacks = []

for(let i = 0; i < lines.length; i += 3) {
  firstRucksacks.push(lines[i])
  secondRucksacks.push(lines[i+1])
  thirdRucksacks.push(lines[i+2])
}

const findTripDupe = (str1, str2, str3) => {
  for(let i = 0; i < str1.length; i++){
    if(str2.includes(str1[i]) && str3.includes(str1[i])) return str1[i]
  }
}

const findAllTripDupes = (str1, str2, str3) => {
  let dupeStr = ''
  for(let i = 0; i < str1.length; i++) dupeStr += findTripDupe(str1[i], str2[i], str3[i])
  return dupeStr
}

const solvePart2 = () => convertString(findAllTripDupes(firstRucksacks, secondRucksacks, thirdRucksacks))

console.log('Part 2: ', solvePart2(), elapsedPerf(start) )
